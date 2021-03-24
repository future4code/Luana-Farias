import React from 'react'
import styled from 'styled-components'

const Body = styled.body`
text-align: center;` 

const Lista = styled.div`
width: 300px;
height: 40px;
border: 2px dotted hotpink;
margin: 10px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;`

const Button = styled.button`
width: 100px;
height: 40px;
cursor: pointer;
`

export default class UserList extends React.Component {
    render() {
    
        const namesList = this.props.registerList.map((person) => {
            return (
                <Lista key={person.id}>{person.name} {person.email} <button onClick={() => this.props.deleteUser(person.id)}>X</button></Lista>
            )
        })

  

        return (
            <Body>
                <h3>Cadastros</h3>
                {/* <input 
                name="inputBusca" 
                value={this.props.inputBusca} 
                placeholder="Busque pelo nome"
                onChange={this.props.onChangeInput}/>
                <Button onClick={() => this.props.searchUser()}>Busca</Button> */}

                {namesList}
              

                <Button onClick={() => this.props.goToListPage()}>Voltar</Button>

                <p>Usuários cadastrados: {namesList.length}</p>
            </Body>
        )
    }
}