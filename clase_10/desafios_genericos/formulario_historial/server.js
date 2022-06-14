const express = require('express')

const peoples = []

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { peoples });
});

app.post('/people', (req, res) => {
    peoples.push(req.body)
    console.log(peoples)
    res.redirect('/')
});

const PORT = 3000
const server = app.listen(PORT, () => {
    console.log(`Server on Port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
