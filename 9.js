function segundoMaiorNumero(array) {
    if (array.length < 2) {
      return "O array precisa ter pelo menos dois números.";
    }
  
    let maior = Math.max(...array);
    let segundoMaior = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < maior && array[i] > segundoMaior) {
        segundoMaior = array[i];
      }
    }
  
    if (segundoMaior === -Infinity) {
      return "Não há segundo maior número no array.";
    }
  
    return segundoMaior;
  }
  console.log(somarNumeros([1, 2, 3, 4, 5])); // Saída: 15
console.log(somarNumeros([10, -5, 8, 2])); // Saída: 15
console.log(somarNumeros([])); // Saída: 0
