module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh', 
    "@typescript-eslint",
    "react",
    "react-hooks",
    "eslint-plugin-import-helpers"
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          "/^react/",
          "module",
          "/^@shared/",
          [
            "parent",
            "sibling",
            "index"
          ]
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  },
}
