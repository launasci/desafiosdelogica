// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 
// Constraints:

// -231 <= x <= 231 - 1

var reverse = function(x) {
  const string = x.toString() // transforma em string
  let numeroNegativo = false
  if(string[0] === '-') {
    numeroNegativo = true
  }
  const inverte = string.split('').reverse().join('') // inverte a string
  let number = parseInt(inverte) // transforma a string em número
  const verificaBitNegativo = ((-2)**31)
  const verificaBitPositivo = (2**31)
  if(numeroNegativo) {
    const mutiplicaNumero = number*(-1)
    if(mutiplicaNumero <= verificaBitNegativo) {
      return number = 0
    }
    else {
      return mutiplicaNumero
    }
  }
  if(number >= verificaBitPositivo) {
    return number = 0
  }
  return number
};

console.log(reverse(2147483648))
