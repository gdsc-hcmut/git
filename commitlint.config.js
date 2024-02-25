module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Add or override rules here
    'scope-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'test']],
    // Customize rules based on your needs
  },
}
