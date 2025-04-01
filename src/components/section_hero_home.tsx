// HeroHome.tsx
const HeroHome = () => {
    return (
      <section
        id="home"
        className="hero"
        style={{ backgroundImage: "url('/images/gallerycenter.jpeg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="text-5xl font-extrabold leading-tight">
            O Seu Shopping Online, <span className="text-green-400">Reinventado</span>
          </h1>
          <p className="mt-4 text-lg">
            Descubra lojas incríveis, ofertas exclusivas e uma nova forma de comprar e se conectar.
          </p>
          <a href="#stores" className="cta-button">
            Explorar Agora
          </a>
        </div>
      </section>
    );
  };
  
  export default HeroHome;
  