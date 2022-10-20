module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        'no-console': 1,
        indent: ['error', 4, { SwitchCase: 1 }],
        'import/no-unresolved': 'off',
        'no-await-in-loop': 'off',
        camelcase: 'off',
        'no-restricted-syntax': ['off', 'ForInStatement', 'ForOfStatement'],
        'linebreak-style': 0,
    },
};
