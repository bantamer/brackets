module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
        Mocha: true,
    },
    extends: ['prettier', 'eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        eqeqeq: 'error',
    },
};
