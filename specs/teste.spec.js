const browser = require('protractor').browser;
const GooglePage = require('../pageObjetcs/GooglePage')
const ResultPage = require('../pageObjetcs/ResultPage')

describe('Testa', () => {

    it('já vai', () => {
        browser.get('https://www.google.com/')

        const googlePage = new GooglePage()
        const resultPage = new ResultPage()

        googlePage.pesquisar('teste')

        expect(resultPage.resultadoIsPresent('Teste | Capricho')).toBe(true)
    })
})