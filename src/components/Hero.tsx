import HeroCanvas from './HeroCanvas';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full z-10 bg-gradient-to-r from-[#E6EAEF] via-[#F1F4F7] to-[#FFFFFF]"
      style={{ minHeight: '460px' }}
    >
      {/* Hero to About soft background dissolve overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white pointer-events-none z-[1]" />

      {/* Canvas: Running Verified SpringConstellationEngine with Top Canopy */}
      <HeroCanvas />

      {/* Content Layer: Positioned beneath canopy in the right territory with adjusted vertical baseline */}
      <div className="relative z-10 max-w-6xl mx-auto w-full h-full min-h-[460px] px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 pointer-events-none">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Left spacer: allows dense base cluster to shine unimpeded */}
          <div className="hidden md:block md:w-5/12"></div>

          {/* Right Identity Block */}
          <div className="w-full md:w-7/12 text-left md:text-right py-12 pointer-events-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B192C]">
              Abdullah Mohammad Aref
            </h1>
            <p className="text-xs sm:text-sm font-bold tracking-widest text-[#1E3A8A] uppercase mt-3">
              SOFTWARE & MACHINE LEARNING ENGINEER
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 tracking-wide">
              Data Science · Intelligent Applications · Cloud & DevOps
            </p>

            {/* Quick Actions & Location */}
            <div className="mt-6 flex flex-wrap items-center justify-start md:justify-end gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 text-slate-500 bg-white/80 px-2.5 py-1 rounded border border-slate-200">
                <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                Berlin, Germany
              </span>
              <a
                href="https://github.com/Abdullahmohammadaref"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 bg-white/80 px-2.5 py-1 rounded border border-slate-200 hover:border-slate-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahmohammadaref/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-950 bg-white/80 px-2.5 py-1 rounded border border-slate-200 hover:border-slate-400 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
