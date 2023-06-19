function calcularQuantidadeDias(idade) {
    if (idade < 0) {
      return "Erro: A idade não pode ser um número negativo.";
    } else {
      var quantidadeDias = idade * 365;
      return quantidadeDias;
    }
  }
  console.log(compararNumeros(5, 3));  // Saída: true
console.log(compararNumeros(2, 7));  // Saída: false
console.log(compararNumeros(4, 4));  // Saída: true
