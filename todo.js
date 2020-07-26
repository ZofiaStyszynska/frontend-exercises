function addNote(text) {

}

window.addEventListener('load', () => {
    const addNoteButton = document.getElementById('add-note');
    const clearNotesButton = document.getElementById('clear-notes');
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');

    addNoteButton.addEventListener('click', () => {
        const text = noteInput.value;

        if (text) {
            addNote(text);
        }
    })
});