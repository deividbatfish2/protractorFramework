const BasePageObjects = require('./base/BasePageObjects')

class ResultPage extends BasePageObjects {
    constructor () {
        super ()
        this.resultList = element.all(by.className('r'));
    }

    async resultadoIsPresent(texto) {
        const totalElementos = await this.resultList.count()
        
        return new Promise((resolve, reject) => {
            this.resultList.each((elemento, index) => {
                elemento.textIsPresent(texto).then((result => {
                    if (result) resolve(result)

                    if (index + 1 === totalElementos) resolve(false)
                }))
            });
        })
    }
}

module.exports = ResultPage