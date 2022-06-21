const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// Mock Messages
const messages = [
	{ author: 'John', text: 'Hi! How are you doing?' },
	{ author: 'Peter', text: 'Great! And you?' },
	{ author: 'Ann', text: 'Great!' }
]

// Settings
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

httpServer.listen(3000, () => console.log(`Server on Port ${3000}`))

io.on('connection', (socket) => {
	console.log('A client has connected')
	socket.emit('messages', messages)

	socket.on('new-message', data => {
		messages.push(data)
		io.sockets.emit('messages', messages)
	})
})
