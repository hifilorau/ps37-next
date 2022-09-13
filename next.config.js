module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['dl.airtable.com', 'res-3.cloudinary.com', 'res-4.cloudinary.com','res-1.cloudinary.com', 'res-2.cloudinary.com' ],
  },
  async redirects() {
    return [
      {
        source: '/support',
        destination: '/be-right-back',
        permanent: false,
      }
    ]
  },
}
