// para passar parâmetros pra linha de comando do node basta digitar o comando - npm run nomeDoComando argumentos -,

const name = process.argv[2]
const age = process.argv[3]
const newAge = Number(process.argv[3]) + 7

console.log(`Olá, ${name}. Você tem ${age} anos. Em sete anos você terá ${newAge} anos.`)
