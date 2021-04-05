import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {

	const [inputComentario, setInputComentario] = useState("")

	const onChangeComentario = (e) => {
		setInputComentario(e.target.value)
	}

	const aoApertarEnter = (e) => {
		if(e.key === 'Enter') {
		  return props.enviarComentario(inputComentario, setInputComentario)
		}
	  }

	return (
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputComentario}
				onChange={onChangeComentario}
				onKeyDown={aoApertarEnter}
			/>
			<button 
			onClick={() => { props.enviarComentario(inputComentario, setInputComentario) }} 
			>Enviar</button>
		</CommentContainer>
	)
}


export default SecaoComentario