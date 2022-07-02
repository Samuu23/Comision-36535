import mongoose from 'mongoose'
import { Estudiante } from './models/estudiantes.js'

const URL = 'mongodb://localhost/colegio'

mongoose.connect(URL, {
	serverSelectionTimeoutMS: 5000,
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => {
		console.log('Base de datos conectada')

		// 1) Estudiantes ordenados
		console.log('1) Estudiantes ordenados por orden alfabetico segun sus nombres')

		Estudiante.find({}).sort({ nombre: 1 })
			.then(estudiantes => {
				estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante)) })
				
				// 2) Estudiante mas joven
				console.log('2) El estudiante mas joven')
				return Estudiante.find({}).sort({ edad: 1 }).limit(1)
			})
			.then((estudiantes) => { 
				estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante)) })

				// 3) Curso 2A
				console.log('3) Estudiantes que pertenecen al curso 2A')

				return Estudiante.find({ curso: '2A' })
			})
			.then((estudiantes) => {
				estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante)) })

				// 4) Segundo estudiante mas joven
				console.log('4) Segundo estudiante mas joven')
				return Estudiante.find({}).sort({ edad: 1 }).skip(1).limit(1)
			})
			.then(estudiantes => {
				estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante)) })

				// 5) Solo los nombres y los apellidos
				console.log('5) Solo los nombres y los apellidos')
				return Estudiante.find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0 }).sort({ apellido: -1 })
			})
			.then(estudiantes => {
				estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante)) })

				// 6) El estudiante que saco mejor nota
				console.log('6) El estudiante que saco mejor nota')
				return Estudiante.find({ nota: 10})
			})
			.then(estudiantes => {
				estudiantes.forEach(estudiante => { console.log(JSON.stringify(estudiante)) })

				// 7) El promedio de notas del total de alumnos
				console.log('7) El promedio de notas del total de alumnos')
				return Estudiante.find({})
			})
			.then(estudiantes => {
				let sumNotas = 0
				estudiantes.forEach(estudiante => { sumNotas += estudiante.nota })
				console.log(`Promedio: ${(sumNotas / estudiantes.length).toFixed(2)}`)

				// 8) El promedio de notas del curso 1A
				console.log('8) El promedio de notas del curso 1A')
				return Estudiante.find({ curso: '1A' })
			})
			.then(estudiantes => {
				let sumNotas = 0
				estudiantes.forEach(estudiante => { sumNotas += estudiante.nota })

				console.log(`Promedio: ${(sumNotas / estudiantes.length).toFixed(2)}`)
			})
			.catch(err => { throw new Error(`Error en lectura $(err)`) })
			.finally(() => { mongoose.disconnect().catch(err => { throw new Error('Error al desconectar la base de datos') }) })
	})
	.catch(err => { throw new Error(`Error de conexion a la base de datos ${err}`) })


