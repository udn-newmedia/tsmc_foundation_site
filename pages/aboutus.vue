<template>
  <FadeInDown>
    <div id="aboutus">
      <HeadBar :bookmark-display="stickyAnchors">
        <div slot="comment" class="links">
          <div class="link">
            <a @click.prevent="showComments">留言區</a>
          </div>
        </div>                        
      </HeadBar>
      <div class="relative" style="position: relative;">
        <div class="bg-web hidden-mobile"></div>
        <div class="bg-mob hidden-pc"></div>
        <ContentWrapper class="absolutefullscreen centercenter">
          <h1 class="bigtitle" style="position: absolute; top: 20%;">我們的<br>故事</h1>
        </ContentWrapper>      
      </div>
      <ContentWrapper class="section">
        <Quote 
        text="「台積電做能做的，但我們不回頭去看，就是一直往前，想著怎麼樣能做得更實在、更徹底，怎樣才能真正幫助到人。」" 
        refer="──張淑芬"
        color="#000"
        borderColor="#f2ede4"></Quote>
        <p><br></p>
        <h2>做到最實在 台積電與高雄氣爆</h2>
        <p><br></p>
        <p>張淑芬說，台積電過去，也是每逢災難就喊聲捐錢。但她發現，全公司上下，卻沒人知道，善款最後作何用途。她便向丈夫、台積電董事長張忠謀提議，「這事可不可以讓我來做？」</p>
        <p><br></p>
        <p>2014年高雄氣爆，企業紛紛表態捐款時，鎂光燈卻等不到台積電的隻字片語。當時張忠謀，僅交代張淑芬一句話，「錢不是問題，人才是，先下去看看，想辦法做到最好、最快。」</p>
        <p><br></p>
        <p>張淑芬時任台積電志工社長，她根據在八八風災協助重建的經驗，避開事發前三天「混亂期」，第四日才帶著同樣具備災區重建經驗的資深處長莊子壽（時任新建工程處長）南下勘查，一抵現場，兩人立刻分頭，觀察災區環境狀況。</p>
        <p><br></p>
        <p><br></p>
        <ColumnThree
        :img1="pic1"
        :img2="pic2"
        :img3="pic3"
        :imgweb1="pic1"
        :imgweb2="pic2"
        :imgweb3="pic3"
        imgsay="台積電志工多工程師出身，投入服務同時，也大力發揮工程專業，為受助者打造更安全節能環境。"
        ></ColumnThree>
        <p><br></p>
        <p><br></p>
        <p>感性的張淑芬，看見災民家中燒的漆黑，有家歸不得；莊子壽建設台積電全球30座晶圓廠，行事「很工程師」、很理性，看見被炸成深淵的馬路，災民生計停擺，但兩人碰面都清楚，「災民不要錢，要路、要家」。</p>
        <p><br></p>      
        <p>回頭獲張忠謀授權「救災金額無上限」，台積電重建團隊隔日就進駐災區。「但人家哪知道台積電要做甚麼、可以相信嗎？」莊子壽笑說，他於是領著團隊，挨家挨戶敲門，也請里長幫忙，詢問有沒有需要協助的地方。</p>
        <p><br></p>
        <p>重建團隊一下子就修出「口碑」，從歪掉的紗窗、斑駁漏水的屋頂，到獨居老人壞掉的冷氣與電視機，該修的、不該修的，全都修好了：一共365戶、造了5座橋、鋪了4.3公里路。</p>
        <p><br></p>
        <p>期間，台積電念及災區家長們，正經歷人生最艱困一刻，災區的孩子們，則是有家歸不得，因此志工們集思廣益，打造歡樂的夏令營活動，將孩子們暫時帶離重建中的破碎家園，療癒一個個幼小心靈中，因災害造成的創傷和恐懼。</p>
      </ContentWrapper>
      <ContentWrapper class="section">
        <h2>做到最實在 台積電與高雄氣爆</h2>
        <p><br></p>
        <p>台積電慈善基金會今年正式成立，延續以往做公益的智慧。志工們還是堅持要走到第一線，去感受問題，去碰觸受助者真正的需求。</p>
        <p><br></p>
        <p>至於陪伴性質的服務，基金會則堅持，一旦投入就要長久延續。張淑芬一次離開榮民之家時，見長輩不捨的眼神，從此銘記，「讓人盼不到下一次快樂，比從來沒快樂過，更痛！」</p>
        <p><br></p>
        <p>台積電志工到偏鄉去服務，一趟只有300元車馬費，但志工要自己從新竹坐高鐵到台北，換火車到花蓮，再租車去深山，還經常買不到回程的火車票。</p>
        <p><br></p>
        <p>張淑芬說，這些她清楚、很不捨，其實自己有時也矛盾，鼓勵當志工，又捨不得員工當志工，就怕他們沒時間陪家人，未料隨即就看見，員工把孩子父母都帶來，一起當志工。</p>
        <p><br></p>
        <p><br></p>
        <ColumnTwo
        :img1="pic4"
        :img2="pic5"
        :imgweb1="pic4"
        :imgweb2="pic5"
        imgsay="台積電志工發揮知識力，利用假日到新竹偏鄉小學當「家教」，陪孩子讀書算數學。"
        ></ColumnTwo>
        <!-- <p><br></p>
        <p><br></p> -->
      </ContentWrapper>
      <ContentWrapper class="section">
        <Quote 
        text="她才發現，讓人堅持的力量，不是來自咬牙苦撐，而是感動與快樂。" 
        color="#000"
        borderColor="#f2ede4"></Quote>
        <p>甚至是進一步分享，希望親友能一起感受，志工告訴她，「專業能在工作以外的地方被需要，是存在的價值被肯定」。</p>
        <p><br></p>
        <p>「現在的台積電有溫度了，我感覺到他們活起來了」張淑芬說，以往員工都冷冷的，不問好、不笑，現在變得熱情，見到她會笑著大聲說早，連主管驚訝，沒見過同仁這麼熱情的模樣。</p>
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
    <Overlay mainContainer="aboutus" :show="showMessageBoard">
      <FBComment :href="location"></FBComment>      
    </Overlay>
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import HeadBar from '~/components/HeadBar.vue'
// import HeadBar from 'udn-newmedia-vue-components/src/components/HeadBar.vue'
import ContentWrapper from '~/components/Content.vue'
import Overlay from '~/components/Overlay.vue'
import EmbededVideo from 'udn-newmedia-vue-components/components/EmbededVideo.vue'
import Quote from 'udn-newmedia-vue-components/src/components/Quote.vue'
import ColumnThree from 'udn-newmedia-vue-components/src/components/ColumnThree.vue'
import ColumnTwo from 'udn-newmedia-vue-components/src/components/ColumnTwo.vue'
import FBComment from 'udn-newmedia-vue-components/components/FBComment.vue'
import FadeInDown from '~/components/FadeInDown.vue'
import $eventBus from'~/plugins/eventBus.js'
import indexvideo from '~/assets/indexvideo.mp4'
import pic1 from '~/assets/aboutus1.jpg'
import pic2 from '~/assets/aboutus2.jpg'
import pic3 from '~/assets/aboutus3.jpg'
import pic4 from '~/assets/aboutus4.jpg'
import pic5 from '~/assets/aboutus5.jpg'
import tsmcLogo from '~/assets/logo_tsmc.svg'
// import bgWeb from '~/assets/aboutus_bg_web.jpg'
// import bgMob from '~/assets/aboutus_bg_mob.jpg'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
}

