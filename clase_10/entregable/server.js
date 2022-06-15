const express = require('express')
const app = express()
const router = require('./routes/routes')
const { engine } = require('express-handlebars')

const products = []

// Settings Handlebars
// app.engine('hbs', engine({
//   extname: 'hbs',
//   defaultLayout: 'index.hbs',
//   layoutsDir: `${__dirname}/views/handebars/layouts`,
//   partialsDir: `${__dirname}/views/handlebars/partials`
// }))
// 
// app.set('view engine', 'hbs')
// app.set('views', './views/handlebars')

// Settings Pug
// app.set('view engine', 'pug')
// app.set('views', './views/pug_js')

// Settings EJS
app.set('view engine', 'ejs')
app.set('views', './views/ejs_view')

// Settings server
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))


// Routes
app.use('/api/products', router)

// Route Handlebars
// app.get('/', (req, res) => {
//   res.render('main.hbs', {
//     products
//   })
// })

// Route Pug
app.get('/', (req, res) => {
  res.render('index', {
    products
  })
})

app.post('/products', (req, res) => {
  console.log(req.body)
  products.push(req.body)
  res.redirect('/')
})

app.listen(3000, () => console.log(`Server on port ${3000}`))
