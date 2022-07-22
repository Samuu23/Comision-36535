# Teoria

## Objetivos

- Aprender a enviar mensajes de Whatsapp desde aplicaciones en Node.
- Conocer acerca de OWASP y los riesgos de seguridad de aplicaciones más importantes.
- Comprender los riesgos del OWASP Top 10.

## Twilio Whatsapp

- De forma similar a como vimos el envío de SMS a través de Twilio en la clase pasada, se puede enviar y recibir mensajes de Whatsapp también mediante Twilio.
- Funciona como intermediario entre la cuenta de Whatsapp y nosotros.
- Podemos enviar los mensajes desde nuestra app de Node con el módulo de Twilio para Node que utilizamos la clase pasada. Pero esta vez lo vamos a configurar para que envíe mensajes de Whatsapp.

Entrando a Twilio para Whatsapp podremos ver la documentación que nos permitirá empezar a usarlo.

> Comenzando con Twilio-Whatsapp

## OWASP

- OWASP es Open Web Application Security Project (Proyecto abierto de seguridad de Aplicaciones Web).
- Es un proyecto de código abierto dedicado a determinar y combatir las causas que hacen que el software sea inseguro.
- La Fundación OWASP es un organismo sin fines de lucro que apoya y gestiona los proyectos e infraestructura de OWASP. La comunidad OWASP está formada por empresas y organizaciones educativas y particulares.
- Es un nuevo tipo de entidad en el mercado de seguridad informática. 
- Está libre de presiones corporativas y eso facilita que OWASP proporcione información imparcial y práctica sobre seguridad de aplicaciones informáticas. 
- No está afiliado a ninguna compañía tecnológica, si bien apoya el uso informado de tecnologías de seguridad. 
- Recomienda enfocar la seguridad de aplicaciones informáticas considerando todas sus dimensiones: personas, procesos y tecnologías.

## OWASP Top 10

- OWASP Top 10 es un documento que recopila los diez riesgos de seguridad más importantes (críticos) en aplicaciones web según la organización OWASP.
- Esta lista se suele actualizar y publicar cada 3 o 4 años.
- El objetivo es crear conciencia acerca de la seguridad en aplicaciones mediante la identificación de algunos de los riesgos más críticos que enfrentan las organizaciones.
- La última versión publicada a la fecha es del 2017.

## ¿Cuales son los riesgos  en seguridad de aplicaciones?

- Los atacantes pueden, potencialmente, utilizar diferentes rutas a través de su aplicación para perjudicar su negocio u organización. 
- Cada uno de estos caminos representa un riesgo que puede o no ser suficientemente grave como para merecer atención.

## A1:2017 Inyeccion

- Las fallas de inyección, como consultas SQL, NoSQL, o casi cualquier fuente de datos, ocurren cuando se envían datos no confiables a un intérprete, como parte de un comando o consulta.
- Los datos dañinos del atacante pueden engañar al intérprete para que ejecute comandos involuntarios o acceda a los datos sin la debida autorización.
- Estos defectos son muy comunes, particularmente en código heredado.
- Una inyección puede causar divulgación, pérdida o corrupción de información, pérdida de auditabilidad, o denegación de acceso.
- El impacto al negocio depende de las necesidades de la aplicación y de los datos.

## A2:2017 Perdidas de Autenticacion

- Las funciones de la aplicación relacionadas a autenticación y gestión de sesiones son implementadas incorrectamente, permitiendo a los atacantes comprometer usuarios y contraseñas, token de sesiones, o explotar otras fallas de implementación para asumir la identidad de otros usuarios (temporal o permanentemente).
- Los errores de pérdida de autenticación son comunes debido al diseño y la implementación de la mayoría de los controles de acceso. 
- Los atacantes solo tienen que obtener el acceso a unas pocas cuentas o a una cuenta de administrador para comprometer el sistema. Dependiendo del dominio de la aplicación, esto puede permitir robo de identidad, lavado de dinero y la divulgación de información sensible protegida legalmente.

