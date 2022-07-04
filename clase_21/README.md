# Teoría

## ¿Qué es TDD?
TDD o Test-Driven Development (desarrollo dirigido por tests) es una práctica de programación que consiste en escribir primero las pruebas (generalmente unitarias), después escribir el código fuente que pase la prueba satisfactoriamente y, por último, refactorizar el código escrito.

Con esta práctica se consigue entre otras cosas un código más robusto, más seguro, mantenible y una mayor rapidez en el desarrollo.

1. Escribe una prueba que falle (Red)
2. Haz que el código pase la prueba (Green)
3. Elimina la redundancia (Refactor)

## Mock de una API

API significa interfaz de programación de aplicaciones. Es un conjunto de definiciones y protocolos que se utilizan para desarrollar e integrar el software de las aplicaciones.

## API Conceptos

- Permiten que sus productos y servicios se comuniquen con otros sin necesidad de saber cómo están implementados. 
- Esto simplifica el desarrollo de las aplicaciones y permite ahorrar tiempo y dinero.
- Otorgan flexibilidad, proporcionan oportunidades de innovación y simplifican el diseño, la administración y el uso de las aplicaciones.
- Esto es ideal al momento de diseñar herramientas y productos nuevos (o gestionar los actuales).

Las API se consideran como contratos, con documentación que representa un acuerdo entre las partes: si una de las partes envía una solicitud remota con cierta estructura, esa misma estructura determinará cómo responderá el software de la otra parte.

1. Base de datos: La informacion o las herramientas	desarrolladas por una empresa son utilizadas en servicios de terceros
2. API: Una API permite conectar la informacion o funcionalidades con los requerimientos de una aplicacion
3. Aplicacion: El cliente tiene acceso a toda su informacion requerida en una sola parte 

## ¿Qué es Mocking y Mock?

- Mocking es la técnica utilizada para simular objetos en memoria con la finalidad de poder ejecutar pruebas unitarias.
- Los Mocks son objetos preprogramados con expectativas que forman una especificación de las llamadas que se espera recibir.
- Los Mocks se pueden servir desde un servidor web a través de una Mock API.

## Mocks en TDD

- Al trabajar con TDD nos encontramos con la dependencia de ciertos elementos que pueden estar fuera de contexto con el sistema que queremos probar.
- Algunas dependencias pueden traer efectos colaterales sobre el resultado de las pruebas, lo que se traduce en futuros errores. Incluso pueden no estar (todavía) implementadas, al estar el sistema en una fase temprana de desarrollo.
- Para resolver este problema, reemplazamos las dependencias por los mocks. Así se devolverán los resultados esperados para hacer las peticiones a dichas dependencias, sin realizar ninguna operación real o compleja.
- Nos podemos valer de un servidor de mocks que imita el comportamiento de nuestro servidor real, devolviendo datos de prueba o datos esperados tras las peticiones que queremos poner a prueba.

## Mocks y API

- Los mocks de API son una herramienta muy potente que permite desarrollar y probar el front-end como un componente independiente del back-end, facilitando y reduciendo tiempos de desarrollo, y aumentando la productividad del equipo.
- Un mock del servidor es sumamente útil para el equipo de desarrolladores que trabaja en la interfaz del usuario, ya que responde preguntas triviales y permite avanzar notablemente sin depender del desarrollo del backend 
- De esta manera se evita tener que esperar a que el servidor esté terminado para poder empezar a desarrollar el frontend. 

La mock API debe estar bien diseñada y documentada. Si hay errores en la especificación, habrá disparidad en el comportamiento de los mocks, causando que el frontend no termine de encajar cuando se haga el cambio al backend real.

## Faker.js

- Faker.js es una librería Javascript que nos permite generar varios tipos de datos aleatorios como nombres, dirección de correo electrónico, perfil de avatar, dirección, cuenta bancaria, empresa, título del trabajo y mucho más.
- Faker.js se puede utilizar dentro de un proyecto Node.js para generar un mocking de datos para ser servidos desde un proyecto implementado con Express.
- Se instala en un proyecto Node.js es a través del comando npm i faker
- A continuación veremos un ejemplo de uso

Faker website: https://marak.github.io/faker.js/


