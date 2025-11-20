import "./hero.scss";
import bannerHero from "../../assets/banner.png";

function Hero() {
  return (
    <section class="hero">
      <img src={bannerHero} alt="Banner da Revitalift" />
    </section>
  );
}

export default Hero;