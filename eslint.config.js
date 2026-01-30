import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        chrome: "readonly",
        browser: "readonly",
        document: "readonly",
        window: "readonly",
        console: "readonly",
        alert: "readonly",
        navigator: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        fetch: "readonly",
        Promise: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
      "prefer-const": "warn",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "max-len": [
        "warn",
        {
          code: 120,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      complexity: ["warn", 10],
      "no-magic-numbers": [
        "warn",
        {
          ignore: [0, 1, -1, 2, 100, 1000],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
        },
      ],
      "no-duplicate-imports": "error",
      "prefer-template": "warn",
      "no-nested-ternary": "warn",
      "no-else-return": "warn",
      "consistent-return": "error",
      camelcase: ["warn", { properties: "never" }],
    },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
  {
    ignores: ["node_modules/", "coverage/", "jest.config.js", "jest.setup.js"],
  },
];
