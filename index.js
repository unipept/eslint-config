module.exports = {
    root: true,
    env: {
        node: true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "@vue/typescript/recommended",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "max-len": ["warn", { "code": 120 }],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-async-promise-executor": "off",
        "no-undef": "off",
        "require-atomic-updates": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
}
