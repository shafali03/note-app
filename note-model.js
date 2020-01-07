
// (function(exports) {
//   function Note() {
//     this.text = 'hi'
//   };
  
//   exports.Note = Note
// })(this)

 class Note {
   constructor(text = null) {
    this.text = text
   }
   write(text) {
    this.text = text
   }
   read() {
     return this.text
   }
 }