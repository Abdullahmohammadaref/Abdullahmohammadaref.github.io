import SectionTitle from "./SectionTitle.tsx";
import {education, content, degree} from "./Education.css.ts";
import {secondarySectionBgColor} from "./Section.css.ts";


export default function Education() {
    return (
        <section className={`${education} ${secondarySectionBgColor}`}>
            <SectionTitle title="Education"></SectionTitle>
            
            <div className={content}>
                <p><b className={degree}>BSc Computer Science</b> | Gisma University of Applied Sciences—Berlin, Germany | 2023 – 2027 (Expected)</p>
                <br/>
                <p>
                    <b>Relevant Modules</b>: Data Structures & Algorithms, Advanced Programming, Databases & Big Data, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence & Machine Learning, Applied Statistical Modeling, App & Web Development, Cyber Security, Statistics, Mathematical Foundations.
                </p>
            </div>
        </section>
    )
}
