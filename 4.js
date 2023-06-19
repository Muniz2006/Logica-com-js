function inverterValor(parametro) {
    if (typeof parametro === 'boolean') {
      return !parametro;
    } else if (typeof parametro === 'number') {
      return -parametro;
    } else {
      return 'Booleano ou Número esperados, mas o parâmetro é do tipo ' + typeof parametro;
    }
  }
  console.log(obterNomeMes(2));   // Saída: "Fevereiro"
console.log(obterNomeMes(7));   // Saída: "Julho"
console.log(obterNomeMes(13));  // Saída: "Número inválido. Insira um valor de 1 a 12."
