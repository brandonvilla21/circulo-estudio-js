export function getNotes() {
  const notes = localStorage.getItem('notes')
  if (notes) {
    return JSON.parse(notes)
  }
  return []
}

export function saveNote(title, description) {
  const localNotes = localStorage.getItem('notes')
  const notes = localNotes ? JSON.parse(localNotes) : []

  const newNote = {
    id: notes.length,
    title,
    description,
    creationDate: new Date()
  }
  
  notes.push(newNote)
  localStorage.setItem('notes', JSON.stringify(notes))
}

export function deleteAll() {
  localStorage.clear()
}