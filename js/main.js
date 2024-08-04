$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault();
        var taskText = $('#task-input').val();
        if (taskText !== '') {
            var taskItem = $('<li></li>').text(taskText);
            var checkbox = $('<input type="checkbox">');
            taskItem.prepend(checkbox);
            $('#task-list').append(taskItem);
            $('#task-input').val('');
        }
    });

    $(document).on('change', '#task-list input[type="checkbox"]', function() {
        $(this).parent().toggleClass('completed');
    });

    $('#clear-tasks').click(function() {
        $('#task-list').empty();
    });
});
