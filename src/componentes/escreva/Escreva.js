import "./escreva.css"
import React from 'react'

export default function Escreva() {

    const displayMsg = () => {
        console.log("Teste!")
    }
    return (
        <div class="CaixaMaior">
            <div class="CaixaMenor">
                
                <textarea type="text" id="textin" class="texto" />
                <button onClick={displayMsg}>Comentar</button>

            </div>
        </div>
    )
}