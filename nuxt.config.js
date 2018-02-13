module.exports = {
  router: {
    // base: '/upf/newmedia/ubrandstudio/'
    base: '/tsmc_foundation_site/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '台積電慈善基金會',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The official website of tsmc foundation.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://udn.com/upf/newmedia/image/udn-icon.ico' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
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
  }
}
