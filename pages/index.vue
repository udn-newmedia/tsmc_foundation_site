<template>
  <FadeInDown>
    <div id="index">
      <HeadBar :bookmark-display="stickyAnchors" isNews='true' menuSlideFrom="right" isPage="index"></HeadBar>
      <div class="fullscreen centercenter" style="position: relative; overflow: hidden;">
<!--         <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/bg.json" MOBjsonfile="./index_cover/common/mobile/bg/data.json" PADjsonfile="./index_cover/common/mobile/bg/data.json" style="position: absolute; top: 0; left: 0; z-index: 0; width: 100%;"></Bodymovin> -->
        <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/fly.json" MOBjsonfile="./index_cover/common/mobile/fly/data.json" PADjsonfile="./index_cover/common/mobile/fly/data.json" style="position: absolute; top: 0; left: 0; z-index: 1; width: 100%;"></Bodymovin>
        <ContentWrapper style="padding:0; z-index: 2;">
          <Bodymovin jsonfile="./index_cover/web/data.json" MOBjsonfile="./index_cover/mobile/data.json" PADjsonfile="./index_cover/pad/data.json" style="width: 100%;　z-index: 2;"></Bodymovin>
        </ContentWrapper>
      </div>
      <ContentWrapper class="section">
        <div class="row">
          <div class="column col-lg-4 col-sm-5 col-xs-12">
            <!-- <i class="fa fa-circle fa-1x" aria-hidden="true" style="color: #70cbfa;margin-right: 8px"></i> -->
            <h3>橫越445公里路</h3>
            <p>做公益，對台積電而言，不只是捐款。一群工程師，選擇步出晶圓廠，走入重災區，他們發揮最暖心的「職業病」，用工程專業造橋鋪路、重建工廠與學校，近年再挺進花東偏鄉，關懷老人也陪伴孩子，橫越445公里路，全憑一個「助人就要徹底」的信念。</p>
            <p><br></p>
            <p>「請問，我們可以為你做什麼？」今年二月，強震重創花蓮，台積電慈善基金會董事長張淑芬與志工團挺進第一線，以最直接有效的方式，向災民詢問可幫忙之處，再回頭盤點公司內部員工捐款、「台灣半導體設備暨材料協會」企業成員資源，一周內公布災區復原方案：先讓居民有安全的住所，再進一步重建花蓮觀光產業。</p>
            <div class="subpageLink">
              <nuxt-link class="btn" to="/news" @click.native="handle_toPageGA('index', 'news', '首頁:文章連結')">
                <span>最新動態
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </nuxt-link>
            </div>
            <p><br></p>
            <p><br></p>
          </div>
          <div class="col-lg-1 col-sm-1 hidden-mobile"></div>
          <div class="column col-lg-7 col-sm-6 hidden-mobile">
            <img :src="indexWeb1">
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div class="hidden-pc" style="margin-bottom: 20px;">
          <img :src="indexMob1">
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <EmbededVideo :src="indexvideo_mob" :srcWeb="indexvideo" :poster="indexposter_mob" :posterWeb="indexposter_web"></EmbededVideo>
      </ContentWrapper>
      <ContentWrapper>
        <div class="hidden-pc" style="margin-top: 10px;">
          <img :src="indexMob2">
        </div>
      </ContentWrapper>
      <ContentWrapper class="section">
        <div class="row section" style="margin-top: 0 ;">
          <div class="col-lg-7 col-sm-6 col-xs-12 hidden-mobile" style="padding-left: 0">
            <img :src="indexWeb2" style="width: 100%">
          </div>
          <div class="col-lg-1 col-sm-1"></div>
          <div class="col-lg-4 col-sm-5 col-sm-6">
            <h3>救人不只是捐款</h3>
            <p>花蓮震災不是起始點，回顧高雄氣爆滿月時，災區滿街飄揚一幅幅紅布條，是災民對台積電的感謝。災後第一時間，台積電得知災區缺工，決定捐錢也做事，重建團隊直接進駐災區。</p>
            <p><br></p>
            <p>志工們與協力廠商ㄧ同挽起袖管逐戶修繕，被石頭砸破的屋頂、炸歪的紗窗，滿目瘡痍的回家路，他們來回穿梭，一一替災民排除。重建家園、恢復生計，想方設法讓災民重新站穩，台積電用智慧做慈善。</p>
            <p><br/></p>
            <p>更早的八八風災，爾後的八仙事件，台積電做公益一直不是電視上的捐款跑馬燈而已，一路以來，把晶圓廠工程師變成暖男的推手，是張忠謀夫人、台積電慈善基金會董事長張淑芬。</p>
            <div class="subpageLink">
              <nuxt-link class="btn" to="/aboutus" @click.native="handle_toPageGA('index', 'aboutus', '首頁:文章連結')">
                <span>關於我們
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper backgroundColor='#e0dfdf'>
        <p><br></p>
        <p><br></p>
        <div class="row iconWrapper">
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/news" @click.native="handle_toPageGA('index', 'news', '首頁: 泡泡連結')">
            <img :src="indexicon4" style="display: block; margin: auto">
            <p>最新動態</p>
          </nuxt-link>
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/aboutus" @click.native="handle_toPageGA('index', 'aboutus', '首頁: 泡泡連結')">
            <img :src="indexicon2" style="display: block; margin: auto">
            <p>公益使命</p>
          </nuxt-link>
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/campaigns" @click.native="handle_toPageGA('index', 'campaigns', '首頁: 泡泡連結')">
            <img :src="indexicon3" style="display: block; margin: auto">
            <p>我們做的事</p>
          </nuxt-link>
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/partners" @click.native="handle_toPageGA('index', 'partners', '首頁: 泡泡連結')">
            <img :src="indexicon1" style="display: block; margin: auto">
            <p>把愛傳出去</p>
          </nuxt-link>
        </div>
        <p><br></p>
        <p><br></p>
      </ContentWrapper>
      <ContentWrapper style="padding: 3% 0;">
        <p><br></p>
        <h2>留言給我們</h2>
        <p><br></p>
        <FBComment :href="location"></FBComment>
        <p><br></p>
      </ContentWrapper>
      <Foot></Foot>
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
import FadeInDown from '~/components/FadeInDown.vue'
import EmbededVideo from '~/components/EmbededVideo.vue'
import Bodymovin from '~/components/Bodymovin.vue'
import FBComment from '~/components/FBComment.vue'
import $eventBus from'~/plugins/eventBus.js'
import indexvideo from '~/assets/indexvideo.mp4'
import indexMob1 from '~/assets/index_mob1.jpg'
import indexWeb1 from '~/assets/index_web1.jpg'
import indexMob2 from '~/assets/index_mob2.jpg'
import indexWeb2 from '~/assets/index_web2.jpg'
import indexicon1 from '~/assets/ICON-1.png'
import indexicon2 from '~/assets/ICON-2.png'
import indexicon3 from '~/assets/ICON-3.png'
import indexicon4 from '~/assets/ICON-4.png'
import tsmcLogo from '~/assets/logo_tsmc.svg'
import newest from '~/assets/newest.svg'
import indexvideo_mob from '../assets/indexvideo_mob.mp4'
import indexposter_mob from '../assets/mob_index_video_post.jpg'
import indexposter_web from '../assets/web_index_video_post.jpg'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
}

