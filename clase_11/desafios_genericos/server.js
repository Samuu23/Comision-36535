const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

httpServer.listen(3000, () => console.log('Server on port', 3000))

// Mensajes almacenados
let messages = []

io.on('connection', (socket) => {
  console.log('New client connected!')
  socket.emit('messages', messages)
  
	// Consigna 2
  // socket.on('message', (data) => {
	// 	console.log(data)
  //  io.sockets.emit('message', data)
  // })

	// COnsigna 3
	socket.on('new-message', (data) => {
		// console.log(data, socket.id)
		// console.log(data)
		let message = {
			socketId: socket.id,
			message: data
		}
		messages.push(message)
		io.sockets.emit('messages', messages)	
	})

})
