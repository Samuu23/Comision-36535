const express = require('express')
const multer = require('multer')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // 'uploads' -> Carpeta donde se guardan los archivos
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

app.get('/', (req, res) => {
  res.sendFile('/index.html')
})

app.post('/subir', upload.single('myFile'), (req, res, next) => {
  const file = req.file
  if(!file){
    const error = new Error('Error uploading File')
    error.httpStatusCoder = 400
    return next(error)
  }

  res.send(`File: <b>${file.originalname}</b> successfully uploaded`)

})

// Listen
app.listen('3000', () => console.log(`Server on port ${3000}`))
