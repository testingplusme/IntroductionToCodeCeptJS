exports.config = {
  timeout: 10000,
    tests: './*_test.js',
    output: './output',
    "helpers": {
        "Puppeteer": {
            browser: 'process.env.BROWSER' || 'firefox',
            url: 'https://testblogselenium.wordpress.com/contact/',
            show: true,
            chrome: {
                args: [
                    '--ignore-certificate-errors',
                ],
            },
        },
         "ResembleHelper" : {
       "require": "codeceptjs-resemblehelper",
       "screenshotFolder" : "./tests/output/",
       "baseFolder": "./tests/screenshots/base/",
       "diffFolder": "./tests/screenshots/diff/"
     }
    },
    include: {
        I: './steps_file.js',
        contactFormPage: './pages/contactFormPage.js'
    },
    multiple: {
        parallel: {
            chunks: process.env.THREADS || 30,
            browsers: [{
                browser: 'chrome_1920x1080',
                windowSize: '1920x1080',
            }, {
                browser: 'chrome_1200x600',
                windowSize: '1200x600',
            }],
        },
    },
    bootstrap: null,
    mocha: {},
    name: 'codecept',
    "plugins": {
        "allure": {
            "enabled": true
        },
        "stepByStepReport": {
            "enabled": true,
            "screenshotsForAllureReport": true
        }
    }
}