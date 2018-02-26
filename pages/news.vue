<template>
  <FadeInDown>
    <div id="news">
      <HeadBar :bookmark-display="stickyAnchors" :isNews='false'>
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
      <div class="fullscreen" style="position: absolute; left: 0; top: 0; z-index: 0;">
        <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/fly.json" MOBjsonfile="./index_cover/common/mobile/fly/data.json" PADjsonfile="./index_cover/common/mobile/fly/data.json" style="position: absolute; top: 0; left: 0; width: 100%;"></Bodymovin>        
      </div>
      <ContentWrapper class="fullscreen hidden-mobile" style="position: absolute; left: 0; top: 0; z-index: 0;">
        <h1 class="bigtitle" style="position: absolute; top: 20%;">最新<br>動態</h1>
      </ContentWrapper>
      <div class="covertransform">
        <ContentWrapper class="section firstsection">
          <div class="row">
            <div class="col-lg-3 col-sm-3 col-xs-12"></div>
            <div class="col-lg-2 col-sm-2 hidden-mobile"></div>
            <div class="col-lg-7 col-sm-7 hidden-mobile titleblock" style="z-index: 99; padding-bottom: 0">
              <h2>{{coverNew.title}}</h2>
              <h2>{{coverNew.subTitle}}</h2>
              <p>{{coverNew.text}}</p>
              <div class="subpageLink">
                <a class="btn" :href="coverNew.link" target="_blank">
                  <span>完整內文
                    <i class="fa fa-external-link" aria-hidden="true"></i>                  
                  </span>
                </a>
              </div>          
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1 class="bigtitle hidden-pc" style="margin-top: 20%; margin-bottom: 20px;">最新<br>動態</h1>          
          <EmbededVideo class="newsvideo" :src="newsvideo" :srcWeb="newsvideo" background-color="transparent"></EmbededVideo>
        </ContentWrapper>
      </div>
      <ContentWrapper>
        <div class="newsblock hidden-pc" style="z-index: 1;">
          <h2>{{coverNew.title}}</h2>
          <h2 class="subtitle">{{coverNew.subTitle}}</h2>
          <p>{{coverNew.text}}</p>
          <div class="subpageLink">
            <a class="btn" :href="coverNew.link" target="_blank">
              <span>完整內文
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </span>
            </a>
          </div>          
        </div>
      </ContentWrapper>
      <ContentWrapper class="section" ref='newsGroup'>
        <div class="news">
          <div class="newsblock"
            v-for="news in contentList"
            :key="news.title">
            <div class='imgContain'>
              <img :src="news.img">
            </div>
            <p class="title"><b>{{news.title}}</b></p>
            <p>{{news.text}}</p>
            <p><br></p>
            <div class="subpageLink">
              <a class="btn" :href="news.link" target="_blank">
                <span>完整內文
                  <i class="fa fa-external-link" aria-hidden="true"></i>                                                    
                </span>
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <nav class="section" aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click.prevent="changePage('previous')" aria-label="Previous">
              <span aria-hidden="true" class="arrow">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item"><a class="page-link" :class="{'activePage': this.page === 1}" @click.prevent="changePage('1')">1</a></li>
          <li class="page-item"><a class="page-link" :class="{'activePage': this.page === 2}" @click.prevent="changePage('2')">2</a></li>
          <li class="page-item"><a class="page-link" :class="{'activePage': this.page === 3}" @click.prevent="changePage('3')">3</a></li>
          <li class="page-item">
            <a class="page-link" @click.prevent="changePage('next')" aria-label="Next">
              <span aria-hidden="true" class="arrow">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>    
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
    <Overlay mainContainer="news" :show="showMessageBoard">
      <FBComment :href="location"></FBComment>
    </Overlay>    
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import HeadBar from '~/components/HeadBar.vue'
import ContentWrapper from '~/components/Content.vue'
import Overlay from '~/components/Overlay.vue'
import EmbededVideo from '~/components/EmbededVideo.vue'
import Bodymovin from '~/components/Bodymovin.vue'
import FBComment from '~/components/FBComment.vue'
import FadeInDown from '~/components/FadeInDown.vue'
import $eventBus from'~/plugins/eventBus.js'
import newsvideo from '~/assets/newsvideo.mp4'
import indexMob1 from '~/assets/index_mob1.jpg'
import indexWeb1 from '~/assets/index_web1.jpg'
import indexMob2 from '~/assets/index_mob2.jpg'
import indexWeb2 from '~/assets/index_web2.jpg'
import tsmcLogo from '~/assets/logo_tsmc.svg'
import newsphoto from '~/assets/photo.jpg'
import titleimg from '~/assets/title_news.svg'
import titleimgmob from '~/assets/title_news_mob.svg'
import titlefont from '../static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf'

