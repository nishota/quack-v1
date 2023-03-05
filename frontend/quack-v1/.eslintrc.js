module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "react-app",
    'plugin:react/recommended',
    'standard-with-typescript',
    "prettier",
  ],
  overrides: [
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  }
}
