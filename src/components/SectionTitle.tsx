
interface SectionTitleProps {
    title: string;
}

export default function SectionTitle(props: SectionTitleProps) {


    return (
        <>
            <h2>{props.title}</h2>
            <hr/>
        </>
    )
}