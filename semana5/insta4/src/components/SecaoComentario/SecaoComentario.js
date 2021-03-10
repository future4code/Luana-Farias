import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorInput: ""
	}

	onChangeComentario = (event) => {
		this.setState({ valorInput: event.target.value })
		console.log(this.state.valorInput)
	}

	render() {
		return <div className={'comment-container'}>
			<div>
			<input
				className={this.state.valorInput}
				placeholder={'Comentário'}
				value={this.state.valorInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
			</div>
		</div>
	}
}
