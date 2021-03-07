//Exercício 1
let meuArray = [0, 8, 23, 16, 10, 15, 41, 12, 13]

function inverteArray(array) {
   return array.reverse()
}
inverteArray(meuArray)



//Exercício 2

function retornaNumerosParesElevadosADois(array) {
   let mult = []
   array.filter((valor) => {
      if (valor % 2 === 0) {
         mult.push(Math.pow(valor, 2))
      }
   })
   //  console.log("Questão 2: ", mult)   //RESULTADO NO CONSOLE
   return mult
}


// function retornaNumerosParesElevadosADois (array) {
//    array.filter((valor) => {
//       if(valor % 2 === 0) {
//          return valor ** 2
//       }
//    })
// }





//Exercício 3

function retornaNumerosPares(array) {
   let pares = []
   array.filter((valor) => {
      if (valor % 2 === 0) {
         pares.push(valor)
      }
   })
   //  console.log("Questão 3: ", pares)  //RESULTADO NO CONSOLE
   return pares
}




//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNum = 0;
   array.filter((num) => {
      if (num >= maiorNum) {
         maiorNum = num
      }
   })
   // console.log( "Questão numero 4: ", maiorNum)   //RESULTADO NO CONSOLE
   return maiorNum
}


//Exercício 5

function retornaQuantidadeElementos(array) {
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   const resultados = [false, false, true, true, true]
   return resultados
}

//Exercício 7

function retornaNNumerosPares(n) {
   let nPares = []
   for (let i = 0; i < n; i++) {
      nPares.push(i * 2)
   }
   // console.log(nPares)   // RESPOSTA NO CONSOLE
   return nPares
}



// function retornaNNumerosPares(n) {
// let nPares = []
// for(let i=0; i<n; i++){
//    if(i % 2 === 0) {
//       nPares.push(i)
//    }
// }
// console.log(nPares)
// return nPares
// }


// Exercício 8

function checaTriangulo(a, b, c) {
   //   if(a === b && c === b) {
   //      return "Equilátero"
   //   } else if (a !== b  )
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let objeto = { maiorNumero: 0, maiorDivisivelporMenor: 0, diferenca: 0 }

   if (num1 > num2) {
      objeto.maiorNumero = num1
      objeto.maiorDivisivelporMenor = verificaNum(num1, num2)
      objeto.diferenca = num1 - num2
      return objeto;

   } else if (num2 > num1) {
      objeto.maiorNumero = num2
      objeto.maiorDivisivelporMenor = verificaNum(num2, num1)
      objeto.diferenca = num2 - num1
      }
      // console.log(objeto)   // RESPOSTA NO CONSOLE
      return objeto;
   }

   function verificaNum (a, b){
      return a % b === 0
   }
   


// function comparaDoisNumeros(num1, num2) {
//    let objeto = [{ maiorNumero: 0, maiorDivisivelporMenor: 0, diferenca: 0 }]

//    if (num1 > num2) {
//       objeto.forEach((item) => {
//          item.maiorNumero = num1
//          if (item.maiorNumero % num2 === 0) {
//             item.maiorDivisivelporMenor = true
//          } else {
//             item.maiorDivisivelporMenor = false
//          }
//          item.diferenca = num1 - num2
//       })
//       return objeto[0];

//    } else if (num2 > num1) {
//       objeto.forEach((item) => {
//          item.maiorNumero = num2
//          if (item.maiorNumero % num1 === 0) {
//             item.maiorDivisivelporMenor = true
//          } else {
//             item.maiorDivisivelporMenor = false
//          }
//          item.diferenca = num2 - num1
//       })
//    }
//    // console.log(objeto[0])   // RESPOSTA NO CONSOLE
//    return objeto[0];
// }



// Exercício 10

function segundoMaiorEMenor(array) {
   let menorNum = Math.min(...array)  //pega o menorNum número
   let maiorNum = Math.max(...array)  // pega o maiorNum número
   array.splice(array.indexOf(maiorNum), 1) //tira o maiorNum número do array original
   array.splice(array.indexOf(menorNum), 1) //tira o menorNum número do array original
   let segundoMenor = Math.min(...array) //pega o menorNum número que restou no array (ele se torna o segundo maiorNum quando tira o maiorNum que ele)
   let segundoMaior = Math.max(...array) // pega o maiorNum número que restou no array
   let novoArray = array.filter((numero) => { // filtra os numeros e tira todos que não são igual ao segundoMenor e segundoMaior
      return numero === segundoMenor || numero === segundoMaior
   })
   // console.log(novoArray.reverse)   // RESPOSTA NO CONSOLE
   return novoArray.reverse() //reverte o array
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   let filme =
      {nome: "O Diabo Veste Prada",
      ano: 2006,
      diretor: "David Frankel",
      atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
      }
      return filme
}

// Exercício 13

function imprimeChamada() {
   let filme =
   {nome: "O Diabo Veste Prada",
   ano: 2006,
   diretor: "David Frankel",
   atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
   { nome: "Pedro", idade: 20 },
   { nome: "João", idade: 10 },
   { nome: "Paula", idade: 12 },
   { nome: "Artur", idade: 89 }
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
   { nome: "Paula", idade: 12, altura: 1.8 },
   { nome: "João", idade: 20, altura: 1.3 },
   { nome: "Pedro", idade: 15, altura: 1.9 },
   { nome: "Luciano", idade: 22, altura: 1.8 },
   { nome: "Artur", idade: 10, altura: 1.2 },
   { nome: "Soter", idade: 70, altura: 1.9 }
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
   { nome: "João", genero: "masculino", cancelada: false, dataDaConsulta: "01/10/2019" },
   { nome: "Pedro", genero: "masculino", cancelada: true, dataDaConsulta: "02/10/2019" },
   { nome: "Paula", genero: "feminino", cancelada: false, dataDaConsulta: "03/11/2019" },
   { nome: "Márcia", genero: "feminino", cancelada: true, dataDaConsulta: "04/11/2019" }
]

function retornaEmailConsulta() {
   // implemente sua lógica aqui
}

//Exercício 20

const contas = [
   { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
   { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
   { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
   { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
   { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
   { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   // implemente sua lógica aqui
}