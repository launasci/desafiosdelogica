var digitSum = function(s, k) {
  const grupos = []
    for(let x = 0; x <= s.length; x+=k){
      formaGrupo = parseInt(new Array(s.slice(x, x+k)))
      grupos.push(formaGrupo)
    }
};


console.log(digitSum('11122233344', 3))