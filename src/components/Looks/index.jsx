import "./looks.scss";
import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Looks() {
  return (
    <section class="looks">
      <h1>LOOKS E DICAS DE MAQUIAGEM</h1>
      <article>
        <img src={labios} alt="Mulher passando gloss" />
        <img src={olhos} alt="Olhos maquiados" />
        <img src={rosto} alt="Mulher se maquiando" />
        <img src={tendencia} alt="Mulher com maquiagem e pincel na boca" />
      </article>
    </section>
  );
}

export default Looks;
