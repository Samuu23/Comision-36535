class Contador{
    static cuentaClase = 0
    constructor(nombre){
        this.nombre = nombre
        this.cuenta = 0
    }
    
    obtenerResponsable() {
        return this.nombre
    }
    
    obtenerCuentaIndividual(){
        return this.cuenta
    }
    
    obtenerCuentaGlobal() {
        return Contador.cuentaClase
    }
    
    contar() {
        Contador.cuentaClase++
        this.cuenta++
    }
}

let alguien = new Contador("Emiliano")
let yess = new Contador("Yessica")

yess.contar()
yess.contar()
yess.contar()

alguien.contar()
alguien.contar()

console.log(alguien.obtenerResponsable())
console.log(alguien.obtenerCuentaIndividual())
console.log(yess.obtenerResponsable())
console.log(yess.obtenerCuentaIndividual())

console.log(alguien.obtenerCuentaGlobal())
