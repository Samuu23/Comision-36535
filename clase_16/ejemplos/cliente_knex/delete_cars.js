const { options } = require('./options/mysql')
const knex = require('knex')(options)

// Elimina todos los coches
knex.from('cars').del()
	.then(() => console.log('Cars deleted'))
	.catch((err) => { console.log(err); throw err })
	.finally(() => { knex.destroy() })


