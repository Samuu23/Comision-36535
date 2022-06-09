// Deprecado
// const moment = require('moment')
// 
// let fechaActual = moment()
// let fechaNacimiento = moment('19/01/1997', 'D/M/Y').format('D/M/Y')
// let añosNacimiento = fechaActual.diff(fechaNacimiento)
// let diasNacimiento = moment('19/01/1997', 'D/M/Y').startOf('day').fromNow()
// console.log(`Hoy es ${fechaActual}`)
// console.log(`Naci en ${fechaNacimiento}`)
// console.log(`Desde mi nacimiento pasaron ${añosNacimiento} años`)
// console.log(`Desde mi nacimiento pasaron ${diasNacimiento} dias`)

const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const dateFormat = dd + '/' + mm + '/' + yyyy;
console.log(dateFormat)
