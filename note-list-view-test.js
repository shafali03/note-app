
var viewNote = new ViewNote()
var noteList = new NoteList()
noteList.add('coke', 'milk')
assert.isTrue(viewNote.render(), `<ul><li><div>${noteList}</div></li><li><div>${noteList}</div></li></ul>`)


// console.log(noteList)
