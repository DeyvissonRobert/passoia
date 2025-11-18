import "./looks.scss";
import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Looks() {
  return (
    <section>
      <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
      <img src={labios} alt="Mulher passando gloss" />
      <img src={olhos} alt="Olhos maquiados" />
      <img src={rosto} alt="Mulher se maquiando" />
      <img src={tendencia} alt="Mulher com maquiagem e pincel na boca" />
    </section>
  );
}

export default Looks;