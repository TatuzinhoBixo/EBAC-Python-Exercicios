const form = document.getElementById('form-atividade'); //criar variável
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = []; //Arrays que recebe as atividades
const notas = []; //Arrays que recebe as notas
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'; //pegou o css para mudar de cor, css variavel
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'; //pegou o css para mudar de cor, css variavel
const notaMinima = parseFloat(prompt("Digite a nota mínima:6"));

let linhas = ''; //variavel global que faz que adicione uma nova linha a cada inserção

form.addEventListener ('submit', function(e) { //função do botão submit
    e.preventDefault(); // para não dar um refresh na página

    adicionaLinha();
    atualizaTabelas();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('Nome-Atividade');  //Variavel da atividade recebida
    const inputNotaAtividade = document.getElementById('Nota-Atividade');  //Variavel da atividade recebida

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade; ${inputNomeAtividade.value} já foi inserida`);
    } else {


    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';                                 //Se cria uma linha informando a matéria e nota e ta reprovado ou não 
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;        //variavel recebe as linhas digitadas com o histórico de matérias anteriores

    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
};

function atualizaTabelas () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;     //bixo que faz ser acrescentado conteúdo html na página via js
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i ++) {
        somaDasNotas += notas [i];
    }

    return somaDasNotas / notas.length;
}
    
