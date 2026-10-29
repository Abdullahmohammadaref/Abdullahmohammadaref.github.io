import certificatePdf from '../assets/pdfs/certificate_of_achievement.pdf';

export default function Education() {
  return (
    <section id="education" className="w-full py-16 border-b border-slate-200 blueprint-grid relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Sticky Section Title */}
          <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1.5">
              <span className="font-mono text-slate-400 font-normal text-base select-none">~/</span>Education & Awards
            </h2>
          </div>

          {/* Right Column: Content Flow */}
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Education */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">Degree Program</div>

                <div className="reveal-item border border-slate-200 rounded-md p-6 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-900">BSc Computer Science</h3>
                    <span className="font-mono text-xs text-slate-500">2023 – 2027</span>
                  </div>
                  <div className="text-sm font-medium text-slate-700">Gisma University of Applied Sciences</div>
                  <div className="text-xs font-mono text-slate-500 mb-5">Berlin, Germany</div>

                  <div className="border-t border-slate-200/80 pt-4">
                    <h4 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Relevant Modules</h4>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Data Structures & Algorithms</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Advanced Programming</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Databases & Big Data</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Operating Systems</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Computer Networks</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Software Engineering</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Artificial Intelligence & ML</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Applied Statistical Modeling</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">App & Web Development</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Cyber Security</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Statistics</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Mathematical Foundations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificates & Awards Column */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">Honors & Competitions</div>

                <a
                  href={certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal-item block border border-slate-200 rounded-md p-6 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">2nd Place Winner</h3>
                      <div className="text-sm font-medium text-slate-700">Nexus Hackathon: The Odyssey</div>
                      <div className="text-xs font-mono text-slate-500 mt-0.5">Gisma University of Applied Sciences</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-slate-500">06/2026</span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2.5 py-1 rounded transition-colors shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        <span>Certificate</span>
                        <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Awarded Certificate of Achievement as 2nd place winner for showcasing outstanding innovation, dedication, exceptional problem-solving, and collaborative spirit.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Collaborated in a 3-person team to rapidly brainstorm an innovative technical solution and build a working prototype with AI development tools in three hours, then pitched the live prototype to judges with a business presentation.</span>
                    </li>
                  </ul>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
