"use strict";

var lista = [1, 2, 3];
lista.map(function (x) {
  return x * x;
}).forEach(function (x) {
  return console.log(x);
});
