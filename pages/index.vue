<template>
  <FadeInDown>
    <div id="index">
      <HeadBar :bookmark-display="stickyAnchors">
        <div slot="comment" class="links">
          <div class="link">
            <a @click.prevent="showComments">留言區</a>
          </div>
        </div>                
      </HeadBar>
      <div class="fullscreen centercenter" style="position: relative; overflow: hidden;">
        <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/bg.json" MOBjsonfile="./index_cover/common/mobile/bg/data.json" PADjsonfile="./index_cover/common/mobile/bg/data.json" style="position: absolute; top: 0; left: 0; z-index: 0; width: 100%;"></Bodymovin>
        <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/fly.json" MOBjsonfile="./index_cover/common/mobile/fly/data.json" PADjsonfile="./index_cover/common/mobile/fly/data.json" style="position: absolute; top: 0; left: 0; z-index: 1; width: 100%;"></Bodymovin>
        <ContentWrapper style="padding:0; z-index: 2;">
          <Bodymovin jsonfile="./index_cover/web/data.json" MOBjsonfile="./index_cover/mobile/data.json" PADjsonfile="./index_cover/pad/data.json" style="width: 100%;　z-index: 2;"></Bodymovin>
        </ContentWrapper>
      </div>
      <ContentWrapper class="section">
        <div class="row">
          <div class="column col-lg-5 col-sm-12">
            <h3>橫越445公里路</h3>
            <p>做公益，對台積電而言，不只是捐款。一群工程師，選擇步出晶圓廠，走入重災區，他們發揮最暖心的「職業病」，用工程專業造橋鋪路、重建工廠與學校，近年再挺進花東偏鄉，關懷老人也陪伴孩子，橫越445公里路，全憑一個「助人就要徹底」的信念。</p>
            <p><br></p>
            <p>高雄氣爆滿月時，災民在街道掛起一幅幅紅布條感謝台積電。感謝什麼？災後第一時間，台積電慈善基金會董事長張淑芬，感性地看到災民有家歸不得的傷痛，台積電工程師們，則見災民在斷垣殘壁中，生計被迫中斷，一個景，兩個情，他們決定捐錢也做事。</p>
            <div class="subpageLink">
              <nuxt-link class="btn" to="/news">
                <span>最新動態
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </nuxt-link>
            </div>          
            <p><br></p>
            <p><br></p>
          </div>
          <div class="col-lg-1 hidden-mobile"></div>
          <div class="column col-lg-6 hidden-mobile">
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
        <EmbededVideo :src="indexvideo" :srcWeb="indexvideo"></EmbededVideo>
      </ContentWrapper>
      <ContentWrapper>
        <div class="hidden-pc" style="margin-top: 10px;">
          <img :src="indexMob2">
        </div>      
      </ContentWrapper>
      <ContentWrapper class="section">
        <div class="row section">
          <div class="col-lg-5 hidden-mobile">
            <img :src="indexWeb2">
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-6">
            <p>台積電重建團隊進駐災區，發揮蓋晶圓廠的聰明腦袋與最高執行力，與協力廠商挨家挨戶拜訪，「請問我們可以幫忙嗎？」，被石頭砸破的屋頂，被炸歪的紗窗，店家門前滿目瘡痍的道路，台積電員工在災區穿梭，一一幫災民排除了，這是智慧做慈善。</p>
            <p><br></p>
            <p>紅布條的故事，至今仍在台灣人民心中飄揚，但2014年高雄氣爆不是起始點，更早的八八風災，爾後的八仙事件，台積電做公益一直不是電視上的捐款跑馬燈而已，一路以來，把晶圓廠工程師變成暖男的推手，是張忠謀夫人、台積電慈善基金會董事長張淑芬。</p>
            <div class="subpageLink">
              <nuxt-link class="btn" to="/aboutus">
                <span>我們的故事
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
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/partners">
            <img :src="indexicon1">
            <p>愛互聯</p>
          </nuxt-link>              
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/aboutus">
            <img :src="indexicon2">
            <p>我們的故事</p>          
          </nuxt-link>              
          <nuxt-link class="col-lg-2 col-xs-6 icon" to="/campaigns">
            <img :src="indexicon3">
            <p>我們做的事</p>
          </nuxt-link>              
          <div class="col-lg-2 col-xs-6 icon" @click="showComments">
            <img :src="indexicon4">
            <p>留言區</p>
          </div>
        </div>
        <p><br></p>
        <p><br></p>
      </ContentWrapper>
      <ContentWrapper backgroundColor='#292b2e' class="footer">
        <p><br></p>
        <p><br></p>
        <div class="row" style="position: relative;">
          <div class="col-lg-6 tsmclogo">
            <img :src="tsmcLogo">
          </div>
          <div class="col-lg-6 tsmcfoundation">
            <p>台積電慈善基金會</p>
            <p>電話 : 03-563-6688 ext. 712-5030</p>
            <p>地址 : 300 新竹科學園區力行六路8號</p>
          </div>        
        </div>
      </ContentWrapper>     
    </div>
    <Overlay mainContainer="index" :show="showMessageBoard">
      <FBComment :href="location"></FBComment>
    </Overlay>
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import HeadBar from '~/components/HeadBar.vue'
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

if (process.browser) {
  require('~/plugins/fb-sdk.js')
}

export default {
  // 複寫原來nuxt.config.js之meta
  head () {
    return {
      title: '台積電慈善基金會 ',
      meta: [
        { property: 'fb:admins', content: '1010324812347164' },
        { property: 'og:title', content: '台積電慈善基金會' },
        { property: 'og:url', content: 'http://nmdap.udn.com.tw/tsmc_foundation_site/' },
        { property: 'og:description', content: '' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'keywords', content: '' }
      ]
    }
  },  
  data: function () {
    return {
      location: 'http://nmdap.udn.com.tw/tsmc_foundation_site/',
      stickyAnchors: true,
      indexvideo: indexvideo,
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
    HeadBar, ContentWrapper, EmbededVideo, Bodymovin, Overlay, FBComment, FadeInDown
  },
  created: function () {
    // 關掉留言區
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
  },
  mounted: function () {
    // 載入FBsdk
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
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
    }
  }
}
</script>

<style scoped>
#index {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
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
}

.fullscreen {
  width: 100%;
  height: 100vh;
}

.centercenter {
  display: flex;
  justify-content: center;
  align-items: center;
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

.tsmcfoundation {
  bottom: 0;
  right: 0;
  color:  #717376;
  margin-top: 10px;
}

@media screen and (min-width: 1024px){
  .tsmcfoundation {
    position: absolute;
    border-left: solid 1px;
    padding-left: 10px;
    margin-top: 0;
  }
}

.tsmclogo img {
  margin-right: 10px;
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
  margin-top: 50px;
  margin-bottom: 50px;
}

@media screen and (min-width: 1024px){
  .section {
    margin-top: 100px;
    margin-bottom: 100px;
  }
}

.column img{
  width: 100%;
}

.btn {
  cursor: pointer;
  background-color: #000;
  /* width: 330px; */
  /* height: 64px; */
  line-height: 60px;
  z-index: 0;
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.34);
}
.btn span {
  color: #fff;
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
.btn:hover:before {
  width: 0;
  left: 0;
}
.btn:hover:after {
  width: 100%;
  left: 0;
  right: auto;
}

.subpageLink {
 position: relative; 
 display: block;
 float: right;
 margin-top: 50px;
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
</style>
