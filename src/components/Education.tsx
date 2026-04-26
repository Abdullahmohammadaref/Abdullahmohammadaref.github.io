import SectionTitle from "./SectionTitle.tsx";
import {secondarySectionBgColor} from "./Section.css.ts";


export default function Education() {
    return (
        <section className={secondarySectionBgColor}>
            <SectionTitle title="Education"></SectionTitle>
            <b>BSc Computer Science</b>Gisma University of Applied Sciences—Berlin, Germany | 2023 - current
            <br/>
            <p>
                <b>Relevant Modules</b>: Artificial Intelligence & Machine Learning, Applied Statistical Modeling, Software Engineering, Data Structures & Algorithms, Operating Systems, Computer Networks, Cyber Security, App & Web Development, End-to-End Computer Science Project, Databases & Big Data, Advanced Programming, Python Programming, Computer Science Lab.
            </p>
        </section>
    )
}
