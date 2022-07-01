import mongoose from 'mongoose'
import * as model from './models/usuario.js' 

CRUD()

async function CRUD() {
	try{
		// Conexion
		const URL = 'mongodb://localhost:27017/mongoose_db'
		let res = await mongoose.connect(URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		console.log('Database Connected')

		// CREATE
		console.log('CREATE')
		const usuarioSaveModel = new model.usuarios({ nombre: 'Yessi', apellido: 'Cantero', email: 'yp@gmail.com', usuario: 'yp12' ,password: 1234 })
		let usuarioSave = await usuarioSaveModel.save()
		console.log(usuarioSave)

		// READ
		console.log('READ ALL')
		let usuarios = await model.usuarios.find({})
		console.log(usuarios)
		
	} catch(e) {
		console.log(e)
	}
}
