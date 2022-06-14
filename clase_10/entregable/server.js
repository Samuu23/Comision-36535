const express = require('express')
const app = express()
const router = require('./routes/routes')
const { engine } = require('express-handlebars')

const products = []

// Settings
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'index.hbs',
  layoutsDir: `${__dirname}/views/layouts`,
  partialsDir: `${__dirname}/views/partials`
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', './views')

// Routes
app.use('/api/products', router)

app.get('/', (req, res) => {
  res.render('main.hbs', {
    products
  })
})

app.post('/products', (req, res) => {
  console.log(req.body)
  products.push(req.body)
  res.redirect('/')
})

app.listen(3000, () => console.log(`Server on port ${3000}`))
