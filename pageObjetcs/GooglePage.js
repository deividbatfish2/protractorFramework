const BasePageObjects = require('./base/BasePageObjects')

class GooglePage extends BasePageObjects {
    constructor () {
        super()
        this.q = element(by.name('q'));
        this.btn = element(by.name('btnK'));
    }

    pesquisar (text) {
        this.q.escrever(text);
        this.btn.clicar();
    }
}

module.exports = GooglePage