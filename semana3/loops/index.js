//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// EXERCÍCIO 1

//Esse código está incrementando 1 a cada loop, até chegar >5. Logo, ele imprime o numero 1 até o 5.

//EXERCÍCIO 2

// Esse código irá imprimir todos os numeros do array que são menores que 18. 
// b) Sim, é possivel pegar apenas o indice atraves do seguinte código:
                                        // let i = 0;
                                        // for (let numero of lista){
                                        //         console.log("index " + i)
                                        //         i++;
                                        //                 }

//DESAFIO 1
// Esse código imprime 4 linhas com 4 asteriscos em cada linha.

// EXERCICIO 3
//a)
        console.log("----- EXERCÍCIO 3 -----")
        console.log("a) --------------------")

        let arrayOriginal = [10,35,42,50,73,85,100];
                for (let i = 0; i < arrayOriginal.length; i++){
                        console.log(arrayOriginal[i])
                }

//b)     
        console.log("b) --------------------")

        for (let x = 0; x < arrayOriginal.length; x++){
                console.log(arrayOriginal[x] / 10)
        }


//c) 
        console.log("c) --------------------")

        // let novoArray = [];

        // for (let y = 0; y < arrayOriginal.length; y++){
        //         if(arrayOriginal[y] % 2 == 0) {
        //                 novoArray = arrayOriginal[y]  //aqui apenas atribui aposiçao ao novo array
        //                 console.log("Par: " + novoArray) // e o console estiiver aqui, ele vai imprimir todos os loops. contador precista estar fora.
        //         }
        // }


        let novoArray = [];

        for (let y = 0; y < arrayOriginal.length; y++){
                if(arrayOriginal[y] % 2 == 0) {
                        novoArray.push(arrayOriginal[y]) 
                }
        }
        console.log("Par: " + novoArray)

//d)
        console.log("d) --------------------")
      
        let position = [];

        for (let count = 0; count < arrayOriginal.length; count++){
                if (arrayOriginal[count] > position.length){  //eu esava errando no position pq não botava o length.
                        position.push("O elemento do index " + count + " é " + arrayOriginal[count])
                }
        }
        console.log(position);
        

           


// e)
        console.log("e) --------------------")

        let valorMaximo = 0;
        let valorMinimo = arrayOriginal[0];
        let contador = 0;

        for (let contador = 0; contador < arrayOriginal.length; contador++){
                if (arrayOriginal[contador] > valorMaximo){
                        valorMaximo = arrayOriginal[contador];
                } else if (arrayOriginal[contador] < valorMinimo){  //se colocar o else if aqui, é possivel colocaruma condição. se for só o else, não é possivel colocar condição.
                        valorMinimo = arrayOriginal[contador];
                }
               
        }
        console.log("O maior número é: " + valorMaximo)
        console.log("O menor número é: " + valorMinimo)


// DESAFIO 2
        console.log("----- DESAFIO 1 -----")
        console.log("----- JOGADOR CONTRA JOGADOR -----")

        let jogador1 = Number(prompt("JOGADOR 1: Digite um número!"));
                console.log("Vamos jogar!")
        let jogador2 = Number(prompt("JOGADOR 2: Digite um número!"));
        let tentativas = 0;

        while (jogador2 !== jogador1){
                console.log("O numero chutado foi: " + jogador2)
                if (jogador1 < jogador2) {
                        console.log("Errou! é menor!")
                        tentativas++;
                } else if (jogador1 > jogador2){
                        console.log("Errou! é maior!")
                        tentativas++; 
                }
                jogador2 = Number(prompt("JOGADOR 2: Digite um número!"));
                        if(jogador1 === jogador2) {
                                console.log("Acertou!!!!")
                                console.log("Número de tentativas: " + tentativas)
                        }
        }

        


//DESAFIO 3
        console.log("----- DESAFIO 2 -----")
        console.log("----- JOGADOR CONTRA MÁQUINA -----")

        let pc = Math.floor(Math.random() * 10) + 1;
        let jogadorHumano = Number(prompt("Digite um número de 1 a 10:"));
        let tentativasUsuario = 0;

        console.log("Vamos jogar!");

        while (pc !== jogadorHumano){
                console.log("O número chutado foi: " + jogadorHumano);
                if (jogadorHumano > pc) {
                        console.log("Errou!! É menor");
                        tentativasUsuario++;
                } else if (jogadorHumano < pc){
                        console.log("Errou!! É maior");
                        tentativasUsuario++;
                } 
                jogadorHumano = Number(prompt("JOGADOR 2: Digite um número!"));
                        if (jogadorHumano === pc){
                        console.log("Você acertou!!");
                        console.log("Número de tentativas: " + tentativasUsuario);
                }

        }




        // TENTATIVAS MAL SUCEDIDAS -------------------------------------------------


        // if (jogador1 === jogador2){
        //         console.log("O numero chutado foi: " + jogador2)
        //         console.log("Acertou!!")
        // } else if (jogador1 !== jogador2) {
        //         console.log("O numero chutado foi: " + jogador2)
        //         console.log("Errou!")
        //         if (jogador1 > jogador2) {
        //                 console.log("Errou! é menor!")
        //         } else if (jogador1 < jogador2){
        //                 console.log("Errou! é maior!")
        //         }
        // }





        // for (let i = 0; i !== jogador1; i++){
        //         console.log("O número chutado foi " + jogador2)
        //         if (jogador1 > jogador2) {
        //                 console.log("Errou! é menor!")
        //         } else if (jogador1 < jogador2){
        //                 console.log("Errou! é maior!")
        //         }
        //       }



        // i = 0;
        // while (jogador1 !== jogador2) {
        //         console.log("O número chutado foi " + jogador2)
        //         if (jogador1 > jogador2) {
        //                 console.log("Errou! é menor!")
        //         } else if (jogador1 < jogador2){
        //                 console.log("Errou! é maior!")
        //         }
        //         i++
        // }
        
        



       