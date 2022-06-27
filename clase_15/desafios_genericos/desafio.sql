SHOW DATABASES;

CREATE DATABASE mibase;

USE mibase;

CREATE TABLE usuarios(
	id int not null auto_increment,
	nombre varchar(255) not null,
	apellido varchar(255) not null,
	edad int,
	email varchar(255) not null,
	PRIMARY KEY(id)
);

DESCRIBE usuarios;

INSERT INTO usuarios(nombre, apellido, edad, email) VALUES ("Juan", "Perez", 23, "jp@gmail.com");
INSERT INTO usuarios(nombre, apellido, edad, email) VALUES ("Pedro", "Mei", 21, "pm@gmail.com");
INSERT INTO usuarios(nombre, apellido, edad, email) VALUES ("Juana", "Suarez", 25, "js@gmail.com");

SELECT * FROM usuarios;

DELETE FROM usuarios WHERE id = 2;

UPDATE usuarios SET edad = 24 WHERE id = 1;

SELECT * FROM usuarios;
