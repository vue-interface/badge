const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const badge = {
        // ':root': {
        //     '--badge-font-size': theme('badge.fontSize'),
        //     '--badge-font-weight': theme('badge.fontWeight'),
        //     '--badge-color': theme('badge.color'),
        //     '--badge-padding-y': theme('badge.paddingY'),
        //     '--badge-padding-x': theme('badge.paddingX'),
        //     '--badge-border-radius': theme('badge.borderRadius')
        // },
        
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

        '.badge-pill': {
            borderRadius: '1000rem'
        },
        
        '.badge:empty': {
            display: 'none'
        },

        // Quick fix for badges in buttons
        '.btn .badge': {
            position: 'relative',
            top: '-1px'
        }
    };

    addComponents(badge);
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