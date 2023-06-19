function obterNomeMes(numero) {
    var meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    if (numero >= 1 && numero <= 12) {
      return meses[numero - 1];
    } else {
      return "Número inválido. Insira um valor de 1 a 12.";
    }
  }
  console.log(calcularQuantidadeDias(20));   // Saída: 7300
console.log(calcularQuantidadeDias(35));   // Saída: 12775
console.log(calcularQuantidadeDias(-10));  // Saída: Erro: A idade não pode ser um número negativo.
