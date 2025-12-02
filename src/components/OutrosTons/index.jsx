import "./outrosTons.scss";
import { useState } from "react";

// Import das imagens
import btmVermelho from "../../assets/batom-vermelho.png";
import btmMarrom from "../../assets/batom-marrom.png";
import btmRosa from "../../assets/batom-rosa.png";
import btmLilas from "../../assets/batom-lilas.png";
import stars from "../../assets/stars.png";

function OutrosTons() {
  const [cor, setCor] = useState(btmRosa);
  const [favorito, setFavorito] = useState(false);

  return (
    <section className="outros-tons">
      <h2>OUTROS TONS DE BATOM</h2>

      <div class="outros-tons-div">
        <figure className="outros-produtos">
          <button onClick={() => setCor(btmVermelho)}>
            <img src={btmVermelho} alt="Batom Vermelho" />
          </button>

          <button onClick={() => setCor(btmLilas)}>
            <img src={btmLilas} alt="Batom Lilás" />
          </button>

          <button onClick={() => setCor(btmRosa)}>
            <img src={btmRosa} alt="Batom Rosa" />
          </button>

          <button onClick={() => setCor(btmMarrom)}>
            <img src={btmMarrom} alt="Batom Marrom" />
          </button>
        </figure>

        <div className="produto-detalhes">
        <figure className="destaque-batom">
          {/* A imagem exibida será sempre a do estado "cor" */}
          <img src={cor} alt="Batom" />
        </figure>

        <span id="coracao"
          onClick={() => setFavorito(!favorito)}
          className={`material-symbols-outlined ${favorito ? "ativo" : ""}`}
        >favorite</span>

        <div className="card-batom">
          <img src={stars} alt="5 Estrelas" />
          <h3>Matte Premium</h3>
          <p id="subtitulo">Cores disponíveis</p>

          {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
          <button id="cor1" onClick={() => setCor(btmRosa)}>
            ㅤ
          </button>
          <button id="cor2" onClick={() => setCor(btmVermelho)}>
            ㅤ
          </button>
          <button id="cor3" onClick={() => setCor(btmLilas)}>
            ㅤ
          </button>
          <button id="cor4" onClick={() => setCor(btmMarrom)}>
            ㅤ
          </button>

          <h4>Descrição</h4>
          <p>
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default OutrosTons;
