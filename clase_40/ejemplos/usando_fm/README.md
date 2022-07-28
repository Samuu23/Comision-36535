# Usando Factory Method

- En este ejemplo, primero creamos una clase Employee.

		class Employee {
			speak() {
				return 'Hi, I am a ' + this.type + ' employee'
			}
		}

- Luego, creamos 3 clases hijas de la clase Employee

		class FullTimeEmployee extends Employee {
			constructor(data){
				super()
				this.type = 'Full Time'
				// ...
			}
		}
		
		class PartTimeEmployee extends Employee {
			constructor(data){
				super()
				this.type = 'Part Time'
				// ...
			}
		}
		
		class ContractorEmployee extends Employee {
			constructor(data){
				super()
				this.type = 'Contractor'
				// ...
			}
		}

- En el patrón Factory Method, debemos crear otra clase, que instancie a la clase creada anteriormente.
- En este caso, tenemos 3 clases a instanciar, que según el valor pasado como parámetro, decidimos cuál instanciar, como vemos en el código:

		class MyEmployeeFactory {
			createEmployee(data) {
				if(data.type = 'fulltime') return new FullTimeEmployee(data)
				if(data.type = 'parttime') return new PartTimeEmployee(data)
				if(data.type == 'contractor') return new ContractorEmployee(data)
			}
		}

- Vemos ahora un ejemplo de cómo usar las clases que desarrollamos.
- La conclusión clave del este código es el hecho de que está agregando objetos al mismo array, todos los cuales comparten la misma interfaz (en el sentido de que tienen el mismo conjunto de métodos) pero realmente no necesitamos preocuparnos por qué objeto crear y cuándo hacerlo.

		(() => {
			
			let factory = new MyEmployeeFactory()
		
			let types = ["fulltime", "parttime", "contractor"]
			let employees = []
			for(let i = 0; i < 100; i++) {
				employees.push(factory.createEmployee({ type: types[Math.floor(Math.random(2) * 2)] }))
			}
		
			employees.forEach(e => {
				console.log(e.speak)
			})
		})()

- Un caso de uso particular para este patrón es el manejo de la creación de objetos de error.
- Imaginemos tener una aplicación Express con aproximadamente 10 puntos finales, en la que cada punto final necesita devolver entre dos o tres errores según la entrada del usuario. Estamos hablando de 30 frases como las siguientes:

		if(err) {
			res.json({ error: true, message: "Error message here" })
		}

- Ahora, eso no sería un problema, al menos hasta la próxima vez que tuviéramos que agregar repentinamente un nuevo atributo al objeto de error.

## Casos de Uso

- Ahora tenemos que repasar todo nuestro proyecto, modificando los 30 lugares. Ésto se resolvería moviendo la definición del objeto de error a una clase. 
- Esta acción funcionará, a menos que tuviéramos más de un objeto de error y, de nuevo, tenemos que decidir qué objeto instanciar en función de una lógica que solo nosotros conocemos.
- Si tuviésemos que centralizar la lógica para crear el objeto de error, entonces todo lo que tendríamos que hacer a lo largo de nuestro código:

		if(err) {
			res.json(ErrorFactory.getError(err))
		}

✔ Con esto solucionamos el problema, y tenemos un solo objeto para manejar los errores.
