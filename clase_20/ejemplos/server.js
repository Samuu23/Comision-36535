const { initializeApp } = require('firebase/app')
const config = require('./configuracion.json')

// Firebase configuracion
const firebaseConfig = config;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)
