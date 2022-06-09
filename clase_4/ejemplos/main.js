const Library = require('./Library')

let fileLibrary = new Library('./books.txt')
// fileLibrary.save('IT', 'Stephen King')
// fileLibrary.save('Maze Runner', 'James Dashner')
// fileLibrary.save('Shadowhunters', 'Cassandra Clare')
// fileLibrary.save('Harry Potter', 'J. K. Rowling')

console.log(fileLibrary.getAll())
