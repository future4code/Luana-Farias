
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
     if (user1.texto == "A" && user2.texto == "A" || pc1.texto == "A" && pc2.texto == "A" ){
        console.log("Cartas iguais. Novo sorteio...")
        novaRodada = confirm("Novo sorteio?")
     }
     while (novaRodada) {
        // compra do usuário
        novaCompra = comprarCarta();
        cartas.push(novaCompra.texto);
        points += novaCompra.valor
        // compra da máquina
        novaCompra = comprarCarta();
        pointsPc += novaCompra.valor
        //revelação das cartas
        console.log("Suas cartas são:  " + cartas + ". A carta revelada do computador é " + novaCompra.texto)
        
        if (points < 21 || pointsPc < 21) {
           novaRodada = confirm("Deseja comprar mais uma carta?")
         } else if (pointsPc > points) {
            console.log("Você perdeu!")
         } else if (points > pointsPc) {
            console.log("Você ganhou")
            console.log("Parabéns, fez " + points + " pontos.")
            break
         }

      }
         
   }