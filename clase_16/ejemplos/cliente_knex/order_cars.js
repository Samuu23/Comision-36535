const { options } = require('./options/mysql')
const knex = require('knex')(options)

// Ordenar autos por precio descendiente
knex.from('cars').select('name', 'price').orderBy('price', 'desc')
	.then((rows) => {
		for(row of rows){
			console.log(`${row['name']} - ${row['price']}`)
		}
	})
	.catch(err => { console.log(err); throw err })
	.finally(() => { knex.destroy() })
