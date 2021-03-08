function criarPost() {
//elementos html
let tituloPost = document.getElementById("titulo-post")
let autorPost = document.getElementById("autor-post")
let conteudoPost = document.getElementById("conteudo-post")
let imagemPost = document.getElementById("link-post")

//objeto post
let post = {
    titulo: tituloPost.value,
    autor: autorPost.value,
    conteudo: conteudoPost.value,
    imagem: imagemPost.value
}

//coloca posts em um array
let arrayObjetos = []
    arrayObjetos.push(post)

// insere post no html
let containerDePosts = document.getElementById("container-de-posts")
    containerDePosts.innerHTML += `<section class="posts"><h1 class="titulo">${post.titulo}</h1> <div class="autor">Por: ${post.autor}</div> <img class="img" src="${post.imagem}"> <p class="conteudo">${post.conteudo}</p></section>` 

    //limpa formulario
    tituloPost.value = "";
    autorPost.value = "";
    imagemPost.value = "";
    conteudoPost.value = "";


}


