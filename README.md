# tsmc_foundation_site

> Demo: https://udn.com/upf/newmedia/2018_data/tsmccharity/ <br/>
> Dev: <localhost:3000/upf/newmedia/2018_data/tsmccharity/>

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
>因為需配合資安，需做以下確認。 <br>
#
```
問題:不能使用` Math.random() `<br>
解法：將所有的 ` Math.random() ` 改用用 0 ~ 1 的Number取代(Dev-tool > console > Math.random() 複製其值取代)<br/>
目前已知有 bodymovin 和 generate後的vendor.js 會有
```

##### bodymovin:
``` bash
# 設置開發環境
$ npm install

# 進入檔案資料夾
$ cd node_modules/lottie-web/build/player/

# 開啟sublime or vscode
$ sublime lottie.js || code lottie.js

```
開始清理修改` Math.random() `<br/>
修改完後 ` npm run generate ` 出來就不會有` Math.random() `了
##### vendor
>npm run generate 產出來的vendor會有三處有 ` Math.random() `



