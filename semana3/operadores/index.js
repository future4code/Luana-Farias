// a. false
// b. false
// c. true
// d. true booleano
console.log("Exercicios de interpretação de código")
console.log("1)\n a. false\n b. false\n c. true\n d. true booleano")

// ----------------------------------------------------------------------------

// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19,...]
// f. 9
console.log("2)\n a. undefined\n b. null\n c. 11\n d. 3\n e. [3, 19,...]\n f. 9")



//---------------------- ESCRITA DE CÓDIGO -------------------------------------
console.log("Exercicios de escrita de codigo")
// 1.
    let userAge = parseInt (prompt('Digite sua idade:'));
    let friendAge = parseInt (prompt("Digite a idade de seu melhor amige:"));
            console.log("1) " +"Sua idade é maior que do seu amigo?", userAge > friendAge)


// .2
    let evenNumber = parseInt (prompt("Digite um número par:"));
    let result = evenNumber % 2
            console.log("2) " +result)
    // o resto da divisão significa o numero que sobra de uma divisão por 2. Se sobra zero, o numero é
    // par, se sobra numeros acima de zero, o número é impar.


// 3.
    let listaDeTarefas = [];
    tarefa1 = prompt("Adicione a primeira tarefa:");
    tarefa2 = prompt("Adicione a segunda tarefa:");
    tarefa3= prompt("Adicione a terceira tarefa:");
    listaDeTarefas.push(tarefa1)
    listaDeTarefas.push(tarefa2)
    listaDeTarefas.push(tarefa3) 
            console.log(listaDeTarefas);
    let indice = parseInt (prompt("Digite qual tarefa deseja remover:"));
    listaDeTarefas.splice(indice, 1);
            console.log("3) " +listaDeTarefas);


// .4
    let nome = prompt("Digite seu nome:")
    let email = prompt("Digite seu e-mail:");
            console.log("4) O e-mail " + email + " foi adicionado com sucesso. Bem vinde " + nome + "!");


    //DESAFIO

    console.log("---------- Desafios ---------")

// 1.
        console.log("1) ")
    let grausCelcius = parseInt (prompt("Digite graus Celcius:"));
    let grausF = grausCelcius *9/5 + 32;
            console.log(grausCelcius + "°C é igual a " + grausF+"°F")

    let fah = 77;
    let cel = 80;
    let cel2 = 30;

    let fahToKel = (fah - 32)*5/9 + 273.15;
            console.log(fah + "°F é igual a " + fahToKel + "°K");

    let celToFah = cel *9/5 + 32;
            console.log(cel + "°C é igual a " + celToFah + "°F");

    let cel2ToFah = cel2*9/5 + 32
            console.log(cel2 + "°C é igual a " + cel2ToFah + "°F");

    let celToKel = (cel2ToFah - 32)*5/9 + 273.15;
            console.log(cel2 + "°C é igual a " + celToKel + "°K");


// 2.
        console.log("2) ")
    let qWatt = 0.05;
    let consumo = 280;

    let total = qWatt * consumo;
            console.log("O consumo da residência foi de " + consumo + "W e o total a pagar é de R$" + total);

//3. 
        console.log("3) ")
    let umaLibra = 0.453592;
    let vinteLibras = Math.floor(umaLibra * 20);
            console.log("20 libras equivalem a " + vinteLibras + " Kilogramas.");

    let umOz = 0.0283495;
    let dezOz = umOz * 10.5;
            console.log("10.5 OZ equivalem a " + dezOz + " Kilogramas.");

    let umaMilha = 1609.34
    let cemMetros = umaMilha*100;
            console.log("100 milhas equivalem a " + cemMetros + " metros.");

    let pe = 0.30
    let cinquentaPe = pe * 50;
            console.log("50 pés equivalem a " + cinquentaPe + " metros.");

    let umGal =  3.78541;
    let galToLitro = umGal * 103.56;
            console.log("103.56 Gal equivalem a " + galToLitro + " litros.");

    let umLitro = 1000;
    let umaXic = 150;
    let xicToLitro = (umaXic * 450) / 1000;
            console.log("450 xícaras equivalem a " + xicToLitro + " litros.");

    let dadoUsuario = parseFloat (prompt("Digite uma quantidade de MILHAS para converter em METROS:"))
    let milha = 1609.34
    let metros = (dadoUsuario*milha) / 1000;
            console.log(dadoUsuario + " milhas equivalem a " + metros + " Kilometros.");

