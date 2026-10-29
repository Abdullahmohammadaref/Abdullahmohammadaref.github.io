export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 border-b border-slate-200 blueprint-grid relative overflow-hidden">
      {/* Constellation 4: Technical Projects (Top Left Floating Facet) */}
      <svg className="z-0 absolute left-0 top-6 w-84 h-72 pointer-events-none select-none opacity-35 hidden md:block" viewBox="0 0 340 280" fill="none">
        <line x1="40" y1="80" x2="115" y2="40" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="115" y1="40" x2="190" y2="105" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="190" y1="105" x2="140" y2="190" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="140" y1="190" x2="50" y2="160" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="50" y1="160" x2="40" y2="80" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="115" y1="40" x2="140" y2="190" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="190" y1="105" x2="270" y2="160" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="40" cy="80" r="2.0" fill="#64748B"/>
        <circle cx="115" cy="40" r="3.2" fill="#0B192C"/>
        <circle cx="190" cy="105" r="2.8" fill="#1E293B"/>
        <circle cx="140" cy="190" r="2.6" fill="#334155"/>
        <circle cx="50" cy="160" r="2.2" fill="#475569"/>
        <circle cx="270" cy="160" r="2.4" fill="#64748B"/>
      </svg>

      {/* Constellation 5: Projects Archive (Right Triangulated Cluster) */}
      <svg className="absolute -right-4 bottom-16 w-88 h-76 pointer-events-none select-none opacity-38 hidden lg:block z-0" viewBox="0 0 350 300" fill="none">
        <line x1="240" y1="35" x2="315" y2="90" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="315" y1="90" x2="270" y2="175" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="270" y1="175" x2="175" y2="135" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="175" y1="135" x2="240" y2="35" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="270" y1="175" x2="300" y2="250" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="175" y1="135" x2="120" y2="215" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="120" y1="215" x2="220" y2="260" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <line x1="220" y1="260" x2="300" y2="250" stroke="#334155" strokeWidth="1.2" strokeOpacity="0.55"/>
        <circle cx="240" cy="35" r="2.4" fill="#1E293B"/>
        <circle cx="315" cy="90" r="3.4" fill="#0B192C"/>
        <circle cx="270" cy="175" r="2.8" fill="#1E293B"/>
        <circle cx="175" cy="135" r="2.2" fill="#475569"/>
        <circle cx="300" cy="250" r="2.6" fill="#475569"/>
        <circle cx="120" cy="215" r="1.9" fill="#64748B"/>
        <circle cx="220" cy="260" r="2.8" fill="#1E293B"/>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Sticky Section Title */}
          <div className="md:col-span-3 mb-8 md:mb-0 md:sticky md:top-24">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1.5">
              <span className="font-mono text-slate-400 font-normal text-base select-none">~/</span>Projects
            </h2>
          </div>

          {/* Right Column: Content Flow */}
          <div className="md:col-span-9">
            {/* ========================================== */}
            {/* A. FLAGSHIP FEATURED PROJECTS (TOP 5)      */}
            {/* ========================================== */}
            <div className="space-y-8 mb-16">
              {/* 1. Flow (codebase mapping tool) */}
              <a
                href="https://github.com/Abdullahmohammadaref/flow"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item block border border-slate-200 rounded-md p-6 sm:p-8 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                      Flow (codebase mapping tool)
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500">04/2026 – 06/2026</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2.5 py-1 rounded transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Repository</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">React</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">TypeScript</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Scikit-Learn</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">NetworkX</span>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Developed a developer onboarding tool that parses and maps architecture across complex Python repositories without executing code.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Traversed 1,500+ source files across 26 open-source projects using Python's ast.NodeVisitor to extract class structures, function calls, and import dependencies.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Modeled dependency networks with NetworkX directed graphs, using Tarjan's Strongly Connected Components to isolate circular imports and PageRank to score structural core files.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Trained a supervised machine learning pipeline on 66 extracted structural features, achieving a 76% macro F1-score with Logistic Regression across 15 architectural file roles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Built an interactive React and TypeScript visualizer to let developers explore project graphs and component hierarchies in real time.</span>
                  </li>
                </ul>
              </a>

              {/* 2. E-commerce Web Application */}
              <a
                href="https://github.com/Abdullahmohammadaref/e-commerce_web_application"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item block border border-slate-200 rounded-md p-6 sm:p-8 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                      E-commerce Web Application
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500">01/2026 – 03/2026</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2.5 py-1 rounded transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Repository</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Vue.js</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Express.js</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Node.js</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">MongoDB Atlas</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Pinia</span>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Built a full-stack e-commerce platform for a lighting business using the MEVN stack (MongoDB Atlas, Express.js, Vue 3, Node.js).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Developed modular Vue views and components with Vue Router navigation and Pinia for reactive cart and authentication state.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Implemented a secure checkout workflow with the PayPal REST Sandbox API, validating payments server-side before updating inventory.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Architected order schemas with embedded product snapshots in MongoDB, ensuring historical transaction integrity if catalog items change.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Configured media upload pipelines using Multer and Sharp for automatic image resizing, and secured user accounts using Bcrypt password hashing.</span>
                  </li>
                </ul>
              </a>

              {/* 3. Used Vehicle Resale Price Predictor */}
              <a
                href="https://github.com/Abdullahmohammadaref/used_car_price_predictor"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item block border border-slate-200 rounded-md p-6 sm:p-8 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                      Used Vehicle Resale Price Predictor
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500">07/2026 – 09/2026</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2.5 py-1 rounded transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Repository</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Scikit-Learn</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Pandas</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Machine Learning</span>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Built an end-to-end tabular machine learning regression pipeline in Python to analyze vehicle depreciation across 37,800+ automobile listings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Performed data cleaning, handled missing attributes, encoded categorical features, and filtered collinear variables using correlation matrices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Constructed an automated transformation pipeline utilizing Scikit-Learn’s ColumnTransformer with OneHotEncoder and StandardScaler.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Trained and tuned multiple regression models with K-Fold cross-validation, explaining 82.8% of variance in resale price trends.</span>
                  </li>
                </ul>
              </a>

              {/* 4. FairShare (Bill-Splitting Calculator) */}
              <a
                href="https://github.com/Abdullahmohammadaref/FairShare"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item block border border-slate-200 rounded-md p-6 sm:p-8 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                      FairShare (Bill-Splitting Calculator)
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500">01/2026 – 03/2026</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2.5 py-1 rounded transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Repository</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Vue.js 3</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Supabase</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">PostgreSQL</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Docker</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Jira</span>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Engineered a collaborative web app in Vue 3 and Supabase to calculate and settle shared group expenses.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Implemented real-time synchronization using Supabase Realtime channels to broadcast balance updates instantly across connected devices.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Designed a greedy settlement algorithm that pairs the largest debtor with the largest creditor to resolve group debts in the minimum number of transactions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Structured PostgreSQL schemas with Row-Level Security (RLS) policies and automated triggers to enforce relational data integrity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Managed development through an Agile framework: created user stories and tracked deliverables on a Jira Kanban board.</span>
                  </li>
                </ul>
              </a>

              {/* 5. Airline Management System */}
              <a
                href="https://github.com/Abdullahmohammadaref/AirlineManagementSystem"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal-item block border border-slate-200 rounded-md p-6 sm:p-8 bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200/70 pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0B192C] transition-colors">
                      Airline Management System
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-500">10/2025 – 12/2025</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2.5 py-1 rounded transition-colors">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Repository</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Java 17</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Swing GUI</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Concurrency</span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Multithreading</span>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Developed a Desktop application for managing airline operations using Java and Swing GUI framework.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Architected a domain hierarchy across 18+ classes applying composition and polymorphism, using HashMaps for O(1) entity lookups and custom collections for airline resources.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Implemented a Stack data structure to track navigated panels and manage rendered panels for seamless user navigation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-slate-400 mt-0.5 select-none">•</span>
                    <span>Programmed a feature to securely save data every 30 seconds using multithreading to achieve concurrency, locks to ensure process synchronization, and file input/output to store and load data when requested.</span>
                  </li>
                </ul>
              </a>
            </div>

            {/* ========================================== */}
            {/* B. ADDITIONAL PROJECTS ARCHIVE & FILTER    */}
            {/* ========================================== */}
            <div className="border-t border-slate-200 pt-10">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 flex items-baseline gap-2">
                  <span className="font-mono text-slate-400 font-normal text-sm select-none">~/</span>More Projects
                </h3>
              </div>

              {/* 2-Column Archive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="archiveGrid">
                {/* Archive 1: House Pricing Estimator */}
                <a
                  href="https://github.com/Abdullahmohammadaref/House-Pricing-Estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-1 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">House Pricing Estimator</h4>
                      <span className="font-mono text-xs text-slate-500">07/2025 – 09/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Scikit-Learn</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Pandas</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">NumPy</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Matplotlib</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Built an end-to-end machine learning regression analysis pipeline in Python to estimate housing prices with high accuracy, utilizing Pandas library for transforming and cleaning data, and NumPy, Seaborn, and Matplotlib for data exploration and plotting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Engineered features using Scikit-Learn’s ColumnTransformer with OneHotEncoder and StandardScaler to optimize numerical and categorical data efficiently.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Optimized models with hyperparameter tuning using RandomizedSearchCV and K-fold cross-validation to ensure reliable results.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Achieved a high R2 score using Random Forest Regressor model, explaining 83.1% of factors that affect housing prices.</span>
                    </li>
                  </ul>
                </a>

                {/* Archive 2: Telecom Customer Churn Prediction */}
                <a
                  href="https://github.com/Abdullahmohammadaref/A_Fully-Fledged_Statistical_Analysis_Report"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-2 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">Telecom Customer Churn Prediction</h4>
                      <span className="font-mono text-xs text-slate-500">07/2025 – 09/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">R</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Logistic Regression</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">ggplot2</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Statistical Modeling</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Conducted an inferential statistical study in R to identify churn drivers and evaluate subscriber retention patterns.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Visualized distributions and inter-variable relationships using ggplot2 and ggcorrplot, applying feature normalization to handle outliers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Formulated hypotheses tested with Chi-Squared tests for categorical features and Binomial Logistic Regression for continuous variables.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Diagnosed and eliminated multicollinearity using Variance Inflation Factors (VIF), utilized ROC curve and AUC metrics to tune classification thresholds and achieve 94.7% recall on at-risk churners.</span>
                    </li>
                  </ul>
                </a>

                {/* Archive 3: Gomoku AI Agent */}
                <a
                  href="https://github.com/Abdullahmohammadaref/Gomoku-AI-Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-1 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">Gomoku AI Agent</h4>
                      <span className="font-mono text-xs text-slate-500">08/2025 – 08/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">NumPy</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Multithreading</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Minimax</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Alpha-Beta Pruning</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Built a Gomoku AI agent in Python alongside a colleague as part of GISMA University AI Cup tournament during August 2025 skill sprint week.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Implemented Minimax algorithm and utilized Alpha-Beta Pruning to optimize decision-making speed. leveraged NumPy and multithreading balance between accuracy and execution under strict 5-second time constraint.</span>
                    </li>
                  </ul>
                </a>

                {/* Archive 4: CPU Scheduling Algorithms Simulator */}
                <a
                  href="https://github.com/Abdullahmohammadaref/cpu_scheduling_algorithms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-2 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">CPU Scheduling Algorithms Simulator</h4>
                      <span className="font-mono text-xs text-slate-500">04/2025 – 06/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Multithreading</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Data Structures</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Tkinter GUI</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Simulated CPU scheduling in python with multithreading concurrency, synchronization, a GUI, and real-time terminal tracking to visualize modern process allocation and task execution.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Implemented fundamental scheduling algorithms like First-Come-First-Serve, Shortest Job First, and Preemptive and Non—Preemptive priority scheduling by utilizing three Queue data structures including job, waiting, and ready queues, evaluated algorithms based on average processes completion time.</span>
                    </li>
                  </ul>
                </a>

                {/* Archive 5: Messaging Application */}
                <a
                  href="https://github.com/Abdullahmohammadaref/messaging_application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-1 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">Messaging Application</h4>
                      <span className="font-mono text-xs text-slate-500">04/2025 – 06/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">SQLite3</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">TCP Sockets</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Multithreading</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Tkinter</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Built a real-time client-server messaging application using Python, leveraging Tkinter library to provide a GUI that enables devices to send text and file messages over a local network.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Implemented reliable data transmission using TCP sockets, designing a communication protocol to exchange UTF-8 encoded strings and JSON data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Integrated an SQLite3 database to handle storing messages, user authentication, and contact lists, programming File I/O to store constructed file chunks in contact-named directories.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Utilized multithreading in both client and server so they can continuously send and receive requests without freezing the GUI.</span>
                    </li>
                  </ul>
                </a>

                {/* Archive 6: Network Security & Traffic Analysis */}
                <a
                  href="https://github.com/Abdullahmohammadaref/Network-Security-Traffic-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-2 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">Network Security & Traffic Analysis</h4>
                      <span className="font-mono text-xs text-slate-500">04/2025 – 06/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Wireshark</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Network Protocols</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Firewalls</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Traffic Analysis</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Conducted a thorough network packets investigation and analysis using Wireshark to filter specific IPs and ports in order to identify and fix network latency issues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Detected an SMB attack on a client that altered local firewall setting to block UDP port 138, resulting in an infinite loop of master browser elections and stopping other clients’ network operations repeatedly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Restored network efficiency by creating firewall rules with PERMIT configurations on attacked client to restore changes of the SMB attack and DROP policies on all clients to prevent external requests that can pose similar risks.</span>
                    </li>
                  </ul>
                </a>

                {/* Archive 7: Password Manager */}
                <a
                  href="https://github.com/Abdullahmohammadaref/password_manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="archive-card reveal-item stagger-1 block p-6 border border-slate-200 rounded-md bg-[#FBFBFC] hover:border-slate-400 hover:-translate-y-1 hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="flex justify-between items-start gap-2 border-b border-slate-200/70 pb-3 mb-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-[#0B192C] transition-colors">Password Manager</h4>
                      <span className="font-mono text-xs text-slate-500">04/2025 – 06/2025</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-700 group-hover:text-black border border-slate-200 group-hover:border-slate-400 bg-white px-2 py-0.5 rounded transition-colors shrink-0">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span>Code</span>
                      <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Python</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Django</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">SQLite3</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Cryptography</span>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">Web Security</span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Programmed password manager web application using Django framework, allowing users to securely store, generate, edit and view their account credentials.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Implemented data protection by hashing and salting master passwords and encrypting stored credentials using Cryptography library.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Developed secure authentication system using e-mail Two-Factor Authentication (2FA), and temporary tokens.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-400 mt-0.5 select-none">•</span>
                      <span>Protected from web attacks by utilizing Django’s Object-Relational Mapping (ORM) to prevent SQL injections, token validation to block CSRF attacks, and auto-escaping to stop XSS threats.</span>
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
