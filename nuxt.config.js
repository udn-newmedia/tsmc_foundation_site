module.exports = {
  router: {
    // base: '/tsmc_foundation_site/',
    base: '/upf/newmedia/2018_data/tsmccharity/',
    // extendRoutes (routes, resolve) {
    //   routes.push({
    //     name: 'html',
    //     path: '/index.html',
    //     component: resolve(__dirname, 'pages/index.vue')
    //   })
    //   routes.push({
    //     name: 'newshtml',
    //     path: '/news/index.html',
    //     component: resolve(__dirname, 'pages/news.vue')
    //   })
    // },
    scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    },
  },

  /*
  ** Headers of the page
  */
  head: {
    // title: '台積電慈善基金會',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'FCKzX2qvCFi0h-ZwqqtMwqZf4rO0nPKKe4jU7lC-feU'},
      { property: 'article:author', content: 'https://www.facebook.com/udnplus' },
      { property: 'article:publisher', content: 'https://www.facebook.com/udnplus' },
      { name: 'copyright', content: 'UDN聯合報' },
      { name: 'application-name', content: '台積電慈善基金會- 做到最實在 弱勢|獨老|環保|孝道' },
      
      // { name: 'description', content: '做公益對台積電而言，不只是捐款。我們選擇步出晶圓廠，走入重災區、再挺進偏鄉，用工程專業造橋鋪路、關懷老人也...' },
      { property: 'fb:admins', content: '1010324812347164' },
      { property: 'og:site_name', content: '台積電慈善基金會- 做到最實在 弱勢|獨老|環保|孝道' },
      { property: 'og:type', content: 'website' },
      // { property: 'og:url', content: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/'},
      { property: 'og:image', content: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/FB.jpg' },
      // { property: 'og:description', content: '做公益對台積電而言，不只是捐款。我們選擇步出晶圓廠，走入重災區、再挺進偏鄉，用工程專業造橋鋪路、關懷老人也...'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/logo.ico' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://udn.com/upf/newmedia/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
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
  },
}
