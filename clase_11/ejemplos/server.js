const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

// Settings
app.use(express.static('./public'))

// Routes
app.get('/', (req, res) => {
	res.sendFile('index.html', { root: __dirname })
})

// Server
httpServer.listen(3000, () => console.log(`Server on Port ${3000}`))

// Socket
io.on('connection', (socket) => {
	console.log('User connected')

	socket.emit('My message', 'This is a message from the server')

	socket.on('Notification', (data) => {
		console.log(data)
	})
})
