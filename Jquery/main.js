document.addEventListener('DOMContentLoaded', function() {
    const inputTarefa = document.querySelector('#input-tarefa');
    const botaoCadastrar = document.querySelector('#botao-cadastrar');
    const listaTarefas = document.querySelector('#lista-tarefas');

    botaoCadastrar.addEventListener('click', function() {
        const tarefa = inputTarefa.value;

        if (tarefa.trim() !== '') {
            const novoItem = document.createElement('dl');
            novoItem.textContent = tarefa;

            novoItem.addEventListener('click', function() {
                novoItem.classList.toggle('concluido');
            });

            $(novoItem).hide().appendTo(listaTarefas).fadeIn(1000);

            inputTarefa.value = '';
        }
    });
});