import "./outrosTons.scss";
import { useState } from "react";

// Import das imagens
import btmVermelho from "../../assets/batom-vermelho.png";
import btmMarrom from "../../assets/batom-marrom.png";
import btmRosa from "../../assets/batom-rosa.png";
import btmLilas from "../../assets/batom-lilas.png";
import stars from "../../assets/stars.png";

function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"
  const [cor, setCor] = useState(btmRosa);

  return (
    <section className="lancamentos">
      <h2>OUTROS TONS DE BATOM</h2>

      <figure class="produtos">
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

      <figure class="produto-destaque">
      {/* A imagem exibida será sempre a do estado "cor" */}
      <img src={cor} alt="Mulher mostrando Batom" />
      </figure>

      <div class="card">
        <img src={stars} alt="5 Estrelas" />
        <h3>Matte Premium</h3>
        <p>Cores disponíveis</p>

        {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
        <button onClick={() => setCor(btmRosa)}>Rosa</button>
        <button onClick={() => setCor(btmVermelho)}>Vermelho</button>
        <button onClick={() => setCor(btmLilas)}>Lilás</button>
        <button onClick={() => setCor(btmMarrom)}>Marrom</button>

        <h4>Descrição</h4>
        <p>
          O Batom Matte possui uma fórmula inovadora desenvolvida para entregar
          o máximo de cor na primeira aplicação com um deslize suave e macio.
          Tem acabamento matte aveludado e manteiga de manga que ajuda a
          hidratar e a proteger os lábios contra ressecamento. Ajuda na
          hidratação dos lábios, textura fina e macia que não pesa nos lábios.
        </p>
      </div>

    </section>
  );
}

export default Lancamentos;
