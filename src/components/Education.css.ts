import {style} from "@vanilla-extract/css";

export const education = style({
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

export const degree = style({
    color: 'var(--text-h)',
    fontWeight: 'bold',
})