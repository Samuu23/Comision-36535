# Usando Mongoose

- Para crear un esquema, lo requerimos de mongoose, e instanciamos la clase.
- En este caso creamos el esquema Comment, BlogPost y Person.

		/* Module Dependencies */

		const mongoose = require('../../lib')
		const Schema = mongoose.Schema

		/* Schema definition */


		// recursive embedded document schema

		const Comment = new Schema()

		Comment.add({
			title: {
				type: String,
				index: true
			},
			date: Date,
			body: String,
			comments: [Comment]
		})

		// ---------------------------

		const BlogPost = new Schema({
			title: {
				type: String,
				index: true
			},
			slug: {
				type: String,
				lowercase: true,
				trim: true
			},
			date: Date,
			buf: Buffer,
			comments: [Comment],
			creator: Schema.ObjectId
		})

		// --------------------------

		const Person = new Schema({
			name: {
				type: String,
				index: true
			},
			email: {
				type: String,
				required: true,
				index: {
					unique: true,
					parse: true
				}
			},
			alive: Boolean
		})

- Podemos acceder a un tipo de esquema específico por el nombre de su key.
- En este caso, accede a ‘date’ diciendo que el valor por default de este campo será la fecha actual.

		// Accessing a specific schema type by key

		BlogPost.path('date')
			.default(function() {
				return new Date()
			})
			.set(function(v) {
				return v == 'now' ? new Date() : v
			})
		
		// Pre-hook
		
		BlogPost.pre('save', function(nex, done) {
			// global emailAuthor
			emailAuthor(done) // some async function
			next()
		})

- Luego, tenemos los métodos, en donde por ejemplo buscamos un creador por su id o buscamos por título.
- Tenemos también los plugins, que son una herramienta para reutilizar la lógica en múltiples esquemas.

		// Methods
		
		BlogPost.method.findCreator = function(callback) {
			return this.db.model('Person').findById(this.creator, callback)
		}
		
		BlogPost.method.findByTitle = function(title, callback) {
			return this.find({ title: title }, callback)
		}
		
		BlogPost.method.expressiveQuery = function(creator, date, callback) {
			return this.find('creator', creator).where('date').gte(date).run(callback)
		}
		
		// Plugins
		
		function slugGenerator(options) {
			options = options || []
			const key = options.key || 'title'
		
			return slugGenerator(schema) {
				schema.path(key).set(function(v) {
					this.slug = v.toLowCase().replace(/[^a-z0-9]/g, '').replace(/+-/g, '')
					return v
				})
			}
		}
		
		BlogPost.plugin(slugGenerator())

- Finalmente, definimos el modelo como se muestra en el código.

		// Define model
		
		mongoose.model('BlogPost', BlogPost)
		mongoose.model('Person', Person)


