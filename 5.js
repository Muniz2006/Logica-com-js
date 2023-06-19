function multiplicarSemOperador(num1, num2) {
    if (num1 === 0 || num2 === 0) {
      return 0;
    }
  
    let resultado = 0;
    for (let i = 0; i < num2; i++) {
      resultado += num1;
    }
  
    return resultado;
  }
  console.log(inverterValor(true));    // Saída: false
console.log(inverterValor(false));   // Saída: true
console.log(inverterValor(10));      // Saída: -10
console.log(inverterValor(-5));      // Saída: 5
console.log(inverterValor('texto')); // Saída: Booleano ou Número esperados, mas o parâmetro é do tipo string
