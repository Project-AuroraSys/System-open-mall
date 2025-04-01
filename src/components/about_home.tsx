import { FaSearch, FaHandsHelping, FaShieldAlt } from 'react-icons/fa'; // Ícones de exemplo

const AboutHome = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 text-left-padding px-20">
      <h2 className="text-3xl font-bold mb-8">Vantagens do Open Mall</h2>
      <p className="text-lg text-gray-600 mb-12">
        O Open Mall oferece uma plataforma dinâmica e segura para encontrar espaços comerciais, conectar lojistas e gestores, com total transparência e segurança.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        {/* Quadro 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <FaSearch className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Espaços Disponíveis em Tempo Real</h3>
          <p className="text-gray-600 mt-4">
            Encontre facilmente espaços comerciais disponíveis com informações atualizadas em tempo real.
          </p>
        </div>

        {/* Quadro 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <FaHandsHelping className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Contato Direto com Administradores</h3>
          <p className="text-gray-600 mt-4">
            Conecte-se diretamente com administradores de espaços para uma comunicação clara e eficiente.
          </p>
        </div>

        {/* Quadro 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg text-center hover:scale-105 transition-transform">
          <FaShieldAlt className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Segurança e Transparência</h3>
          <p className="text-gray-600 mt-4">
            Negocie com confiança, com total transparência nos processos e segurança em todas as transações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
