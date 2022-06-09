const fs = require('fs')

class Book {
  constructor(title, author){
    this.title = title
    this.author = author
  }
}

class Library {
  constructor(fileName){
    this.name = fileName
    try {
      this.books = fs.readFileSync(this.name, 'utf-8')
      this.books = JSON.parse(this.books)
    } catch(error) {
      this.books = []
    }
  }

  getAll(){
    return this.books
  }

  save(title, author){
    try {
      let newBook = new Book(title, author)
      if (this.books.length == 0){
	newBook.id = 1
      } else {
	newBook.id = this.books[this.books.length - 1].id + 1
      }
      this.books.push(newBook)
      fs.promises.writeFile(this.name, JSON.stringify(this.books, null, '\t'))
      .then(() => console.log('Book saved!'))
      .catch(e => console.log(e))
    } catch(e) {
      console.log(e)
    }
    
  }
}

module.exports = Library
