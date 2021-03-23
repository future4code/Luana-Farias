import React from 'react'

export default class DadosGerais extends React.Component {

    render () {

        return (
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <label>Qual curso?</label> <br/>
                <input type="text" name="curso" id="curso" />  <br/>

                <label for="nome">Qual unidade de ensino?</label> <br/>
                <input type="text" name="idade" id="idade" /> <br/>

            </div>

        )
    }
}