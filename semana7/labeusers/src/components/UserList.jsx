import React from 'react'
import styled from 'styled-components'
import Detalhes from "./Detalhes"

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
padding: 15px;
cursor:pointer;`

const Button = styled.button`
width: 100px;
height: 40px;
cursor: pointer;
`

export default class UserList extends React.Component {

    state = {
        page: "user",
        id: ""
    }

  changePage =(userId) => {
      if(this.state.page === "user") {
          this.setState({ page: 'list', id: userId}) //2. peguei esse id que chegou como parametro e atualizei o this.state.id com o valor desse parâmetro.
        } else {
        this.setState({ page: 'user', id:""})

      }  
    //   console.log("o estado: ",this.state.page) 
  }



    render() {

        const namesList = this.props.registerList.map((person) => {
            return (
                <Lista onClick={() => this.changePage(person.id)} //1. enviei o id como parâmetro para a função
                key={person.id}>
                    {person.name} {person.email} 
                <button onClick={() => this.props.deleteUser(person.id)}>X</button>
                </Lista>
            )
        })

        return (
            <Body>
                <h3>Cadastros</h3>
                <input 
                name="inputBusca" 
                value={this.props.inputBusca} 
                placeholder="Busque pelo nome"
                onChange={this.props.onChangeInput}/>


                {this.state.page === 'user' 
                ? namesList 
                : <Detalhes 
                changePage={this.changePage} //3. enviei para page Detalhes a função changePage como props.
                userId={this.state.id}      //4. enviei a id do estado (this.state.id) para a page detalhes.
                />}
                
                
                <Button onClick={() => this.props.goToListPage()}>Voltar</Button>

                <p>Usuários cadastrados: {namesList.length}</p>
            </Body>
        )
    }
}