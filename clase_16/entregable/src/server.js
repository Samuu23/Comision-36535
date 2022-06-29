const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')
const router = require('./routes/routes')
const { engine } = require('express-handlebars') 

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// Settings server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Webscokets
io.on('connection', (socket) => {
	console.log('Client Connected')
	socket.emit('products', products)
	socket.emit('messages', messages)

	socket.on('update', (data) => {
		products.push(data)
		io.sockets.emit('products', products)
	})

	socket.on('new-message', (data) => {
		messages.push(data)
		io.sockets.emit('messages', messages)
	})

})

httpServer.listen(3000, () => console.log(`Server on port ${3000}`))

