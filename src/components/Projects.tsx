import SectionTitle from "./SectionTitle.tsx";
import Card from "./Card.tsx";

const projectsData = [
    {
        title: "Flow (Codebase Mapping Tool)",
        link: "https://github.com/Abdullahmohammadaref/flow",
        date: "04/2026 – Current (Till 06/2026)",
        techStack: "Python, React, Node.js, Flask, TypeScript",
        details: [
            "Built an end-to-end codebase visualizer, leveraging full-stack development with machine learning to facilitate developer onboarding and quickly map unfamiliar projects.",
            "•\tEngineering a supervised machine learning pipeline that currently trains on 240 files and classifies them based on their role with a 76% macro F1-score.",
        ]
    },
    {
        title: "E-commerce Web Application",
        link: "https://github.com/Abdullahmohammadaref/e-commerce_web_application",
        date: "01/2026 – 03/2026",
        techStack: "Vue.js, Express.js, Node.js, MongoDB, JavaScript",
        details: [
            "Developed a full-stack e-commerce store with the MEVN stack, featuring a responsive user interface with CSS Flexbox, Grid, and media queries.",
            "Built RESTful APIs to support CRUD operations, implementing secure authentication, authorization, and access control using Bcrypt to hash and salt passwords.",
            "Integrated PayPal Sandbox API to support payments, managed user and cart state with Pinia, and optimized image processing with Multer and Sharp.",
            // "Deployed backend application with compiled frontend files in a Docker container and hosted it on an Oracle Cloud instance"
        ]
    },
    {
        title: "FairShare (Bill-Splitting Calculator)",
        link: "https://github.com/Abdullahmohammadaref/FairShare",
        date: "01/2026 – 03/2026",
        techStack: "Vue.js, Supabase, Docker, Oracle Cloud, Jira, Figma",
        details: [
            "Engineered a real-time collaborative software solution using Vue.js and Supabase for splitting complex bills proportionally.",
            "Implemented a greedy algorithm to generate a transfer plan with minimum transactions, supported with unit testing and advanced database architecture to ensure quality and reliability.",
            "Managed an iterative software lifecycle by prototyping high-level designs using Figma and Miro, gathering requirements, creating user stories, and performing prioritization using a Jira Kanban board.",
            // "Deployed using Docker container and hosted on an Oracle Cloud instance."
        ]
    },
    {
        title: "Airline Management System",
        link: "https://github.com/Abdullahmohammadaref/AirlineManagementSystem",
        date: "10/2025 – 12/2025",
        techStack: "Java, Swing UI, Multithreading",
        details: [
            "Developed a desktop application for managing airline operations using Java and the Swing UI Designer Plugin.",
            "Architected the system using advanced Object-Oriented Programming (OOP) principles, including inheritance, polymorphism, abstraction, composition, and encapsulation, and data structures like arrays, array lists, stacks, and hash maps.",
            "Implemented a stack data structure to track navigated panels and manage rendered panels for seamless user navigation.",
            "Programmed a feature to securely save data every 30 seconds using multithreading to achieve concurrency, locks to ensure process synchronization, and file input/output to store and load data when requested."
        ]
    },
    {
        title: "House Pricing Estimator",
        link: "https://github.com/Abdullahmohammadaref/House-Pricing-Estimator",
        date: "07/2025 – 09/2025",
        techStack: "Python, Pandas, Scikit-Learn",
        details: [
            "Built an end-to-end machine learning regression analysis pipeline in Python to estimate housing prices with high accuracy, utilizing the Pandas library for transforming and cleaning data, and NumPy, Seaborn, and Matplotlib for data exploration and plotting.",
            "Engineered features using Scikit-Learn’s ColumnTransformer with OneHotEncoder and StandardScaler to optimize numerical and categorical data.",
            "Optimized models with hyperparameter tuning using RandomizedSearchCV and K-fold cross-validation to ensure reliable results.",
            "Achieved a high R2 score using a Random Forest Regressor model, explaining 83.1% of factors that affect housing prices."
        ]
    },
    {
        title: "Telecom Customer Churn Prediction",
        link: "https://github.com/Abdullahmohammadaref/A_Fully-Fledged_Statistical_Analysis_Report",
        date: "07/2025 – 09/2025",
        techStack: "R, Logistic Regression",
        details: [
            "Conducted a fully-fledged statistical analysis using R to predict customer churn, utilizing ggplot2 and ggcorrplot to explore and visualize data.",
            "Applied data preprocessing, sampling, and cleaning with methods like scaling numerical data to reduce the effect of outliers.",
            "Engineered hypotheses and tested them using Chi-squared tests for categorical variables and Binomial Logistic Regression for continuous variables.",
            "Optimized the model results by calculating the Variance Inflation Factor (VIF) to detect and remove multicollinearity and utilized ROC curve and AUC metrics to evaluate and enhance the model’s predictive power by maximizing recall to 94.7% in order to effectively capture potential churning customers."
        ]
    },
    {
        title: "Gomoku AI Agent",
        link: "https://github.com/Abdullahmohammadaref/Gomoku-AI-Agent",
        date: "08/2025 – 08/2025",
        techStack: "Python, NumPy, Threading, Minimax, Alpha-Beta Pruning",
        details: [
            "Built a Gomoku AI agent in Python alongside a colleague as part of the GISMA University AI Cup tournament during the August 2025 skill sprint week.",
            "Implemented the Minimax algorithm and utilized Alpha-Beta Pruning to optimize decision-making speed, leveraging NumPy and threading to balance accuracy and execution under a strict 5-second time constraint."
        ]
    },
    {
        title: "CPU Scheduling Algorithms Simulator",
        link: "https://github.com/Abdullahmohammadaref/cpu_scheduling_algorithms",
        date: "04/2025 – 06/2025",
        techStack: "Python, Multithreading, Data Structures, GUI",
        details: [
            "Simulated CPU scheduling in Python with multithreading concurrency, synchronization, a GUI, and real-time terminal tracking to visualize modern process allocation and task execution.",
            "Implemented fundamental scheduling algorithms like First-Come-First-Serve, Shortest Job First, and Preemptive and Non-Preemptive priority scheduling by utilizing three queue data structures, including job, waiting, and ready queues, and evaluated algorithms based on average process completion time."
        ]
    },
    {
        title: "Messaging Application",
        link: "https://github.com/Abdullahmohammadaref/messaging_application",
        date: "04/2025 – 06/2025",
        techStack: "Python, Sqlite3, Sockets, Threading, Tkinter",
        details: [
            "Built a real-time client-server messaging application using Python, leveraging the Tkinter library to provide a GUI that enables devices to send text and file messages over a local network.",
            "Implemented reliable data transmission using TCP sockets, designing a communication protocol to exchange UTF-8 encoded strings and JSON data.",
            "Integrated an SQLite3 database to handle storing messages, user authentication, and contact lists, and programmed File I/O to store constructed file chunks in contact-named directories.",
            "Utilized multithreading in both the client and server so they can continuously send and receive requests without freezing the GUI."
        ]
    },
    {
        title: "Network Security & Traffic Analysis",
        link: "https://github.com/Abdullahmohammadaref/Network-Security-Traffic-Analysis",
        date: "04/2025 – 06/2025",
        techStack: "Wireshark, UDP/SMB Protocols, Firewalls",
        details: [
            "Conducted a thorough network packet investigation and analysis using Wireshark to filter specific IPs and ports in order to identify and fix network latency issues.",
            "Detected an SMB attack on a client that altered the local firewall setting to block UDP port 138, resulting in an infinite loop of master browser elections and stopping other clients’ network operations repeatedly.",
            "Restored network efficiency by creating firewall rules with PERMIT configurations on the attacked client to restore the changes of the SMB attack and DROP policies on all clients to prevent external requests that can pose similar risks."
        ]
    },
    {
        title: "Password Manager",
        link: "https://github.com/Abdullahmohammadaref/password_manager",
        date: "04/2025 – 06/2025",
        techStack: "Python, Django, SQLite3, Cryptography",
        details: [
            "Programmed a password manager web application using the Django framework, allowing users to securely store, generate, edit, and view their account credentials.",
            "Implemented data protection by hashing and salting master passwords and encrypting stored credentials using the Cryptography library.",
            "Developed a secure authentication system using e-mail Two-Factor Authentication (2FA) and temporary tokens.",
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
    )
}
