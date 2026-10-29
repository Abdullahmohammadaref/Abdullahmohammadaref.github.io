import cvPdf from '../assets/pdfs/cv.pdf';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 blueprint-grid-alt border-b border-slate-200 relative overflow-hidden">
      {/* Constellation 7: Contact Section (Bottom Right Deep Anchor) */}
      <svg className="z-0 absolute right-2 bottom-4 w-96 h-84 pointer-events-none select-none opacity-42 hidden lg:block" viewBox="0 0 380 340" fill="none">
        <line x1="130" y1="80" x2="235" y2="45" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="235" y1="45" x2="330" y2="115" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="330" y1="115" x2="280" y2="215" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="280" y1="215" x2="175" y2="195" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="175" y1="195" x2="130" y2="80" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="235" y1="45" x2="280" y2="215" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="280" y1="215" x2="345" y2="285" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="130" cy="80" r="2.2" fill="#64748B"/>
        <circle cx="235" cy="45" r="3.0" fill="#1E293B"/>
        <circle cx="330" cy="115" r="3.6" fill="#0B192C"/>
        <circle cx="280" cy="215" r="2.8" fill="#1E293B"/>
        <circle cx="175" cy="195" r="2.2" fill="#475569"/>
        <circle cx="345" cy="285" r="2.5" fill="#64748B"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Sticky Section Title */}
          <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1.5">
              <span className="font-mono text-slate-400 font-normal text-base select-none">~/</span>Get In Touch
            </h2>
          </div>

          {/* Right Column: Content Flow */}
          <div className="md:col-span-9">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
              I am currently seeking internship and entry-level opportunities where I can utilize my skills and solve real-world problems. Reach out to me if your team is looking for a data-driven problem solver.
            </p>

            {/* Contact Directory Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {/* Email */}
              <a
                href="mailto:abdullahmohammadaref@gmail.com"
                className="reveal-item stagger-1 p-6 border border-slate-200 rounded-md bg-white hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">Email</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors break-all">
                    abdullahmohammadaref@gmail.com
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-4 inline-flex items-center gap-1 group-hover:text-black transition-colors">
                  <span>Send message</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdullahmohammadaref/"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item stagger-2 p-6 border border-slate-200 rounded-md bg-white hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">LinkedIn</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors break-all">
                    linkedin.com/in/abdullahmohammadaref
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-4 inline-flex items-center gap-1 group-hover:text-black transition-colors">
                  <span>Connect on LinkedIn</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Abdullahmohammadaref"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item stagger-3 p-6 border border-slate-200 rounded-md bg-white hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">GitHub</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors break-all">
                    github.com/Abdullahmohammadaref
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-4 inline-flex items-center gap-1 group-hover:text-black transition-colors">
                  <span>Explore source code</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
              </a>

              {/* Resume / CV */}
              <a
                href={cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item stagger-4 p-6 border border-slate-200 rounded-md bg-white hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-slate-100 group-hover:border-slate-300 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">CV</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                    CV (PDF)
                  </div>
                </div>
                <div className="text-xs text-slate-500 font-mono mt-4 inline-flex items-center gap-1 group-hover:text-black transition-colors">
                  <span>Open document</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
