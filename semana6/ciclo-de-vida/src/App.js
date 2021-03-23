import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(), // usado para gerar um número único (id) para cada tarefa. Esse id deve ser usado para identificar qual tarefa foi clicada para marcar como completa
        texto: 'Texto da tarefa',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(),
        texto: "Sou a segunda tarefa",
        completa: false
      }],
      inputValue: '',
      filtro: ''
    }
    

  componentDidUpdate() {

  };

  componentDidMount() {

  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
    console.log(this.state.inputValue)
  }


  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const copiadoEstado = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: copiadoEstado})
    console.log(copiadoEstado)

  }

  selectTarefa = (id) => {
     const novaListaDeTarefas = this.state.tarefas.map((item) => {
      if(item.id === id) {
        const novaTarefaConcluida = {
         ...this.state.tarefas,
          completa: !item.completa
        }
        return novaTarefaConcluida
      } else {
        return this.state.tarefas
      }

     })
     this.setState({ tarefas: novaListaDeTarefas})
  }

  onChangeFilter = (event) => {

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
