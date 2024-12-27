$(document).ready(function () {
    const $draggables = $('.draggable');
    const $cells = $('td');
    const $editToggle = $('#edit-toggle');
    const $courseContainer = $('#course-container');
    const $toggleCourses = $('#toggle-courses');

    let editingEnabled = false;

    $editToggle.on('click', function () {
        editingEnabled = !editingEnabled;
        $editToggle.text(editingEnabled ? 'Disable Editing' : 'Enable Editing');

        $draggables.toggleClass('enabled', editingEnabled);
    });

    $toggleCourses.on('click', function () {
        $courseContainer.toggleClass('collapsed');
    });

    $draggables.on('dragstart', function (e) {
        if (!$(this).hasClass('enabled')) {
            e.preventDefault();
        } else {
            $(this).addClass('dragging');
        }
    });

    $draggables.on('dragend', function () {
        $(this).removeClass('dragging');
    });

    $cells.on('dragover', function (e) {
        e.preventDefault();
    });

    $cells.on('drop', function () {
        const $dragging = $('.dragging');
        if ($dragging.length && $dragging.parent()[0] !== this) {
            $(this).append($dragging);
        }
    });
});