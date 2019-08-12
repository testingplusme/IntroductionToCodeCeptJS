exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://testblogselenium.wordpress.com/contact/',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept',
  "plugins": {
    "allure": {
      "enabled":true
    },
    "stepByStepReport": {
      "enabled": true,
      "screenshotsForAllureReport":true
   }
  }
}        