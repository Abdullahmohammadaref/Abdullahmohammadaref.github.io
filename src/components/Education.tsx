import SectionTitle from "./SectionTitle.tsx";
import {education, content, degree} from "./Education.css.ts";
import {secondarySectionBgColor} from "./Section.css.ts";


export default function Education() {
    return (
        <section className={`${education} ${secondarySectionBgColor}`}>
            <SectionTitle title="Education"></SectionTitle>
            
            <div className={content}>
                <p><b className={degree}>BSc Computer Science</b> | Gisma University of Applied Sciences—Berlin, Germany | 2023 - current</p>
                <br/>
                <p>
                    <b>Relevant Modules</b>: Artificial Intelligence & Machine Learning, Applied Statistical Modeling, Software Engineering, Data Structures & Algorithms, Operating Systems, Computer Networks, Cyber Security, App & Web Development, End-to-End Computer Science Project, Databases & Big Data, Advanced Programming, Python Programming, Computer Science Lab.
                </p>
            </div>
        </section>
    )
}
