const LOGGER = require('winston')

exports.config = {
    directConnect: true,
    capabilities: {
        browserName: 'chrome', // Define qual browser deve ser utilizado na realização dos testes.
        shardTestFiles: true, //Para execução dos testes em paralelo..
        maxInstances: 5,
    },
    specs: ['./specs/teste.spec.js'],
    params: {
        USE_LOGGER: false,
        LOGGER: LOGGER,
    },

    onPrepare : () => {
        browser.driver.manage().window().maximize()
        browser.ignoreSynchronization = true
        LOGGER.add(LOGGER.transports.File, {filename: 'log.txt'})
    }
}