import React from 'react'

export default class DadosGerais extends React.Component {

    render () {

        return (
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <label>5. Por que você não terminou um curso de graduação?</label> <br/>
                <input type="text" name="curso" id="curso" />  <br/>

                <label for="complementar">6. Fez algum curso complementar?</label>  <br/>
                <select name="ensino" id="ensino" value="ensino">
                <option value="nenhum">Nenhum</option>
                    <option value="tecnico">Curso técnico</option>
                    <option value="ingles">Curso de inglês</option>
                </select>

            </div>

        )
    }
}