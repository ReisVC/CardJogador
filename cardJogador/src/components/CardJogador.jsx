
// importando o css
import "./CardJogador.css"
// import React from "react";
export default function CardJogador({nome, posicao, time, avaliacao, imagem }){
    // corpo do componente (tudo que for retornado aqui será renderizado na tela)
    return(
        // Elemento raiz do card (agrupando o conteúdo do jogador)
        <article className="card-jogador">
            {/** Cabeçalho do card */}
            <div className="cj-cabecalho">
                {/** Imagem do jogador
                 * src: caminho/url da imagem
                 * alt: texto alternativo para acessibilidade
                 * className: apara aplicar estilo
                  */}
                  <img src={imagem} alt={nome} className="cj-imagem" />
                  {/** Bloco de informações textuais ao lado da imagem  */}
                  <div className="cj-info">
                    {/** Nome do jogador */}
                    <h3 className="cj-nome">{nome}</h3>
                    <span className="cj-etiqueta"> {posicao}</span>
                  </div>
            </div>
            {/** Área de informações resumidas como time e avaliação */}
            <div className="cj-meta">
                <span><strong> Time: </strong>{time}</span>
                <span><strong> Avaliação: </strong>{avaliacao}</span>
            </div>
        </article>
    )
}