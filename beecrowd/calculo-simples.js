var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let array1 = lines[0].split(" ")
let array2 = lines[1].split(" ")

const [a, valor1 , preco1] = array1
const [d, valor2, preco2] = array2

console.log(`VALOR A PAGAR: R$ ${((valor1 *preco1) + (valor2 *preco2)).toFixed(2)}`) 
