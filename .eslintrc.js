module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "prettier",
        "./rules/eslint-best-practices.js",
        "./rules/eslint-errors.js",
        "./rules/eslint-es6.js",
        "./rules/eslint-node.js",
        "./rules/eslint-style.js",
        "./rules/eslint-variables.js",
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {},
        sourceType: "module",
    },
    plugins: [],
    parser: "babel-eslint",
    rules: {},
    settings: {},
}
