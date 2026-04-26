import {style} from "@vanilla-extract/css";

export const card = style({
    backgroundColor: "var(--card-bg)",
    borderRadius: "0.6rem",
    borderLeft: "5px solid var(--accent)",
    margin: "1rem auto",
    padding: "1rem",

    transition: "transform 0.2s ease, scale 0.2s ease",
    ':hover': {
        transform: "translateY(-4px)",
        scale: "1.02",
    }
})

export const cardLink = style({
    textDecoration: "none",
    color: "inherit",
    display: "block",
})

export const cardHeader = style({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
})

export const cardSubtitle = style({
    color: "var(--accent)",
})