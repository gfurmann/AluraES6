//Tudo se inicia no controller. No HTML chamamos o método adiciona para criar uma nova negociação no sistema.
class NegociacaoController {
    
    constructor() {
        
        //Aqui no constructor temos todos os parâmetros de nosso código. Primeiramente usamos o "bind" para salvar
        // DOM no símbolo de $. Trazemos então todos os elementos do DOM que estamos preenchendo na página.
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        // Após trazer os valores pelo DOM, criamos instâncias da lista de negociações e da view, que irá colocar tudo
        // em tela
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        // Também já atualizamos a tela com a lista de negociações pelo método update, mesmo que não exista nada 
        //para mostrar, estamos construindo a estrutura da lista.
        this._negociacoesView.update(this._listaNegociacoes);

    }
    
    // Método para criar uma nova negociação, ele chama uma nova instância do modelo de negociação e então passa todos
    // os parâmetros capturados, retornando assim uma nova negociação.
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.TextoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    // Depois que preenchemos o fomulário e adicionamos precisamos limpá-lo, fazemos isso chamando esse método.
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

    // Método para adicionar uma nova negociação.
    adiciona(event) {
        // Prevenimos o reload da página
        event.preventDefault();
        
        // Primeiramente pegamos a negociação que retornou de _criaNegociação e a passamos no método adiciona da ListaNegociacoes,
        // assim estaremos colocando essa negociação dentro do array.
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        console.log(this._listaNegociacoes);

        // Como acabamos de passar uma negociação para o array, fazemos uma renderização nova atualizando o html e
        // mostrando todos os elementos do array
        this._negociacoesView.update(this._listaNegociacoes);
        this._limpaFormulario();
        
    }
}