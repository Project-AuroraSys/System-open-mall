import Head from "next/head";
import Header from "../components/header_home"; // ⬅️ Certifique-se do caminho correto
import HeroHome from "../components/section_hero_home"; // ⬅️ Certifique-se do caminho correto
import ShoppingSearch from "../components/section_search"; // ⬅️ Certifique-se do caminho correto
import StoreSpaces from "../components/spaces_home"; // ⬅️ Certifique-se do caminho correto
import AboutHome from "../components/about_home"; // ⬅️ Certifique-se do caminho correto

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
      <Header /> {/* ⬅️ Aqui estamos incluindo o cabeçalho */}

      {/* Seção Hero */}
      <HeroHome /> {/* ⬅️ Aqui estamos incluindo a seção hero */}

      {/* 🏢 Seção de Pesquisa de Shoppings */}
      <ShoppingSearch /> {/* ⬅️ Aqui estamos incluindo a seção de pesquisa */}

      {/* 🏬 Seção de Espaços Comerciais */}
      <StoreSpaces /> {/* ⬅️ Aqui estamos incluindo a seção de espaços comerciais */}
        
      {/* Sobre o Open Mall */}
      <AboutHome /> {/* ⬅️ Aqui estamos incluindo a seção sobre o Open Mall */}

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
