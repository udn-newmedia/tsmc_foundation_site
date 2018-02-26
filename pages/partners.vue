<template>
  <FadeInDown>
    <div id="partners">
      <HeadBar :bookmark-display="stickyAnchors" isNews='true'>
        <div slot="comment" class="links">
          <div class="link">
            <a @click.prevent="showComments">留言區</a>
          </div>
        </div>  
        <div slot='comment-mob' class="links">
          <div class="link">
            <a @click.prevent="showComments">留言區</a>
          </div>
        </div>  
      </HeadBar>
      <div class="fullscreen centercenter" style="background: #e4c8a9;">
        <ContentWrapper style="position: relative; width: 100%; height: 100%;">
          <h1 class="bigtitle" style="position: absolute; top: 20%;">愛互聯</h1>
        </ContentWrapper>
        <div class="cover">
          <img :src="member01" alt="愛互聯"
            :style="{opacity: img1opacity}"
            >
          <img :src="member02" alt="愛互聯"
            :style="{opacity: img2opacity}" >
        </div>        
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
      <ContentWrapper class="section">
        <div class="row">
          <div class="zone">
              <h3>北部</h3>
          </div>
          <div class="unit">
              <div class="partner"><a class="btn" href="https://www.vghtpe.gov.tw/Index.action" target="_blank"><span>台北榮民總醫院</span></a></div>
              <div class="partner"><a class="btn" href="http://www.ofo.org.tw" target="_blank"><span>老五老基金會</span></a></div>
          </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>竹苗</h3>
            </div>                
            <div class="unit">
                <div class="partner"><a class="btn" href="http://www.ofo.org.tw/" target="_blank"><span>老五老基金會</span></a></div>
                <div class="partner"><a class="btn" href="http://www.mil.mohw.gov.tw/index.asp" target="_blank"><span>部立苗栗醫院</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>台中</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="http://www.cmuh.cmu.edu.tw" target="_blank"><span>中國醫藥大學附設醫院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.fyh.mohw.gov.tw" target="_blank"><span>部立豐原醫院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.ltl-charity.org.tw" target="_blank"><span>林增連基金會</span></a></div>
                <div class="partner"><a class="btn" href="http://www.ofo.org.tw" target="_blank"><span>老五老基金會</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">
                <h3>台南</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="https://www.facebook.com/puli393" target="_blank"><span>台灣普力關懷協會</span></a></div>
                <div class="partner"><a class="btn" href="https://www.tnhosp.mohw.gov.tw" target="_blank"><span>部立台南醫院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.cnpc.mohw.gov.tw" target="_blank"><span>部立嘉南療養院</span></a></div>
                <div class="partner"><a class="btn" href="http://www.sinlau.org.tw" target="_blank"><span>新樓醫院</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">
            <div class="zone">                
                <h3>高屏</h3>
            </div>
            <div class="unit">
                <div class="partner"><a class="btn" href="http://web.fy.edu.tw/bin/home.php" target="_blank"><span>輔英科技大學</span></a></div>
                <div class="partner"><a class="btn" href="http://www.pnhb.mohw.gov.tw/?aid=home" target="_blank"><span>恆春旅遊醫院</span></a></div>
            </div>
        </div>
        <br/> <br/>
        <div class="row">                
            <div class="zone">
                <h3>花東</h3>
            </div>
            <div class="unit">                    
                <div class="partner"><a class="btn" href="http://www.mch.org.tw/" target="_blank"><span>基督教門諾會醫院</span></a></div>
                <div class="partner"><a class="btn" href="https://mf.eoffering.org.tw" target="_blank"><span>門諾基金會</span></a></div>
            </div>
        </div>
      </ContentWrapper>
      <ContentWrapper backgroundColor='#292b2e' class="footer">
        <p><br></p>
        <p><br></p>
        <div class="row" style="position: relative;">
          <div class="col-lg-6 col-sm-6 tsmclogo">
            <img :src="tsmcLogo">
          </div>
          <div class="col-lg-6 col-sm-6 tsmcfoundation">
            <p>台積電慈善基金會</p>
            <p>電話 : 03-563-6688 ext. 712-5030</p>
            <p>地址 : 300 新竹科學園區力行六路8號</p>
          </div>        
        </div>
      </ContentWrapper>      
    </div>
    <Overlay mainContainer="partners" :show="showMessageBoard">
      <FBComment :href="location"></FBComment>
    </Overlay>    
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import HeadBar from '~/components/HeadBar.vue'
import ContentWrapper from '~/components/Content.vue'
import Overlay from '~/components/Overlay.vue'
import FBComment from '~/components/FBComment.vue'
import FadeInDown from '~/components/FadeInDown.vue'
import $eventBus from'~/plugins/eventBus.js'
import member01 from '~/assets/member01.png'
import member02 from '~/assets/member02.png'
import tsmcLogo from '~/assets/logo_tsmc.svg'
import titleimg from '~/assets/title_partners.svg'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
}

export default {  
  components: {
    HeadBar, ContentWrapper, Overlay, FBComment, FadeInDown
  },
  /** 
   * 變數:
   *  - showMessageBoard: (true or false) 是否顯示留言區 
   *  - showfirstimg: 首頁滿版圖為兩張圖組成，以showfirstimg作為參數來替換，當showfirstimg為false時則顯示第二張圖
  */ 
  data: function () {
    return {
      location: 'http://nmdap.udn.com.tw/tsmc_foundation_site/',      
      stickyAnchors: true,
      tsmcLogo: tsmcLogo,
      member01: member01,
      member02: member02,
      showfirstimg: true,
      titleimg: titleimg,
      showMessageBoard: false,
      isFBReady: false
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
  created: function () {
    // 關閉留言區
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
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

.tsmcfoundation {
  bottom: 0;
  right: 0;
  color:  #717376;
  margin-top: 10px;
  padding-left: 10px !important;
}

@media screen and (min-width: 768px){
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
  padding-top: 50px;
  padding-bottom: 50px;
}

@media screen and (min-width: 1024px){
  .section {
    padding-top: 100px;
    padding-bottom: 100px;
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

.cover{
  position: absolute; 
  display: flex;
  justify-content: center;
  align-items: center;
  top: 35%;
  left: 0;
  width: 100%;
  /*margin-left: -10%;*/
}
.cover img{
  position: absolute;
  top: 0;
  left: 0;
  will-change: 'opacity';
  will-change: opacity;
  transition: opacity 0.5s;
  transition-timing-function: ease-out;
  width: 100%;
}
@media screen and (min-width: 799px) and (max-width: 1023px){
  .cover{
    width: 60%;
    top: 40%;
    left: 50%;
    margin-left: -20%;
  }
  .cover img{
    width: 80%;
  }
}
@media screen and (min-width: 1024px) {
  .cover{
    position: absolute; 
    display: flex;
    justify-content: center;
    align-items: center;
    top: 25%;
    left: 50%;
    width: 80%;
    margin-left: -20%;

  } 
  .cover img {
    width: 60%;
  }     
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
