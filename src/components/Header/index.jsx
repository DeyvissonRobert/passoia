import "./header.scss";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />

      <ul>
        <li className="links">LOOKS</li>
        <li className="links">LANÇAMENTOS</li>
        <li className="links">NOVIDADES</li>
      </ul>
    </header>
  );
}
export default Header;
