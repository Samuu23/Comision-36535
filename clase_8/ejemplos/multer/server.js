// Required Packages
const express = require('express')
const multer = require('multer')

app.use(express.urlencoded({ extended: true }))

// Create express App
const app = express()

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome' })
})

// Subir un solo archivo
app.post('/uploadfile',upload.single('myFile'),(req,res,next)=>{
    const file=req.file
    if(!file){
      const error=new Error('Please uploadafile')
      error.httpStatusCode=400
      return next(error)
    }
    res.send(file)
})

// Subir multiples archivos
app.post('/uploadmultiple',upload.array('myFiles',12),(req,res,next)=>{
    const files=req.files
    if(!files){
      const error=new Error('Please choose files')
      error.httpStatusCode=400
      return next(error)
   }
    res.send(files)
})


let storage=multer.diskStorage({
  destination:function(req, file, cb){
    cb(null,'uploads')
  },
  filename:function(req, file, cb){
    cb(null,`${Date.now()}-${file.originalname}`)
  }
})
let upload=multer({storage:storage})

// Listen
app.listen(3000, () => console.log(`Server on port ${ 3000 }`))
