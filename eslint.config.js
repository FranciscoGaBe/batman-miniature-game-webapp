import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        plugins: { prettier: prettierPlugin },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
            prettierConfig,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    tabWidth: 4,
                    endOfLine: 'crlf',
                },
            ],
            quotes: ['error', 'single'],
            'no-trailing-spaces': 'error',
            'no-multi-spaces': 'error',
            'eol-last': ['error', 'always'],
            'space-before-blocks': ['error', 'always'],
            'quote-props': ['error', 'as-needed'],
            'array-bracket-newline': [
                'error',
                { multiline: true, minItems: null },
            ],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
            '@typescript-eslint/no-explicit-any': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',
        },
    },
]);
