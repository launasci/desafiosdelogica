const somaDeSegundos = (tempo1, tempo2) => {
  const soma = tempo1 + tempo2
  const minutos = Math.floor(soma /60)
  const segundos = soma %  60
  if(segundos > 0) return `${minutos} minutos e ${segundos} segundos`
  else return `${minutos} minutos`
}

console.log(somaDeSegundos(600, 615))
console.log(somaDeSegundos(60, 60))