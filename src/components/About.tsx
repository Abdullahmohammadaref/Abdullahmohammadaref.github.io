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
                    An agile engineer who thrives at:
                </p>
                <ul className={list}>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Architecting full-stack web platforms and typed REST APIs with reactive UIs, secure auth flows, and automated testing.</span>
                    </li>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Building resilient backend services and concurrent systems with strict relational data integrity and clean OOP architecture.</span>
                    </li>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Designing end-to-end machine learning pipelines and statistical models that transform raw data into actionable predictive insights.</span>
                    </li>
                    <li className={listItem}>
                        <span className={listBullet}>*</span>
                        <span>Containerizing services with Docker Compose and managing automated CI/CD deployments on Oracle Cloud (OCI).</span>
                    </li>
                </ul>
                <p>
                    Actively exploring internship and working student opportunities to apply my skills in Data Engineering, Full-Stack Development, or Applied AI in real production environments. Feel free to reach out if your team is looking for an adaptive problem solver!
                </p>
            </div>
        </section>
    )
}