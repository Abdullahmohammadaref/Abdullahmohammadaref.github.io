import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
    boxSizing: 'border-box',
    margin: '0rem'
});

globalStyle(':root', {
    vars: {
        /* Dark Mode Colors */
        '--bg': '#0f172a', /* Deep slate tech background */
        '--bg-secondary': '#1e293b',
        '--text': '#cbd5e1', /* Light slate for reading */
        '--text-h': '#f8fafc', /* Crisp white for headings */
        '--accent': '#38bdf8', /* Bright sky blue for dark mode contrast */
        '--border': '#1e293b',
        '--card-bg': '#1e293b',
    },
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: 'var(--bg)',
    color: 'var(--text)',
    lineHeight: '1.6',
});

globalStyle('#root', {
    width: '100%',
    overflowX: 'hidden',
});

globalStyle('section', {
    paddingInline: 'max(2rem, calc(50vw - 450px))',
    paddingBlock: '1rem',
});

globalStyle('h1, h2, h3', {
    color: 'var(--text-h)',
});

globalStyle('hr', {
    border: 'none',
    borderBottom: '1px solid var(--border)',
    margin: '0.5rem 0',
});