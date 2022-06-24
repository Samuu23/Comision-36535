const fs = require('fs')

module.exports = class File {
  constructor(name){
    this.name = `${__dirname}/db/${name}.json`
     
    try {
      this.elements = fs.readFileSync(this.name, 'utf-8')
      this.elements = JSON.parse(this.elements)

    } catch (error) {

      this.elements = []
    }
  }


  getAll(){
    return this.elements
  }

  getById(id){
    try {
      let element = { id }
      for(let i = 0; i < this.elements.length; i++){
				if(element.id == this.elements[i].id){
					element = this.elements[i]
				}
			}

      return element
    } catch (error) {
      return error
    }
  }


  save(element){
    try {
      if (this.elements.length == 0){
				element.id = 1
			} else {
				element.id = this.elements[this.elements.length - 1].id + 1
      }
      this.elements.push(element)
      fs.promises.writeFile(this.name, JSON.stringify(this.elements, null, '\t'))
				.then(() => console.log('Element Saved'))
				.catch(e => console.log(e))

    } catch(error) {
      console.log(error)
    }
  }

  delete(){
    // fs.unlinkSync(this.name)
    fs.truncateSync(this.name, 0, () => console.log('Content Deleted'))
  }

  deleteById(id){
    try {
      for(let i = 0; i < this.elements.length; i++){
				if(id == this.elements[i].id){
					this.elements.splice(id - 1, 1)

				}
      }

      fs.promises.writeFile(this.name, JSON.stringify(this.elements, null, '\t'))
				.then((e) => console.log(`The element with ID ${id} has been deleted`))
				.catch(e => console.log(`Error ${e}`))
      
    } catch (error) {
      return 'Error! ID does not exists'
    } 
  }

}
