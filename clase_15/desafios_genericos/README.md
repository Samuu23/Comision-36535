# Consignas

1. Instalacion MySQL  
Realizar las siguientes operaciones:
- Instalar XAMPP e iniciar el motor de base de datos MySQL/MariaDB.
- Instalar MySQL Workbench y crear una conexión de usuario administrador hacia la base de datos.

2. Inicialización  
Realizar la siguientes operaciones:  
- Iniciar el servicio de base de datos MySQL/MariaDB mediante el panel de control de XAMPP.
- Listar las bases de datos presentes realizando la consulta SQL con MySQL Workbench.
- Mediante la aplicación de consola mysql realizar la misma consulta anterior. La aplicación de consola mysql se encuentra en C:\xampp\mysql\bin y se ejecuta en modo administrador con 'mysql -u root' dentro de una consola CLI
- Iniciar el servidor apache a través del panel de control de XAMPP y levantar en el navegador el cliente web de la base de datos mediante la url http://localhost/phpmyadmin/ y comprobar las bases de datos existentes

3. Gestionando una Base de Datos  
Mediante en uso del cliente MySQL Workbench realizar las siguientes tareas:
- Crear una base de datos llamada 'mibase'
- Crear una tabla dentro de esa base con el nombre 'usuarios' que contenga los siguientes campos:
	- 'nombre' del tipo varchar no nulo
	- 'apellido' del tipo varchar no nulo
	- 'edad' del tipo entero sin signo
	- 'email' del tipo varchar no nulo
	- 'id' clave primaria autoincremental no nula
- Insertar estos 3 usuarios en esa tabla:
    - Juan Perez, edad 23, jp@gmail.com
    - Pedro Mei, edad 21, pm@gmail.com
    - Juana Suarez, edad 25, js@gmail.com
- Listar los usuarios agregados 
- Borrar el usuario con id = 2
- Actualizar la edad del usuario con id = 1 a 24 años
- Listar los registros comprobando que los datos estén actualizados según las acciones realizadas.
