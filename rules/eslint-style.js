module.exports = {
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
        "function-paren-newline": ["error", "consistent"],
        "indent": [
            "error",
            4,
            {
                SwitchCase: 1,
            },
        ],
        "no-mixed-spaces-and-tabs": ["error"],
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
        "semi": ["error", "never"],
        "semi-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "semi-style": ["error", "last"],
        "space-before-function-paren": [
            "error",
            {
                asyncArrow: "always",
            },
        ],
        "quote-props": ["error", "consistent-as-needed"],
        "quotes": ["error", "double"],
    },
}
