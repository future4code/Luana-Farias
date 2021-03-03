

         console.log("Bem vindo ao jogo BlackJack!")

    // input usuário
         let novaRodada = confirm("Quer iniciar uma nova rodada?")
    // comprar carta
         let novaCompra = comprarCarta();
   // container para armazenar cartas jogadas pelo usuário
         let cartas = [];
    // pontos usuário
         let points = 0;
   // container para armazenar cartas jogadas pela máquina
         let cartasPc = []
    // pontos máquina
         let pointsPc = 0;

   

   // verifica se o usuário clica ok para iniciar o jogo
      if (novaRodada) {
         while (novaRodada) {
            // compra do usuário
            novaCompra = comprarCarta();
            cartas.push(novaCompra.texto);
            points += novaCompra.valor
            // compra da máquina
            novaCompra = comprarCarta();
            cartasPc.push(novaCompra);
            pointsPc += novaCompra.valor
               // verifica se as duas cartas iniciais são Ases, se diferentes, jogo inicia
               if (cartas[0] !== cartasPc[0]) {
               //revelação das cartas
               console.log("Suas cartas são ---->  " + cartas + ". || A carta revelada do computador é " + novaCompra.texto)
                // verifica se as duas cartas iniciais são Ases, se iguais, novo sorteio é feito
               } else if (cartas[0] === cartasPc[0]) {
                  console.error("Ops! As duas primeiras cartas são Ases.")
                  novaRodada = confirm("Novo sorteio?")
               } 

                  // finaliza o jogo quando algum dos jogadores atinge 21 pontos
                  if (points < 21 || pointsPc < 21) {
                     novaRodada = confirm("Deseja comprar mais uma carta?")
                     } else if (pointsPc > points) {
                        console.error("Você perdeu :(");
                        console.log("O computador fez " + pointsPc + " pontos.")
                        break
                     } else if (points > pointsPc) {
                        console.warn("Você ganhou!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                        console.log("Parabéns, fez " + points + " pontos.")
                        break
                     }

            } 
      // acaba o jogo se o usuário clica em cancelar  
      } else if(!novaRodada) {
         console.log("O jogo acabou :(")
      }