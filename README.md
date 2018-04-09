# tsmc_foundation_site

> 台積電官方網站Source Code
> url: https://udn.com/upf/newmedia/2018_data/tsmccharity/
> dev: localhost:3000/upf/newmedia/2018_data/tsmccharity/

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
  ####issue 不能使用```javascript Math.random() ```
  ---
  >解法：將所有的 ```javascript Math.random() ``` 找出來用 0 ~ 1 取代(Dev-tool > console > Math.random() 複製其值取代)
  >目前已知有 bodymovin 和 generate後的vendor.js 會有
  #####bodymovin:
  ``` bash
  # 設置開發環境
  $ npm install

  # 進入檔案資料夾
  $ cd node_modules/lottie-web/build/player/

  # 開啟sublime or vscode
  $ sublime . || code .

  ```
  開始清理修改Math.random()
  #
  修改完後 ``` bash npm run generate ``` 出來就不會有 ```javascript Math.random() ```了
  #####vendor
  >npm run generate 產出來的vendor會有三處有 ```javascript Math.random() ```



