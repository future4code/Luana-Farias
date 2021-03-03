//EXERCÍCIO 1

// a) será impresso respectivamente: 10 e 50;
// b) A função seria executada mas não seria impressa no console.

// EXERCÍCIO 2

// a) As saídas são "Darvas" e "Caio impressos no console porque o for pede pro i percorrer apenas 2 índices. 
// E como já tem o console.log no for, não precisa chamar a função com o console.log em baixo.

// b) será impresso "Amanda", "Caio"

// EXERCÍCIO 3

// a) Essa função pega o valor do parâmetro, pega os elementos de dento desse parâmetro, verifica se
// o resto da divisão desses elementos é 0, o que os torna par, e depois coloca dentro de um array vazio arrayFinal e multiplica esse valor por ele mesmo.
// o retorno é o novo array apenas com os números pares.
// Sugestão de nome: findEvenNumbers

// EXERCÍCIO 4
// a)
function aboutMe() {
        console.log("Eu sou Luana, e amo comer pizza de brócolis.")
}

aboutMe();

// b)

function thingsAboutMe(name, age, city, isStudent){
        if(isStudent) {
                isStudent = "sou"
        } else {
                isStudent = "não sou"
        }
        return "Eu sou " + name + ", tenho " + age+" anos, moro em " + city + " e " + isStudent + " estudante.";
}

console.log(thingsAboutMe("Marta", 32, "Rio de Janeiro", false));
console.log(thingsAboutMe("João", 18, "Porto Alegre", true));

// EXERCÍCIO 5

// a) 
function sum(num1, num2){
        return num1 + num2;
}

console.log(sum(10,5));

// b) 
function returnBiggerNumber(n1,n2){
        return n1 >= n2 
}
console.log(returnBiggerNumber(5,15));

// c) 
function printTenTimes(sentence){
        for(i=0; i<10; i++){
        console.log(sentence)
        }
        return sentence;
}
printTenTimes("Oi! Eu sou impresso 10 vezes!")

// EXERCÍCIO 6

const numbers = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// a)
function arrayLength(array){
        return array.length
}
console.log("A quandidade de elementos do array é: ", arrayLength(numbers));

// b)
function isEvenNumber(num){
        return num % 2 === 0 
}
console.log(isEvenNumber(12));

// c)
function returnEvenNumbers(evenNumbers){
        let res = []
        for (let even of evenNumbers){
                if (even  % 2 === 0){
                        res.push(even)
                }      
        }
        return res;
}
console.log(returnEvenNumbers(numbers));

// d)
function isEvenNumberTwo(evenNumbersTwo){
        return isEvenNumber(evenNumbersTwo);
}
console.log(isEvenNumberTwo(12))

// DESAFIOS

// desafio 1
// 1)
print = printParameter => console.log(printParameter)
print("Fui impresso com uma arrow function!")

// 2)
noReturnFunction = (a,b) => a + b
console.log(noReturnFunction(10,15));

// desafio 2
//a)

const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
let evenNumbersMultiplied = []

evenMultiplication = parameter => {
        let multiply = returnEvenNumbers(parameter);   
                for(let conteudo of multiply){
                evenNumbersMultiplied.push = conteudo * 2
                console.log(evenNumbersMultiplied)
        }  
        return evenNumbersMultiplied;
}
evenMultiplication(numeros)


// nesse exercicio eu reutilizo a função returnevenNumbers que pega os pares
// de um array e retorna coloca em um novo array.











