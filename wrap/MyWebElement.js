const ElementFinder = require('protractor').ElementFinder
const EC = protractor.ExpectedConditions
const DEFAULT_TIMEOUT_IN_MS = 5000
const browser = require('protractor').browser

/**
 * 
 * @param {string} text - Texto que sera escrito no componente
 * @param {int} temp - Tempo pelo qual o sistema aguardará o elemento estar visivel
 */
ElementFinder.prototype.escrever = function (text, temp = DEFAULT_TIMEOUT_IN_MS) {
    const self = this

    browser.wait(EC.visibilityOf(this), temp).then((result) => {
        this.getAttribute('name').then((name) => {
            browser.params.LOGGER.info(`Escrevendo: "${text}" no elemento: ${name}`)
        })
        return self.clear().sendKeys(text)
    }
    )
        .catch((error) => {
            console.error('O elemento não estava visivel')
            return
        })

}

/**
 * 
 * @param {int} temp - Tempo pelo qual o sistema aguardará o elemento ser clicável
 */
ElementFinder.prototype.clicar = function (temp = DEFAULT_TIMEOUT_IN_MS) {
    const self = this

    browser.wait(EC.elementToBeClickable(this), temp)
        .then((result) => {
            this.getAttribute('name').then((name) => {
                browser.params.LOGGER.info(`Clicando no elemento ${name}`)
            })
            return self.click()
        }
        )
        .catch((error) => {
            browser.params.LOGGER.error(`Botão não clicável ou não enconrado`)
            return
        })

}

/**
 * 
 * @param {string} texto - Texto que será verficado no elemento
 * @param {int} temp - Tempo pelo qual o sistema aguardará o elemento estar visivel
 */
ElementFinder.prototype.textIsPresent = function (texto, temp = DEFAULT_TIMEOUT_IN_MS) {
    const self = this
    return new Promise((resolve, reject) => {
        browser.wait(EC.visibilityOf(this), temp)
            .then((result) => {
                this.getText().then(text => {
                    resolve(text.indexOf(texto) !== -1)
                })
            })
            .catch((error) => {
                browser.params.LOGGER.error(`Elemento não encontrado`)
                reject(error)
            })
    });

}