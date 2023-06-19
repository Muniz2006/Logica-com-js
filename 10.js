function melhoresAlunos(estudantes) {
    let melhorMedia = -Infinity;
    let melhorAluno = '';
  
    for (let aluno in estudantes) {
      let notas = estudantes[aluno];
      let soma = notas.reduce((total, nota) => total + nota, 0);
      let media = soma / notas.length;
  
      if (media > melhorMedia) {
        melhorMedia = media;
        melhorAluno = aluno;
      }
    }
  
    return { nome: melhorAluno, media: melhorMedia };
  }
  console.log(melhoresAlunos({
    João: [8, 7.6, 8.9, 6],
    Víctor: [9, 6.6, 7.9, 8],
    Muniz: [7, 7, 8, 9]
  }));