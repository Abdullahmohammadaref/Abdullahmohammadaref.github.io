import SectionTitle from "./SectionTitle.tsx";
import Card from "./Card.tsx";

const experienceData = [
    {
        title: "Karizma – Freelancing",
        location: "Jeddah, Saudi Arabia",
        date: "12/2025 - Till now",
        details: [
            "Optimized e-commerce store project for “Karizma” company and built portfolio website.",
        ]
    },
    {
        title: "Haselhorst Automobile - Freelancing",
        location: "Berlin, Germany",
        date: "09/2025 – Till now",
        details: [
            "Rebuilt legacy Microsoft access vehicle management system into modern next.js application. Build Advanced database models using MongoDB to store data and generate document using stored data.",
            "Implemented secure authorization and 2-factor authentication using one-time tokens. Enhanced user experience with pagination, internationalization, autosaving forms, and underwhelming minimal user interface.",
            "Utilized AI development tools to save time and detect bugs, and deployed using Docker and hosted on AWS cloud instance."
        ]
    }
];

export default function Experience() {

    return (
        <section>
            <SectionTitle title="Experience"></SectionTitle>
            
            {experienceData.map((job, index) => (
                <Card
                    key={index}
                    title={job.title}
                    date={job.date}
                    subtitle={job.location}
                    details={job.details}
                />
            ))}
        </section>
    )
}