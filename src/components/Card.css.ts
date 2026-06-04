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
    alignItems: "baseline",
    marginBottom: "1rem",
})

export const projectTitle = style({
    fontSize: '1.25rem',
    fontWeight: 'bold',
})

export const dateText = style({
    color: '#94a3b8',
    fontSize: '0.9rem',
})

export const cardSubtitle = style({
    color: 'var(--accent)',
    marginBottom: '1rem',
    fontSize: '1rem',
})

export const detailList = style({
    listStyleType: 'none',
    padding: '0',
    margin: '0',
})

export const detailItem = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '0.75rem',
    color: 'var(--text)',
    fontSize: '0.95rem',
    lineHeight: '1.6',
})

export const listBullet = style({
    color: '#10b981', /* green */
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
})
