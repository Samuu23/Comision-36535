const fs = require('fs')

class Product {
  constructor(title, price){
    this.title = title
    this.price = price
  }
}

class File {
  constructor(name){
    this.name = name
     
    try {
      this.products = fs.readFileSync(this.name, 'utf-8')
      this.products = JSON.parse(this.products)
      // console.log(this.productos.length)
    } catch (error) {
      this.products = []
    }
  }


  getAll(){
    return this.products
  }

  getById(id){
    try {
      let product = { id }
      for(let i = 0; i < this.products.length; i++){
	if(product.id == this.products[i].id){
	  product = this.products[i]
	}
      }

      return product
    } catch (error) {
      return error
    }
  }

  save(title, price){
    try {
      let newProduct = new Product(title, price)
      if (this.products.length == 0){
	newProduct.id = 1
      } else {
	newProduct.id = this.products[this.products.length - 1].id + 1
      }
      this.products.push(newProduct)
      fs.promises.writeFile(this.name, JSON.stringify(this.products, null, '\t'))
	.then(() => console.log('Producto guardado!'))
	.catch(e => console.log(e))

    } catch(error) {
      console.log(error)
    }
  }

  delete(){
    // fs.unlinkSync(this.name)
    fs.truncateSync(this.name, 0, () => console.log('Contenido Borrado'))
  }

  deleteById(id){
    try {
      for(let i = 0; i < this.products.length; i++){
	if(id == this.products[i].id){
	  this.products.splice(id - 1, 1)
	  // console.log(this.productos[i])
	}

      }
      // console.log(`Eliminado id ${id}:`, this.productos)
      // JSON.stringify(this.productos, null, '\t')
      fs.promises.writeFile(this.name, JSON.stringify(this.products, null, '\t'))
	.then((e) => console.log(`El producto con ID ${id} ha sido eliminado`))
	.catch(e => console.log(`Error ${e}`))
      
    } catch (error) {
      return 'Error! ID no existe o ya fue eliminado'
    } 
  }

}

// Pruebas
let archivoProductos = new File('./products.txt')
// archivoProductos.save('mouse', 255)
// archivoProductos.save('Monitor', 5700)
// archivoProductos.save('Parlantes', 1300)
// archivoProductos.save('Auriculares', 3000)
// archivoProductos.getAll()
// 
// archivoProductos.save('Webcam', 4000)
// archivoProductos.getAll()
// // console.log(archivoProductos.getById(3))
// archivoProductos.delete()
// 
// archivoProductos.save('Mouse', 255)
// archivoProductos.save('Monitor', 5700)
// archivoProductos.save('Parlantes', 1300)
// archivoProductos.save('Auriculares', 3000)
console.log(archivoProductos.getAll())
// console.log(archivoProductos.getById(2))
// archivoProductos.deleteById(2)

// archivoProductos.save('Tarjeta SD', 350)

// archivoProductos.delete()
