module.exports = {
  async redirects() {
    return [
      {
        source: "/cancel/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/completed/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
