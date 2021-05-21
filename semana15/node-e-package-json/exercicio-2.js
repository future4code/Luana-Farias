
const operacao = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

switch(operacao) {
    case "soma":
        const res = n1 + n2
        console.log("Resposta:", res)
        break
    case "sub":
        const subs = n1 - n2
        console.log("Resposta:", subs)
        break
    case "mult":
        const multr = n1 * n2
        console.log("Resposta:", multr)
        break
    case "div":
        const divs = n1 / n2
        console.log("Resposta:", divs)
        break
}
