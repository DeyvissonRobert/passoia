import { useState, useEffect } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu automaticamente quando a tela ficar maior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <img src={logo} alt="logo" />

      {/* Botão hamburguer */}
      <button
        id="burger"
        onClick={() => setIsOpen(!isOpen)}
        className="material-symbols-outlined"
      >
        {isOpen ? "close" : "menu"}
      </button>

      {/* Menu */}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li className="links" onClick={() => setIsOpen(false)}>
          <a href="#looks">LOOKS</a>
        </li>

        <li className="links" onClick={() => setIsOpen(false)}>
          <a href="#lancamentos">LANÇAMENTOS</a>
        </li>

        <li className="links" onClick={() => setIsOpen(false)}>
          <a href="#novidades">NOVIDADES</a>
        </li>
      </ul>
      
      
    </header>
  );
}

export default Header;
