import axios from 'axios'
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


export default class Detalhes extends React.Component {

   state = {
       getName: []
   }

    // getUsersById = async (userId) => {
    //     const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
    //     {
    //         headers: {
    //             Authorization: 'luana-farias-cruz'
    //         }
    //     })
    //     this.setState({ getName: response.data})
    //     console.log(this.state.getName)
    // }
  
    render() {
        
        return (
            <Cadastro>
                {this.props.userId}
                </Cadastro>
        )
    }
}
        //5. peguei o valor desse id que veio como props da pagina UserList e aqui com essa ID faço uma requisição AXIOS.