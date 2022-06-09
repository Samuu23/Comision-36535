const http = require('http')

const server = http.createServer((peticion, respuesta) => {
  let date = new Date()
  let hours = date.getHours()

  if(hours > 5 && hours < 13){
    respuesta.end('Buenos dias!')
  } else if(hours > 12 && hours < 20){
    respuesta.end('Buenas tardes!')
  } else {
    respuesta.end("Buenas noches")
  }

})

const connectedServer = server.listen(8080, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
