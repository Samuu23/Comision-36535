# Usando Repository

- En este ejemplo desarrollaremos un repositorio de Personas. Para ello, crearemos primero la clase Persona, con sus correspondientes validaciones:

		export default class Producto {
		 #id;
		 #nombre;
		 #precio;
		 #stock;
		
		 constructor({ id, nombre, precio, stock }) {
		   this.id = id
		   this.nombre = nombre;
		   this.precio = precio;
		   this.stock = stock;
		 }
		
		 get id() { return this.#id }
		
		 set id(id) {
		   if (!id) throw new Error('"id" es un campo requerido');
		   this.#id = id;
		 }
		
		 get nombre() { return this.#nombre }
		 
		 set nombre(nombre) {
		   if (!nombre) throw new Error('"nombre" es un campo requerido');
		   this.#nombre = nombre;
		 }
		
		 get precio() { return this.#precio }
		
		 set precio(precio) {
		   if (!precio) throw new Error('"precio" es un campo requerido');
		   if (isNaN(precio)) throw new Error('"precio" debe ser numérico');
		   if (precio < 0) throw new Error('"precio" debe ser positivo');
		   this.#precio = precio;
		 }
		
		 get stock() { return this.#stock }
		
		 set stock(stock) {
		   if (!stock) throw new Error('"stock" es un campo requerido');
		   if (isNaN(stock)) throw new Error('"stock" debe ser numérico');
		   if (stock < 0) throw new Error('"stock" debe ser positivo');
		   this.#stock = stock;
		 }
		}

- Luego creamos el repositorio, el cual generalmente tendrá las mismas operaciones que una colección de objetos: agregar, quitar, listar, buscar, contar (no se incluyen todas en este ejemplo):

		export default class ProductosRepo {
		
		   constructor() {
		       this.dao = getDao()
		   }
		
		   async getAll() {
		       const dtos = await this.dao.getAll({})
		       return dtos.map(dto => new Producto(dto))
		   }
		
		   add(prod) {
		       const dto = new ProductoDto(prod)
		       return this.dao.save(dto)
		   }
		
		   addMany(prods) {
		       const dtos = prods.map(p => new ProductoDto(p))
		       return this.dao.saveMany(dtos)
		   }
		}

- Observen que el repositorio recibe Personas pero envía DTOs al DAO.
- De igual manera, el DAO devuelve DTOs, pero el repositorio los transforma en Personas antes de devolverlos.
- El repositorio cumple entonces la función de nexo entre la capa de negocio y la capa de persistencia (aunque más del lado del negocio, en cuanto a nivel de abstracción).


