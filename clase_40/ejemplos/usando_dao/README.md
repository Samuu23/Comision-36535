# Usando DAO
 
- Para comenzar, creamos la clase ProductosDao, que va a ser la clase base.
- DAO es un objeto que tiene los métodos necesarios para acceder al sistema de persistencia.
- La clase de CustomError es simplemente:

		import CustomError from '../errors/CustomError.js'

		class ProductosDao {
			async getAll(){
				throw new CustomError(500, 'falta implementar getAll!')
			}

			async getById(id) {
				throw new CustomError(500, 'falta implementar getById!')
			}

			async add(prodNuevo) {
				throw new CustomError(500, 'falta implementar add!')
			}

			async deleteById(id) {
				throw new CustomError(500, 'falta implementar deleteById!')
			}

			async deleteAll() {
				throw new CustomError(500, 'falta implementar deteleAll!')
			}

			async updateById(id, nuevoProd) {	
				throw new CustomError(500, 'falta implementar updateById!')
			}
		}

		export default ProductosDao

		// --------------------------------

		class CustomError {
			consturctor (estado, descripcion, detalles) {
				this.estado = estado
				this.descripcion = descripcion
				this.detalles = detalles
			}
		}

		export default CustomError

- ProductosDao utiliza estas dos clases (DbClient y DbClientMongo) para conectarse a la base de datos, que en este caso es de MongoDB.

		class DBClient {
			async connect() {
				throw new Error('Falta implementar connect en la subclase')
			}
		
			async disconnect() {
				throw new Error('Falta implementar disconnect en la subclase')
			}
		
		}

- Archivo Config:

		const Config = {
			db: {
			name: 'my_database',
			collection: 'productos',
			cnxStr: 'mongodb://localhost/',
			// projection: { _id: 0, v: 0 },
			projection: { __v: 0 }
			
			}
		}

		// ---------------------------------

		import Config from '../config.js'
		import CustomError from '../errors/CustomError.js'
		import mongoose from 'mongoose'
		import DBClient from './DBClient.js'

		classs MyMongoClient extends DBClient {
			constructor() {
				super()
				this.connected = false
				this.client = mongoose
			}

			async connect() {
				try {
					await this.client.connect(Config.db.cnxStr + Config.db.name, {
						useNewUrlParser: true,
						useUnifiedTopology: true,
						useFindAndModify: true,
						useCreateIndex: true
					})
					console.log('Base de datos conectada')

				} catch(error) {
					throw new CustomError(500, 'error al conectar a Mongodb 1', error)
				}
			}

			async diconnect() {
				try {
					await this.client.close()
					console.log('Base de Datos desconectada')
					this.connected = false

				} catch(error) {
					throw new CustomError(500, 'error al conectarse a Mongodb 2')
				}
			}
		}

		export default MyMongoClient

- Finalmente, para poder ejecutar los métodos de ProductosApi, vamos a usar un minimist (visto en clases anteriores) con el que podemos ejecutar los métodos con simples comandos por consola. De esta forma no tenemos la necesidad de crear un servidor y hacer algunas vistas. Lo vamos a ver en detalle más adelante.
- Para ejecutar cada método, en consola escribimos por ejemplo estos comandos para agregar nuevo producto y listar todos los que haya:

		import minimist from 'mininist
		
		console.log( Instanciando la API')
		const productosApi = new ProductasApi())
		
		async function ejecutarCmds() {
			const argv = mininist(process.argv.slice(2))
			const { cmd, id, nombre, precio, stock } = argv
			
			try { 
				switch(cmd.toLawerCase()) {
					case "buscar":
						console.log(cmd)
						console.log(await productosApi.buscar(id))
						break
		
					case "agregar":
						comsole.1og(cmd)
						console.log(await productosApi.agregar( {nombre, precio, stock} ) )
						break
					case "reemplazar":
						console.log(cmd)
						console.log(await productosApi.reemplazar(id, { nombre, precio, stock }))
						break
					case "borrar":
						console.log(cmd)
						await productosApi.borrar(id)
						break
					default:
						console.log("Comando no válido:", cmd)
				}
			} catch(error) {
				console. log(error)
			}
			productosApi.exit()
		
		}
		
		ejecutarCmds()
