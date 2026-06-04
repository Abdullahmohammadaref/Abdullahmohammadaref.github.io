import SectionTitle from "./SectionTitle.tsx";
import Card from "./Card.tsx";

const experienceData = [
    // {
    //     title: "Karizma – Freelancing",
    //     location: "Jeddah, Saudi Arabia",
    //     date: "12/2025 - Till now",
    //     details: [
    //         "Optimized e-commerce store project for “Karizma” company and built portfolio website.",
    //     ]
    // },
    {
        title: "Freelance Software Engineer ",
        location: "Berlin, Germany",
        date: "09/2025 – Till now",
        details: [
            "Rebuilt legacy Microsoft Access vehicle management system into a modern Django and React application. Built an advanced database to store data and automate administrative tasks.",
            "Implemented secure authorization and 2-factor authentication using one-time tokens. Enhanced user experience with pagination, internationalization, and autosaving forms.",
            "Leveraged cutting-edge AI tools for rapid development, and deployed the application using Docker then hosted it on an Oracle Cloud instance with GitHub CI/CD pipelines."
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