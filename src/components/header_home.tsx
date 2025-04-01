import { FaUser } from 'react-icons/fa'; // Ícone de Login

const Header = () => {
  return (
    <header className="fixed w-full bg-white bg-opacity-90 shadow-md p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="text-2xl px-20 font-bold text-gray-800">Open Mall</div>

      {/* Navegação */}
      <nav className="flex items-center space-x-8">
        <a href="#home" className="text-gray-700 hover:text-green-500">Início</a>
        <a href="#about" className="text-gray-700 hover:text-green-500">Sobre</a>
        <a href="#services" className="text-gray-700 hover:text-green-500">Serviços</a>
        <a href="#shoppings" className="text-gray-700 hover:text-green-500">Shoppings</a>
        <a href="#stores" className="text-gray-700 hover:text-green-500">Lojas</a>
        <a href="#events" className="text-gray-700 hover:text-green-500">Eventos</a>
        <a href="#contact" className="text-gray-700 hover:text-green-500">Contato</a>
        
        {/* Ícone de Login */}
        <a href="#login" className="text-gray-700 hover:text-green-500 flex items-center space-x-2">
          <FaUser className="text-lg" />
          <span>Entrar</span>
        </a>

        {/* Botão "Teste Grátis" */}
        <a
          href="#teste-gratis"
          className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
        >
          Teste Grátis
        </a>
      </nav>
    </header>
  );
};

export default Header;
