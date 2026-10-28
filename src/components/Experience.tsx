import SectionTitle from "./SectionTitle.tsx";
import Card from "./Card.tsx";

const experienceData = [
    {
        title: "Freelance Software Engineer",
        location: "Berlin, Germany",
        date: "09/2025 – 09/2026",
        link: "https://github.com/Abdullahmohammadaref/DriveBase",
        details: [
            "Re-architected a legacy Microsoft Access setup into a modern web platform using Django, React, and TypeScript, consolidating 2,000+ historical vehicle records into a normalized 26-model relational schema.",
            "Implemented secure authorization and 2-factor authentication using one-time tokens. Enhanced user experience with pagination, internationalization, and autosaving forms.",
            "Built an automated financial calculation engine to calculate key financial metrics.",
            "Engineered a server-side PDF generator to dynamically compile 6 automotive contracts.",
            "Integrated the official mobile.de REST API for listing creation, and automated vehicle attribute population.",
            "Configured containerized deployment with Docker Compose on an Oracle Cloud Linux VM, securing traffic with Nginx SSL reverse proxy and automating releases via GitHub Actions CI/CD."
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
                    link={job.link}
                />
            ))}
        </section>
    );
}
