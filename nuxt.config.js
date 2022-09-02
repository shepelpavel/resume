export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: 'docs',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'resume',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#603cba' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    link: [{ rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' }],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
    ],
    link: [{ rel: 'manifest', href: '/favicon/site.webmanifest' }],
    link: [
      {
        rel: 'mask-icon',
        href: '/favicon/safari-pinned-tab.svg',
        color: '#7b7b7b',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
