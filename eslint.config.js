/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["**/*.js"],
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      env: {
        browser: true, // Adiciona as variáveis globais do navegador
        node: true, // Adiciona as variáveis globais do Node.js
      },
      rules: {
        // Coloque suas regras ESLint aqui
      },
    },
  ],
};
