export default {
  head: {
    title: "Foodies",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
        integrity:
          "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2",
        crossorigin: "anonymous",
      },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
        rel: "stylesheet",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css",
      },
    ],
  },
  env: {
    ELANIIN_API_PATH: process.env.ELANIIN_API_PATH,
    ELANIIN_LOCATIONS_API: process.env.ELANIIN_LOCATIONS_API,
    ELANIIN_CONTACT_API: process.env.ELANIIN_CONTACT_API,
    ELANIIN_CATEGORIES_API: process.env.ELANIIN_CATEGORIES_API,
    ELANIIN_MENU_API: process.env.ELANIIN_MENU_API,
    MAPBOXAPI: process.env.MAPBOXAPI,
  },
  css: ["~/assets/scss/main.scss"],

  plugins: [
    { src: "~/plugins/swiper.js", ssr: false },
    { src: "~/plugins/aos", ssr: false },
  ],

  components: true,

  buildModules: [],

  modules: [
    // doc: https://github.com/dansmaculotte/nuxt-security
    "@dansmaculotte/nuxt-security",
    // doc: https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // doc; https://nuxtjs.org/faq/http-proxy/
    "@nuxtjs/proxy",
  ],

  axios: {},

  proxy: {
    "/api": {
      target: process.env.ELANIIN_API_PATH,
      pathRewrite: {
        "^/api": "/",
      },
    },
  },

  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
