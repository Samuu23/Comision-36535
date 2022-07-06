import express from 'express'

const app = express()

const PORT = parseInt(process.argv[2]) || 8080

app.get('/', (req, res) => {
    res.send(`Servidor express en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
})

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en el puerto ${PORT} - PID WORKER ${process.pid}!!!!`)
})

// Comprobar el proceso de node y su pid
// $ fuser <port>/tcp 
// $ fuser <port>/tcp [-k] -> Kill 
