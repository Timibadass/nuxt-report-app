require("dotenv").config();

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [{
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    }, ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff",
  },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: "~/plugins/vuex-persist",
      mode: "client",
    },
    {
      src: "~/plugins/vue-notification",
      mode: "client",
    },
    {
      src: "~/plugins/font-awesome",
    },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/dotenv"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: process.env.API_URL,
  },
  /*
   ** Auth module configuration
   */
  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      home: '/my-reports'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/user/login",
            method: "post",
            propertyName: "data.token",
          },
          logout: false,
          user: false,
        },
        tokenType: '',
        tokenName: 'x-auth',
        autoFetchUser: false
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
