// INTERPRETAÇÃO DE CÓDIGO

// EXERCICIO 1
// Esse código serve para  verificar se um código é par ou ímpar através do operador resto. Ao dividir 
// o numero inserido no promp pelo usuário, não pode sobrar resto na divisão. Caso sobre, significa que o
// número é ímpar.
// Ao digitar 20 no prompt, o número passa no teste porque 20 é par e não sobra nada da divisão.

 
// EXERCICIO 2
//     a) Esse código serve para fazer uma verificação dos dados que o usuário digitou. Caso queira buscar
// uma fruta, basta digitar o nome e o código faz a verificação de todos cases para ver qual é verdade.
//    b) A mensagem que será impressa no console é: "O preço da fruta maçã é R$2.25"
//    c) Caso tirasse o break, a mensagem impressa no console seria:
//                                               O preço da fruta pêra é R$5


// EXERCICIO 3
//    a) A primeira linha solicita que o usuário informe um número.
//      b) caso o numero seja maior que 0, a mensagem que aparece é "Esse numero passou no teste"
//      c) Caso número dgitado eja -10, a mensagem não aparece porque avariavel mensagem esta no escopo do if.


// ESCRITA DE CÓDIGO

// EXERCICIO 4
        let idadeUsuario = Number(prompt("Digite sua idade:"));

        if (idadeUsuario >= 18) {
                console.log("Você pode dirigir!");
        } else {
                console.log("Você não pode dirigir!");
        }


// EXERCICIO 5   

        let turno = prompt("Digite o turno: M, T OU N");

        if (turno == "m" || turno == "M") {
                console.log("Bom dia!")
        } else if (turno == "t" || turno == "T") {
                console.log("Boa tarde!")
        } else {
                console.log("Boa noite!")
        }

// EXERCICIO 6 
        switch(turno) {
                case "M":
                        console.log("Bom dia!")
                        break
                case "T":
                        console.log("Boa tarde!")
                        break
                default:
                        console.log("Boa noite!")
                        break
        }       


// EXERCICIO 7 E DESAFIO 1

        let genero = prompt("Digite o gênero do filme:");
        let preco = Number(prompt("Digite o preço:"));
        let snack = prompt("Qual lanche você deseja comprar?")

        if (genero === "fantasia" && preco < 15) {
                console.log("Bom filme! com " + snack + " :)")
        } else {
                console.log("Escolha outro filme :(")
        }


// DESAFIO 2 

        let nome = prompt("Digite seu nome completo");
        let tipo = prompt("Digite o tipo: IN ou DO.");
        let etapa = prompt("Digite a etapa: SF, DT ou FI.");
        let cat = Number(prompt("Digite a categoria: 1, 2, 3 ou 4."));
        let qnt = Number(prompt("Digite a quantidade de ingressos:"));

        console.log("Nome do cliente: " + nome);
        console.log("-------- DADOS DA COMPRA --------")

         switch(tipo){
                case 'IN':
                        console.log("Tipo do jogo: Nacional");
                        break
                case 'DO':
                        console.log("Tipo de jogo: Doméstico");
                        break
                default:
                        console.log("Opção inválida.");
         }

         switch(etapa) {
                case 'SF':
                        console.log("Etapa do jogo: Semi-final");
                        break
                case 'DT':
                        console.log("Etapa do jogo: Decisão terceiro lugar");
                        break
                case 'FI':
                        console.log("Etapa do jogo: Final");
                        break
                default:
                        console.log("Por favor, escolha uma opção.");
         }

         switch(cat) {
                case 1:
                        console.log("Categoria: 1");
                        break
                case 2:
                        console.log("Categoria: 2");
                        break
                case 3:
                        console.log("Categoria: 3");
                        break;
                case 4:
                        console.log("Categoria: 4");
                        break
                default:
                        console.log("Opção inválida.")
         }

         console.log("Quantidade de ingressos: " + qnt);
         console.log("-------- VALORES --------")


         if (tipo === 'DO') {
                if (etapa === 'SF') {
                        if (cat === 1) {
                                let valor = 1.320
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)  
                        } else if (cat === 2) {
                                let valor = 880
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else if (cat === 3) {
                                let valor = 550
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else {
                                let valor = 220
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        }
        
                } else if (etapa === 'DT') {
                        if (cat === 1) {
                                let valor = 660
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else if (cat === 2) {
                                let valor = 440
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else if (cat === 3) {
                                let valor = 330
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else {
                                let valor = 170
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        }
                } else {
                        if (cat === 1) {
                                let valor = 1980
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else if (cat === 2) {
                                let valor = 1320
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else if (cat === 3){
                                let valor = 880
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        } else {
                                let valor = 330
                                let soma = qnt * valor
                                console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)
                        }
                }
        
         } else {
                if (etapa === 'SF') {
                        if (cat === 1) {
                                let valor = 1.320
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)  
                        } else if (cat === 2) {
                                let valor = 880
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else if (cat === 3) {
                                let valor = 550
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else {
                                let valor = 220
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        }
        
                } else if (etapa === 'DT') {
                        if (cat === 1) {
                                let valor = 660
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else if (cat === 2) {
                                let valor = 440
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else if (cat === 3) {
                                let valor = 330
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else {
                                let valor = 170
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        }
                } else {
                        if (cat === 1) {
                                let valor = 1980
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else if (cat === 2) {
                                let valor = 1320
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else if (cat === 3){
                                let valor = 880
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        } else {
                                let valor = 330
                                let soma = qnt * valor
                                console.log("Valor do ingresso: U$ " + valor + "\n Valor total: U$ " + soma)
                        }
                }
        
         }



         // aqui abaixo eu estava fazendo um código que resultaria em um código muito maior,
        // sem necessidade de tudo isso.

                //  if (etapa === 'SF' && cat === 1) {
        //          let valor = 1.320
        //          let soma = qnt * valor
        //          console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)       
        //  } else if (etapa === 'DT' && cat === 1) {
        //          let valor = 660
        //          let soma = qnt * valor
        //          console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)  
        //  } else if (etapa === 'FI' && cat === 1) {
        //          let valor = 1980
        //          let soma = qnt * valor
        //          console.log("Valor do ingresso: R$ " + valor + "\n Valor total: R$ " + soma)  
        //  }

        