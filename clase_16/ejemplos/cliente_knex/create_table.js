const { options } = require('./options/mysql')
const knex = require('knex')(options)

// Se crea una tabla con la funcion createTable()
// Definimos un esquema que tenga 3 columnas: id, nombre, precio
knex.schema.createTable('cars', table => {
	table.increments('id')
	table.string('name')
	table.integer('price')
})
	.then(() => console.log('Table created'))
	.catch((err) => { console.log(err); throw err })
	.finally(() => { knex.destroy() })


