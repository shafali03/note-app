
// function noteTest() {
//   var note = new Note();
//   assert.isTrue(note.text === 'hi')
// }

// noteTest()


var note = new Note();
note.write('hi') 
assert.isTrue(note.read(), 'hi')