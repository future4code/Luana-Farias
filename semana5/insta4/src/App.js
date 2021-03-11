import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [],
  
    inputNome: "",
    inputFotoUser: "",
    inputPost: ""
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value })
  };

  onChangeFotoUser = (event) => {
    this.setState({ inputFotoUser: event.target.value })
  };

  onChangeinputPost = (event) => {
    this.setState({ inputPost: event.target.value })
  };

  criaPost = () => {
    const post = {
      nome: this.state.inputNome,
      fotoUsuario: this.state.inputFotoUser,
      post: this.state.inputPost
    };

    const novoPost = [...this.state.posts, post];

    this.setState({ posts: novoPost, inputNome: "", inputFotoUser: "", inputPost: "" });
    console.log(novoPost)
  };


  render() {

    const listaPosts = this.state.posts.map((item) => {
      return (
        <Post
        nomeUsuario={item.nome}
        fotoUsuario={item.fotoUsuario}
        fotoPost={item.post}
      />

      )
    })

    return (
      <div className={'app-container'}>
        <input 
        value={this.state.inputNome}
        placeholder={"Nome"} 
        onChange={this.onChangeInputNome}
        />
        <input 
        value={this.state.inputFotoUser}
        placeholder={"Foto Usuario"} 
        onChange={this.onChangeFotoUser}
        />
        <input 
        value={this.state.inputPost}
        placeholder={"Foto"} 
        onChange={this.onChangeinputPost}
        />
        <button onClick={this.criaPost}>Enviar</button>


        {listaPosts} 
        

        <Post
          nomeUsuario={'alesilva'}
          fotoUsuario={'https://picsum.photos/60/50'}
          fotoPost={'https://picsum.photos/203/150'}
        />
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/204/150'}
        />
      </div>
    );
  }
}


export default App;
