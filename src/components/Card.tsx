import { card, cardHeader, cardSubtitle, cardLink } from "./Card.css.ts";

interface CardProps {
    title: string;
    date?: string;
    subtitle: string;
    details: string[];
    link?: string;
}

export default function Card({ title, date, subtitle, details, link }: CardProps) {
    const cardContent = (
        <article className={card}>
            <header className={cardHeader}>
                <h3>{title}</h3>
                {date && <time>{date}</time>}
            </header>
            <p className={cardSubtitle}>{subtitle}</p>
            <ul>
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </article>
    );

    // If a link is provided, wrap the card in an anchor tag
    if (link) {
        return (
            <a href={link} className={cardLink} target="_blank">
                {cardContent}
            </a>
        );
    }

    // Otherwise, just return the plain card
    return cardContent;
}