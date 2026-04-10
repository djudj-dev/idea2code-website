import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default defineConfig([
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  eslintConfigPrettier,
  eslintPluginPrettier,
  {
    rules: {
      "prettier/prettier": [
        "warn",
        {
          trailingComma: "all",
          tabWidth: 2,
          singleQuote: true,
          printWidth: 80,
          bracketSpacing: true,
          bracketSameLine: false,
          arrowParens: "always",
        },
      ],
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "off",
      "import/prefer-default-export": "off",
      "object-curly-newline": "off",
      "@typescript-eslint/no-namespace": "off",
    },
  },
  {
    files: ["*.{ts,tsx,js}"],
  },
  {
    ignores: [
      ".next",
      "dist",
      "node_modules",
      "public",
      "vitest.config.ts",
      "dist",
      "eslint.config.mjs",
      "next-env.d.ts",
    ],
  },
]);
