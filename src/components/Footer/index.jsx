import "./footer.scss";
import mastercard from "../../assets/mastercard.png";
import visa from "../../assets/visa.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";


function Footer() {
  return (
    <section className="footer">
      <nav className="service links">
      <h3>ATENDIMENTO</h3>
        <a href="#">Fale Conosco</a>
        <a href="#">Perguntas Frequentes</a>
        <a href="#">Meus Pedidos</a>
        <a href="#">Nossas Lojas</a>
      </nav>

      <div className="payment-methods">
        <h3>FORMAS DE PAGAMENTO</h3>
        <div className="imagens">  
          <img src={mastercard} alt="Mastercard logo" />
          <img src={visa} alt="Visa logo" />
          <img src={pix} alt="Pix logo" />
          <img src={boleto} alt="Boleto logo" />
        </div>
      </div>

      <div className="networks">
        <h3>SIGA-NOS NAS REDES SOCIAIS</h3>
        <div className="redes">
          <img src={instagram} alt="Instagram logo" />
          <img src={facebook} alt="Facebook logo" />
          <img src={youtube} alt="YouTube logo" />
          <img src={twitter} alt="Twitter logo" />
        </div>
      </div>

    </section>
  );
}

export default Footer;