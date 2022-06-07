function mostrarLetras(palabra, termine){
  let i = 0
  const timer = setInterval(() => {
    // Si i es menor que la palabra
    if (i < palabra.length){
      // Se muestra la letra en cuestion
      console.log(palabra[i])
      i++
    }else {
      // Sino, se cierra el interval
      clearInterval(timer)
      termine()
    }
  }, 1000)
}

const fin = () => console.log('Termine')

// Prueba de la funcion
setTimeout(() => { mostrarLetras('hola', fin); }, 0)
setTimeout(() => { mostrarLetras('hola', fin); }, 250)
setTimeout(() => { mostrarLetras('hola', fin); }, 500)
