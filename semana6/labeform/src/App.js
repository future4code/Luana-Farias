import React from 'react'
import DadosGerais from './componentes/DadosGerais'
import ComEnsinoSuperior from './componentes/ComEnsinoSuperior'
import SemEnsinoSuperior from './componentes/SemEnsinoSuperior'
import FinalFormulario from './componentes/FinalFormulario'
import './App.css'

export default class App extends React.Component {

  state = {
    etapa: 1,
  }

 nome = "Luana"

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <DadosGerais />
      case 2:
        return  <ComEnsinoSuperior/>
      case 3:
        return <SemEnsinoSuperior />
      case 4:
        return <FinalFormulario />
    }

  }

  irParaProximaEtapa = () => {
    // const ensino = document.getElementById("ensino")
    // if(ensino.value === "medcompleto" || "medincompleto")
    this.setState({ etapa: this.state.etapa +1})
  }

  render () {
    let botao 
    if (this.state.etapa < 4) {
      botao = <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
    }

    return (
      <div className="App">
        {this.renderizaEtapa()} 
        {botao}  
        {this.nome}  

      </div>
    );
  }

}


