# Creando una APP con MVC y express

- Para crear una aplicación usando MVC con HTML on wire, y Express, empezamos con la siguiente estructura principal de carpetas en nuestro proyecto:

		src
			|__ controllers/
			|__ models/
			|__ views/
			|__ routes/

- Tenemos las 3 carpetas de los componentes de MVC en los archivos de rutas, en la carpeta homónima. Desde dentro, ejecutan al método correspondiente del controlador. De esta forma queda mejor separada la responsabilidad de cada uno.

- Vemos en el siguiente código un ejemplo de un modelo para una colección de comidas en una base de datos de MongoDB. 

		const mongoose = require('mongoose')
		const mealModel = mongoose.Schema({
			_id: mongoose.Schema.Types.ObjectId,
			name: { type: String, required: true },
			type: { type: String, required: true },
			price: { type: Number, required: true }
		})

		module.exports = mongoose.model('Meal', mealModel)

- Usamos Mongoose para definir el modelo y poder usar nuestra base de datos en nuestro proyecto de Node.
- Te presentamos un controlador, asociado al modelo de comidas.
- El ejemplo muestra al método para traer todas las comidas que estén en la base de datos. También podríamos tener métodos para crear, modificar o eliminar una comida.
- Como retorno del método, usamos res.render() para renderizar la vista.

		const mealModel = require(../models/mealModel)

		module.exports = {
			getMenuController: (req, res, next) => {
				const meals = mealModel.getMeals()

				res.render("menu", { meals })
			}
		}

- En el archivo de rutas, encontramos las mismas, con el método de controlador que corresponda ejecutar en cada una.
- En este caso, vemos que la ruta por GET que corresponde al método de controlador que vimos antes, es “/menu”.

		const express = require('express')
		const router = express.Router()
		const mealsController = require('../controller/mealsController')

		router.get('/menu', mealsController.getMenuController)

		module.exports = router

- Finalmente, vamos a la carpeta de vistas y creamos el archivo de menu.pug que es el que renderizamos en el controlador.
- Escribimos, en este caso, un código simple, con el motor de vistas Pug, para que muestre un listado de las comidas que trae de la base de datos con su nombre y su precio.

		html
			body
				ul
					each meal in meals
						li #{meal.name} price: #{meal.name}
