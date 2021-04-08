import axios from 'axios';
import React from 'react';
import Register from './components/Register'
import UserList from './components/UserList'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display:flex;
  justify-content: center;
  align-items:center;
  font-size: 1.3em;` 


class App extends React.Component {

  state = {
    actualPage: false,
    inputName: "",
    inputEmail: "",
    inputBusca: "",
    registerList: []
  }

  componentDidMount = () => {
    this.getNameList()
  }

  goToListPage = () => {
    this.setState({ actualPage: !this.state.actualPage })
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })

    // console.table(this.state.registerList)
  }



  getNameList = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
    {
      headers: {
        Authorization: "luana-farias-cruz"
      }
    }).then((res) => {
      this.setState({ registerList: res.data})
      console.log(this.state.registerList)
    }).catch((err) => {
      alert("Ops! Algo deu errado. Tente novamente mais tarde.")
    })
  }



  createRegister = () => {
    const body = {
      "name": this.state.inputName,
      "email": this.state.inputEmail
  };

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
    body,
    {
      headers: {
        Authorization: "luana-farias-cruz"
      }
    }).then((res) => {
      this.setState({ inputEmail: "", inputName: ""})
      alert("Nome adicionado com sucesso!")
      this.getNameList()
    }).catch((err) => {
      alert("Ops! O usuário já existe.")
    })
  }

  deleteUser = (userId) => {
    if(window.confirm("Você tem certeza que deseja deletar?")) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
      {
        headers: {
         Authorization: "luana-farias-cruz"
        }
      }
      ).then((res) => {
        this.getNameList()
      }).catch((err) => {
        alert("Ops! Algo deu errado. Tente novamente mais tarde.")
      })
    }

  }



  // searchUser = (event) => {
  //   const {name, value} = event.target
  //   this.setState({ [name]: value })
  //   axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${event}&email=`,
  //   {
  //     headers: {
  //       Authorization: "luana-farias-cruz"
  //     }
  //   }).then((res) => {
  //     this.setState({ registerList: res.data})
  //     console.table(res.data)
  //     this.getNameList()
  //   })
  // }

  render () {
    
    return (
      <Container> 
        {this.state.actualPage 
        ? <UserList 
        goToListPage={this.goToListPage}
        onChangeInput={this.onChangeInput}
        searchUser={this.searchUser}
        registerList={this.state.registerList}
        deleteUser={this.deleteUser}
        inputBusca={this.state.inputBusca} //passa valor do state pro value do input
        /> 
        : <Register 
        goToListPage={this.goToListPage}
        onChangeInput={this.onChangeInput}
        inputName={this.state.inputName}
        inputEmail={this.state.inputEmail}
        createRegister={this.createRegister}
        />}
        
        
      </Container>
    );
  }
  
  }

export default App;
