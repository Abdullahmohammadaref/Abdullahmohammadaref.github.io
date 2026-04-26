import { style } from '@vanilla-extract/css';

export const contactContainer = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
});

export const hookSentence = style({
    fontSize: '1.1rem',
});

export const contactGrid = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '1rem',
});

export const contactItem = style({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--card-bg)',
    borderRadius: '0.6rem',
    textDecoration: 'none',
    color: 'var(--text)',
    border: '1px solid var(--border)',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    ':hover': {
        transform: 'translateY(-2px)',
        borderColor: 'var(--accent)',
        color: 'var(--text-h)', 
    }
});

export const iconWrapper = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--accent)',
    width: '24px',
    height: '24px',
    flexShrink: 0
});

export const contactText = style({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
})