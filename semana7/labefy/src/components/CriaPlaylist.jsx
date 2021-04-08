import React from 'react'

export default class CriaPlaylist extends React.Component {

    state = {
        valorInput : ""
    }

    pegarValorInput = (e) => {
        const {name, value} = e.target
        this.setState({ [name] : value})
        console.log(this.state.valorInput)
    }

    render () {

        return (
            <div>
                <input 
                name="valorInput" 
                value={this.state.valorInput} 
                onChange={this.pegarValorInput}
                />

                <button>Enviar</button>
            </div>

        )
    }

}