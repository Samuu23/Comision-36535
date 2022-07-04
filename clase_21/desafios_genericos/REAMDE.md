# Consignas

1. Random Array

	1. Desarrollar un servidor basado en Node.js y express que para la ruta '/test' responda con un array de 10 objetos, con el siguiente formato:
			{
			    nombre: '',
			    apellido: '',
			    color: ''
			}

	2. Los objetos generados tendrán un valor aleatorio para cada uno de sus campos. El valor será obtenido de los siguientes arrays:

			const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
			const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
			const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

	3. Con cada request se obtendrán valores diferentes.

2. Random Array con Faker

- Reformar el ejercicio anterior utilizado Faker para generar los objetos con datos aleatorios en español.
- A la ruta '/test' se le podrá pasar por query params la cantidad de objetos a generar.
- Ej: '/test?cant=30'. 
- De no pasarle ningún valor, producirá 10 objetos.
- Incorporarle id a cada uno de los objetos generados en forma incremental, empezando por 1.

