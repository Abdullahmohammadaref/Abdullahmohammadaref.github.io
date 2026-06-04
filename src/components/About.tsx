import SectionTitle from "./SectionTitle.tsx";
import {about, content, list, listItem, listBullet} from "./About.css.ts";
import {secondarySectionBgColor} from "./Section.css.ts";

export default function About() {
    return (
        <section className={`${about} ${secondarySectionBgColor}`}>
            <SectionTitle title="About Me"></SectionTitle>

            <div className={content}>
                <p>
                    I am fascinated by leveraging data insights and modern software to solve complex real-world problems.
                    <br/>
                    Currently pursuing my BSc in Computer Science degree at Gisma University of Applied Sciences.
                    An agile learner who thrives at:
                </p>
                <ul className={list}>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Swiftly adapting to working with modern technologies and keeping up with major industry shifts.</span>
                    </li>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Building scalable applications and REST APIs with TypeScript, SQL, MongoDB, Express.js, Vue.js, React, Node.js, Java, Object-Oriented Programming, Concurrency, Cybersecurity, Unit Testing, and AI Development tools.</span>
                    </li>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Deploying with Docker and hosting on AWS cloud services.</span>
                    </li>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Utilizing Python, R, Pandas, NumPy, Seaborn, Matplotlib, Scikit-Learn, and machine learning algorithms to analyze raw data and build actionable end-to-end machine learning pipelines that provide valuable insights.</span>
                    </li>
                </ul>
                <p>
                    I am actively exploring internship and entry-level opportunities to apply my data science, backend development, and cloud deployment skills in real working environments and learn new skills.
                </p>
            </div>
        </section>
    )
}