import SectionTitle from "./SectionTitle.tsx";
import Card from "./Card.tsx";
import certificatePdf from "../assets/pdfs/certificate_of_achievement.pdf";

const certificatesData = [
    {
        title: "2nd Place Winner",
        link: certificatePdf,
        date: "06/2026",
        subtitle: "Nexus Hackathon: The Odyssey (Gisma University) ",
        details: [
            "Awarded Certificate of Achievement as 2nd place winner for showcasing outstanding innovation and dedication, exceptional problem-solving, and collaborative spirit.",
            "Collaborated in a 3-person team to rapidly brainstorm an innovative technical solution and build a working prototype with AI development tools in three hours, then pitched the idea and live prototype to judges with a business presentation.",
        ]
    }
];

export default function Certificates() {
    return (
        <section>
            <SectionTitle title="Certificates & Awards"></SectionTitle>
            
            {certificatesData.map((cert) => (
                <Card
                    key={cert.title}
                    title={cert.title}
                    date={cert.date}
                    subtitle={cert.subtitle}
                    details={cert.details}
                    link={cert.link}
                />
            ))}
            
        </section>
    )
}
