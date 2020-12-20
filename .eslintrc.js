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
        "./rules/simple-import-sort.js",
    ],
    overrides: [],
    parserOptions: {
        ecmaFeatures: {},
        sourceType: "module",
    },
    plugins: ["simple-import-sort"],
    parser: "babel-eslint",
    rules: {},
    settings: {},
}
