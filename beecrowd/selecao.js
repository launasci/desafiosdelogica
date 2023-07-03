var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const stringEntradas = lines.shift().split(" ")
const entradas = stringEntradas.map(string => Number(string))

const selecao = (a, b, c, d) => {
  if (
    a % 2 == 0 &&
    b > c &&
    d > a &&
    c + d > a + b &&
    c > 0 && d > 0
  ) console.log('Valores aceitos');
  else console.log('Valores nao aceitos');
};

selecao(...entradas);