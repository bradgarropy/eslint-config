module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "./rules/eslint-best-practices.js",
        "./rules/eslint-errors.js",
        "./rules/eslint-es6.js",
        "./rules/eslint-node.js",
        "./rules/eslint-style.js",
        "./rules/eslint-variables.js",
        "./rules/react.js",
        "./rules/react-hooks.js",
        "./rules/svelte.js",
        "prettier",
    ],
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: ["plugin:@typescript-eslint/recommended"],
        },
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },
    plugins: [
        "jsx-a11y",
        "react",
        "react-hooks",
        "svelte3",
        "@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
}
