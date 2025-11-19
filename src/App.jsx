import Header from "./components/Header";
import Hero from "./components/Hero";
import Looks from "./components/Looks";
import Lancamentos from "./components/Lancamentos";
import OutrosTons from "./components/OutrosTons";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";
import "./Global.scss";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Looks />
      <Lancamentos />
      <OutrosTons />
      <Novidades />
      <Footer />
    </>
  );
}

export default App;
