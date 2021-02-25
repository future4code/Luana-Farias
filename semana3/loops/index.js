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

// EXERCICIO 3
//a)
        let arrayOriginal = [10,35,42,50,73,85,100];
                for (let i = 0; i < arrayOriginal.length; i++){
                        console.log(arrayOriginal[i])
                }

//b)      
        for (let x = 0; x < arrayOriginal.length; x++){
                console.log(arrayOriginal[x] / 10)
        }


//c) 


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

      
        let position = 0;

        for (let count = 0; count < arrayOriginal.length; count++){
                if (arrayOriginal[count] > position){
                        position = arrayOriginal[count];
                        console.log("O elemento do index " + count + " é igual a: " + position) 
                }
        }
           


// e)

        let valorMaximo = 0;
        // valorMinimo = arrayOriginal[0];
        let valorMinimo = arrayOriginal[0];
        let contador = 0;

        for (let contador = 0; contador < arrayOriginal.length; contador++){
                if (arrayOriginal[contador] > valorMaximo){
                        valorMaximo = arrayOriginal[contador];
                }
               
        }
        console.log("O elemento do index " + contador + "é igual a: " + valorMaximo)
        



       