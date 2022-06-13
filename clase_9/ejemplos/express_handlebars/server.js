const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const PORT = 3000

// Datos
fakeApi = () => [
 { name: 'Katarina', lane: 'midlaner'},
 { name: 'Jayce', lane: 'toplaner'},
 { name: 'Heimerdinger', lane: 'toplaner'},
 { name: 'Jayce', lane: 'midlaner'},
 { name: 'Azir', lane: 'midlaner'}
];


// Configuracion Handlebars
app.engine('hbs', engine({
  extname: 'hbs', // Extension
  defaultLayout: 'index.hbs', // Plantilla principal
  layoutsDir: `${__dirname}/views/layouts`, // Ruta de Plantilla Principal
  partialsDir: `${__dirname}/views/partials` // Ruta a las plantillas parciales
}))


// Configramos el motor en express
app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static('public'))


// Routas
app.get('/', (req, res) => {
  res.render('main', { suggestedChamps: fakeApi(), listExists: true })
})

// Listen
app.listen(PORT, () => console.log(`Server on Port ${PORT}`))
