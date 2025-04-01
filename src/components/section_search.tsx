import { useState } from "react";

const shoppingList = [
  { id: 1, name: "Shopping Central", location: "São Paulo", availableSpaces: 5 },
  { id: 2, name: "Galeria Sul", location: "Rio de Janeiro", availableSpaces: 3 },
  { id: 3, name: "Shopping Norte", location: "Belo Horizonte", availableSpaces: 2 },
  { id: 4, name: "Open Plaza", location: "Curitiba", availableSpaces: 4 },
  { id: 5, name: "Mall Express", location: "Porto Alegre", availableSpaces: 1 },
];

export default function ShoppingSearch() {
  const [search, setSearch] = useState("");
  const [filteredShoppings, setFilteredShoppings] = useState(shoppingList);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFilteredShoppings(
      shoppingList.filter(
        (shopping) =>
          shopping.name.toLowerCase().includes(query) || shopping.location.toLowerCase().includes(query)
      )
    );
  };

  return (
    <section id="shoppings" className="bg-gray-100 py-16 px-8">
      <h2 className="text-3xl font-bold text-center">Mapa Interativo dos Shoppings</h2>
      <p className="text-gray-600 text-center mt-2">
        Encontre o shopping ideal para locação de espaços comerciais.
      </p>

      {/* Barra de Pesquisa */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Buscar por nome ou localização..."
          value={search}
          onChange={handleSearch}
          className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Lista de Shoppings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {filteredShoppings.length > 0 ? (
          filteredShoppings.map((shopping) => (
            <div key={shopping.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{shopping.name}</h3>
              <p className="text-gray-600">{shopping.location}</p>
              <p className="mt-2 text-green-500 font-semibold">
                {shopping.availableSpaces} espaços disponíveis
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">Nenhum shopping encontrado.</p>
        )}
      </div>
    </section>
  );
}
