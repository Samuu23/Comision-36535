# Acciones del Servidor

- El proyecto tiene cinco rutas:
	- POST /api/usuarios/popular?cant=n : si no específico cant me genera 50 objetos mock
	- GET /api/usuarios/:id? : con id me trae un mock; sin id devuelve todos los mocks
	- POST /api/usuarios : incorpora un nuevo mock
	- PUT /api/usuarios/:id : actualiza un mock total o parcialmente por campo
	- DELETE /api/usuarios/:id : borra un mock específico
- Los usuarios tienen: nombre, email, website, e imagen.
- Cada una puede generar, listar, incorporar, actualizar y borrar mocks.
- Los datos son persistentes en memoria.


