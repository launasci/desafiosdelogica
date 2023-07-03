let stringEntradas = ['700', '1400', '10']
const entradas = stringEntradas.map(string => Number(string))
let maiorNumero = entradas[0]

entradas.forEach(num => {
  if(num > maiorNumero) maiorNumero = num
})
console.log(`${maiorNumero} eh o maior`)