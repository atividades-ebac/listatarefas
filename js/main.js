// Aguarda o carregamento completo do documento HTML antes de executar as funções JavaScript.
$(document).ready(function() {
    // Captura o evento de envio do formulário com id 'task-form'.
    $('#task-form').submit(function(event) {
        // Impede que o formulário seja enviado e a página recarregada.
        event.preventDefault();
        // Obtém o valor do campo de entrada de texto com id 'task-input'.
        var taskText = $('#task-input').val();
        // Verifica se o texto não está vazio.
        if (taskText !== '') {
            // Cria um novo elemento <li> e atribui o texto da tarefa a ele.
            var taskItem = $('<li></li>').text(taskText);
            // Cria um novo input do tipo checkbox.
            var checkbox = $('<input type="checkbox">');
            // Adiciona o checkbox como o primeiro filho do elemento <li>.
            taskItem.prepend(checkbox);
            // Adiciona o elemento <li> à lista de tarefas com id 'task-list'.
            $('#task-list').append(taskItem);
            // Limpa o campo de entrada de texto.
            $('#task-input').val('');
        }
    });

    // Captura o evento de mudança em qualquer checkbox dentro do elemento com id 'task-list'.
    $(document).on('change', '#task-list input[type="checkbox"]', function() {
        // Alterna a classe 'completed' no elemento pai (<li>) do checkbox.
        $(this).parent().toggleClass('completed');
    });

    // Captura o evento de clique no botão com id 'clear-tasks'.
    $('#clear-tasks').click(function() {
        // Remove todos os elementos dentro do elemento com id 'task-list', limpando a lista.
        $('#task-list').empty();
    });
});
