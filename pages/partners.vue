<template>
  <FadeInDown>
    <div id="partners">
      <HeadBar isNews='true' isPage='partners'></HeadBar>
      <div class="cover">
        <ContentWrapper class="titleSite">
          <h1 class="bigtitle">把愛<br/>傳出去</h1>
        </ContentWrapper>
        <img class="fixedBg" :src="member01">
        <img class="fixedBg" :src="member02" :style="{opacity: img2opacity}">
      </div>
      <ContentWrapper class="section">
        <div class="row">
          <p>台積電基金會2014年起，走訪遍布全台的醫療、社福單位，尋找一樣對獨居老人，有協助意願的夥伴，串接起志同道合的點與線，打造全國性的獨居老人照顧網──「愛互聯」。</p>
          <p><br></p>
          <p>針對獨老醫療，位於各縣市的愛互聯醫療單位，首先為低收入的獨居老人，提供掛號服務專線，並減免掛號費，降低經濟弱勢的獨居老人醫療門檻。</p>
          <p><br></p>
          <p>接著，基金會再與在地民間社福單位志工攜手，協助獨老前往合作醫療院所就診，並協助診後的服藥、起居，更重要的，愛互聯為獨老的需求，一起找資源。</p>
          <p><br></p>
          <p>愛互聯目前在全台，「兵分六區」投入服務行動（北部、竹苗、台中、台南、高雄、花東），今年還有14家偏遠地區醫院，和更多的社福單位，表示有意願加入串連。</p>
        </div>
      </ContentWrapper>
      <ContentWrapper class="handSection" id="part_1">
        <p><br></p>
        <div class="innerHand">
          <p><br></p>
          <h2>我想幫忙</h2>
          <div class="hand">
            <h2>【恆春旅遊醫院】需要您的幫忙！</h2>
            <p><br></p>
            <p>恆春醫院醫療資源嚴重匱乏，台積電慈善基金會，改善偏鄉部落長照及復健等問題，已捐贈恆春牡丹鄉：</p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>各類復健硬體設備</p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>設立電動樓梯升降椅，方便行動不便長者上下樓</p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>在樓頂架設太陽能發電系統</p>
            <p><br></p>
            <p><b>待認領愛心缺口</b></p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>濟助政府未補助之邊緣弱勢住戶，約91萬戶（包含醫療、救護車及住院看護費）</p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>牡丹鄉交通接駁車一台</p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>恆春四偏鄉肝癌篩檢，提供約30人，ㄧ年四場次的篩檢費用，約19萬元</p>
            <p><i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i>牡丹鄉部落中央廚房，提供40多戶弱勢長輩供餐</p>
            <p><br></p>
            <p><b>立即伸出援手</b></p>
            <p>恆春旅遊醫院<a href="tel: 088892704">（08） 889-2704</a></p>
            <p>恆春旅遊醫院 高專員<a href="tel: 0933775822">0933-775-822</a></p>
            <p><br></p>
            <div class="handlink-btn">
              <a href="http://www.pnhb.mohw.gov.tw/?aid=home" target="_blank" @click="sentGA('我想幫忙', '恆春醫院', '把愛傳出去')">官網連結<span class="glyphicon glyphicon-new-window" style="margin-left: 5px;"></span></a>
            </div>
            <p><br></p>
          </div>
          <div class="sideImg">
            <img :src="partner_event_1">
          </div>
        </div>
        <p><br></p>
      </ContentWrapper>
      <ContentWrapper class="section" id="part_2">
        <h2>愛互聯夥伴</h2>
        <div class="row">
          <div class="zone">
              <h3>北部</h3>
          </div>
          <div class="unit">
              <div class="partner"><a class="btn" href="https://www.vghtpe.gov.tw/Index.action" target="_blank" @click="sentGA('把愛傳出去', '台北榮民總醫院', '超連結')"><span>台北榮民總醫院</span></a></div>
              <div class="partner"><a class="btn" href="http://www.ofo.org.tw" target="_blank" @click="sentGA('把愛傳出去', '北部老五老基金會', '超連結')"><span>老五老基金會</span></a></div>
          </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>竹苗</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="http://www.ofo.org.tw/" target="_blank" @click="sentGA('把愛傳出去', '竹苗老五老基金會', '超連結')"><span>老五老基金會</span></a></div>
                <div class="partner"><a class="btn" href="http://www.mil.mohw.gov.tw/index.asp" target="_blank" @click="sentGA('把愛傳出去', '部立苗栗醫院', '超連結')"><span>部立苗栗醫院</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>台中</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="http://www.cmuh.cmu.edu.tw" target="_blank" @click="sentGA('把愛傳出去', '中國醫藥大學附設醫院', '超連結')"><span>中國醫藥大學附設醫院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.fyh.mohw.gov.tw" target="_blank" @click="sentGA('把愛傳出去', '部立豐原醫院', '超連結')"><span>部立豐原醫院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.ltl-charity.org.tw" target="_blank" @click="sentGA('把愛傳出去', '林增進基金會', '超連結')"><span>林增連基金會</span></a></div>
                <div class="partner"><a class="btn" href="http://www.ofo.org.tw" target="_blank" @click="sentGA('把愛傳出去', '中部老五老基金會', '超連結')"><span>老五老基金會</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>台南</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="https://www.facebook.com/puli393" target="_blank" @click="sentGA('把愛傳出去', '台灣普力關懷協會', '超連結')"><span>台灣普力關懷協會</span></a></div>
                <div class="partner"><a class="btn" href="https://www.tnhosp.mohw.gov.tw" target="_blank" @click="sentGA('把愛傳出去', '部立台南醫院', '超連結')"><span>部立台南醫院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.cnpc.mohw.gov.tw" target="_blank" @click="sentGA('把愛傳出去', '部立嘉南療養院', '超連結')"><span>部立嘉南療養院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.sinlau.org.tw" target="_blank" @click="sentGA('把愛傳出去', '新樓醫院', '超連結')"><span>新樓醫院</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>高屏</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="http://web.fy.edu.tw/bin/home.php" target="_blank" @click="sentGA('把愛傳出去', '輔英科技大學', '超連結')"><span>輔英科技大學</span></a></div>
                <div class="partner"><a class="btn" href="http://www.pnhb.mohw.gov.tw/?aid=home" target="_blank" @click="sentGA('把愛傳出去', '恆春旅遊醫院', '超連結')"><span>恆春旅遊醫院</span></a></div>
            </div>
        </div>
        <br/>
        <br/>
        <div class="row">
            <div class="zone">
                <h3>花東</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="http://www.mch.org.tw/" target="_blank" @click="sentGA('把愛傳出去', '基督教門諾會醫院', '超連結')"><span>基督教門諾會醫院</span></a></div>
                <div class="partner"><a class="btn" href="https://mf.eoffering.org.tw" target="_blank" @click="sentGA('把愛傳出去', '門諾基金會', '超連結')"><span>門諾基金會</span></a></div>
            </div>
        </div>
      </ContentWrapper>
      <ContentWrapper style="padding: 3% 0;position: relative;z-index: 2;background-color: #fff;">
        <p><br></p>
        <h2>留言給我們</h2>
        <p><br></p>
        <FBComment :href="location"></FBComment>
        <p><br></p>
      </ContentWrapper>
      <Foot style="position: relative;z-index: 3;"></Foot>
    </div>
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import Utils from 'udn-newmedia-utils'
import HeadBar from '~/components/HeadBar.vue'
import Foot from '~/components/Foot.vue'
import ContentWrapper from '~/components/Content.vue'
import Overlay from '~/components/Overlay.vue'
import FBComment from '~/components/FBComment.vue'
import FadeInDown from '~/components/FadeInDown.vue'
import $eventBus from'~/plugins/eventBus.js'
import member01 from '~/assets/member01.png'
import member02 from '~/assets/member02.png'
import tsmcLogo from '~/assets/logo_tsmc.svg'
import titleimg from '~/assets/title_partners.svg'

