let tiempoEspera;

function temporizador(){
  tiempoEspera = setInterval(funcionRetraso, 1000)
}

function funcionRetraso(){
  console.log('Han pasado 1 segundos')
}

temporizador()


