const moment = require("moment");
const fs = require('fs')
const fechaNac = moment("1997-01-19");
const diaDeHoy = moment();
const diffyears = diaDeHoy.diff(fechaNac, "years");
const diffdays = diaDeHoy.diff(fechaNac, "days")

console.log(`Estamos en la fecha ${diaDeHoy.format('DD/MM/YYYY')}`)
console.log(`Naci en la fecha ${fechaNac.format('DD/MM/YYYY')}`)
console.log(`Han pasado ${diffyears} años desde mi nacimiento`); 
console.log(`Han pasado ${diffdays} dias desde mi nacimiento`)

