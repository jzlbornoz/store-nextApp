module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  /* basePath: '/dist', */ 
  // Comenta la linea basePath para evitar el error 404
  compress: true,
  async redirects() {
    return [
      {
        source : '/hola',
        destination: 'https://github.com/D4rkPK', // IMPORTANTE, el link del destino sin / 
        permanent: true,                          // ya que nos dira que no puede encontrar la ruta
      }
    ]
  }
}