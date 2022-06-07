function dividir(dividendo, divisor){
  return new Promise((res, rej) => {
    if(divisor == 0) {
      rej('No se puede dividir por cero')
    } else {
      res(dividendo / divisor)
    }

  })
}

dividir(5,0)
  .then(res => console.log(res))
  .catch(err => console.log(err))
