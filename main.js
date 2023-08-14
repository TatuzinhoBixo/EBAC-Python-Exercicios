const form = document.getElementById('form-dados');
const nome = [];
const ddd = [];
const telefone = [];

let linhas = '';

let formEvalido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener ('submit', function(e) {
    e.preventDefault();
    const inputNomeContato = document.getElementById('nomeContato');
    const mensagemSucesso = `Nome registrado`;
    const mensagemError = `O nome deverá ter sobrenome`;

    const inputTelefone = document.getElementById('numeroTelefone');

    if (telefone.includes(inputTelefone.value)) {
        alert (`O número já exite cambada`);
        return;
    }

    formEvalido = validaNome(inputNomeContato.value);
    if (formEvalido) {
        const containerMesagemSucesso = document.querySelector('.success-message');
        containerMesagemSucesso.innerHTML = mensagemSucesso;
        document.querySelector('.success-message').style.display = 'block';
         setTimeout(function() {
            document.querySelector('.success-message').style.display = 'none';}, 3000); 
        adicionaLinha();
        atualizaTabelas();
        
    }   else {
            const containerMesagemError = document.querySelector('.error-message');
            containerMesagemError.innerHTML = mensagemError;
            document.querySelector('.error-message').style.display = 'block';
         setTimeout(function() {
            document.querySelector('.error-message').style.display = 'none'}, 3000);
        }
    
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputDDD = document.getElementById('codigoCidade');
    inputDDD.addEventListener('input', function() {
        if (this.value.length > 2) {
            this.value = this.value.slice(0, 1);
        }
    });
    const inputTelefone = document.getElementById('numeroTelefone');

    if (telefone.includes(inputTelefone.value)) {
        alert(`O número de telefone; ${inputTelefone.value} já foi salvo`);
    } else {

        nome.push(inputNomeContato.value);
        ddd.push(inputDDD.value);
        telefone.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputDDD.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '<tr>';

        linhas += linha;

    }

    inputNomeContato.value = '';
    inputDDD.value = '';
    inputTelefone.value = '';
}

function atualizaTabelas () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


//incluir as premissias de somente aceitar o nome completo e o DDD com correção