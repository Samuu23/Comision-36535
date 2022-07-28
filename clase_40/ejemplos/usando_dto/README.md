# Usando DTO

- Continuando con el ejemplo que vimos en DAO, vamos a sumarle un método más para usar DTO.
- DTO es un objeto que se crea para reunir la información de varios objetos o modificar uno existente para crear 'vistas' de información y devolverle al cliente datos adaptados.
- Creamos un archivo con el código del DTO, y otro con un componente capaz de calcular precios en otras monedas.

		class ProductoDto {
			constructor(datos, cotizaciones) {
				this.nombre = datos.nombre
				this.precio = datos.precio
				this.stock = datos.stock
				for(const [ denominacion, valor ] of Object.entries(cotizaciones)){
					this[denominacion] = valor
				}
			}
		}

- Vemos que, en este caso, el producto no presenta su _id, y en cambio, incluye las cotizaciones que hayamos elegido al momento de instanciarlo.
- De esta forma, cuando busquemos un producto por su id, nos va a devolver un objeto con estas propiedades del producto, a diferencia del método anterior de Buscar que nos devolvía _id, nombre, precio y stock, tal cual figura en la base de datos.	

		class Cotizador {
		   static VALOR_DOLAR = 100
		
		   getPrecioSegunMoneda(precio, moneda) {
		       switch (moneda) {
		           case 'USD':
		               return precio * Cotizador.VALOR_DOLAR
		           default:
		               return precio
		       }
		   }
		}


- Luego, en el archivo index.js importamos y agregamos un nuevo método en la clase ProductosApi.
- Este método busca todos los productos o un producto por su id, agregando su precio en dólares.
- Agregamos un comando en nuestros scripts para probarlo.

		async buscarConCotizacionEnDolares(id) {
		    if (id) {
		        const producto = await this.productosDao.getById(id);
		        const cotizaciones = {
		            precioDolar: this.cotizador
		                .getPrecioSegunMoneda(producto.precio, 'USD')
		        }
		        const productoDto = new ProductoDto(producto, cotizaciones)
		        return productoDto
		    } else {
		        const productos = await this.productosDao.getAll();
		        const productosDtos = productos.map(producto => {
		            const cotizaciones = {
		                precioDolar: this.cotizador
		                    .getPrecioSegunMoneda(producto.precio, 'USD')
		            }
		            const productoDto = new ProductoDto(producto, cotizaciones)
		            return productoDto
		        })
		        return productosDtos;
		    }
		}

- Y obtenemos lo siguiente como respuesta.

		base de datos conectada 
		[
			ProductoDto {
				nombre: 'TV',
				precio: 12.34,
				stock: 99,
				precioDolar: 1234
			},
			ProductoDto {
				nombre: 'PC',
				precio: 56.78
				stock: 50
				precioDolar: 5678
			}
		]
		base de datos desconectada

## Resumiendo

- Como vimos, los DTO son un patrón muy efectivo para transmitir información entre un cliente y un servidor, pues nos permite crear estructuras de datos independientes de nuestro modelo de datos, lo que nos permite crear cuantas “vistas” sean necesarias de un conjunto de tablas u orígenes de datos. 
- Además, nos permite controlar el formato, nombre y tipos de datos con los que transmitimos los datos para ajustarnos a un determinado requerimiento. 
- Finalmente, si por alguna razón, el modelo de datos cambió el cliente no se afectará, pues seguirá recibiendo el mismo DTO.


