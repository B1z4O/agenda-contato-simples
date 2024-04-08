const form = document.getElementById("form-agenda");
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputNumero = document.getElementById('telefone');

    if (nomes.includes(inputNomeCompleto.value)) {
        alert(`O contato de ${inputNomeCompleto.value} já foi inserido na agenda!`);
    }
    else {
        nomes.push(inputNomeCompleto.value);
        telefones.push(inputNumero.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeCompleto.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;

        inputNomeCompleto.value = '';
        inputNumero.value = '';
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tBody');
    corpoTabela.innerHTML = linhas;
}