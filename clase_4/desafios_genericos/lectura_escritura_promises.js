const fs = require('fs')
let data = []
fs.promises.readFile('./package.json')
  .then((file) => {
    console.log(JSON.parse(file))
    data = JSON.parse(file)
    data.author = "Coderhouse"
    fs.promises.writeFile('./package.json.coder', JSON.stringify(data, null, '\t'))
      .then(() => console.log('Archivo package.json.coder creado'))
      .catch(e => console.log(e))
  })
  .catch(e => console.log(e))
