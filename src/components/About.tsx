import SectionTitle from "./SectionTitle.tsx";
import {secondarySectionBgColor} from "./Section.css.ts";

export default function About() {

    return (
        <section className={secondarySectionBgColor}>
            <SectionTitle title="About Me"></SectionTitle>
            <p>
                I am fascinated by leveraging data insights and modern software to solve complex real-world problems.
                <br/>
                Currently pursuing my BSc in computer science degree at Gisma University of Applied Sciences.
                An agile learner who thrives at:
                <ol>
                    <li>Swiftly adapting to working with modern technologies and keep up with major industry shifts.</li>
                    <li>Building scalable applications and RestAPIs with Typescript, SQL, MongoDB, Express.js, Vue.js, React, Node.js, Java, Object-Oriented Programming, Concurrency, Cybersecurity, Unit Testing, AI Development tools.</li>
                    <li>Deployment with Docker and Hosting AWS cloud services.</li>
                    <li>Utilizing Python, R, Pandas, NumPy, Seaborn, Matplotlib, Scikit-Learn, and Machine learning algorithms to analyze raw data and build actionable end-to-end machine learning pipelines that provides valuable insights.</li>
                </ol>
                I am Actively exploring internship and entry-level opportunities to apply my data science, backend development, and cloud deployment skills in real working environments and learn new skills.
            </p>
        </section>
    )
}