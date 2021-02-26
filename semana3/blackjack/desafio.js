/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    console.log("Bem vindo ao jogo BlackJack!")

    let user1 = comprarCarta();
    let user2 = comprarCarta();

    let pc1 = comprarCarta();
    let pc2 = comprarCarta();

    let res1 = user1.valor + user2.valor;
    let res2 = pc1.valor + pc2.valor;

    let novaCompra = comprarCarta();

    let novaRodada = confirm("Quer iniciar uma nova rodada?")

    let points = 0;
    let pointsPc = 0;
    let cartas = [];
    let cartaspc;


    if(!novaRodada) {
      console.log("O jogo acabou :(")
   } else if (novaRodada) {
     while (novaRodada) {
        // compra do usuário
        novaCompra = comprarCarta();
        cartas.push(novaCompra.texto);
        points += novaCompra.valor
        // compra da máquina
        novaCompra = comprarCarta();
        pointsPc += novaCompra.valor

        if (points !== pointsPc) {
       //revelação das cartas
        console.log("Suas cartas são ---->  " + cartas + ". || A carta revelada do computador é " + novaCompra.texto)

        } else {
         console.error("Cartas iguais. Novo sorteio...")
         novaRodada = confirm("Novo sorteio?")
        }

        
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
         
   }
   
   // else if (user1.texto == "A" && user2.texto == "A" || pc1.texto == "A" && pc2.texto == "A" ){
   // //    console.log("Cartas iguais. Novo sorteio...")
   // //    novaRodada = confirm("Novo sorteio?")
   // // }
     
     

    
   
   //  if(!novaRodada) {
   //     console.log("O jogo acabou :(")
   //  } else if (novaRodada) {
   //    console.log("Suas cartas são: " + novaCompra.texto + " | " + novaCompra.texto + " | " + "A carta revelada do computador é: " + pc1.texto + "\n Deseja comprar mais uma carta?")
   //    if (user1.texto == "A" && user2.texto == "A" || pc1.texto == "A" && pc2.texto == "A" ){
   //       console.log("Cartas iguais. Novo sorteio...")
   //       novaRodada = confirm("Novo sorteio?")
   //    }
   //    while (novaRodada) {
   //       novaCompra = comprarCarta();
   //       cartas.push(novaCompra.texto);
   //       console.log("Suas cartas são:  " + cartas + "  ")
   //       points += novaCompra.valor
   //       if (points < 21) {
   //          novaRodada = confirm("Deseja comprar mais uma carta?")
   //       } else {
   //          console.log("Você ganhou")
   //          break
   //       }
         
   //    }
   //    console.log("Parabéns, fez " + points + " pontos.")
       

   //    }


      // let i=0;
      // while (novaRodada) {
      //    novaCompra = comprarCarta();
      //    cartas.push(novaCompra)
      //    i++
      // }
      

    

   //  if(!novaRodada) {
   //    console.log("O jogo acabou.")
   //  } else {
   //    console.log("Suas cartas são: " + user1.texto + " | " + user2.texto + " | " + "A carta revelada do computador é: " + pc1.texto)
   //    novaRodada = confirm("Deseja comprar mais uma carta?")
   //    console.log("Cartas da máquina: " + pc1.texto + " | " + pc2.texto + " | " + "Pontuação: " +  res2)
   //    if (res1 >res2) {
   //       console.log("Você ganhou!")
   //    } else if (res1 === res2){
   //       console.log("Deu empate! Jogue uma nova rodada!")
   //    } else {
   //       console.log("Você perdeu :(")
   //    }
   //  }