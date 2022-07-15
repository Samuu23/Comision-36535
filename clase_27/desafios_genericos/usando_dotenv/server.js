require('dotenv').config()

const modo = process.env.MODO || 'prod'
const puerto = Number(process.env.PUERTO) || 8080
const debug = process.env.DEBUG || false

console.log({ modo, puerto, debug })
