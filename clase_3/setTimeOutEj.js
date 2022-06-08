let tiempoEspera;

function temporizador(){
  tiempoEspera = setTimeout(funcionRetraso, 3000)
}

function funcionRetraso(){
  console.log('Han pasado 3 segundos')
}

temporizador()
