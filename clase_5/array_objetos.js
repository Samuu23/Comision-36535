const productos = [
    { id:1, nombre:'Escuadra', precio:323.45 },
    { id:2, nombre:'Calculadora', precio:234.56 },
    { id:3, nombre:'Globo Terráqueo', precio:45.67 },
    { id:4, nombre:'Paleta Pintura', precio:456.78 },
    { id:5, nombre:'Reloj', precio:67.89 },
    { id:6, nombre:'Agenda', precio:78.90 }
]
console.log(productos)

let nombres = productos.map(({ nombre }) => nombre).join(',');
let precioTotal = 0;
let precioPromedio = 0;
let menorPrecio= productos[0].precio;
let mayorPrecio = productos[0].precio;

for(let i = 0; i < productos.length; i++){
  precioTotal += productos[i].precio
  precioPromedio += productos[i].precio

  if(menorPrecio > productos[i].precio){
    menorPrecio = productos[i].precio 
  }

  if(mayorPrecio < productos[i].precio){
    mayorPrecio = productos[i].precio
  }
}

precioPromedio = precioPromedio / productos.length

let resultado = {
  nombres,
  precioTotal: parseFloat(precioTotal.toFixed(2)),
  precioPromedio: parseFloat(precioPromedio.toFixed(2)),
  menorPrecio,
  mayorPrecio
}

console.log(resultado)
// console.log(nombres)
// console.log(precioTotal)
// console.log(precioPromedio / productos.length)
// console.log(menorPrecio)
// console.log(mayorPrecio)
