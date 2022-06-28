const ClientSQL = require('./sql_client')
const { options } = require('./options')

// Utilizando MySQL Workbench/MySQL CLI crear base de datos 'ecommerce' en MariaDB
// Comando SQL -> create database ecommerce;

const sql = new ClientSQL(options)

// Punto 1
sql.createTable()
	.then(() => {
		console.log('1. Table created')

		// Punto 2
		const articles = [
      { name: 'Leche', code: 'AB-12', price: 23.60, stock: 24 },
      { name: 'Harina', code: 'CD-34', price: 12.80, stock: 45 },
      { name: 'DDL', code: 'EF-56', price: 32.30, stock: 16 },
      { name: 'Fideos', code: 'FG-44', price: 42.70, stock: 34 },
      { name: 'Crema', code: 'CR-77', price: 67.90, stock: 24 }
    ]

		return sql.insertArticles(articles)
	})
	.then(() => {
		console.log('2) Data inserted')

		// Punto 3
		return sql.listArticles()
	})
	.then(() => {
		console.log('3) Articles listed')

		// Punto 4
		return sql.deleteArticleById(3)
	})
	.then(() => {
		console.log('4) Article deleted')
		
		// Punto 5
		return sql.updateStockById(0, 2)
	})
	.then(() => {
		console.log('5) Stock updated')

		// Resultado final
		return sql.listArticles()
	})
	.then(articles => {
		console.log('Final Results')
		console.table(articles)
	})
	.catch((err) => { console.log(err); throw err })
	.finally(() => { sql.close() })
