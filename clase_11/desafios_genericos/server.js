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

let messages = []

io.on('connection', (socket) => {
  console.log('¡New client connected!')
  socket.emit('messages', messages)
  
  socket.on('new-message', (data) => {
    messages.push(data)
    io.sockets.emit('messages', messages)
  })
})
