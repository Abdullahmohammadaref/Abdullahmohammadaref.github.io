export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 border-b border-slate-200 blueprint-grid-alt relative overflow-hidden">
      {/* Constellation 3: Experience (Right Extended Bridge) */}
      <svg className="z-0 absolute right-2 top-8 w-96 h-80 pointer-events-none select-none opacity-40 hidden md:block" viewBox="0 0 380 320" fill="none">
        <line x1="160" y1="60" x2="250" y2="40" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="250" y1="40" x2="335" y2="110" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="335" y1="110" x2="285" y2="195" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="285" y1="195" x2="185" y2="175" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="185" y1="175" x2="160" y2="60" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="250" y1="40" x2="285" y2="195" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="285" y1="195" x2="350" y2="265" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="160" cy="60" r="2.2" fill="#64748B"/>
        <circle cx="250" cy="40" r="3.0" fill="#1E293B"/>
        <circle cx="335" cy="110" r="3.5" fill="#0B192C"/>
        <circle cx="285" cy="195" r="2.8" fill="#1E293B"/>
        <circle cx="185" cy="175" r="2.2" fill="#475569"/>
        <circle cx="350" cy="265" r="2.5" fill="#64748B"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Sticky Section Title */}
          <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1.5">
              <span className="font-mono text-slate-400 font-normal text-base select-none">~/</span>Experience
            </h2>
          </div>

          {/* Right Column: Content Flow */}
          <div className="md:col-span-9">
            {/* Experience Item (Entire card clickable with smooth hover lift) */}
            <a
              href="https://github.com/Abdullahmohammadaref/DriveBase"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-item block border border-slate-200 rounded-md bg-white p-6 sm:p-8 shadow-sm hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-100 pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                    Freelance Software Engineer
                  </h3>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">Berlin, Germany</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500">09/2025 – 09/2026</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-slate-50 px-2.5 py-1 rounded transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    <span>Repository</span>
                    <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                  </span>
                </div>
              </div>

              {/* Production Achievement Details */}
              <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1 select-none">•</span>
                  <span>Re-architected a legacy Microsoft Access setup into a modern web platform using Django, React, and TypeScript, consolidating 2,000+ historical vehicle records into a normalized 26-model relational schema.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1 select-none">•</span>
                  <span>Implemented secure authorization and 2-factor authentication using one-time tokens. Enhanced user experience with pagination, internationalization, and autosaving forms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1 select-none">•</span>
                  <span>Built an automated financial calculation engine to calculate key financial metrics.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1 select-none">•</span>
                  <span>Engineered a server-side PDF generator to dynamically compile 6 automotive contracts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1 select-none">•</span>
                  <span>Integrated the official mobile.de REST API for listing creation, and automated vehicle attribute population.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-1 select-none">•</span>
                  <span>Configured containerized deployment with Docker Compose on an Oracle Cloud Linux VM, securing traffic with Nginx SSL reverse proxy and automating releases via GitHub Actions CI/CD.</span>
                </li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
