import React from 'react'

function Novo({phoneBlack}) {
    return (
        <div id="novo" className="novo">
            <div className="container">
                <div className="versao">
                    <h1>O que há de novo</h1>
                    <h2>v1.0.9</h2>
                    <ul>
                        <li>Correções nos hinos 17, 126, 152, 282. 📃</li>
                        <li>Mudança do teclado (Busca por número) para o teclado numérico. ⌨️</li>
                        <li>Já é possível saber se existe uma nova versão do app. 🔍📃</li>
                        <li>Melhoria na busca dos hinos. 🔍📃</li>
                    </ul>
                    <a target="_blank" rel="noreferrer" href="https://github.com/moser-jose/Hina7/blob/main/CHANGELOG.MD">Saiba mais no GitHub ✌🏼</a>
                </div>
                <div className="img">
                    <img src={phoneBlack} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Novo
