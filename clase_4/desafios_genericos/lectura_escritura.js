const fs = require('fs')

let data = JSON.parse(fs.readFileSync('./package.json'))
// console.log(data)
const info = {
    contenidoStr: JSON.stringify(data),
    contenidoObj: data,
    size: JSON.stringify(data).length
}
console.log(info)

try {
    fs.writeFileSync('./info.txt', JSON.stringify(data, null, '\t'))
} catch (e) {
    throw new e
}
