const miObjeto = {}

for(let i = 0; i < 1000; i++){
  let random = Math.floor(Math.random() * 21)
  if(miObjeto[random]){
    miObjeto[random] += 1   
  }else {
    miObjeto[random] = 1
  }
}

console.log(miObjeto)