import partner_event_1 from '~/assets/0425_update/partner_event_1.jpg'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
}

export default {
  components: {
    HeadBar, ContentWrapper, Overlay, FBComment, FadeInDown, Foot
  },
  /**
   * 變數:
   *  - showMessageBoard: (true or false) 是否顯示留言區
   *  - showfirstimg: 首頁滿版圖為兩張圖組成，以showfirstimg作為參數來替換，當showfirstimg為false時則顯示第二張圖
  */
  data: function () {
    return {
      location: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/partners/index.html',
      stickyAnchors: true,
      tsmcLogo: tsmcLogo,
      member01: member01,
      member02: member02,
      showfirstimg: true,
      titleimg: titleimg,
      showMessageBoard: false,
      isFBReady: false,
      partner_event_1: partner_event_1
    }
  },
  computed: {
    img1opacity: function () {
      return this.showfirstimg?'1':'0'
    },
    img2opacity: function () {
      return this.showfirstimg?'0':'1'
    }
  },
  mounted: function () {
    // 載入 fb sdk
    setTimeout(()=>{
      this.showfirstimg = !this.showfirstimg
      this.isFBReady = Vue.FB != undefined
      Vue.FB.XFBML.parse();
      window.addEventListener('fb-sdk-ready', this.onFBReady)
    }, 500)
  },
  beforeDestroy: function () {
    this.$eventBus.$off('closeOverlay')
  },
  methods: {
    onFBReady: function () {
      this.isFBReady = true
    },
    sentGA (from, to, by) {
      ga("send", {
          "hitType": "event",
          "eventCategory": "HeadBar",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ by +"] [" + from + "] [" + to + "]"
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'GenJyuuGothic';
  src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
}
#partners {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  position: relative;
  overflow: hidden;
  background-color: #e4c8a9;
}
.handlink-btn{
  position: relative;
  z-index: 5;
  box-sizing: content-box;
  padding: 9px;
  width: 95px;
  height: 27px;
  mix-blend-mode: undefined;
  border-radius: 4px;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:before{
    content: '';
    z-index: auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-radius: 4px;
    background-color: #70cbfa;
    transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  &:hover{
    &:before{
      width: 100%;
    }
  }
  a{
    z-index: 3;
    color: #fff;
    text-decoration: none;
  }
  @media screen and (min-width: 1024px) {
    padding: 13px;
  }
}
.handSection{
  position: relative;
  z-index: 1;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: transparent;
}
.innerHand{
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 30px 25px;
  @media screen and (min-width: 1024px) {
    width: 70%;
    padding: 40px 120px 40px 40px;
  }
}
.sideImg{
  width: 100%;
  img{
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    right: -100%;
    img{
      position: relative;
      left: -80px;
      bottom: 80px;
      max-width: 350px;

    }
  }
}
.cover{
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background-color: #e4c8a9;
}
.titleSite{
  position: relative;
  top: 15%;
  z-index: 5;
}
.fixedBg{
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 200%;
  height: auto;
  transition: opacity 777ms linear;
  transform: translate(-25%, 30%);
  @media screen and (min-width: 1024px) {
    width: 80%;
    transform: translate(10%, 0);
  }
}
.link{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom: solid 1px black;
}
@media screen and (min-width: 1024px){
  .link{
    border-bottom: none;
  }
}
@media screen and (max-width: 1023px){
  .hidden-mobile{
    display: none!important;
  }
}

@media screen and (min-width: 1024px){
  .hidden-pc{
    display: none!important;
  }
  .links{
    animation: fadeInDown 432ms ease-out;
    animation-fill-mode: both;
  }
  @keyframes fadeInDown {
    from{
      opacity: 0;
      transform: translate(0, -30px);
    }
    to{
      opacity: 1;
      transform: translate(0, 0);
    }
  }
}

.fullscreen {
  width: 100%;
  height: 100vh;
  position: relative;
}

.centercenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1.bigtitle.bigtitle {
  font-family: 'GenJyuuGothic';
  font-weight: bold;
  color: #fff;
}

.subpageLink {
  text-align: right;
}

@media screen and (min-width: 1024px){
  .iconWrapper {
    display: flex;
    justify-content: space-around;
  }
}

@media screen and (max-width: 1023px){
  .icon {
    padding: 25px;
  }
}

.icon p {
  padding-top: 10px;
  text-align: center;
}

.footer .row {
  margin-bottom: 10px;
}

@media screen and (max-width: 1023px){
  img {
    width: 100%;
  }
}

.section {
  position: relative;
  padding-top: 50px;
  padding-bottom: 50px;
  z-index: 1;
  background-color: #fff;
}

@media screen and (min-width: 1024px){
  .section {
    position: relative;
    z-index: 1;
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fff;
  }
}

.zone h3{
  font-weight: bold;
}

.unit{
  display: flex;
  flex-wrap: wrap;
}

.unit .partner{
  margin: 5px 20px 20px 0;
  border-radius: 3px;
  background-color: #e0dfdf;
}

@media screen and (max-width: 1023px){
  .unit .partner{
    margin: 5px 10px 20px 0;
  }
}

.unit .partner a{
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.btn span {
  color: #000;
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  transform-origin: center left;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
}
.btn:before,
.btn:after {
  content: '';
  background: #70cbfa;
  height: 100%;
  width: 0;
  position: absolute;
  transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  border-radius: 4px;
}
.btn:before {
  top: 0;
  left: 0;
  right: auto;
}
.btn:after {
  bottom: 0;
  left: 0;
}
@media screen and (min-width: 1024px) {
  .btn:hover:before {
    width: 0;
    left: 0;
    border-radius: 4px;
  }
  .btn:hover:after {
    width: 100%;
    left: 0;
    right: auto;
    border-radius: 4px;
  }
}

.partner {
 position: relative;
 display: block;
 float: right;
 margin-top: 50px;
}

@media screen and (max-width: 1023px){
  span{
    font-size: 16px;
  }
}

.link a{
  color: #000;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10px;
}
</style>
