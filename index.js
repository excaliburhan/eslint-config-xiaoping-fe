
var config = require('eslint-config-xiaoping')

config.parser = 'babel-eslint'
config.plugins = ['import']
config.rules['import/no-unresolved'] = [2, { commonjs: true, amd: true }]

module.exports = config