export default {
  // 複寫原來nuxt.config.js之meta
  head () {
    return {
      title: '台積電慈善基金會-把愛送出去',
      meta: [
        {
          property: 'og:url',
          content: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/index.html'
        },        
        { property: 'og:title',
          content: '台積電慈善基金會-把愛送出去'
        },
        { property: 'og:description',
          content: '台積電慈善基金會董事長張淑芬與志工團挺進第一線，做公益，對台積電而言，不只是捐款。一群工程師，選擇步出晶圓廠，走入重災區，以最直接有效的方式，向災民詢問可幫忙之處，再回頭盤點公司內部員工捐款、「台灣半導體設備暨材料協會」企業成員資源，一周內公布災區復原方案：先讓居民有安全的住所，他們發揮最暖心的「職業病」，用工程專業造橋鋪路、重建工廠與學校，近年再挺進花東偏鄉，關懷老人也陪伴孩子，橫越445公里路，全憑一個「助人就要徹底」的信念。台積電慈善基金會-把愛送出去'
        },
        { hid: 'description',
          name: 'description',
          content: '台積電慈善基金會董事長張淑芬與志工團挺進第一線，做公益，對台積電而言，不只是捐款。一群工程師，選擇步出晶圓廠，走入重災區，以最直接有效的方式，向災民詢問可幫忙之處，再回頭盤點公司內部員工捐款、「台灣半導體設備暨材料協會」企業成員資源，一周內公布災區復原方案：先讓居民有安全的住所，他們發揮最暖心的「職業病」，用工程專業造橋鋪路、重建工廠與學校，近年再挺進花東偏鄉，關懷老人也陪伴孩子，橫越445公里路，全憑一個「助人就要徹底」的信念。台積電慈善基金會-把愛送出去'
        },
        { name: 'keywords',
          content: '台積電、tsmc、公益、慈善、基金會、CSR、倡議、志工、捐款、半導體、工程、UDN、聯合報、張淑芬'
        },
      ]
    }
  },
  data: function () {
    return {
      location: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/index.html',
      stickyAnchors: true,
      indexvideo: indexvideo,
      indexvideo_mob: indexvideo_mob,
      indexposter_mob: indexposter_mob,
      indexposter_web: indexposter_web,
      indexMob1: indexMob1,
      indexWeb1: indexWeb1,
      indexMob2: indexMob2,
      indexWeb2: indexWeb2,
      indexicon1: indexicon1,
      indexicon2: indexicon2,
      indexicon3: indexicon3,
      indexicon4: indexicon4,
      tsmcLogo: tsmcLogo,
      newest: newest,
      showMessageBoard: false,
      isFBReady: false
    }
  },
  components: {
    HeadBar, ContentWrapper, EmbededVideo, Bodymovin, Overlay, FBComment, FadeInDown, Foot
  },
  created: function () {
    // 關掉留言區
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
  },
  mounted: function () {
    // 載入FBsdk
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
    setTimeout(function() {
      Vue.FB.XFBML.parse();
    }, 500)
    console.log(this.$route)
    console.log(global.location)
  },
  beforeDestroy: function () {
    this.$eventBus.$off('closeOverlay')
    window.removeEventListener('fb-sdk-ready', this.onFBReady)
  },
  methods: {
    showComments: function () {
      this.showMessageBoard = true
    },
    closeOverlay: function () {
      this.showMessageBoard = false
    },
    onFBReady: function () {
      this.isFBReady = true
    },
    handle_toPageGA (from, to, by) {
      console.log(from, to)
      ga("send", {
          "hitType": "event",
          "eventCategory": "ToPage",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ by +"] [ "+ from +" ] > [ "+ to +" ]"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
#index {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  position: relative;
}

@media screen and (max-width: 767px){
  .hidden-mobile{
    display: none!important;
  }
}

@media screen and (min-width: 768px){
  .hidden-pc{
    display: none!important;
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
  display: flex;
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  animation: changeColor 7000ms infinite linear;
}
@keyframes changeColor {
  0%{
    background-color: #E5CAAB;
  }
  32.666%{
   background-color: #E5CAAB;
  }
  32.704%{
    background-color: #FEFCF2;
  }
  63.734%{
   background-color: #FEFCF2;
  }
  63.852%{
    background-color: #DFC5DE;
  }
  96.128%{
   background-color: #DFC5DE;
  }
  96.2406%{
    background-color: #E5CAAB;
  }
  100%{
    background-color: #E5CAAB;
  }
}
.centercenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subpageLink {
  text-align: right;
}

@media screen and (min-width: 768px){
  .iconWrapper {
    display: flex;
    justify-content: space-around;
  }
}

@media screen and (max-width: 767px){
  .icon {
    padding: 25px;
  }
}

.icon p {
  padding-top: 10px;
  text-align: center;
}


@media screen and (max-width: 1023px){
  img {
    width: 100%;
  }
}

.section {
  margin-top: 20px;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px){
  .section {
    margin-top: 35px;
    margin-bottom: 35px;
  }
}

.column img{
  width: 100%;
}

.btn {
  cursor: pointer;
  background-color: #333;
  line-height: 40px;
  border: none;
  z-index: 0;
}
.btn span {
  color: #fff;
  display: block;
  padding-left: 26px;
  padding-right: 26px;
  line-height: 40px;
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
  .btn:hover:after {
    width: 100%;
    left: 0;
    border-radius: 4px;
    right: auto;
  }
  .btn:hover:before {
    width: 0;
    left: 0;
    border-radius: 4px;
  }
}

.subpageLink {
 position: relative;
 display: block;
 float: right;
 margin-top: 20px;
 margin-bottom: 30px;
}

.iconWrapper a{
  color: #000;
  text-decoration: none;
}

.icon{
  cursor: pointer;
}

.fa.fa-arrow-right{
  padding: 0 5px;
}

.link a{
  color: #000;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10px;
}
</style>
