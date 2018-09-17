module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'elecciones-contratos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Cuentas claras' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/ddazal/align.css/dist/align.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#B1C2DE' },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/font-awesome'
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    '~/plugins/font-awesome',
    '~/plugins/tabs'
  ],
  // router: {
  //   base: process.env.NODE_ENV === 'production' ? './' : '/'
  // }
}

