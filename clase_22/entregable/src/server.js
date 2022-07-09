const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const container = require('./Container/ClientSQL')
const { mysql, sqlite } = require('./Container/options')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// Settings server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))

// Get
// app.get('/', (req, res) => {
// 	res.sendFile(`${__dirname}/public/index.html`)
// })

// Knex 
const mysqlKnex = new container(mysql, 'products')
const sqliteKnex = new container(sqlite, 'messages')


// Webscokets
io.on('connection', async (socket) => {
	console.log('Client Connected')
	socket.emit('products', await mysqlKnex.list())
	socket.emit('messages', await sqliteKnex.list())

	socket.on('update', async	(data) => {
		await mysqlKnex.insert(data)
		let products = await mysqlKnex.list()
		io.sockets.emit('products', products)
	})

	socket.on('new-message', async (data) => {
		await sqliteKnex.insert(data)
		let messages = await sqliteKnex.list()
		io.sockets.emit('messages', messages)
	})

})

httpServer.listen(3000, () => console.log(`Server on port ${3000}`))

