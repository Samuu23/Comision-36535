# Consignas
- Funciones y Closures
  - Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, sino está vacía, o de lo contrario muestre "Lista vacia". Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos
  - Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 numeros como argumento.
  - Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.

- Clases
En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello:
 - Definir la clase Contador.
 - Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
 - Cada instancia inicia su cuenta individual en cero.
 - La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.
 - Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
 - Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
 - Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
 - Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general
