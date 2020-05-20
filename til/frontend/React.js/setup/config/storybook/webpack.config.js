const webpackConfig = require('../../webpack.config')

module.exports = ({ config }) => {
  config.module.rules = [
    ...webpackConfig.module.rules
  ]
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
