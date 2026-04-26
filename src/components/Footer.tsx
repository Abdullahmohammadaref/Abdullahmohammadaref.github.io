import {secondarySectionBgColor} from "./Section.css.ts";


export default function Footer() {

    return (
        <footer className={secondarySectionBgColor} style={{ textAlign: 'center', padding: '1rem' }}>
            <p>
                &copy; {new Date().getFullYear()} Abdullah Mohammad Aref.
            </p>
        </footer>
    )
}