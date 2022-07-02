import mongoose from 'mongoose'

// ------------------
const estudianteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  dni: { type: String, required: true, unique: true },
  curso: { type: String, required: true },
  nota: { type: Number, required: true },
  ingreso: { type: Boolean, default: false } // agregado al Schema
})

const estudiantesDAO = mongoose.model('estudiantes', estudianteSchema)

// -------------------

await mongoose.connect('mongodb://localhost/colegio', { serverSelectionTimeoutMS: 50000 })
console.log('Base de datos conectada')

try {
	// 1)
  console.log('1) Actualizar el dni del estudiante Lucas Blanco a 20355875')
	let rta = await estudiantesDAO.updateOne({ nombre: 'Lucas', apellido: 'Blanco' }, { $set: { dni: 20355785 } }) 
	console.log(rta)

	// 2)
	console.log(`2) Agregar un campo 'ingreso' a todos los documentos con el valor false`)
	rta = await estudiantesDAO.updateMany({}, { $set: { ingreso: false } })
	console.log(rta)

	// 3) 
	console.log(`3) Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A`)
  rta = await estudiantesDAO.updateMany({ curso: '1A' }, { $set: { ingreso: true } })
  console.log(rta)

	// 4)
  console.log(`4) Listar los estudiantes que aprobaron (hayan sacado de 4 en adelante) sin los campos de _id y __v`)
  const estudiantesAprobados = await estudiantesDAO.find({ nota: { $gte: 4 } }, { _id: 0, __v: 0 })
  estudiantesAprobados.forEach(estAprob => { console.log(JSON.stringify(estAprob)) })

	// 5)	
  console.log(`5) Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v`)
  const estudiantesIngresantes = await estudiantesDAO.find({ ingreso: true }, { _id: 0, __v: 0 })
  estudiantesIngresantes.forEach(estIngres => { console.log(JSON.stringify(estIngres)) })

	// 6)	
  console.log(`6) Borrar de la colección de estudiantes, los documentos cuyo campo 'ingreso' esté en true`)
  rta = await estudiantesDAO.deleteMany({ ingreso: true })
  console.log(rta)

	// 7)
	console.log(`7) Listar el contenido de la colección estudiantes utilizando la consola, imprimiendo en cada caso los datos almacenados (sin el campo __v) y su fecha de creación obtenida del ObjectID en formato YYYY/MM/DD HH:mm:SS`)
  let estudiantes = await estudiantesDAO.find({}, { __v: 0 })
  estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante), '-> Fecha creación: ', new Date(estudiante._id.getTimestamp()).toLocaleString() ) })
}
catch(err){
	console.log(`Error en proceso de Base de Datos ${err}`)
}
finally { await mongoose.disconnect() }
