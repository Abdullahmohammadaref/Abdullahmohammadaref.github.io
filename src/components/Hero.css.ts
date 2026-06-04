import {style} from "@vanilla-extract/css";

export const hero = style({
    fontFamily: '"Fira Code", monospace',
})

export const terminalLine = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginBottom: '1rem',
})

export const prompt = style({
    color: '#10b981', /* green */
    fontWeight: 'bold',
})

export const h1 = style({
    fontSize: '2.5rem',
    fontWeight: "bold",
    color: 'var(--text-h)',
    display: 'inline-block',
})

export const p = style({
    fontSize: '1.125rem',
    color: 'var(--text)',
    borderLeft: '2px solid #334155',
    paddingLeft: '1rem',
    marginLeft: '0.5rem',
})

export const cursor = style({
    display: 'inline-block',
    width: '10px',
    height: '2.5rem',
    backgroundColor: 'var(--text-h)',
    animation: 'blink 1s step-end infinite',
    verticalAlign: 'bottom',
})