function filtro(array) {
    let numeros = array.filter(function(elemento) {
      return typeof elemento === 'number';
    });
    
    return numeros;
  }
  console.log(repetir("teste", 2)); // Saída: ["teste", "teste"]
console.log(repetir(4, 3)); // Saída: [4, 4, 4]
