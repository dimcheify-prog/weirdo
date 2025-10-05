import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import pluginJs from '@eslint/js';
import i18next from 'eslint-plugin-i18next';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // TODO: найти решение без ts-ignore
  // @ts-expect-error something with types in i18next eslint plugin
  i18next.configs['flat/recommended'],
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', 'tsx'] },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'i18next/no-literal-string': 'warn',
      'max-len': ['error', { ignoreComments: true, code: 85 }],
    },
  },
]);
