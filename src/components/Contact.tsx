import SectionTitle from "./SectionTitle.tsx";
import { contactContainer, hookSentence, contactGrid, contactItem, iconWrapper, contactText } from "./Contact.css.ts";
import cvFile from '../assets/pdfs/cv.pdf';

const contactData = [
    {
        label: "Email",
        value: "abdullahmohammadaref@gmail.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
        )
    },
    {
        label: "Resume",
        value: "CV",
        href: cvFile,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
        )
    },
    {
        label: "LinkedIn",
        value: "LinkedIn",
        href: "https://www.linkedin.com/in/abdullahmohammadaref/",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
            </svg>
        )
    },
    {
        label: "GitHub",
        value: "Github",
        href: "https://github.com/Abdullahmohammadaref",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
        )
    },
    {
        label: "Location",
        value: "Berlin, Germany",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
        )
    }
];

export default function Contact() {
    return (
        <section>
            <SectionTitle title="Contact"></SectionTitle>
            <div className={contactContainer}>
                <p className={hookSentence}>
                    I am currently looking seeking internship and entry-level opportunities where I can utilize my skills and solve real-world problems. Reach out to me if your team is looking for data-driven problem solver.
                </p>
                
                <div className={contactGrid}>
                    {contactData.map((item, index) => (
                        item.href ? (
                            <a key={index} href={item.href} className={contactItem}>
                                <div className={iconWrapper}>{item.icon}</div>
                                <span className={contactText}>{item.value}</span>
                            </a>
                        ) : (
                            <div key={index} className={contactItem}>
                                <div className={iconWrapper}>{item.icon}</div>
                                <span className={contactText}>{item.value}</span>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    )
}
