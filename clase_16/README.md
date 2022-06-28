# Teoría

## ¿Qué es Knex.js?  
- Knex.js es un generador de consultas SQL con "baterías incluidas" para Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle y Amazon Redshift, diseñado para ser flexible, portátil y fácil de usar.
- Cuenta con una interfaz basada en callbacks y en promesas.
- Knex se puede utilizar como un generador de consultas SQL en Node.JS.
- Se puede instalar desde npm con el comando npm i knex
- Además debemos instalar las dependencias de las base de datos con la cual vamos a trabajar: npm i -> pg para PostgreSQL y Amazon Redshift, mysql para MySQL y MariaDB, sqlite3 para SQLite3 ó mssql para MSSQL.

KNEX.JS Web oficial:  https://knexjs.org/

KNEX.JS Cheatsheet  https://devhints.io/knex

## Solucion  
*Error:* Client does not support authentication protocol requested by server; consider upgrading MySQL client'

mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

## ¿Qué es SQLite3?  
- SQLite es una biblioteca en lenguaje C que implementa un motor de base de datos SQL pequeño, rápido, autónomo, de alta confiabilidad y con todas las funciones.
- SQLite es el motor de base de datos más utilizado del mundo.
- SQLite está integrado en todos los teléfonos móviles y en la mayoría de las computadoras y viene incluido dentro de innumerables otras aplicaciones que la gente usa todos los días.
- El formato de archivo SQLite es estable, multiplataforma y compatible con versiones anteriores. La última versión es la 3
- El código fuente de SQLite es de dominio público.


