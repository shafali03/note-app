// (function(exports) {
//   function testAddItem() {

//     var note = new NoteList()
//     note.addItem('coke')
//     note.addItem('crisp')
    
    
//   }
// })

var noteList = new NoteList()

noteList.add("coke", "milk")
assert.isTrue(noteList.show()[0], "coke")



