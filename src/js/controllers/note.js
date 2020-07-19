import { getNotes, saveNote, deleteAll } from '../models/note';
import { generateNoteTemplate } from '../views/note';

const notesContainerElement = document.getElementById('notes-container');

export function fillNotes() {
  const notes = getNotes();

  const noteElements = notes.map((note) => {
    return generateNoteTemplate(
      note.id,
      note.title,
      note.description,
      note.creationDate
    );
  });

  notesContainerElement.innerHTML = noteElements.join('\n');
}

export function submitNote() {
  const formNoteElement = document.getElementById('form-note');
  formNoteElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleElement = document.getElementById('note-title');
    const descriptionElement = document.getElementById('note-descrtipion');

    saveNote(titleElement.value, descriptionElement.value)
    fillNotes()
   
    titleElement.value = ''
    descriptionElement.value = ''
  });
}

export function removeNotes() {
  const removeButtonElement = document.getElementById('remove-button');
  removeButtonElement.addEventListener('click', () => {
    deleteAll()
    fillNotes()
  })
}