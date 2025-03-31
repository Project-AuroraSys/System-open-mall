import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open Mall - Descubra Nosso Espaço</title>
        <meta name="description" content="Explore o Open Mall, um espaço único para compras e experiências." />
      </Head>

      {/* Cabeçalho */}
      <header className="fixed w-full bg-white bg-opacity-90 shadow-md p-4 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-gray-800">Open Mall</div>
        <nav className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-green-500">Início</a>
          <a href="#about" className="text-gray-700 hover:text-green-500">Sobre</a>
          <a href="#stores" className="text-gray-700 hover:text-green-500">Lojas</a>
          <a href="#contact" className="text-gray-700 hover:text-green-500">Contato</a>
        </nav>
      </header>

      {/* Seção Hero */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/1500/800')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl font-bold">Bem-vindo ao Open Mall</h1>
          <p className="mt-4">Descubra um universo de compras, experiências e oportunidades.</p>
          <a href="#stores" className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">Explore Agora</a>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="about" className="flex flex-col md:flex-row items-center px-8 py-16">
        <div className="w-full md:w-1/2 h-96 bg-cover bg-center" style={{ backgroundImage: "url('/api/placeholder/600/400')" }}></div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold">Nossa História</h2>
          <p className="mt-4 text-gray-600">
            Fundado em 2020, o Open Mall é um espaço comercial dinâmico e acolhedor, localizado estrategicamente no coração da cidade.
          </p>
        </div>
      </section>

      {/* Mapa de Lojas */}
      <section id="stores" className="bg-gray-100 text-center py-16">
        <h2 className="text-3xl font-bold">Nossos Espaços</h2>
        <p className="text-gray-600 mt-4">Descubra as lojas incríveis e oportunidades de negócio no Open Mall.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-8">
          {["Cafeteria Central", "Moda Urbana", "Espaço Disponível", "Livraria", "Tech Store", "Restaurante Gourmet", "Espaço Disponível", "Joalheria", "Esporte & Aventura", "Espaço Disponível"].map((store, index) => (
            <div key={index} className={`p-6 rounded-lg ${store.includes("Disponível") ? "bg-green-500 text-white opacity-80" : "bg-gray-200"} transition transform hover:scale-105`}>
              {store}
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contact" className="bg-gray-900 text-white text-center p-8">
        <p>© 2024 Open Mall | Av. Central, 1000 - Centro</p>
        <p>Telefone: (11) 4002-8922 | Email: contato@openmall.com.br</p>
      </footer>
    </>
  );
}
