
var config = require('eslint-config-xiaoping')

module.exports = Object.assign({}, config, {
  parser: 'babel-eslint',
  plugins: ['import'],
  rules: {
    'import/no-unresolved': [2, { commonjs: true, amd: true }]
  }
})
