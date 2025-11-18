import "./looks.scss";
import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.png";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Looks() {
  return (
    <section>
      <h2>LOOKS E DICAS DE MAQUIAGEM</h2>
      <img src={labios} alt="Banner da Revitalift" />
      <img src={olhos} alt="Banner da Revitalift" />
      <img src={rosto} alt="Banner da Revitalift" />
      <img src={tendencia} alt="Banner da Revitalift" />
    </section>
  );
}

export default Looks;