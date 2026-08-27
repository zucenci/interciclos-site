/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    // 90 é usado no hero da home: é a maior imagem da página e a primeira a ser
    // vista. A partir do Next 16 cada qualidade precisa estar nesta lista.
    qualities: [75, 90],
    // Imagens dos posts do Instagram (o CDN usa subdomínios variáveis).
    remotePatterns: [
      { protocol: 'https', hostname: '**.cdninstagram.com' },
      { protocol: 'https', hostname: '**.fbcdn.net' },
    ],
  },
};

export default nextConfig;
