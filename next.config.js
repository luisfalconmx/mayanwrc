module.exports = {
  async rewrites() {
    return [
      {
        source: '/cancel',
        destination: '/'
      },
      {
        source: '/completed',
        destination: '/'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/cancel',
        destination: '/',
        permanent: true
      },
      {
        source: '/completed',
        destination: '/',
        permanent: true
      }
    ]
  }
}
