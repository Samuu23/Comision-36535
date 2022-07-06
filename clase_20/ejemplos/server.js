const admin = require('firebase-admin')
const serviceAccount = require('./coderhouse-7ea5a-firebase-adminsdk-r5fkc-a4ee29cc48.json')

// Initialize Firebase
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://coderhouse-7ea5a-default-rtdb.firebaseio.com/'
});

console.log('Firebase connected')

CRUD()

async function CRUD(){
	const db = admin.firestore()
	const query = db.collection('usuarios')

	// Create
	try {
		// const doc = query.doc() -> para generacion autmatica de id
		let id = 1
		let doc = query.doc(`${id}`)
		await doc.create({ nombre: 'José', dni: 11223344 })

		id++
		doc = query.doc(`${id}`)
		await doc.create({ nombre: 'Ana', dni: 22334455 })

		id++
		doc = query.doc(`${id}`)
		await doc.create({ nombre: 'Diego', dni: 33445566 })

		console.log('Data inserted')
	}
	catch(error) { console.log(error) }

	// READ
	try{
		const querySnapshot = await query.get()
		const docs = querySnapshot.docs

		const response = docs.map((doc) => ({
			id: doc.id,
			nombre: doc.data().nombre,
			dni: doc.data().dni
		}))
		console.log(response)

	}
	catch(error) { console.log(error) }

	// Read ID
	try {
		let id = 2
		const doc = query.doc(`${id}`)
		const item = await doc.get()	
		const response = item.data()
		console.log(response)

	}
	catch(error) { console.log(error) }

	// UPDATE
	try {
		let id = 2
		const doc = query.doc(`${id}`)
		let item = await doc.update({ dni: 55443322 })
		console.log('The user was updated: ', item)

	}
	catch(error) { console.log(error) }

	// DELETE
	try {
		let id = 1
		const doc = query.doc(`${id}`)
		const item = await doc.delete()
		console.log('The user was deleted', item)

	}	
	catch(error) { console.log(error) }
}
