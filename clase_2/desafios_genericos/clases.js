class Contador{
    static cuentaGlobal = 0
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
        return Contador.cuentaGlobal
    }
    
    contar() {
        Contador.cuentaGlobal++
        this.cuenta++
    }
}

console.log(`Cuenta global: ${Contador.cuentaGlobal}`)

let emi = new Contador("Emiliano")
let yess = new Contador("Yessica")

yess.contar()
yess.contar()
yess.contar()

emi.contar()
emi.contar()

console.log(`Responsable 2: ${emi.obtenerResponsable()}`)
console.log(`Cuenta individual 2: ${emi.obtenerCuentaIndividual()}`)
console.log(`Responsable 1: ${yess.obtenerResponsable()}`)
console.log(`Cuenta Individual 1: ${yess.obtenerCuentaIndividual()}`)
console.log(`Cuenta global: ${Contador.cuentaGlobal}`)
