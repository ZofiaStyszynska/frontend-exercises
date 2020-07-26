function addNote(text, container) {
    const note = document.createElement('div');
    note.innerHTML = `<p>${text}</p> <button type="button">Delete</button>`;
    container.appendChild(note);
}

function clearInput(input) {
    input.value = '';
}

function clearNotes(container) {
    container.innerHTML = '';
}

window.addEventListener('load', () => {
    const addNoteButton = document.getElementById('add-note');
    const clearNotesButton = document.getElementById('clear-notes');
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    addNoteButton.addEventListener('click', () => {
        const text = noteInput.value;

        if (text) {
            addNote(text, notesContainer);
            clearInput(noteInput);
        }
    });

    clearNotesButton.addEventListener('click', () => {
        clearNotes(notesContainer);
    })
});