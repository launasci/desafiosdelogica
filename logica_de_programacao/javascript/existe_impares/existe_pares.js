const existePares = (array_) => {
  for(let i = 0; i < array_.length; i++){
    let impar = 0
    if(array_[i] % 2 !== 0) {
        impar++
        return true
    } else return false
  }
}

console.log(existePares([19, 14, 25, 13, 18, 39893, 999]))
console.log(existePares([2, 4, 6, 8, 10]))