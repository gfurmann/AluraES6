// Classe para listar negociações

class ListaNegociacoes {

    // O constructor têm um array de negociações
    constructor(){
        this._negociacoes = [];
    }

    // O método adiciona recebe a negociação enviada pelo controller e manda para dentro do array
    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    // método para retornar as negociações mas sem permitir que estas sejam alteradas. Por tal motivo, retornamos um array
    // vazio e concatenamos as nossas negociações nele, assim passamos uma "cópia" das negociações.
    get negociacoes(){
        return [].concat(this._negociacoes);
    }

}