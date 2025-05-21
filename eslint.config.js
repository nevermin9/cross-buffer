import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    eslintPluginPrettier,
    {
        ignores: ["node_modules/", "dist/"],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "no-console": "warn",
            "no-debugger": "warn",
            semi: ["error", "always"],
            quotes: ["error", "double"],
            "no-duplicate-imports": "error",
            "no-promise-executor-return": "error",
            "no-unreachable-loop": "error",
            curly: ["error", "all"],
            eqeqeq: [
                "error",
                "always",
                {
                    null: "ignore",
                },
            ],
            "max-depth": ["error", 4],
            "no-else-return": "error",
            "no-lonely-if": "error",
            "no-nested-ternary": "error",
            "no-return-assign": "error",
            "no-var": "error",
            "prefer-const": "error",
            "require-await": "error",
        },
    }
);
