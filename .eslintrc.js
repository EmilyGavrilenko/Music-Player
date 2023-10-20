module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "error",
            {
                printWidth: 100,
                tabWidth: 4,
                useTabs: false,
                semi: true,
                singleQuote: false,
                quoteProps: "consistent",
                jsxSingleQuote: false,
                trailingComma: "none",
                bracketSpacing: true,
                bracketSameLine: false,
                arrowParens: "always",
                proseWrap: "preserve",
                htmlWhitespaceSensitivity: "strict",
                endOfLine: "lf"
            }
        ]
    }
};
