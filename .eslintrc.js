module.exports = {
    root: true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": ["Users/cristianbedoya/Desktop/cypress/cypress-training/tsconfig.json"]
    },
    "plugins": [
        "@typescript-eslint",
        "cypress"
    ],
    "rules": {
        "quotes": ["error", "double"],
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn",
        "no-unused-vars": "warn",
        "require-jsdoc": "warn",
        "max-len": [ "error", { "code": 120 } ]
    },

 }
