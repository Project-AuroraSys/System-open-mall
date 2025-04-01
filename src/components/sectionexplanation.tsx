import { FaSearch, FaDollarSign, FaHandshake, FaPen } from 'react-icons/fa'; // Ícones

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Como Funciona?</h2>
      <p className="text-lg text-gray-600 mt-4">
        Siga nosso passo a passo para locação ou anúncio de um espaço comercial.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-8">
        {/* Passo 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <FaSearch className="text-4xl text-green-500" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">1️⃣ Pesquise o espaço ideal</h3>
          <p className="text-gray-600 mt-2">
            Explore as opções de espaços comerciais disponíveis e encontre o local perfeito para o seu negócio.
          </p>
        </div>

        {/* Passo 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <FaDollarSign className="text-4xl text-green-500" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">2️⃣ Solicite um orçamento</h3>
          <p className="text-gray-600 mt-2">
            Solicite um orçamento diretamente na plataforma, sem sair do site.
          </p>
        </div>

        {/* Passo 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <FaHandshake className="text-4xl text-green-500" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">3️⃣ Negocie com o administrador</h3>
          <p className="text-gray-600 mt-2">
            Entre em contato diretamente com o administrador e negocie os detalhes do seu contrato.
          </p>
        </div>

        {/* Passo 4 */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg">
          <FaPen className="text-4xl text-green-500" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">4️⃣ Assine o contrato</h3>
          <p className="text-gray-600 mt-2">
            Assine o contrato digitalmente e comece seu negócio com facilidade e segurança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
