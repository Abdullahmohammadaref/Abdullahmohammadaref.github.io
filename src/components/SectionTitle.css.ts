import {style} from "@vanilla-extract/css";

export const titleContainer = style({
    fontFamily: '"Fira Code", monospace',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
})

export const prompt = style({
    color: '#38bdf8', /* blue */
    fontWeight: 'bold',
    fontSize: '1.5rem',
})

export const titleText = style({
    color: 'var(--text-h)',
    fontSize: '1.5rem',
    textTransform: 'lowercase',
})

export const line = style({
    flex: 1,
    height: '1px',
    backgroundColor: '#334155',
    border: 'none',
})
