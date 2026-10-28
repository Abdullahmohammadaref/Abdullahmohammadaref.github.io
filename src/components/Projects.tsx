import SectionTitle from "./SectionTitle.tsx";
import Card from "./Card.tsx";

const projectsData = [
    {
        title: "Flow (codebase mapping tool)",
        link: "https://github.com/Abdullahmohammadaref/flow",
        date: "04/2026 – 06/2026",
        techStack: "Python, React, TypeScript, Scikit-Learn, NetworkX",
        details: [
            "Developed a developer onboarding tool that parses and maps architecture across complex Python repositories without executing code.",
            "Traversed 1,500+ source files across 26 open-source projects using Python's ast.NodeVisitor to extract class structures, function calls, and import dependencies.",
            "Modeled dependency networks with NetworkX directed graphs, using Tarjan's Strongly Connected Components to isolate circular imports and PageRank to score structural core files.",
            "Trained a supervised machine learning pipeline on 66 extracted structural features, achieving a 76% macro F1-score with Logistic Regression across 15 architectural file roles.",
            "Built an interactive React and TypeScript visualizer to let developers explore project graphs and component hierarchies in real time."
        ]
    },
    {
        title: "E-commerce Web Application",
        link: "https://github.com/Abdullahmohammadaref/e-commerce_web_application",
        date: "01/2026 – 03/2026",
        techStack: "Vue.js, Express.js, Node.js, MongoDB Atlas, Pinia",
        details: [
            "Built a full-stack e-commerce platform for a lighting business using the MEVN stack (MongoDB Atlas, Express.js, Vue 3, Node.js).",
            "Developed modular Vue views and components with Vue Router navigation and Pinia for reactive cart and authentication state.",
            "Implemented a secure checkout workflow with the PayPal REST Sandbox API, validating payments server-side before updating inventory.",
            "Architected order schemas with embedded product snapshots in MongoDB, ensuring historical transaction integrity if catalog items change.",
            "Configured media upload pipelines using Multer and Sharp for automatic image resizing, and secured user accounts using Bcrypt password hashing."
        ]
    },
    {
        title: "Used Vehicle Resale Price Predictor",
        link: "https://github.com/Abdullahmohammadaref/used_car_price_predictor",
        date: "07/2026 – 09/2026",
        techStack: "Python, Scikit-Learn, Pandas, Machine Learning",
        details: [
            "Built an end-to-end tabular machine learning regression pipeline in Python to analyze vehicle depreciation across 37,800+ automobile listings.",
            "Performed data cleaning, handled missing attributes, encoded categorical features, and filtered collinear variables using correlation matrices.",
            "Constructed an automated transformation pipeline utilizing Scikit-Learn’s ColumnTransformer with OneHotEncoder and StandardScaler.",
            "Trained and tuned multiple regression models with K-Fold cross-validation, explaining 82.8% of variance in resale price trends."
        ]
    },
    {
        title: "FairShare (Bill-Splitting Calculator)",
        link: "https://github.com/Abdullahmohammadaref/FairShare",
        date: "01/2026 – 03/2026",
        techStack: "Vue.js 3, Supabase, PostgreSQL, Docker, Jira",
        details: [
            "Engineered a collaborative web app in Vue 3 and Supabase to calculate and settle shared group expenses.",
            "Implemented real-time synchronization using Supabase Realtime channels to broadcast balance updates instantly across connected devices.",
            "Designed a greedy settlement algorithm that pairs the largest debtor with the largest creditor to resolve group debts in the minimum number of transactions.",
            "Structured PostgreSQL schemas with Row-Level Security (RLS) policies and automated triggers to enforce relational data integrity.",
            "Managed development through an Agile framework: created user stories and tracked deliverables on a Jira Kanban board."
        ]
    },
    {
        title: "Airline Management System",
        link: "https://github.com/Abdullahmohammadaref/AirlineManagementSystem",
        date: "10/2025 – 12/2025",
        techStack: "Java 17, Swing GUI, Concurrency, Multithreading",
        details: [
            "Developed a Desktop application for managing airline operations using Java and Swing GUI framework.",
            "Architected a domain hierarchy across 18+ classes applying composition and polymorphism, using HashMaps for O(1) entity lookups and custom collections for airline resources..",
            "Implemented a Stack data structure to track navigated panels and manage rendered panels for seamless user navigation.",
            "Programmed a feature to securely save data every 30 seconds using multithreading to achieve concurrency, locks to ensure process synchronization, and file input/output to store and load data when requested."
        ]
    },
    {
        title: "House Pricing Estimator",
        link: "https://github.com/Abdullahmohammadaref/House-Pricing-Estimator",
        date: "07/2025 – 09/2025",
        techStack: "Python, Scikit-Learn, Pandas, NumPy, Matplotlib",
        details: [
            "Built an end-to-end machine learning regression analysis pipeline in Python to estimate housing prices with high accuracy, utilizing Pandas library for transforming and cleaning data, and NumPy, Seaborn, and Matplotlib for data exploration and plotting.",
            "Engineered features using Scikit-Learn’s ColumnTransformer with OneHotEncoder and StandardScaler to optimize numerical and categorical data efficiently.",
            "Optimized models with hyperparameter tuning using RandomizedSearchCV and K-fold cross-validation to ensure reliable results.",
            "Achieved a high R2 score using Random Forest Regressor model, explaining 83.1% of factors that affect housing prices."
        ]
    },
    {
        title: "Telecom Customer Churn Prediction",
        link: "https://github.com/Abdullahmohammadaref/A_Fully-Fledged_Statistical_Analysis_Report",
        date: "07/2025 – 09/2025",
        techStack: "R, Logistic Regression, ggplot2, Statistical Modeling",
        details: [
            "Conducted an inferential statistical study in R to identify churn drivers and evaluate subscriber retention patterns.",
            "Visualized distributions and inter-variable relationships using ggplot2 and ggcorrplot, applying feature normalization to handle outliers.",
            "Formulated hypotheses tested with Chi-Squared tests for categorical features and Binomial Logistic Regression for continuous variables.",
            "Diagnosed and eliminated multicollinearity using Variance Inflation Factors (VIF), utilized ROC curve and AUC metrics to tune classification thresholds and achieve 94.7% recall on at-risk churners."
        ]
    },
    {
        title: "Gomoku AI Agent",
        link: "https://github.com/Abdullahmohammadaref/Gomoku-AI-Agent",
        date: "08/2025 – 08/2025",
        techStack: "Python, NumPy, Multithreading, Minimax, Alpha-Beta Pruning",
        details: [
            "Built a Gomoku AI agent in Python alongside a colleague as part of GISMA University AI Cup tournament during August 2025 skill sprint week.",
            "Implemented Minimax algorithm and utilized Alpha-Beta Pruning to optimize decision-making speed. leveraged NumPy and multithreading balance between accuracy and execution under strict 5-second time constraint."
        ]
    },
    {
        title: "CPU Scheduling Algorithms Simulator",
        link: "https://github.com/Abdullahmohammadaref/cpu_scheduling_algorithms",
        date: "04/2025 – 06/2025",
        techStack: "Python, Multithreading, Data Structures, Tkinter GUI",
        details: [
            "Simulated CPU scheduling in python with multithreading concurrency, synchronization, a GUI, and real-time terminal tracking to visualize modern process allocation and task execution.",
            "Implemented fundamental scheduling algorithms like First-Come-First-Serve, Shortest Job First, and Preemptive and Non—Preemptive priority scheduling by utilizing three Queue data structures including job, waiting, and ready queues, evaluated algorithms based on average processes completion time."
        ]
    },
    {
        title: "Messaging Application",
        link: "https://github.com/Abdullahmohammadaref/messaging_application",
        date: "04/2025 – 06/2025",
        techStack: "Python, SQLite3, TCP Sockets, Multithreading, Tkinter",
        details: [
            "Built a real-time client-server messaging application using Python, leveraging Tkinter library to provide a GUI that enables devices to send text and file messages over a local network.",
            "Implemented reliable data transmission using TCP sockets, designing a communication protocol to exchange UTF-8 encoded strings and JSON data.",
            "Integrated an SQLite3 database to handle storing messages, user authentication, and contact lists, programming File I/O to store constructed file chunks in contact-named directories.",
            "Utilized multithreading in both client and server so they can continuously send and receive requests without freezing the GUI."
        ]
    },
    {
        title: "Network Security & Traffic Analysis",
        link: "https://github.com/Abdullahmohammadaref/Network-Security-Traffic-Analysis",
        date: "04/2025 – 06/2025",
        techStack: "Wireshark, Network Protocols, Firewalls, Traffic Analysis",
        details: [
            "Conducted a thorough network packets investigation and analysis using Wireshark to filter specific IPs and ports in order to identify and fix network latency issues.",
            "Detected an SMB attack on a client that altered local firewall setting to block UDP port 138, resulting in an infinite loop of master browser elections and stopping other clients’ network operations repeatedly.",
            "Restored network efficiency by creating firewall rules with PERMIT configurations on attacked client to restore changes of the SMB attack and DROP policies on all clients to prevent external requests that can pose similar risks."
        ]
    },
    {
        title: "Password Manager",
        link: "https://github.com/Abdullahmohammadaref/password_manager",
        date: "04/2025 – 06/2025",
        techStack: "Python, Django, SQLite3, Cryptography, Web Security",
        details: [
            "Programmed password manager web application using Django framework, allowing users to securely store, generate, edit and view their account credentials.",
            "Implemented data protection by hashing and salting master passwords and encrypting stored credentials using Cryptography library.",
            "Developed secure authentication system using e-mail Two-Factor Authentication (2FA), and temporary tokens.",
            "Protected from web attacks by utilizing Django’s Object-Relational Mapping (ORM) to prevent SQL injections, token validation to block CSRF attacks, and auto-escaping to stop XSS threats."
        ]
    }
];

export default function Projects() {
    return (
        <section>
            <SectionTitle title="Projects"></SectionTitle>
            
            {projectsData.map((project) => (
                <Card
                    key={project.title}
                    title={project.title}
                    date={project.date}
                    subtitle={project.techStack}
                    details={project.details}
                    link={project.link}
                />
            ))}
        </section>
    );
}
