import Image from "next/image";

const stores = [
  { name: "Cafeteria Central", logo: "/images/logos/cafeteria.png" },
  { name: "Moda Urbana", logo: "/images/logos/moda_urbana.png" },
  { name: "Livraria", logo: "/images/logos/livraria.png" },
  { name: "Tech Store", logo: "/images/logos/tech_store.png" },
  { name: "Restaurante Gourmet", logo: "/images/logos/restaurante.png" },
  { name: "Joalheria", logo: "/images/logos/joalheria.png" },
  { name: "Esporte & Aventura", logo: "/images/logos/esporte.png" },
];

export default function StoreSpaces() {
  return (
    <section id="stores" className="bg-gray-100 text-center py-16">
      <h2 className="text-3xl font-bold">Nossos Espaços</h2>
      <p className="text-gray-600 mt-4">
        Descubra as lojas incríveis e oportunidades de negócio no Open Mall.
      </p>

      {/* Grid de Lojas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-8">
        {stores.map((store, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center transition transform hover:scale-105"
          >
            <Image src={store.logo} alt={store.name} width={100} height={100} />
            <p className="mt-4 font-semibold">{store.name}</p>
          </div>
        ))}
      </div>

      {/* Chamada para ação para novos lojistas */}
      <div className="mt-12">
        <p className="text-lg text-gray-700">
          Quer fazer parte do Open Mall? Encontre o espaço ideal para sua loja!
        </p>
        <a
          href="#contact"
          className="mt-4 inline-block bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all shadow-lg"
        >
          Procure uma Galeria para Você
        </a>
      </div>
    </section>
  );
}
