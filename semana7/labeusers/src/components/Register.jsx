import React from 'react'
import styled from 'styled-components'

const Cadastro = styled.div`
width: 40%;
height: 40%;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color:red; */
`

const Divs = styled.div`
width: 100%;
/* background-color:red; */
align-items: center;
text-align: center;`

const Inputs = styled.input`
width:90%;
height: 30px;
margin: 3%;
border: none;
color: hotpink;
font-size: 1em;
border-bottom: 2px solid black;
outline: none;
`

const Button = styled.button`
width: 80px;
height: 30px;
margin: 2%;
cursor: pointer;
background-color: none;
`

export default class Register extends React.Component {

  
    render() {
        return (
            <Cadastro>
                <Divs>
                    <label htmlFor="inputName">Nome:</label>
                    <Inputs 
                    id="inputName" 
                    value={this.props.inputName} 
                    placeholder="Digite seu nome"
                    name="inputName"
                    onChange={this.props.onChangeInput}
                /> 
                </Divs>

                <Divs>
                    <label htmlFor="inputEmail">E-mail:</label>
                    <Inputs 
                    id="inputEmail" 
                    value={this.props.inputEmail} 
                    placeholder="Digite seu e-mail"
                    name="inputEmail"
                    onChange={this.props.onChangeInput}
                    />
                </Divs>

                <Divs>
                    <Button onClick={() => this.props.createRegister()}>Enviar</Button>

                    <Button onClick={() => this.props.goToListPage()}>Cadastros</Button>
                </Divs>
            </Cadastro>
        )
    }
}