import React from 'react'

// recebendo dados e passando mostrando na tela com desistruturação
const Produto = ({ dados }) => {

    return (
        // declarando os dados
        <div>
            <p>{dados.nome}</p>
            <p>{dados.preco}</p>
            <p>{dados.descricao}</p>
            <img src={dados.fotos[0].src} alt={dados.fotos[1].titulo} />
        </div>
    )
}

export default Produto

