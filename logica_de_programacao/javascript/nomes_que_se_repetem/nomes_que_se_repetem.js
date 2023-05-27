var main = function(array_){
  let nomes = []
  for (let i = 0; i < array_.length; i++){
    palavra = array_[i]
    for(let x = 0; x < array_.length; x++){
      if(palavra === array_[x] && i != x && !nomes.includes(palavra)){
        nomes.push(palavra)
      } 
    }
  } return nomes
}

console.log(main(['laura', 'ronald', 'cookie', 'laura']))
console.log(main(['laura', 'ronald', 'cookie']))
console.log(main(['laura', 'ronald', 'cookie', 'laura', 'maria', 'ronald', 'ronald', 'ronald']))
console.log(main(['ronald', 'laura', 'cookie', 'maria', 'laura', 'ronald']))
console.log(main(['azul', 'casa', 'casa', 'azul', 'banho', 'banho']))



