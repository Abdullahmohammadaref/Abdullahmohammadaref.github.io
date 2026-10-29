export default function About() {
  return (
    <section id="about" className="w-full py-16 border-b border-slate-200 blueprint-grid relative z-0 overflow-hidden">
      {/* Constellation 1: About Me (Right Diamond Cluster) */}
      <svg className="z-0 absolute right-0 top-6 w-96 h-84 pointer-events-none select-none opacity-40 hidden sm:block" viewBox="0 0 380 340" fill="none">
        <line x1="280" y1="35" x2="345" y2="95" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="345" y1="95" x2="295" y2="180" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="295" y1="180" x2="205" y2="135" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="205" y1="135" x2="280" y2="35" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="345" y1="95" x2="365" y2="210" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="295" y1="180" x2="365" y2="210" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="295" y1="180" x2="235" y2="275" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="205" y1="135" x2="140" y2="225" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="140" y1="225" x2="235" y2="275" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="280" cy="35" r="2.8" fill="#0F172A"/>
        <circle cx="345" cy="95" r="3.6" fill="#0B192C"/>
        <circle cx="295" cy="180" r="3.0" fill="#1E293B"/>
        <circle cx="205" cy="135" r="2.2" fill="#334155"/>
        <circle cx="365" cy="210" r="2.5" fill="#475569"/>
        <circle cx="235" cy="275" r="2.8" fill="#1E293B"/>
        <circle cx="140" cy="225" r="2.0" fill="#64748B"/>
      </svg>
      {/* Constellation 2: About Me (Bottom Left Anchor Cluster) */}
      <svg className="z-0 absolute -left-6 bottom-2 w-80 h-72 pointer-events-none select-none opacity-35 hidden md:block" viewBox="0 0 320 280" fill="none">
        <line x1="30" y1="190" x2="95" y2="130" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="95" y1="130" x2="185" y2="155" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="185" y1="155" x2="245" y2="95" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="95" y1="130" x2="120" y2="235" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="185" y1="155" x2="120" y2="235" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="185" y1="155" x2="210" y2="245" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="30" cy="190" r="2.2" fill="#64748B"/>
        <circle cx="95" cy="130" r="3.0" fill="#1E293B"/>
        <circle cx="185" cy="155" r="3.4" fill="#0B192C"/>
        <circle cx="245" cy="95" r="2.4" fill="#334155"/>
        <circle cx="120" cy="235" r="2.6" fill="#1E293B"/>
        <circle cx="210" cy="245" r="2.0" fill="#475569"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Sticky Section Title */}
          <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1.5">
              <span className="font-mono text-slate-400 font-normal text-base select-none">~/</span>About Me
            </h2>
          </div>

          {/* Right Column: Content Flow */}
          <div className="md:col-span-9">
            {/* Intro Paragraph */}
            <div className="max-w-3xl text-slate-700 space-y-3 leading-relaxed text-base">
              <p>I am fascinated by leveraging data insights and modern software to solve complex real-world problems.</p>
              <p>Currently pursuing my BSc in Computer Science degree at Gisma University of Applied Sciences.</p>
              <p className="font-semibold text-slate-900">An agile engineer who thrives at:</p>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {/* Pillar 1 */}
              <div className="reveal-item stagger-1 p-5 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="font-mono text-xs text-slate-400 mb-2">[01] FULL-STACK ARCHITECTURE</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Architecting full-stack web platforms and typed REST APIs with reactive UIs, secure auth flows, and automated testing.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="reveal-item stagger-2 p-5 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="font-mono text-xs text-slate-400 mb-2">[02] CONCURRENT SYSTEMS & INTEGRITY</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Building resilient backend services and concurrent systems with strict relational data integrity and clean OOP architecture.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="reveal-item stagger-3 p-5 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="font-mono text-xs text-slate-400 mb-2">[03] MACHINE LEARNING PIPELINES</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Designing end-to-end machine learning pipelines and statistical models that transform raw data into actionable predictive insights.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="reveal-item stagger-4 p-5 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-200">
                <div className="font-mono text-xs text-slate-400 mb-2">[04] CLOUD & DEVOPS AUTOMATION</div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Containerizing services with Docker Compose and managing automated CI/CD deployments on Oracle Cloud (OCI).
                </p>
              </div>
            </div>

            {/* Opportunity Statement */}
            <p className="reveal-item text-sm sm:text-base text-slate-700 leading-relaxed mt-8">
              Actively exploring internship and working student opportunities to apply my skills in Data Engineering, Full-Stack Development, or Applied AI in real production environments. Feel free to reach out if your team is looking for an adaptive problem solver.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
