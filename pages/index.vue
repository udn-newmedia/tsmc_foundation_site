<template>
  <div id="index">
    <HeadBar :bookmark-display="stickyAnchors"></HeadBar>
    <div class="fullscreen centercenter" style="position: relative; overflow: hidden;">
      <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/bg.json" MOBjsonfile="./index_cover/common/mobile/bg/data.json" PADjsonfile="./index_cover/common/mobile/bg/data.json" style="position: absolute; top: 0; left: 0; z-index: 0; width: 100%;"></Bodymovin>
      <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/fly.json" MOBjsonfile="./index_cover/common/mobile/fly/data.json" PADjsonfile="./index_cover/common/mobile/fly/data.json" style="position: absolute; top: 0; left: 0; z-index: 1; width: 100%;"></Bodymovin>
      <ContentWrapper style="padding:0; z-index: 2;">
        <Bodymovin jsonfile="./index_cover/web.json" MOBjsonfile="./index_cover/mob.json" PADjsonfile="./index_cover/pad.json" style="width: 100%;　z-index: 2;"></Bodymovin>
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
            <button>最新動態</button>
          </div>
          <p><br></p>
          <p><br></p>
        </div>
        <div class="col-lg-1 hidden-mobile"></div>
        <div class="column col-lg-6 hidden-mobile">
          <img :src="indexWeb1">
        </div>
        <div class="hidden-pc">
          <img :src="indexMob1">
        </div>        
      </div>
    </ContentWrapper>
    <ContentWrapper>
      <EmbededVideo :src="indexvideo" :srcWeb="indexvideo"></EmbededVideo>
    </ContentWrapper>
    <ContentWrapper class="section">
      <div class="row section">
        <div class="col-lg-5 hidden-mobile">
          <img :src="indexWeb2">
        </div>
        <div class="hidden-pc">
          <img :src="indexMob2">
        </div>
        <p class="hidden-pc"><br></p>
        <p class="hidden-pc"><br></p>        
        <div class="col-lg-1"></div>
        <div class="col-lg-6">
          <p>台積電重建團隊進駐災區，發揮蓋晶圓廠的聰明腦袋與最高執行力，與協力廠商挨家挨戶拜訪，「請問我們可以幫忙嗎？」，被石頭砸破的屋頂，被炸歪的紗窗，店家門前滿目瘡痍的道路，台積電員工在災區穿梭，一一幫災民排除了，這是智慧做慈善。</p>
          <p><br></p>
          <p>紅布條的故事，至今仍在台灣人民心中飄揚，但2014年高雄氣爆不是起始點，更早的八八風災，爾後的八仙事件，台積電做公益一直不是電視上的捐款跑馬燈而已，一路以來，把晶圓廠工程師變成暖男的推手，是張忠謀夫人、台積電慈善基金會董事長張淑芬。</p>
          <div class="subpageLink">
            <button>我們的故事</button>
          </div>
        </div>
      </div>
    </ContentWrapper>
    <ContentWrapper backgroundColor='#e0dfdf'>
      <p><br></p>
      <p><br></p>
      <div class="row iconWrapper">
        <div class="col-lg-2 col-xs-6 icon">
          <img :src="indexicon1">
          <p>愛互聯</p>          
        </div>
        <div class="col-lg-2 col-xs-6 icon">
          <img :src="indexicon2">
          <p>我們的故事</p>          
        </div>
        <div class="col-lg-2 col-xs-6 icon">
          <img :src="indexicon3">
          <p>我們做的事</p>
        </div>
        <div class="col-lg-2 col-xs-6 icon">
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
</template>

<script>
import HeadBar from '~/components/HeadBar.vue'
// import HeadBar from 'udn-newmedia-vue-components/src/components/HeadBar.vue'
import ContentWrapper from '~/components/Content.vue'
import EmbededVideo from 'udn-newmedia-vue-components/components/EmbededVideo.vue'
import Bodymovin from 'udn-newmedia-vue-components/components/Bodymovin.vue'
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

export default {
  data: function () {
    return {
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
      newest: newest
    }
  },
  components: {
    HeadBar, ContentWrapper, EmbededVideo, Bodymovin
  }
}
</script>

<style>
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
</style>
