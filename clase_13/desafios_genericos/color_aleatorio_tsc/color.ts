class Color {
  colorAleatorio = () => {
    let red: number = Math.floor(Math.random() * 255)
    let green: number = Math.floor(Math.random() * 255)
    let blue: number = Math.floor(Math.random() * 255)
    return (`Color: r(${red}) g(${green}) b(${blue})`)
  }
}

let colorNuevo = new Color 
console.log(colorNuevo.colorAleatorio())
