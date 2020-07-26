function addNote(text, container, index) {
    const note = document.createElement('div');
    note.id = `note-${index}`
    note.innerHTML = `<p>${text}</p> <button name="${index}" id="delete-note-${index}" type="button">Delete</button>`;
    container.appendChild(note);
}

function clearInput(input) {
    input.value = '';
}

function clearNotes(container) {
    container.innerHTML = '';
}

function deleteNote(noteId) {
    const noteToDelete = document.getElementById(`note-${noteId}`);
    noteToDelete.remove();
}

window.addEventListener('load', () => {
    const addNoteButton = document.getElementById('add-note');
    const clearNotesButton = document.getElementById('clear-notes');
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');
    let index = 0;

    addNoteButton.addEventListener('click', () => {
        const text = noteInput.value;

        if (text) {
            addNote(text, notesContainer, index);
            clearInput(noteInput);
            const deleteNoteButton = document.getElementById(`delete-note-${index}`)
            deleteNoteButton.addEventListener('click', () => {
                deleteNote(deleteNoteButton.name);
            })
            index++;
        }
    });

    clearNotesButton.addEventListener('click', () => {
        clearNotes(notesContainer);
    })
});