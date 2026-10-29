export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 border-b border-slate-200 blueprint-grid-alt relative overflow-hidden">
      {/* Constellation 6: Skills & Tooling (Top Right Geometric Canopy) */}
      <svg className="z-0 absolute right-4 top-4 w-96 h-68 pointer-events-none select-none opacity-40 hidden sm:block" viewBox="0 0 380 270" fill="none">
        <line x1="110" y1="110" x2="200" y2="55" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="200" y1="55" x2="295" y2="40" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="295" y1="40" x2="360" y2="125" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="360" y1="125" x2="280" y2="185" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="280" y1="185" x2="190" y2="155" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="190" y1="155" x2="110" y2="110" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="200" y1="55" x2="280" y2="185" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="110" cy="110" r="2.2" fill="#64748B"/>
        <circle cx="200" cy="55" r="3.2" fill="#0B192C"/>
        <circle cx="295" cy="40" r="2.8" fill="#1E293B"/>
        <circle cx="360" cy="125" r="3.4" fill="#0B192C"/>
        <circle cx="280" cy="185" r="2.6" fill="#334155"/>
        <circle cx="190" cy="155" r="2.2" fill="#475569"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Sticky Section Title */}
          <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1.5">
              <span className="font-mono text-slate-400 font-normal text-base select-none">~/</span>Technical Skills
            </h2>
          </div>

          {/* Right Column: Content Flow */}
          <div className="md:col-span-9">
            {/* 5 Categorized Panels (2 per row on md+, full width for the 5th) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category 1: Programming Languages */}
              <div className="reveal-item stagger-1 border border-slate-200 rounded-md p-6 bg-white hover:border-slate-300 transition-colors">
                <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-4 h-4" alt="Python" /> Python
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-4 h-4" alt="Java" /> Java
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-4 h-4" alt="TypeScript" /> TypeScript
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-4 h-4" alt="JavaScript" /> JavaScript
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" className="w-4 h-4" alt="R" /> R
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-4 h-4" alt="HTML5" /> HTML5
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-4 h-4" alt="CSS3" /> CSS3
                  </span>
                </div>
              </div>

              {/* Category 2: Frameworks & Libraries */}
              <div className="reveal-item stagger-2 border border-slate-200 rounded-md p-6 bg-white hover:border-slate-300 transition-colors">
                <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-4 h-4" alt="React" /> React
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" className="w-4 h-4" alt="Vue.js" /> Vue.js
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-4 h-4" alt="Node.js" /> Node.js
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-4 h-4" alt="Express.js" /> Express.js
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-4 h-4" alt="Django" /> Django
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-4 h-4" alt="Tailwind CSS" /> Tailwind CSS
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" className="w-4 h-4" alt="Pandas" /> Pandas
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" className="w-4 h-4" alt="NumPy" /> NumPy
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" className="w-4 h-4" alt="Scikit-Learn" /> Scikit-Learn
                  </span>
                </div>
              </div>

              {/* Category 3: Databases */}
              <div className="reveal-item stagger-1 border border-slate-200 rounded-md p-6 bg-white hover:border-slate-300 transition-colors">
                <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Databases & Storage</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-4 h-4" alt="MongoDB" /> MongoDB
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-4 h-4" alt="MySQL" /> MySQL
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" className="w-4 h-4" alt="SQLite" /> SQLite
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" className="w-4 h-4" alt="Supabase" /> Supabase
                  </span>
                </div>
              </div>

              {/* Category 4: Tools & Cloud */}
              <div className="reveal-item stagger-2 border border-slate-200 rounded-md p-6 bg-white hover:border-slate-300 transition-colors">
                <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tools & Cloud Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-4 h-4" alt="Git" /> Git
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-4 h-4" alt="Docker" /> Docker
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-line.svg" className="w-4 h-4" alt="AWS" /> AWS
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" className="w-4 h-4" alt="Oracle Cloud" /> Oracle Cloud (OCI)
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" className="w-4 h-4" alt="Linux" /> Linux
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-4 h-4" alt="Figma" /> Figma
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" className="w-4 h-4" alt="Jupyter" /> Jupyter
                  </span>
                </div>
              </div>

              {/* Category 5: Core Methodologies (Spanning full width) */}
              <div className="reveal-item md:col-span-2 border border-slate-200 rounded-md p-6 bg-white hover:border-slate-300 transition-colors">
                <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Core Engineering Methodologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" className="w-4 h-4" alt="Jira" /> Agile & Jira
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" className="w-4 h-4" alt="CI/CD" /> CI/CD & GitHub Actions
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="w-4 h-4" alt="REST APIs" /> REST APIs & Postman
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-slate-200 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-0.5 transition-all text-xs font-medium text-slate-800">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" className="w-4 h-4" alt="Testing" /> Automated Testing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
