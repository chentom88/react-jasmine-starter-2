const karmaWebpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'spec/**/*spec.js'
    ],
    exclude: [],
    preprocessors: {
      'spec/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: ['spec', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    webpack: karmaWebpackConfig,
  })
}
