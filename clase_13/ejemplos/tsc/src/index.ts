import * as operaciones from './lib/operaciones'

const mensaje:string='Hola typescript'
console.log(mensaje)

let num1:number = 10, num2:number = 4
console.log(`La suma de ${num1} más ${num2} es ${operaciones.sumar(num1,num2)}`)
console.log(`La resta de ${num1} menos ${num2} es ${operaciones.restar(num1,num2)}`)
console.log(`La multiplicacion de ${num1} por ${num2} es ${operaciones.mult(num1,num2)}`)
console.log(`La división de ${num1} dividido ${num2} es ${operaciones.div(num1,num2)}`)
