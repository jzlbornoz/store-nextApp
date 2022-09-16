const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
  },
  reactStrictMode: false,
  images: {
    domains: ['placeimg.com', 'api.lorem.space' , 'images.pexels.com'],
  }
})
