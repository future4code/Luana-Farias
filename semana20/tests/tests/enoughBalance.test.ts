import { performPurchase } from '../src/index'

describe("Testando se o saldo é suficiente", () => {
    test("O saldo deve ser maior que o valor da compra.", () => {
        const balance = performPurchase({name: "Lua", balance: 10},10)
        const result = expect(balance).toBeTruthy()
        console.log(`O resultado deveria ser ${result}, mas veio ${balance}`)
    })

    test("Saldo igual ao valor da compra", () => {
        const balance = performPurchase({name: "Lua", balance: 10},10)
        console.log(balance)
    })
})