## A3:2017 Exposicion de datos sensibles

- Muchas aplicaciones web y APIs no protegen adecuadamente datos sensibles, tales como información financiera como tarjetas de crédito o información personal como de salud. Los atacantes pueden robar o modificar estos datos protegidos inadecuadamente para llevar a cabo fraudes con tarjetas de crédito, robos de identidad u otros delitos.
- Los datos sensibles requieren métodos de protección adicionales, como el cifrado en almacenamiento y tránsito.
- El error más común es simplemente no cifrar los datos sensibles. Cuando se emplea criptografía, es común la generación y gestión de claves, algoritmos, cifradores y protocolos débiles.

## A4:2017 Entidades externas XML (XXE)

- Muchos procesadores XML antiguos o mal configurados evalúan referencias a entidades externas en documentos XML. Las entidades externas pueden utilizarse para revelar archivos internos mediante la URI o archivos internos en servidores no actualizados, escanear puertos de la LAN, ejecutar código de forma remota y realizar ataques de denegación de servicio (DoS).
- Estos defectos se pueden utilizar para extraer datos, ejecutar una solicitud remota desde el servidor, escanear sistemas internos, realizar un ataque de denegación de servicio y ejecutar otro tipo de ataques.
- El impacto al negocio depende de las necesidades de la aplicación y de los datos.

## A5:2017 Pérdida de Control de Acceso

- Las restricciones sobre lo que los usuarios autenticados pueden hacer no se aplican correctamente. Los atacantes pueden explotar estos defectos para acceder, de forma no autorizada, a funcionalidades y/o datos, cuentas de otros usuarios, ver archivos sensibles, modificar datos, cambiar derechos de acceso y permisos, etc.
- Las debilidades del control de acceso son comunes debido a la falta de detección automática y a la falta de pruebas funcionales efectivas por parte de los desarrolladores de aplicaciones.
- El impacto técnico incluye atacantes anónimos actuando como usuarios o administradores; usuarios que utilizan funciones privilegiadas o crean, acceden, actualizan o eliminan cualquier registro.

## A6:2017 Configuracion de Seguridad incorrecta

- La configuración de seguridad incorrecta es un problema muy común y se debe en parte a establecer la configuración de forma manual, ad hoc o por omisión (o directamente por la falta de configuración).
- Son ejemplos: cabeceras HTTP mal configuradas, mensajes de error con contenido sensible, falta de parches y actualizaciones, frameworks, dependencias y componentes desactualizados, etc.
- Los atacantes a menudo intentarán explotar vulnerabilidades sin parchear o acceder a cuentas por defecto, etc. para obtener acceso o conocimiento del sistema o del negocio.
- Ocasionalmente, estos errores resultan en un completo compromiso del sistema.

## A7:2017 Secuencias de Comandos en sitios cruzados (XSS)

- Los XSS ocurren cuando una aplicación toma datos no confiables y los envía al navegador web sin una validación y codificación apropiada; o actualiza una página web existente con datos suministrados por el usuario utilizando una API que ejecuta JavaScript en el navegador.
- Permiten ejecutar comandos en el navegador de la víctima y el atacante puede secuestrar una sesión, modificar los sitios web, o redireccionar al usuario hacia un sitio malicioso.
- Existen herramientas automatizadas que permiten detectar y explotar las tres formas de XSS, y también se encuentran disponibles kits de explotación gratuitos.
- Es la segunda vulnerabilidad más frecuente en OSWAP.

## A8:2017 Deserializacion Insegura

- Estos defectos ocurren cuando una aplicación recibe objetos serializados dañinos y estos objetos pueden ser manipulados o borrados por el atacante para realizar ataques de repetición, inyecciones o elevar sus privilegios de ejecución.
- En el peor de los casos, la deserialización insegura puede conducir a la ejecución remota de código en el servidor.
- Algunas herramientas pueden descubrir defectos de deserialización, pero con frecuencia se necesita ayuda humana para validarlo.
- Lograr la explotación de deserialización es difícil por lo que no es algo tan frecuente en las aplicaciones web. Sin embargo no se debe desvalorizar su impacto por la ejecución remota de código.

