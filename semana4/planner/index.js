//---------------------------------------------- CÓDIGO COM FOR (funciona) ------------------------------------------------
let dias = document.getElementById("dias-semana")

function criarTarefa(){

    let tarefa = document.getElementById("tarefa")
    let dias = document.getElementById("dias-semana")
    let semana = document.querySelectorAll(".semana > div")

        //impede de colocar
    if(tarefa.value === "") {
        alert("Digite uma tarefa válida")
    }
    
         for(i=0; i<semana.length; i++){
            if(dias.value === semana[i].id){
                semana[i].innerHTML += `<li onclick="riscar(this)">${tarefa.value}</li>`
                break
            }
                }
        tarefa.value = ""
    }
    
    function riscar(){
    let lista = document.querySelectorAll("li")
            for(j=0; j<lista.length; j++) {
                for(let diaSemana of lista){
                    diaSemana[lista]
                    console.log(diaSemana[lista])
                }
                lista[j].style = "text-decoration: line-through"
                console.log(lista[j])
            }   
    }

    // function riscar(){
    //     let lista = document.querySelectorAll("li")
    //                 for(let diaSemana of lista){ 
    //                     console.log(lista)
    //                     if(diaSemana[lista] === diaSemana[lista]){
    //                         diaSemana.style = "text-decoration: line-through"
    //                         // console.log(diaSemana)
    //                         console.log("oi")
    //                     }
    //                 }  
    //     }






//------------------------------------------- CÓDIGO COM SWITCH (funciona) --------------------------------------------
// function criarTarefa(){
//     let tarefa = document.getElementById("tarefa")
//     let dias = document.getElementById("dias-semana")

//     //impede de colocar
//     if(tarefa.value === "") {
//         alert("Digite uma tarefa válida")
//     }
//     //verifica o dia da semana selecionado no <select>
//     switch(dias.value) {
//         case "domingo":
//             let domingo = document.getElementById("domingo")
//             domingo.innerHTML+=`<li onclick="riscarTarefa(this)"> ${tarefa.value} </li>`
//             break 

//         case "segunda":
//             let segunda = document.getElementById("segunda")
//             segunda.innerHTML+=tarefa.value
//             break 

//         case "terca":
//             let terca = document.getElementById("terca")
//             terca.innerHTML+=tarefa.value
//             break

//         case "quarta":
//             let quarta = document.getElementById("quarta")
//             quarta.innerHTML+=tarefa.value
//             break

//         case "quinta":
//             let quinta = document.getElementById("quinta")
//             quinta.innerHTML+=tarefa.value
//             break

//         case "sexta":
//             let sexta = document.getElementById("sexta")
//             sexta.innerHTML+=tarefa.value
//             break

//         case "sabado":
//             let sabado = document.getElementById("sabado")
//             sabado.innerHTML+=tarefa.value
//             break
//     }
//     //limpa o campo
//     tarefa.value = ""
// }

// function riscarTarefa(){
//     const riscado = document.getElementsByTagName("li")
// }
