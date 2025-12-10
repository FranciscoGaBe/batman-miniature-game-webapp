import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'quotes': ['error', 'single'], // enforce single quotes
      'no-trailing-spaces': 'error', // remove trailing whitespace
      'no-multi-spaces': 'error', // disallow multiple spaces
      'eol-last': ['error', 'always'], // ensure newline at the end of file
      'space-before-blocks': ['error', 'always'], // optional, space before {
      'indent': ['error', 2, { 'SwitchCase': 1 }] // 2 spaces, indent switch cases
    },
  },
])
