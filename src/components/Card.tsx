import { card, cardHeader, projectTitle, dateText, cardSubtitle, cardLink, detailList, detailItem, listBullet } from "./Card.css.ts";

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
                <h3 className={projectTitle}>~/{title.toLowerCase().replace(/\s+/g, '-')}</h3>
                {date && <time className={dateText}>[{date}]</time>}
            </header>
            <p className={cardSubtitle}>&gt; {subtitle}</p>
            <ul className={detailList}>
                {details.map((detail, index) => (
                    <li key={index} className={detailItem}>
                        <span className={listBullet}>&gt;_</span>
                        <span>{detail}</span>
                    </li>
                ))}
            </ul>
        </article>
    );

    // If a link is provided, wrap the card in an anchor tag
    if (link) {
        return (
            <a href={link} className={cardLink} target="_blank" rel="noopener noreferrer">
                {cardContent}
            </a>
        );
    }

    // Otherwise, just return the plain card
    return cardContent;
}