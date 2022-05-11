const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    addComponents({
        '.badge': {
            display: theme('badge.display'),
            padding: `${theme('badge.paddingY')} ${theme('badge.paddingX')}`,
            fontSize: theme('badge.fontSize'),
            fontWeight: theme('badge.fontWeight'),
            lineHeight: 1,
            color: theme('badge.color', colors.white),
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'baseline',
            borderRadius: theme('badge.borderRadius'),
        },
        
        '.badge:empty': {
            display: 'none'
        },

        '.badge-pill': {
            borderRadius: '1000rem'
        },

        // Quick fix for badges in buttons
        '.btn .badge': {
            position: 'relative',
            top: '-1px'
        }
    });
}, {
    theme: {
        badge: theme => ({
            display: 'inline-block',
            fontSize: '.75em',
            fontWeight: 'bold',
            color: theme('colors.white'),
            paddingY: '.25em',
            paddingX: '.5em',
            borderRadius: '.25rem',
        })
    }
});