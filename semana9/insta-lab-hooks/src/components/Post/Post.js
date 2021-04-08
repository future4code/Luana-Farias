import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [iconeCurtida, setIconeCurtida] = useState(false)
  const [contadorCurtidas, setContadorCurtidas] = useState(0)
  const [comentario, setComentario] = useState(false)
  const [arrayComentarios, setArrayComentarios] = useState([])
  const [contadorComentarios, setContadorComentarios] = useState(0)


  const onClickCurtida = () => {
    if(!iconeCurtida) {
      setIconeCurtida(true)
      setContadorCurtidas(contadorCurtidas +1)
    } else {
      setIconeCurtida(false)
      setContadorCurtidas(contadorCurtidas -1)
    }
    console.log(iconeCurtida)
  };

  const onClickComentario = () => {
    if(!comentario) {
      setComentario(true)
    } else {
      setComentario(false)
    }
    console.log("entrou")
  };

  // const aoApertarEnter = (e, coment) => {
  //   if(e.key === 'Enter') {
  //     return enviarComentario(coment)
  //   }
  // }

  const enviarComentario = (coment, setComent) => {
    const novoArrayComentarios = [...arrayComentarios, coment]
    setArrayComentarios(novoArrayComentarios)
    setComent("")
    setContadorComentarios(arrayComentarios.length +1)
    console.table(arrayComentarios)
  }

  const caixaDeComentario = arrayComentarios.map(item => <CommentContainer><p>{item}</p></CommentContainer>)

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={contadorCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={contadorComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
      {comentario ? <SecaoComentario enviarComentario={enviarComentario}/> : ""}
      
    </PostContainer>
  )
}

export default Post