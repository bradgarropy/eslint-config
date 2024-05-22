import babelParser from "@babel/eslint-parser"
import js from "@eslint/js"
import prettier from "eslint-config-prettier"
import importSort from "eslint-plugin-simple-import-sort"
import globals from "globals"

const config = [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
                ...globals.es2021,
            },
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
            },
            sourceType: "module",
        },
    },
    js.configs.recommended,
    prettier,
    {
        plugins: {
            "simple-import-sort": importSort,
        },
    },
    {
        rules: {
            "comma-dangle": ["error", "always-multiline"],
            "comma-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "comma-style": ["error", "last"],
            "eol-last": ["error", "always"],
            "eqeqeq": ["error", "always"],
            "function-paren-newline": ["off"],
            "indent": ["off"],
            "no-console": ["off"],
            "no-mixed-spaces-and-tabs": ["error"],
            "no-unused-vars": [
                "error",
                {
                    ignoreRestSiblings: true,
                },
            ],
            "object-curly-newline": [
                "error",
                {
                    consistent: true,
                },
            ],
            "object-curly-spacing": ["error", "never"],
            "object-property-newline": [
                "error",
                {
                    allowAllPropertiesOnSameLine: true,
                },
            ],
            "prefer-const": ["error"],
            "quote-props": ["error", "consistent-as-needed"],
            "quotes": ["error", "double"],
            "semi": ["error", "never"],
            "semi-spacing": [
                "error",
                {
                    before: false,
                    after: true,
                },
            ],
            "semi-style": ["error", "last"],
            "simple-import-sort/imports": ["error"],
            "simple-import-sort/exports": ["error"],
            "space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always",
                },
            ],
        },
    },
]

export default config
