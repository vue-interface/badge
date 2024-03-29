module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'vue'
    ],
    rules: {
        'vue/no-v-html': 0,
        'vue/require-default-prop': 0,
        'vue/max-attributes-per-line': ['error', {
            'singleline': 6,
            'multiline': {
                'max': 1
            }
        }],
        'vue/html-indent': ['error', 4, {
            'ignores': [],
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
        }],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'never'
        }],
        // Ensure no space after keywords like if.
        'keyword-spacing': ['error', {
            'overrides': {
                'if': { 'after': false },
                'for': { 'after': false },
                'while': { 'after': false },
                'catch': { 'after': false }
            }
        }],
        // Use alternative brace style
        'brace-style': ['error', 'stroustrup'],
        // No spaces before parens
        'space-before-function-paren': ['error', 'never'],
        // Indent for tabs because spaces suck
        'indent': ['error', 4, {
            'ignoredNodes': ['TemplateLiteral']
        }],
        // Semi colons always where they need to be
        'semi': [2, 'always'],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    }
};
