const miObjeto = {}

for(let i = 0; i < 10000; i++){
  let random = Math.floor(Math.random() * 20) + 1  
  if(miObjeto[random]){
    miObjeto[random]++   
  }else {
    miObjeto[random] = 1
  }
}

console.log(miObjeto)
