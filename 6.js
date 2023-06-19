function repetir(elemento, quantidade) {
    let resultado = [];
    
    for (let i = 0; i < quantidade; i++) {
      resultado.push(elemento);
    }
    
    return resultado;
  }
  console.log(multiplicarSemOperador(5, 3));   // Saída: 15
console.log(multiplicarSemOperador(7, 0));   // Saída: 0
console.log(multiplicarSemOperador(4, 10));  // Saída: 40
