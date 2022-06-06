function mostrarLista(lista){

    if(!lista){
        return "Lista vacía"
    }

    return lista
}

console.log(mostrarLista())
console.log(mostrarLista(["Hola", 2, "Bueno"]))

const mostrarLista2 = (lista) => {
    if(!lista){
        return "Lista vacía"
    }

    return lista
}
console.log(mostrarLista2(1, 2, 3))
