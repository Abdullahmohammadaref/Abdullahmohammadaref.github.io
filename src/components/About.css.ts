import {style} from "@vanilla-extract/css";

export const about = style({
    fontFamily: '"Fira Code", monospace',
})

export const terminalLine = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginBottom: '1rem',
})

export const prompt = style({
    color: '#38bdf8', /* blue */
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
})

export const content = style({
    fontSize: '1rem',
    color: 'var(--text)',
    lineHeight: '1.7',
})

export const list = style({
    listStyleType: "none",
    paddingLeft: '0',
    margin: '1rem 0',
})

export const listItem = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginBottom: '0.5rem',
})

export const listBullet = style({
    color: '#eab308', /* yellow */
    fontWeight: 'bold',
})