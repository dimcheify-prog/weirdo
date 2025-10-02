/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': [
      '^(?:[a-z][a-z0-9]*)(?:-[a-z0-9]+)*$|^[a-z][a-zA-Z0-9]+$', // Allows both kebab-case and lowerCamelCase
      {
        message: 'Expected class name to be kebab-case or lowerCamelCase',
      },
    ],
  },
};
