# tsmc_foundation_site

> 台積電官方網站Source Code
> url: https://udn.com/upf/newmedia/2018_data/tsmccharity/

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

### Before Deploy Check Out
>因為需配合資安，需做以下確認。
#
    不能使用Math.random()
    目前已知有 bodymovin 和 generate後的vendor檔會有
    bodymovin: npm install後，進入node_modules > lottie-web > build > player > lottie.js
    vendor: 收尋 ` Math.random() `，將` Math.random()`改為數字( 可在瀏覽器dev-tool 中的console.直直接輸入` Math.random() `拿console出來的直來取代 )