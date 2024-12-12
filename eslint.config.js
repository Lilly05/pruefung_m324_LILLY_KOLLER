import globals from "globals";

export default [
  {
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      eqeqeq: "error",
    },
  },
];
