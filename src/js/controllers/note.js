import { getNotes } from '../models/note'
import { generateNoteTemplate } from '../views/note'

const notesContainerElement = document.getElementById('notes-container')

export function fillNotes() {
  const notes = getNotes()

  const noteElements = notes.map(note => {
    return generateNoteTemplate(note.id, note.title, note.description, note.creationDate)
  })

  notesContainerElement.innerHTML = noteElements.join('\n')
}
