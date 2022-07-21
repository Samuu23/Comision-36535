# Teoria

## Objetivos 

- Explorar y aplicar el concepto de control de versiones.
- Utilizar Git para tu proyecto.
- Conocer PaaS y Heroku y sus funciones.
- Implementar un proyecto de Node en Heroku.

## Control de Versiones

Es una manera de registrar los cambios realizados sobre un archivo (o conjunto de archivos) a lo largo del tiempo, permitiendo recuperar versiones específicas más adelante.

A lo largo del tiempo ha habido varias mejoras sobre cómo manejar estas versiones, llegando a lo que hoy se conoce como Sistemas de Control de Versiones Distribuidos.

Su idea parte de que cada desarrollador de un proyecto tenga una copia local de todo el proyecto. De esta manera se construye una red distribuida de repositorios, en la que cada desarrollador puede trabajar de manera aislada pero teniendo un mecanismo de resolución de conflictos mucho mejor que en versiones anteriores.

Al no existir un repositorio central, cada desarrollador puede trabajar a su propio ritmo, almacenar los cambios a nivel local y mezclar los conflictos que se presenten sólo cuando se requiera. 
Como cada usuario tiene una copia completa del proyecto, el riesgo por una caída del servidor, un repositorio dañado o cualquier otro tipo de pérdida de datos es bastante bajo.

## En resumen

- Podemos volver a cualquier estado anterior de nuestro proyecto.
- Podemos tener una historia de cuáles fueron los cambios en el tiempo.
- Sobre estos podremos saber cuándo, cómo y quién los realizó.
- Permite la colaboración en un proyecto.
- Permite desarrollar versiones de un mismo proyecto a la vez.

## GIT

Git es una herramienta para llevar a cabo el control de versiones. Es uno de los sistemas de control de versiones más utilizado.

## Conceptos de GIT

- **Repositorio remoto**:  Es el lugar centralizado donde se guardan los archivos.
- **Repositorio local**: Es el lugar dentro de la computadora donde se guardan los archivos.
- **Working directory**: Copia del repositorio local (donde voy a empezar a trabajar).
- **Versión**: Captura del repositorio en un determinado momento.
- **Commit**: Modificaciones que le hacemos a los archivos del repositorio en nuestra computadora.
- **Tag**:  Es una versión a la que le damos cierta importancia. Ej.: 1.0.2.
- **Push**: Registrar los commits en el repositorio REMOTO.
- **Pull**: Obtener los cambios en el repositorio REMOTO.
- **Conflictos**: Cuando dos o más personas modifican la misma línea de un archivo.
- **Resolución de conflicto**: Decidir cuál es la mejor versión que queremos del archivo modificado.
- **Branch**: secuencia de commits sucesivos, que conforman una ramificación en la línea temporal de un proyecto. Por convención tenemos una llamada ‘master’, aunque actualmente se está reemplazando por ‘main’, y puede haber otras más.
- **Merge**: Realizar una fusión entre dos branches.

> Uso de Git y Comandos

## PaaS -> Platform as a Service

- Paas (plataforma como servicio) es un entorno de desarrollo e implementación completo en la nube.
- Cuenta con recursos que permiten generar “de todo”: desde aplicaciones sencillas basadas en la nube hasta aplicaciones empresariales sofisticadas habilitadas para la nube.
- Se compran los recursos que necesitamos a un proveedor de servicios en la nube, a los que accedemos a través de internet, pero solo pagamos por el uso que hacemos de ellos.
- PaaS incluye infraestructura (servidores, almacenamiento y redes), tanto como middleware, herramientas de desarrollo, servicios de inteligencia empresarial (BI), sistemas de administración de bases de datos, etc. 
- Está diseñado para sustentar el ciclo de vida completo de las aplicaciones web: compilación, pruebas, implementación, administración y actualización.
- Nos permite evitar el gasto y la complejidad que suponen la compra y la administración de licencias de software, la infraestructura de aplicaciones y el middleware subyacentes, los orquestadores de contenedores o las herramientas de desarrollo y otros recursos. 
- Administramos las aplicaciones y los servicios que desarrollamos y, normalmente, el proveedor de servicios en la nube administra todo lo demás.

## Escenarios habituales de uso

- **Framework de desarrollo.** PaaS proporciona un framework que los desarrolladores pueden ampliar para desarrollar o personalizar aplicaciones basadas en la nube. Permite a los desarrolladores crear aplicaciones usando componentes de software integrados.
- **Análisis o inteligencia empresarial.** Las herramientas que se proporcionan en PaaS permiten a las empresas realizar análisis de datos, obtener cierta información y entonces poder predecir los resultados para mejorar las previsiones de la empresa.
- **Servicios adicionales.** Los proveedores de PaaS pueden ofrecer otros servicios que mejoren las aplicaciones, como flujo de trabajo, directorios, seguridad y programación.

## Ventagas de uso de PaaS

- **Reducir el tiempo de programación.** Las herramientas de desarrollo de PaaS pueden reducir el tiempo que se tarda en programar aplicaciones nuevas con componentes de aplicación preprogramados.
- **Agregar más funcionalidad de desarrollo sin incorporar más personal.** Los componentes de plataforma como servicio pueden aportar al equipo de desarrollo nuevas características sin necesidad de contratar personal especializado.
- **Desarrollar para varias plataformas con más facilidad.** Algunos proveedores de servicios ofrecen opciones de desarrollo para varias plataformas, lo que agiliza y facilita el desarrollo de aplicaciones multiplataforma.
- **Usar herramientas sofisticadas a un precio asequible.** Gracias a un modelo de pago por uso, personas y empresas podemos usar software de desarrollo sofisticado y herramientas de inteligencia empresarial y análisis cuya compra no se podrían permitir.
- **Colaboración en equipos de desarrollo distribuidos geográficamente.** Como se accede a través de Internet, los equipos de desarrollo pueden colaborar en proyectos estando en países diferentes.
- **Administrar el ciclo de vida de las aplicaciones con eficacia.** PaaS proporciona todas las características necesarias para sustentar el ciclo de vida completo de las aplicaciones web: compilación, pruebas, implementación, administración y actualización, dentro del mismo entorno integrado.

## Heroku

- Heroku es una plataforma en la nube que ofrece servicio para alojar e implementar aplicaciones web en varios lenguajes de programación, como Node.js, entre otros.
- Las aplicaciones se corren desde un servidor Heroku usando Heroku DNS Server para apuntar al dominio de la aplicación (nombreaplicacion.herokuapp.com). 
- Cada aplicación corre sobre un motor a través de una “red de bancos de prueba” que consta de varios servidores. El servidor Git de Heroku maneja los repositorios de las aplicaciones que son subidas por los usuarios.

> Empezando a usar Heroku
