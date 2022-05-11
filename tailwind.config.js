module.exports = {
    content: [
        "./index.html"
    ],
    theme: {
        extend: {
            variations: {
                future: '#FF00FF'
            }
        },
    },
    plugins: [
        require('@vue-interface/variant/tailwindcss'),
        require('./tailwindcss'),
    ],
    safelist: [
        ...require('@vue-interface/variant/tailwindcss/safelist')('red'),
        ...require('./tailwindcss/safelist')(),
        {
            pattern: /future/
        }
    ]
};