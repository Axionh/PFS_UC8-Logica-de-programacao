// Atividade encontro remoto 02
// Conside a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos 
// se o número for par, escreva par e o numero correspondente
// se o número for impar, escreca impar e o numero correspondente
// se o número for zero, escreva zero e o número correspondente

let alunospresentes=17;

for (let aluno = 0; aluno <= alunospresentes; aluno++) {

    if(aluno == 0){
        console.log("zero " + aluno);
    }
    if(aluno % 2 == 0){//par
        console.log("par " + aluno)
    } else {
        console.log("impar " + aluno);
    }
}