const { options } = require('./options/mysql')
const knex = require('knex')(options)

// Elimina un coche en especifico 
knex.from('cars').where('price', '>', '50000').del()
	.then(() => console.log('Cars deleted'))
	.catch((err) => { console.log(err); throw err })
	.finally(() => { knex.destroy() })


