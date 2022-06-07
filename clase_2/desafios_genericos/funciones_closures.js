function showList(list){
  if(list == null){
    return "Empty list"
  }

  return list
}

const names = ["Emiliano", "Yessica", "Ezequiel"]

console.log(showList(names));

(function(...list) { 
  if(list == null){
    console.log("Empty list")
  }

  console.log(list)
})(1, 2, 3);

function crearMultiplicador(num1){
  return function(num2){
    return num1 * num2
  }
}

function duplicate(num1){
  return function(){
    return num1 * 2
  }
}

function triplicate(num1){
  return function(){
    return num1 * 3
  }
}

console.log(crearMultiplicador(5)(6))
console.log(duplicate(5)())
console.log(triplicate(8)())