export default {
  /** 
   * 變數:
   *  - showMessageBoard: (true or false) 是否顯示留言區 
  */
  data: function () {
    return {
      location: 'http://nmdap.udn.com.tw/tsmc_foundation_site/',      
      stickyAnchors: true,
      indexvideo: indexvideo,
      tsmcLogo: tsmcLogo,
      pic1: pic1,
      pic2: pic2,
      pic3: pic3,
      pic4: pic4,
      pic5: pic5,
      // bgWeb: bgWeb,
      // bgMob: bgMob,
      showMessageBoard: false,
      isFBReady: false
    }
  },
  components: {
    HeadBar, ContentWrapper, EmbededVideo, Quote, ColumnThree, ColumnTwo, Overlay, FBComment, FadeInDown
  },
  created: function () {
    // 關閉留言區
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
  },
  mounted: function () {
    // 載入 FB sdk
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
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

#aboutus {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  background: #f2ede4;
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

.absolutefullscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
}

h1.bigtitle.bigtitle {
  font-family: 'GenJyuuGothic';  
  font-size: 49px;
  font-weight: bold;
  color: white;
}

@media screen and (min-width: 1024px){
  h1.bigtitle.bigtitle {
    font-size: 100px;
  }  
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

.bg-mob{
  width: 100%;
  height: 100vh;
  background-image: url('~/assets/aboutus_bg_mob.jpg');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;   
}

@media screen and (min-width: 1024px){
  .bg-web{
    width: 100%;
    height: 100vh;
    background-image: url('~/assets/aboutus_bg_web.jpg');
  }
}
</style>
