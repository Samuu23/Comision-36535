const ClienteSQL = require('./ClientSQL')
const { options } = require('./options')

// Utilizando MySQL Workbench/MySQL CLI crear base de datos 'ecommerce' en MariaDB
// Comando SQL -> create database ecommerce;

const sql = new ClienteSQL(options)
const connect = async () => {

	try {
	  // Punto 1
	  await sql.createTabla()
	  console.log("1) Table Created")
	
	  // Punto 2
	  const articulesToIns = [
	    { name: 'Leche', code: 'AB-12', price: 23.60, stock: 24 },
	    { name: 'Harina', code: 'CD-34', price: 12.80, stock: 45 },
	    { name: 'DDL', code: 'EF-56', price: 32.30, stock: 16 },
	    { name: 'Fideos', code: 'FG-44', price: 42.70, stock: 34 },
	    { name: 'Crema', code: 'CR-77', price: 67.90, stock: 24 }
	  ]
	  await sql.insertArticles(articulesToIns)
	  console.log("2) Articles inserted")
	
	  // Punto 3
	  const articlesListed = await sql.listArticles()
	  console.log("3) Articles Listed")
	  console.table(articlesListed)
	
	  // Punto 4
	  await sql.deleteArticleById(3)
	  console.log("4) Article Deleted")
	
	  // Punto 5
	  await sql.updateStockById(0, 2)
	  console.log("5) Stock Update")
	
	  // Resultado Final
	  const articlesFinal = await sql.listArticles()
	  console.log("Final Result")
	  console.table(articlesFinal)
	} catch (error) {
	  console.log(error)
	} finally {
	  sql.close()
	}
}

connect()
