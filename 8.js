function somarNumeros(array) {
    let soma = 0;
  
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
  
    return soma;
  }
  console.log(filtro(["Js", 2, "hoje", 4, 5, 7, "teste"])); // Saída: [2, 4, 5, 7]
console.log(filtro(["teste", "tentativa"])); // Saída: []
