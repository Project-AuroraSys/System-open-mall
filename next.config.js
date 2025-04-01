/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Adicione isso
    images: {
      unoptimized: true,  // Desativa a otimização de imagens
    },
  };
  
  module.exports = nextConfig;
  