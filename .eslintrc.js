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
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaFeatures: {},
        requireConfigFile: false,
        sourceType: "module",
    },
    plugins: ["simple-import-sort"],
    rules: {},
    settings: {},
}
