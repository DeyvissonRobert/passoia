import "./lancamentos.scss";
import { useState } from "react";

// Import das imagens
import gloss1 from "../../assets/gloss1.png";
import gloss2 from "../../assets/gloss2.png";
import batom3 from "../../assets/batom3.png";
import vermelho from "../../assets/vermelho.png";
import azul from "../../assets/azul.png";
import marrom from "../../assets/marrom.png";
import nude from "../../assets/nude.png";
import stars from "../../assets/stars.png";

function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "marrom"
  const [cor, setCor] = useState(marrom);

  return (
    <section id="lancamentos">
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <div className="lancamentos-div">
        <figure className="produtos">
          <img src={gloss1} alt="2 Batons Liquido" />
          <img src={gloss2} alt="3 Batons Liquido" />
          <img src={batom3} alt="3 Batons" />
        </figure>

        <div className="produto-detalhes">
          <figure className="produto-destaque">
            {/* A imagem exibida será sempre a do estado "cor" */}
            <img src={cor} alt="Mulher mostrando Batom" />
          </figure>

          <div className="card">
            <img src={stars} alt="5 Estrelas" />
            <h3>Matte Premium</h3>
            <p id="subtitulo">Cores disponíveis</p>

            {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
            <div class="botoes-cores">
            <button id="cor1" onClick={() => setCor(marrom)}>ㅤ</button>
            <button id="cor2" onClick={() => setCor(vermelho)}>ㅤ</button>
            <button id="cor3" onClick={() => setCor(azul)}>ㅤ</button>
            <button id="cor4" onClick={() => setCor(nude)}>ㅤ</button>
            </div>

            <h4>Descrição</h4>
            <p>
              O Batom Matte possui uma fórmula inovadora desenvolvida para
              entregar o máximo de cor na primeira aplicação com um deslize
              suave e macio. Tem acabamento matte aveludado e manteiga de manga
              que ajuda a hidratar e a proteger os lábios contra ressecamento.
              Ajuda na hidratação dos lábios, textura fina e macia que não pesa
              nos lábios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lancamentos;
