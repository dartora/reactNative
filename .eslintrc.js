module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // Add this line
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-undef': 'off', // Turn off no-undef if necessary
    '@typescript-eslint/no-var-requires': 'off', // Turn off no-var-requires if using CommonJS
    '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}], // Customize as needed
    'prettier.bracketSpacing': false,
  },
};