## A9:2017 Componentes con vulnerabilidades conocidas

- Los componentes como bibliotecas, frameworks y otros módulos se ejecutan con los mismos privilegios que la aplicación. Si se explota un componente vulnerable, el ataque puede provocar una pérdida de datos o tomar el control del servidor.
- Las aplicaciones y API que utilizan componentes con vulnerabilidades conocidas pueden debilitar las defensas de las aplicaciones y permitir diversos ataques e impactos.
- Estos defectos están muy difundidos. El desarrollo basado fuertemente en componentes de terceros, puede llevar a que los desarrolladores no entiendan qué componentes se utilizan en la aplicación o API y, mucho menos, mantenerlos actualizados.
- Dependiendo del activo que se está protegiendo, este riesgo puede ser incluso el principal de la lista.

## A10:2017 Registro y Monitoreo insuficientes

- El registro y monitoreo insuficiente, junto a la falta de respuesta ante incidentes permiten a los atacantes mantener el ataque en el tiempo, pivotear a otros sistemas y manipular, extraer o destruir datos.
- Los estudios muestran que el tiempo de detección de una brecha de seguridad es mayor a 200 días, siendo típicamente detectado por terceros en lugar de por procesos internos.
- Los atacantes dependen de la falta de monitoreo y respuesta oportuna para lograr sus objetivos sin ser detectados.
- Los ataques más exitosos comienzan con la exploración de vulnerabilidades.
- Permitir que el sondeo de vulnerabilidades continúe puede aumentar la probabilidad de una explotación exitosa.

## Cambios desde la version anterior (2013)

- Dos diferenciadores clave sobre las versiones anteriores son las notables devoluciones de la comunidad y la gran cantidad de datos recopilados de docenas de organizaciones, siendo posiblemente la mayor cantidad de datos jamás reunidos en la preparación de un estándar de seguridad de aplicaciones. 
- Esto nos da la confianza de que el nuevo OWASP Top 10 aborda los riesgos de seguridad de aplicaciones más impactantes que enfrentan las organizaciones en la actualidad.
- Se agregaron los nuevos riesgos A8 y A10 que no se consideran en las versiones anteriores.

## Recomendaciones para mejorar la seguridad de nuestra App

- Se recomienda establecer y utilizar procesos de seguridad repetibles y controles estándar de seguridad.
- Para ayudar a organizaciones y desarrolladores a reducir los riesgos de seguridad de sus aplicaciones de un modo rentable, OWASP ha producido un gran número de recursos gratuitos y abiertos, que los podemos utilizar para gestionar la seguridad de nuestras aplicaciones.
- A continuación, en la siguiente diapositiva, se muestran algunos de los muchos recursos que OWASP ha producido para ayudar a los desarrolladores a generar aplicaciones web y APIs seguras.

- **Requisitos de Seguridad en aplicaciones:** OWASP recomienda utilizar el Estándar de Verificación de Seguridad en Aplicaciones de OWASP (ASVS).
- **Arquitectura de seguridad en aplicaciones:** Es mucho más rentable diseñar la seguridad desde el principio.
- **Controles de Seguridad Estándar:** Construir controles de seguridad fuertes y usables es difícil. Un conjunto de controles estándar de seguridad simplifican radicalmente el desarrollo de aplicaciones y APIs seguras.

- **Ciclo de vida de desarrollo seguro:** Para mejorar el proceso que una organización utiliza para crear aplicaciones y APIs, OWASP recomienda el Modelo de Garantía de la Madurez del Software (SAMM). Este modelo ayuda a las organizaciones a formular e implementar estrategias para el software seguro, adaptado a los riesgos específicos para un negocio u organización.
- **Educación de la Seguridad en Aplicaciones:** El proyecto educacional de OWASP proporciona material de formación para ayudar a educar a los desarrolladores en seguridad en aplicaciones web.


