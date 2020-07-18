import { notes } from '../data'

export function getNotes() {
  const notes = localStorage.getItem('notes')
  return JSON.parse(notes)
}

export function saveNote(title, description) {
  const notes = localStorage.getItem('notes')
  const newNote = {
    id: notes.length,
    title,
    description,
    creationDate: new Date()
  }
  
  notes.push(newNote)
  localStorage.setItem('notes', JSON.stringify(notes))
}