# Teoría

## Artillery

- Artillery es una dependencia de Node moderna, potente, fácil y muy útil para realizar test de carga a servidores.
- Cuenta con un conjunto de herramientas para tests de performance que se usa para enviar aplicaciones escalables que se mantengan eficaces y resistentes bajo cargas elevadas.
- Podemos usar Artillery para ejecutar dos tipos de pruebas de rendimiento:
- Pruebas que cargan un sistema, o sea, pruebas de carga, de estrés.
- Pruebas que verifican que un sistema funciona como se esperaba, es decir, pruebas funcionales continuas.

👉 Solo puede ser utilizado en sistemas de backend, no se puede utilizar en el front.

> Usando Artillery

## Profiling

- Profiling en español es análisis de rendimiento. Es la investigación del comportamiento de un programa usando información reunida desde el análisis dinámico del mismo.
- El objetivo es averiguar el tiempo dedicado a la ejecución de diferentes partes del programa para detectar los puntos problemáticos y las áreas donde sea posible llevar a cabo una optimización del rendimiento (ya sea en velocidad o en consumo de recursos).​
- Un profiler puede proporcionar distintas salidas, como una traza de ejecución o un resumen estadístico de los eventos observados.

## Profilinh en Nodejs

- Cualquier navegador moderno, como Google Chrome, tiene un built-in profiler integrado en DevTools, que registra toda la información sobre las funciones y cuánto tiempo lleva ejecutarlas en un archivo de registro.
- Luego, el navegador analiza este archivo de log, brindándonos información legible sobre lo que está sucediendo, para que podamos entenderlo y encontrar cuellos de botella.
- Node también tiene un built-in profiler pero con una diferencia: este no analiza archivos de log como los navegadores, sino que simplemente recopila toda la información en estos archivos de log.
- Significa que necesita tener alguna herramienta separada que pueda comprender este archivo de log y proporcionarnos la información de forma legible.

## CURL

- Curl es una herramienta de línea de comandos y librería para transferir datos con URL. Se usa en líneas de comando o scripts para transferir datos.
- Es utilizado a diario por prácticamente todos los usuarios de Internet en el mundo.
- Además, se utiliza en automóviles, televisores, teléfonos móviles, tabletas, entre otros y es el motor de transferencia de Internet para miles de aplicaciones de software en más de diez mil millones de instalaciones.

### Instalacion

- Para usarlo, debemos descargarlo e instalarlo. Lo podemos hacer desde: https://curl.se/download.html
- Una vez descargado, descomprimimos el zip y en la carpeta “bin” encontramos el archivo de instalación “.exe” llamado curl.exe. (Posiblemente tengamos que ejecutarlo como administrador)
- Una vez instalado, ya lo podemos utilizar como comando en la consola.

> Node Profiling

> Node inspect

## Autocanon y Ox

- Autocannon es una dependencia de Node (similar a Artillery) que nos ayuda a realizar los test de carga.
- Es una herramienta de evaluación comparativa HTTP / 1.1.

- 0x es una dependencia que perfila y genera un gráfico de flama (flame graph) interactivo para un proceso Node en un solo comando.
- En este caso, vamos a hacer los test de carga por código, en lugar de por consola como hicimos con Artillery.

> Realizando test de carga
