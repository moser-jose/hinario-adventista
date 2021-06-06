import React from 'react'

function Novo({phoneBlack}) {
    return (
        <div id="novo" className="novo">
            <div className="container">
                <div className="versao">
                    <h1>O que há de novo</h1>
                    <h2>v1.0.8</h2>
                    <ul>
                        <li>Correções no hino 316 (retirada a última estrofe, não fazia parte do hino). 📃</li>
                        <li>Melhoria na compatibilidade de app com dispositivos menos recente. 📱</li>
                        <li>Melhoria nas secções e subsecções do app. ✅📲</li>
                        <li>Correção de alguns bugs nos favoritos. ✅📲</li>
                        <li>Retirado o botão Feedback. 👍🏻</li>
                        <li>Agora já se pesquisa pela letra do Hino. 🔍📃</li>
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
