//Classe para retornar a view

class NegociacoesView {

    // O constructor recebe um elemento do DOM que usaremos para colocar o modelo dentro
    constructor(elemento){
        this._elemento = elemento;
    }

    // O template pega o array e por meio de uma template string retorna o html da página
    _template(model){
        return `
            <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n => `
                    <tr>
                        <td>${DateHelper.DataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                `).join('')}
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>${
                    (function(){
                        let total = 0;
                        model.negociacoes.forEach(n => total += n.volume);
                        return total;
                    })()
                }</td>
            </tfoot>
        </table>
        `;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

}

