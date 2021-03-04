let arrDespesas = [] //guarda o array com as listas de despesas que serão renderizadas na div "despesas" do HTM
imprimirDespesas(arrDespesas) //invoca a função imprimirDespesas. Essa função recebe como parâmetro a variável arrDespesas
imprimirExtrato() 


// PRIMEIRO 
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((item) => {
        divDespesas.innerHTML += `<p> Valor: ${item.valor} | Tipo: ${item.tipo} | Descrição: ${item.descricao}`
    })
}


// SEGUNDO
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.filter((items) => {
        if(items.tipo === "alimentação"){
            gastoAlimentacao += items.valor
        } else if (items.tipo === "utilidades") {
            gastoUtilidades += items.valor
        } else {
            gastoViagem += items.valor
        }

        gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem
    })


    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa) //cria objeto nova despesa com os valores das despesas e add no arrDespesas em branco la em cima
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


    let despesasFiltradas = arrDespesas.filter((tiposFiltrados) => {
        if (tiposFiltrados.tipo === "alimentação") {
            despesasFiltradas += tiposFiltrados.tipo
            console.log(despesasFiltradas)
        }
    })

    imprimirDespesas(despesasFiltradas)
}

// if (tiposFiltrados.valor  >= valorMin && tiposFiltrados.valor <= valorMax) {
//     despesasFiltradas += `Valor: ${tiposFiltrados.valor} | Tipo: ${tiposFiltrados.tipo} | Descrição: ${tiposFiltrados.descricao}`
// }





// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas ---> HELPERS

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}