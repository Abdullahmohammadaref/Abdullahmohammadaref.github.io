import { style } from '@vanilla-extract/css';

export const categoryTitle = style({
    fontSize: '1.2rem',
    marginBottom: '1rem',
    marginTop: '2rem',
});

export const skillsGrid = style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
});

export const skillBadge = style({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--card-bg)',
    border: '1px solid var(--border)',
    borderRadius: '0.5rem',

    fontWeight: 500,

    transition: 'transform 0.2s ease, border-color 0.2s ease',
    ':hover': {
        transform: 'translateY(-2px)',
        borderColor: 'var(--accent)',
    }
});

export const skillIcon = style({
    width: '20px',
    height: '20px',
    objectFit: 'contain',
});