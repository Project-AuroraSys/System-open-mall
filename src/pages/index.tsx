import Head from "next/head";
import ShoppingSearch from "../components/section_search"; // ⬅️ Certifique-se do caminho correto
import StoreSpaces from "../components/spaces_home"; // ⬅️ Certifique-se do caminho correto

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Mall - Descubra Nosso Espaço</title>
        <meta
          name="description"
          content="Explore o Open Mall, um espaço único para compras e experiências."
        />
      </Head>

      {/* Cabeçalho Principal */}
      <header className="fixed w-full bg-white bg-opacity-90 shadow-md p-4 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-gray-800">Open Mall</div>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-green-500">Início</a>
          <a href="#about" className="text-gray-700 hover:text-green-500">Sobre</a>
          <a href="#services" className="text-gray-700 hover:text-green-500">Serviços</a>
          <a href="#shoppings" className="text-gray-700 hover:text-green-500">Shoppings</a>
          <a href="#stores" className="text-gray-700 hover:text-green-500">Lojas</a>
          <a href="#events" className="text-gray-700 hover:text-green-500">Eventos</a>
          <a href="#contact" className="text-gray-700 hover:text-green-500">Contato</a>
          <a href="#login" className="text-gray-700 hover:text-green-500">Entrar</a>
        </nav>
      </header>

      {/* Seção Hero */}
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

      {/* 🏢 Seção de Pesquisa de Shoppings */}
      <ShoppingSearch /> {/* ⬅️ Aqui estamos incluindo a seção de pesquisa */}

      {/* 🏬 Seção de Espaços Comerciais */}
      <StoreSpaces /> {/* ⬅️ Aqui estamos incluindo a seção de espaços comerciais */}

      {/* Rodapé */}
      <footer id="contact" className="bg-gray-900 text-white text-center p-8">
        <p>© 2024 Open Mall | Av. Central, 1000 - Centro</p>
        <p>
          Telefone: (11) 4002-8922 | Email: contato@openmall.com.br
        </p>
      </footer>
    </>
  );
}
