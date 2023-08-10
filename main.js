const form = document.getElementById('form-dados');
const nome = [];
const ddd = [];
const telefone = [];

let linha = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabelas();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputDDD = document.getElementById('codigoCidade');
    const inputTelefone = document.getElementById('numeroTelefone');

    if (telefone.includes(inputTelefone)) {
        alert(`O número de telefone; ${inputTelefone.Value} já foi salvo`);
    } else {

        nome.push(inputNomeContato.value);
        ddd.push(inputDDD.value);
        telefone.push(inputTelefone);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato}</td>`;
        linha += `<td>${inputDDD}</td>`;
        linha += `<td>${inputTelefone}</td>`;
        linha += '<tr>';

        linha += linha;

    }

    inputNomeContato.value = '';
    inputDDD.value = '';
    inputTelefone.value = '';
}

function atualizaTabelas () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;
}
