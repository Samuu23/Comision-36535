const { options } = require('./options/mysql')
const knex = require('knex')(options)

// Devuelve autos con precio mayor a 50000
knex.from('cars').select('name', 'price').where('price', '>', '50000')
	.then((rows) => {
		for(row of rows){
			console.log(`${row['name']} - ${row['price']}`)
		}
	})
	.catch((err) => { console.log(err); throw err })
	.finally(() => { knex.destroy() })
