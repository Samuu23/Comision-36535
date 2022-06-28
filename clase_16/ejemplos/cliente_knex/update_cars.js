const { options } = require('./options/mysql')
const knex = require('knex')(options)

knex.from('cars').where('price', '9000').update({price: 9500})
	.then(() => console.log('Car Updated'))
	.catch((err) => { console.log(err); throw err })
	.finally(() => { knex.destroy() })
