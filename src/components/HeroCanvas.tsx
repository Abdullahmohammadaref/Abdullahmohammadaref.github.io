import { useEffect, useRef } from 'react';

interface Node {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  depth: number;
  phaseX: number;
  phaseY: number;
  speedX: number;
  speedY: number;
  amp: number;
}

interface Pulse {
  from: Node;
  to: Node;
  startTime: number;
  duration: number;
  radius: number;
  baseColor: string;
}

interface EngineOptions {
  zoneWidthRatio?: number;
  connectDistance?: number;
  mouseRadius?: number;
}

class SpringConstellationEngine {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  config: Required<EngineOptions>;
  nodes: Node[] = [];
  pulses: Pulse[] = [];
  lastPulseSpawn = 0;
  mouse = { x: -9999, y: -9999, isInside: false };
  animId: number | null = null;
  width = 0;
  height = 0;
  dpr = window.devicePixelRatio || 1;
  resizeObserver: ResizeObserver | null = null;

  constructor(canvas: HTMLCanvasElement, options: EngineOptions = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d')!;

    this.config = {
      zoneWidthRatio: options.zoneWidthRatio ?? 0.52,
      connectDistance: options.connectDistance ?? 165,
      mouseRadius: options.mouseRadius ?? 140,
    };

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onResize = this.onResize.bind(this);
    this.render = this.render.bind(this);

    this.init();
  }

  init() {
    this.setupResize();
    this.bindEvents();
    this.populateNodes();
    this.start();
  }

  setupResize() {
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(this.canvas);
    this.onResize();
  }

  onResize() {
    const rect = this.canvas.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    if (this.ctx.resetTransform) {
      this.ctx.resetTransform();
    }
    this.ctx.scale(this.dpr, this.dpr);

    this.populateNodes();
    this.drawFrame();
  }

  populateNodes() {
    this.nodes = [];
    const leftZoneWidth = this.width * 0.44;
    const textExclusionX = this.width * 0.44;
    const textExclusionY = this.height * 0.35;

    const isInsideTextZone = (x: number, y: number) => x > textExclusionX && y > textExclusionY;

    const addNode = (homeX: number, homeY: number, isHub = false) => {
      if (isInsideTextZone(homeX, homeY)) return;

      const depth = isHub ? 0.45 + Math.random() * 0.55 : 0.35 + Math.random() * 0.65;
      const nodeRadius = 1.1 + depth * 2.2;
      const isAnchor = Math.random() < 0.28;
      const amp = isAnchor ? 0.6 + Math.random() * 1.0 : 2.2 + depth * 3.2;

      this.nodes.push({
        homeX,
        homeY,
        x: homeX,
        y: homeY,
        vx: 0,
        vy: 0,
        radius: nodeRadius,
        depth,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speedX: 0.0005 + Math.random() * 0.0007,
        speedY: 0.0004 + Math.random() * 0.0006,
        amp,
      });
    };

    // 1. Left Cluster Lattice (74px cells: clean dot spacing)
    const leftCellSize = 74;
    const leftCols = Math.ceil(leftZoneWidth / leftCellSize) + 1;
    const rows = Math.ceil(this.height / leftCellSize) + 1;

    for (let c = 0; c < leftCols; c++) {
      const colRatio = c / leftCols;
      const spawnProb = colRatio < 0.7 ? 0.95 : 0.8;

      for (let r = 0; r < rows; r++) {
        if (Math.random() > spawnProb) continue;
        const jitterX = (Math.random() - 0.5) * leftCellSize * 0.85;
        const jitterY = (Math.random() - 0.5) * leftCellSize * 0.85;
        const homeX = c * leftCellSize + jitterX - 25;
        const homeY = r * leftCellSize + jitterY;
        addNode(homeX, homeY);
      }
    }

    // 2. Rich Top Canopy Lattice (Directly above text)
    const canopyCellSize = 64;
    const canopyCols = Math.ceil((this.width * 0.55) / canopyCellSize) + 1;
    const canopyRows = Math.ceil(textExclusionY / canopyCellSize) + 1;

    for (let c = 0; c < canopyCols; c++) {
      for (let r = 0; r < canopyRows; r++) {
        if (Math.random() > 0.88) continue;
        const jitterX = (Math.random() - 0.5) * canopyCellSize * 0.85;
        const jitterY = (Math.random() - 0.5) * canopyCellSize * 0.8;
        const homeX = leftZoneWidth + c * canopyCellSize + jitterX;
        const homeY = r * canopyCellSize + jitterY - 8;
        if (homeX < this.width - 20 && homeY < textExclusionY - 10) {
          addNode(homeX, homeY);
        }
      }
    }

    // 3. Focal Cluster Overlays (Dense hubs on left + canopy arch)
    const hubs = [
      { x: 0.08 * this.width, y: 0.22 * this.height, count: 7 },
      { x: 0.16 * this.width, y: 0.68 * this.height, count: 8 },
      { x: -0.02 * this.width, y: 0.45 * this.height, count: 5 },
      { x: 0.36 * this.width, y: 0.2 * this.height, count: 6 },
      { x: 0.54 * this.width, y: 0.18 * this.height, count: 7 },
      { x: 0.72 * this.width, y: 0.16 * this.height, count: 7 },
      { x: 0.88 * this.width, y: 0.12 * this.height, count: 5 },
    ];

    for (const hub of hubs) {
      for (let i = 0; i < hub.count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 50;
        const homeX = hub.x + Math.cos(angle) * dist;
        const homeY = hub.y + Math.sin(angle) * dist;
        addNode(homeX, homeY, true);
      }
    }

    // 4. Hero-to-About Transition Leak Nodes (Organic downward drip)
    const leakHubs = [
      { x: 0.08 * this.width, y: this.height - 45, count: 4 },
      { x: 0.18 * this.width, y: this.height - 35, count: 4 },
      { x: 0.28 * this.width, y: this.height - 60, count: 3 },
    ];
    for (const hub of leakHubs) {
      for (let i = 0; i < hub.count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 25;
        const homeX = hub.x + Math.cos(angle) * dist;
        const homeY = hub.y + Math.sin(angle) * dist;
        addNode(homeX, homeY, false);
      }
    }
  }

