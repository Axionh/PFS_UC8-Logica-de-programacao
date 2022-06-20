// Atividade online 02 ALEXANDRE HOSS

// Realizar um app apra cadastro de evento e participantes com as seguintes funções:
// 1) Caso a data do EVENTO for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
// 2) Se o PARTICIPANTE for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// 3) Listar PARTICIPANTES e PALESTRANTES por evento
// 4) Enquanto a quantidade de PARTICIPANTES for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.

const hoje= new Date();
const rs = require ("readline-sync")
let nome = rs.question("Qual o seu nome? ")
let cadastro = rs.question("Você quer cadastrar um evento, como palestrante ou participante? ");
let numpart=99; // este campo pode ser modificado para simular uma quanditade de X participantes no banco de dados e gerar as restrições dos participantes


//Cadastro de PALESTRANTE (sem restrições)
if(cadastro =="Palestrante"|| cadastro=="palestrante"){
        console.log("Cadastro do palestrante "+nome+" realizado com sucesso");
}

//Cadastro de PARTICIPANTE (com restrições de idade e quantidade)
else if (cadastro =="Participante"|| cadastro=="participante"){
    let idade=rs.questionInt("Qual a sua idade? ")
    if(idade>=18 && numpart<100){
    console.log("Parabéns " + nome+ "! Cadastro realizado de participante")
}else if (idade>=18 && numpart>=100){
        console.log("Número de participantes excedido")
    }else if (idade<18){
        console.log("Idade insuficiente")
    }
}

//Cadastro de EVENTOS (com restrições de data)
else if (cadastro == "Evento"||cadastro=="evento") {
    let evento=rs.question("Qual o nome do evento? ")
    let dataCadastro =rs.question("Qual a data do evento (aaaa/mm/dd)? ")
     let dataCadastroEvento=new Date(dataCadastro)
         if(dataCadastroEvento.getTime() > hoje.getTime()){
		console.log("Evento "+ evento +" cadastrado com sucesso.");
    } else {
	console.log("Data inválida.Data anterior a atual.");
    }
}

    