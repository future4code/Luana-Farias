import React from 'react';
import "./CardPequeno.css"

function CardPequeno(props) {

    return (
            <div className="endereco-pai">
                <section className="endereco-container">
                    <img className="endereco-img" src={ props.icone } />
                    <p><a href={ props.link}>{props.nome}</a></p>
                </section>
            </div>
    )
}

export default CardPequeno;
