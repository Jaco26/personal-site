const pkg = require('./package')


module.exports = {
  mode: 'universal',

  generate: {
    routes: [
      '/games/snake',
      '/games/pong',
    ]
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'jacobsalright',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Jacob Albright is a full stack web developer with a focus on frontend javascript frameworks like ' + 
        'Nuxt.js, Vue.js, and React.js. His interests include making 2D videogames with a cooperative bent for the web.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/style/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/buefy'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  router: {
    // base: process.env.DEPLOY_ENV === 'gh-pages' ? '/personal-site/' : '/'
  }
}
