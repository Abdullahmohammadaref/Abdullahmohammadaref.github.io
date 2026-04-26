import SectionTitle from "./SectionTitle.tsx";
import { categoryTitle, skillsGrid, skillBadge, skillIcon } from "./Skills.css.ts";

// We store the skills in an array so it's very easy to add/remove them later!
const skillCategories = [
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        ]
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
        ]
    },
    {
        title: "Databases",
        skills: [
            // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        ]
    },
    {
        title: "Tools & Cloud",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
            { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
        ]
    }
];

export default function Skills() {

    return (
        <section>
            <SectionTitle title="Skills"></SectionTitle>
            
            {skillCategories.map((category) => (
                <div key={category.title}>
                    <h3 className={categoryTitle}>{category.title}</h3>
                    <div className={skillsGrid}>
                        {category.skills.map((skill) => (
                            <div key={skill.name} className={skillBadge}>
                                <img src={skill.icon} alt={`${skill.name} logo`} className={skillIcon} />
                                <span>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
        </section>
    )
}