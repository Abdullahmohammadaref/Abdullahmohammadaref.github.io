import { titleContainer, prompt, titleText, line } from "./SectionTitle.css.ts";

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
    return (
        <div className={titleContainer}>
            <span className={prompt}>~/{props.title.toLowerCase().replace(/\s+/g, '-')}</span>
            <span className={titleText}>$</span>
            <div className={line}></div>
        </div>
    )
}