  bindEvents() {
    const container = this.canvas.parentElement;
    if (!container) return;
    container.addEventListener('mousemove', this.onMouseMove);
    container.addEventListener('mouseleave', this.onMouseLeave);
  }

  onMouseMove(e: MouseEvent) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
    this.mouse.isInside = true;
  }

  onMouseLeave() {
    this.mouse.x = -9999;
    this.mouse.y = -9999;
    this.mouse.isInside = false;
  }

  start() {
    if (!this.animId) {
      this.animId = requestAnimationFrame(this.render);
    }
  }

  stop() {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
      this.animId = null;
    }
  }

  destroy() {
    this.stop();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    const container = this.canvas.parentElement;
    if (container) {
      container.removeEventListener('mousemove', this.onMouseMove);
      container.removeEventListener('mouseleave', this.onMouseLeave);
    }
  }

  render(timestamp = 0) {
    this.updatePhysics(timestamp);
    this.drawFrame(timestamp);
    this.animId = requestAnimationFrame(this.render);
  }

  updatePhysics(timestamp: number) {
    const { mouseRadius } = this.config;
    const textExclusionX = this.width * 0.44;
    const textExclusionY = this.height * 0.35;
    const ease = 0.045;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];

      const idleOffsetX = Math.sin(timestamp * node.speedX + node.phaseX) * node.amp;
      const idleOffsetY = Math.cos(timestamp * node.speedY + node.phaseY) * node.amp;
      let targetX = node.homeX + idleOffsetX;
      let targetY = node.homeY + idleOffsetY;

      if (this.mouse.isInside) {
        const dx = targetX - this.mouse.x;
        const dy = targetY - this.mouse.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRadius && dist > 0.1) {
          const factor = Math.cos((dist / mouseRadius) * (Math.PI * 0.5));
          const maxDeflect = 12 * node.depth;
          targetX += (dx / dist) * factor * maxDeflect;
          targetY += (dy / dist) * factor * maxDeflect;
        }
      }

      if (targetX > textExclusionX && targetY > textExclusionY) {
        if (node.homeY < textExclusionY) {
          targetY = textExclusionY - 6;
        } else {
          targetX = textExclusionX - 6;
        }
      }

      node.x += (targetX - node.x) * ease;
      node.y += (targetY - node.y) * ease;
    }
  }

  spawnPulse(timestamp: number) {
    if (this.nodes.length < 2) return;
    const p1 = this.nodes[Math.floor(Math.random() * this.nodes.length)];
    const { connectDistance } = this.config;

    const neighbors: Node[] = [];
    for (let j = 0; j < this.nodes.length; j++) {
      const p2 = this.nodes[j];
      if (p1 === p2) continue;
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      const maxDist = connectDistance * (0.82 + (p1.depth + p2.depth) * 0.4);
      if (dist < maxDist) {
        neighbors.push(p2);
      }
    }

    if (neighbors.length > 0) {
      const p2 = neighbors[Math.floor(Math.random() * neighbors.length)];
      const isNavy = Math.random() < 0.45;
      this.pulses.push({
        from: p1,
        to: p2,
        startTime: timestamp,
        duration: 1200 + Math.random() * 900,
        radius: 1.8 + Math.random() * 0.8,
        baseColor: isNavy ? '30, 58, 138' : '15, 23, 42',
      });
    }
  }

  drawFrame(timestamp = 0) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const { connectDistance, mouseRadius } = this.config;

    // 1. Draw Connecting Edges (Geometric Facets + Long Structural Chords)
    for (let i = 0; i < this.nodes.length; i++) {
      const p1 = this.nodes[i];
      let connections = 0;

      for (let j = i + 1; j < this.nodes.length; j++) {
        const p2 = this.nodes[j];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy);

        const maxDist = connectDistance * (0.82 + (p1.depth + p2.depth) * 0.4);

        if (dist < maxDist && connections < 12) {
          connections++;
          const proximityAlpha = Math.pow(1 - dist / maxDist, 1.05);
          const depthAlpha = Math.min(p1.depth, p2.depth);
          const lineAlpha = proximityAlpha * 0.36 * depthAlpha;

          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(30, 41, 59, ${lineAlpha.toFixed(3)})`;
          this.ctx.lineWidth = 1.25 * depthAlpha;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }

      if (this.mouse.isInside) {
        const dx = this.mouse.x - p1.x;
        const dy = this.mouse.y - p1.y;
        const dist = Math.hypot(dx, dy);

        if (dist < mouseRadius) {
          const alpha = Math.pow(1 - dist / mouseRadius, 1.5) * 0.38 * p1.depth;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(15, 23, 42, ${alpha.toFixed(3)})`;
          this.ctx.lineWidth = 1.25 * p1.depth;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }
    }

    // 1b. Draw Neural Edge Synapse Pulses
    const now = timestamp || performance.now();
    if (now - this.lastPulseSpawn > 700 && this.pulses.length < 5 && this.nodes.length > 5) {
      this.spawnPulse(now);
      this.lastPulseSpawn = now;
    }

    for (let k = this.pulses.length - 1; k >= 0; k--) {
      const pulse = this.pulses[k];
      const elapsed = now - pulse.startTime;
      const progress = elapsed / pulse.duration;

      if (progress >= 1) {
        this.pulses.splice(k, 1);
        continue;
      }

      const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI);
      const px = pulse.from.x + (pulse.to.x - pulse.from.x) * easeProgress;
      const py = pulse.from.y + (pulse.to.y - pulse.from.y) * easeProgress;

      const pulseAlpha = Math.sin(progress * Math.PI) * 0.88;

      const streakLength = 0.22;
      const tailProgress = Math.max(0, easeProgress - streakLength);
      const tx = pulse.from.x + (pulse.to.x - pulse.from.x) * tailProgress;
      const ty = pulse.from.y + (pulse.to.y - pulse.from.y) * tailProgress;

      const grad = this.ctx.createLinearGradient(tx, ty, px, py);
      grad.addColorStop(0, `rgba(${pulse.baseColor}, 0)`);
      grad.addColorStop(0.65, `rgba(${pulse.baseColor}, ${(pulseAlpha * 0.7).toFixed(2)})`);
      grad.addColorStop(1, `rgba(${pulse.baseColor}, ${pulseAlpha.toFixed(2)})`);

      this.ctx.beginPath();
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 2.0;
      this.ctx.lineCap = 'round';
      this.ctx.moveTo(tx, ty);
      this.ctx.lineTo(px, py);
      this.ctx.stroke();
    }

    // 2. Draw Nodes
    for (let i = 0; i < this.nodes.length; i++) {
      const p = this.nodes[i];
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (p.depth > 0.75) {
        this.ctx.fillStyle = 'rgba(30, 41, 59, 0.95)';
      } else if (p.depth > 0.5) {
        this.ctx.fillStyle = 'rgba(71, 85, 105, 0.75)';
      } else {
        this.ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
      }

      this.ctx.fill();
    }
  }
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const engine = new SpringConstellationEngine(canvasRef.current);
    return () => {
      engine.destroy();
    };
  }, []);

  return (
    <canvas
      id="heroCanvas"
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[calc(100%+80px)] pointer-events-none z-[2]"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black calc(100% - 90px), transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black calc(100% - 90px), transparent 100%)',
      }}
    />
  );
}