import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'
import img7 from '../assets/7.jpg'
import img8 from '../assets/8.jpg'
import img9 from '../assets/9.jpg'
import img10 from '../assets/10.jpg'
import img11 from '../assets/11.jpg'
import img12 from '../assets/12.jpg'
import img13 from '../assets/13.jpg'
import img14 from '../assets/14.jpg'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
  // require('~/plugins/pageLoadAnim.js')  
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
      indexMob1: indexMob1,
      indexWeb1: indexWeb1,
      indexMob2: indexMob2,
      indexWeb2: indexWeb2,
      tsmcLogo: tsmcLogo,
      newsvideo: newsvideo,
      newsphoto: newsphoto,
      titleimg: titleimg,
      titleimgmob: titleimgmob,
      showMessageBoard: false,
      page: 1,
      isFBReady: false,
      coverNew:{
        title: '重回教育體制',
        subTitle: '埋下讓台灣暖起來的種子',
        text: '奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...',
        link: 'https://udn.com/news/story/6885/2605338',
        img: img5
      },
      newslist: [
        {
          title: '台積志工動起來 要給花蓮災民安全的住所',
          text: '針對本月6日深夜花蓮地區發生規模6.0地震所造成的傷害，台積電12日公布震災後協助復原方案，共同與民眾重建家園、協助他們回歸正常生活...',
          link: 'https://udn.com/news/story/7328/2982811',
          img: img1
        },      
        {
          title: '台積電發起募款 幫助花蓮災民、觀光重建',
          text: '台積電今天宣布，針對花蓮大地震所造成的傷害，以過去協助莫拉克風災、高雄氣爆與八仙塵爆的第一線經驗，研擬出台積電的災後復原協助方向...',
          link: 'https://udn.com/news/story/11809/2982504',
          img: img2
        },
        {
          title: '台積電員工與老人圍爐 捐善款助弱勢',
          text: '台積電慈善基金會志工，今帶著幼兒園小小志工們到新竹市秋霖園老人日照中心拜早年，與長輩們一起圍爐用餐，並捐出善款助弱勢家庭，長輩們開心...',
          link: 'https://udn.com/news/story/7324/2977967',
          img: img3
        },
        {
          title: '水餃配雞湯 「中部愛互聯」關懷老人',
          text: '「中部愛互聯」昨在台中公園辦活動幫助獨居老人，有近百名老人參與；與會的台積電慈善基金會董事長張淑芬說...',
          link: 'https://udn.com/news/story/7325/2974670',
          img: img4       
        },
        {
          title: '台積電董娘籲復興孝道　教部允發展教材',
          text: '張淑芬今天受邀演講「復興孝道的起心動念」，她提到社會中有許多獨居老人，缺乏親人照顧，因此希望各界一同重視「孝道」的精神，並從體制內做起，從學校就要加強教育。',
          link: 'https://udn.com/news/story/6885/2605338',
          img: img5
        },
        {
          title: '台積電捐車捐油　為熱便當開路進偏鄉',
          text: '罹患癌症及三高的藍大姊，曾是門諾基金會送餐的個案，原以為自己的人生就是這般過下去，卻在門諾基金會社工的鼓勵下，開始騎著腳踏車為附近的長輩送餐...',
          link: 'https://udn.com/news/story/7328/2836239',
          img: img6
        },
        {
          title: '台積電永續經營起步　張忠謀帶頭宣示',
          text: '台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...',
          link: 'https://udn.com/news/story/7240/2633448',
          img: img7
        },
        {
          title: '台積電送暖 助學童延續布農族文化',
          text: '學生人數不到百人，距離平地市區車程約1個半鐘頭的南投縣信義鄉雙龍國小，是地處偏鄉的布農族特色學校，長期透過合唱與射箭運動，讓學生延續傳統...',
          link: 'https://udn.com/news/story/6898/2936746',
          img: img8
        },
        {
          title: '台積電：企業別怕別急　我們一起挺過去',
          text: '台積電慈善基金會董事長張淑芬8日在與教育部國教署合辦的「把愛送出去 — 暖家傳孝」記者會上，帶領現場的教育部官員、教師、學生等，共同為花蓮受災民眾祈福...',
          link: 'https://udn.com/news/story/7240/2975434',
          img: img9
        },
        {
          title: '全台最高托老中心　台積董娘揭牌',
          text: '全台最高海拔「中部愛互聯雙龍日托中心」揭牌成立，讓長輩白天不致獨守家中，家屬得以安心工作。衛福部長陳時中說，自己換乘坐了兩小時車才抵達...',
          link: 'https://udn.com/news/story/7325/2683167',
          img: img10
        },
        {
          title: '倡孝道　台積電勵企業一起「微孝」',
          text: '「溫暖的家，就是社會更好的起點」。台積電慈善基金會近年致力推廣「孝道」，去年與國教署合作發展教材，今再與內政部、台南市府攜手...',
          link: 'https://udn.com/news/story/7266/2962925',
          img: img11
        },
        {
          title: '台積電農村營　學童：以後飯要吃光光',
          text: '台積電舉辦農村生態教育營，參與的孩子說，以前讀過「誰知盤中飧，粒粒皆辛苦」，親身體會才真感受到食物得來不易，直呼「以後東西都要吃光光」..',
          link: 'https://udn.com/news/story/7326/2929432',
          img: img12
        },
        {
          title: '祖父母節享天倫 張淑芬：家裡熱了更能愛別人',
          text: '「抱抱身邊的長輩，大聲說出我愛你！」教部舉辦「祖孫野餐趣」，吸引上百位民眾扶老攜幼參與，台積電慈善基金會董事長張淑芬，也到場共襄盛舉...',
          link: 'https://udn.com/news/story/7266/2665652',
          img: img13
        },
        {
          title: '孝道X生態　親情澆灌小幼苗',
          text: '「我的快樂，是因為您的付出！」台積電生態志工今年首度將生態與孝道結合，由小幼苗的栽種與故事，讓員工的孩子體會到父母親的愛...',
          link: 'https://udn.com/news/story/7324/2785606',
          img: img14
        },                                                 
      ],
    }
  },
  computed: {
    contentList: function () {
      let currentList = []
      const self = this
      function maxLength () {
        if(self.page < 3) {
          return 5
        } else {
          return 1
        } 
      }
      for (let i = 0; i <= maxLength(); i++) {
        currentList.push(this.newslist[(this.page - 1) * 6 + i])
      }
      return currentList
    }    
  },
  components: {
    HeadBar, ContentWrapper, EmbededVideo, Overlay, FBComment, Bodymovin, FadeInDown
  },
  created: function () {
    // 關閉留言區
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
  },
  mounted: function () {
    // 載入 FB sdk
    this.isFBReady = Vue.FB != undefined
    setTimeout(function(){
      Vue.FB.XFBML.parse();  
    }, 500)
    window.addEventListener('fb-sdk-ready', this.onFBReady)
  },
  updated: function() {
    window.scrollTo(0, this.$refs.newsGroup.$el.offsetTop - 50);
  },
  beforeDestroy: function () {
    this.$eventBus.$off('closeOverlay')
    window.removeEventListener('fb-sdk-ready', this.onFBReady)
  },
  methods: {
    changePage: function (msg) {
      switch (msg) {
        case 'previous':
          if (this.page > 1) {
            this.page--
          }
          break
        case 'next':
          if (this.page < (this.newslist.length - 1) / 6) {
            this.page++
          }
          break
        case '1':
          this.page = 1
          break
        case '2':
          this.page = 2
          break
        case '3':
          this.page = 3
          break
      }
    },
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

<style lang="scss" scoped>
@font-face {
  font-family: 'GenJyuuGothic';
  src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
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
#news {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  background: #e4c8a9;
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

h1.bigtitle.bigtitle {
  font-family: 'GenJyuuGothic';
  font-weight: bold;
  color: white;
}

.titleblock {
  position: relative;
  margin-top: 20px;
  background: white;
  border-radius: 3px;
  padding: 80px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .titleblock {
    padding: 40px;
  }  
}

.titleblock p {
  padding-top: 30px;
}

.titleblock button {
  position: absolute;
  margin-right: 80px;
  bottom: 0;
  right: 0;
  transform: translateY(50%);
}

.tsmcfoundation {
  bottom: 0;
  right: 0;
  color:  #717376;
  margin-top: 10px;
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

@media screen and (max-width: 768px){
  img {
    width: 100%;
  }
}

.section {
  padding-top: 50px;
  margin-bottom: 50px;
}

.section.firstsection {
  padding-top: 80px;
  margin-bottom: 0;
  padding-top: 50px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .section {
    margin-bottom: 50px;
  }
  .section.firstsection {
    padding-top: 100px;
  }
  .newsvideo{
    transform: translateY(-5%);    
  }
}

@media screen and (min-width: 1024px){
  .section {
    margin-bottom: 100px;
  }
  .section.firstsection {
    padding-top: 100px;
  }
  .newsvideo{
    transform: translateY(-5%);    
  }
}

/* .covertransform{
  transform: translateY(80px);
} */

@media screen and (min-width: 1024px){
  .covertransform{
    transform: translateY(100px);
  }
}

.news{
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.newsblock{
  position: relative;
  background: white;
  width: 100%;
  margin: 0 0 60px 0;
  border-radius: 3px;
  padding: 20px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .newsblock{
    width: 45%;
    margin: 50px 1.5%;
  }  
}

@media screen and (min-width: 1024px){
  .newsblock{
    width: 30%;
    margin: 50px 1.5%;
  }  
}

.newsblock .title{
  padding: 20px 0;
}

.newsblock button{
  position: absolute;
  bottom: 0;
  right: 10px;
  transform: translateY(50%);
}

img{
  width: 100%;
}

nav{
  text-align: center;
}

.pagination>li>a.page-link{
  background-color: transparent;
  border: 1px solid black;  
  color: black;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
}

.pagination>li>a.page-link.activePage{
  background-color: black;
  color: white;
}

.covertitle{
  width: 100px;
  height: 200px;

}

@media screen and (min-width: 1024px){
  .covertitle{
    width: 200px; 
    height: 400px; 
    margin: 20px 0;
  }
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
 position: absolute;
 bottom: 0;
 right: 20px;
 transform: translateY(50%);
}

.titleblock .subpageLink {
 position: relative; 
 display: block;
 float: right;
}

.absolutefullscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.fa.fa-external-link{
  padding: 0 5px;
}

@media screen and (max-width: 1023px){
  .newsblock .subtitle{
    margin-bottom: 10px;
  }  
}

.link a{
  color: #000;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10px;
}
</style>
