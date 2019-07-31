const pkg = require('./package')
const bodyParser = require('body-parser')
const axios = require('axios')

export default {
  mode: 'universal',
  // mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' }
    ]
  },

  loading: { color: '#fff' },

  css: [
  ],

  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://udemy-nuxt-course-fb043.firebaseio.com',
    credentials: false
  },

  build: {
    extend(config, ctx) {
    }
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://udemy-nuxt-course-fb043.firebaseio.com',
    fbSignUpUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
    fbSignInUrl: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
    fbAPIkey: 'AIzaSyB5lwV6BUnEFztJofZdLotywBqIJDpj13o'
  },

  router: {
    middleware: 'log'
  },

  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ],

  generate: {
    routes: function() {
      return axios.get('https://udemy-nuxt-course-fb043.firebaseio.com/posts.json')
        .then(({ data }) => Object.keys(data).map(key => ({ route: `/posts/${key}`, payload: { postData: data[key] }}) ))
    }
  }
}
