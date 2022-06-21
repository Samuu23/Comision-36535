class Color {
  colorAleatorio() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `Color: r(${red}) g(${green}) b(${blue})`;
  }

}

let colorNuevo = new Color();
console.log(colorNuevo.colorAleatorio());
