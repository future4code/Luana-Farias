// Nome: Luana Farias da Silva

// --- INTERPRETAÇÃO DE CÓDIGO -------------------------------------------------------------------------------------------------
// 1. 

// a = 10
// b = 10

// console.log(b) // 10;

// b = 5
// console.log(a, b) // 10, 5;

// // 2.

// a = 10 //10
// b = 20 //20
// c = a //10
// b = c //10
// a = b //10

// console.log(a, b, c) // 10, 10, 10


// EXERCICIOS DE ESCRITA DE CÓDIGO --------------------------------------------------------------------------------------------

//1.
    let nome;
    let idade;

    console.log(typeof nome, idade);
    // Quando uma string não tem um valor, o JS não consegue identificar
    // automaticamente o tipo. É preciso ter uma string, um número ou um booleano.

    nome = window.prompt("Qual é o seu nome?")
    idade = window.prompt("Agora informe sua idade:")

    console.log(typeof nome, typeof idade); // string string
    // acredito que quando informamos os dados na janela através da digitação, 
    // o valor  atribuído são automaticamente "strings".

    console.log('Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos.')


//.2 
    let filme = window.prompt("Qual é seu filme favorito?")
    console.log('1. Qual é seu filme favorito? \n' + filme)

    let cor = window.prompt("Qual é sua cor favorita?")
    console.log('2. Qual é sua cor favorita?\n' + cor)

    let comida = window.prompt("Qual é sua comida favorita?")
    console.log('3. Qual é sua comida favorita?\n' + comida)

    let musica = window.prompt("Qual é sua musica favorita?")
    console.log('4. Qual é sua musica favorita?\n' + musica)

    let livro = window.prompt("Qual é seu livro favorito?")
    console.log('5. Qual é seu livro favorito?\n' + livro)


//.3 
    let comidas = ["Pizza de brócolis", "Jaca", "Bolo de cenoura", "Banana com pasta de amendoim", "Hambúrguer"]
    console.log('Essas são minhas comidas favoritas:\n' + comidas[0] + '\n' + comidas[1] + '\n' + comidas[2] + '\n' + comidas[3] + '\n' + comidas[4]);

    comidas[1] = window.prompt("Fale uma comida para subtituir Jaca:")
    console.log('Essas são minhas comidas favoritas:\n' + comidas[0] + '\n' + comidas[1] + '\n' + comidas[2] + '\n' + comidas[3] + '\n' + comidas[4]);


//4.
    let perg = ["a) O céu é azul?", "b) A terra é quadrada?", "c) O avião voa?"]
    let res = [true, false, true]
    console.log(perg[0], res[0], perg[1], res[1], perg[2], res[2])



