import React from 'react'

export default class DadosGerais extends React.Component {
    state = {

    }

    render () {

        return (
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <label for="nome">Qual seu nome?</label> <br/>
                <input type="text" name="nome" id="nome" />  <br/>

                <label for="nome">Qual sua idade?</label> <br/>
                <input type="text" name="idade" id="idade" /> <br/>

                <label for="nome">Qual seu e-mail?</label> <br/>
                <input type="text" name="email" id="email" /> <br/>

                <label for="ensino">4. Qual sua escolaridade?</label>  <br/>
                <select name="ensino" id="ensino" value="">
                    <option value="medincompleto">Ensino médio incompleto</option>
                    <option value="medcompleto">Ensino médio completo</option>
                    <option value="supincompleto">Ensino superior incompleto</option>
                    <option value="supcompleto">Ensino superior completo</option>
                </select>

            </div>

        )
    }
}