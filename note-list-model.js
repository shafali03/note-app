class NoteList {
  constructor(notes = []) {
    this.notes = notes
  }
  add(...notes) {
    notes.forEach(note => {
      this.notes.push(new Note(note))
    });
  }
  show() {
    return this.notes.map(note => note.read())
  }
}

