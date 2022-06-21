var Color = /** @class */ (function () {
    function Color() {
        this.colorAleatorio = function () {
            var red = Math.floor(Math.random() * 255);
            var green = Math.floor(Math.random() * 255);
            var blue = Math.floor(Math.random() * 255);
            return ("Color: r(".concat(red, ") g(").concat(green, ") b(").concat(blue, ")"));
        };
    }
    return Color;
}());
var colorNuevo = new Color;
console.log(colorNuevo.colorAleatorio());
