<template>
  <FadeInDown>
    <div id="news">
      <HeadBar :bookmark-display="stickyAnchors">
        <div slot="comment" class="links">
          <div class="link">
            <a @click.prevent="showComments">留言區</a>
          </div>
        </div>
      </HeadBar>
      <div class="fullscreen" style="position: absolute; left: 0; top: 0; z-index: 0;">
        <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/fly.json" MOBjsonfile="./index_cover/common/mobile/fly/data.json" PADjsonfile="./index_cover/common/mobile/fly/data.json" style="position: absolute; top: 0; left: 0; width: 100%;"></Bodymovin>        
      </div>
      <ContentWrapper class="section firstsection">
        <h1 class="bigtitle" style="position: absolute; top: 20%;">最新<br>動態</h1>
        <div class="row">
          <div class="col-lg-3 col-sm-12"></div>
          <div class="col-lg-2 hidden-mobile"></div>
          <div class="col-lg-7 hidden-mobile titleblock" style="z-index: 1; padding-bottom: 0">
            <h2>{{covernewstitle}}</h2>
            <h2>{{covernewssubtitle}}</h2>
            <p>{{newslist[0].text}}</p>
            <div class="subpageLink">
              <a class="btn">
                <span>完整內文
                  <i class="fa fa-external-link" aria-hidden="true"></i>                  
                </span>
              </a>
            </div>          
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <EmbededVideo class="newsvideo" :src="newsvideo" :srcWeb="newsvideo" background-color="transparent"></EmbededVideo>
      </ContentWrapper>
      <ContentWrapper>
        <div class="newsblock hidden-pc" style="z-index: 1;">
          <h2>{{covernewstitle}}</h2>
          <h2>{{covernewssubtitle}}</h2>
          <p>{{newslist[0].text}}</p>
          <div class="subpageLink">
            <a class="btn">
              <span>完整內文
                <i class="fa fa-external-link" aria-hidden="true"></i>                                  
              </span>
            </a>
          </div>          
        </div>
      </ContentWrapper>
      <ContentWrapper class="section">
        <div class="news">
          <div class="newsblock"
            v-for="news in contentList"
            :key="news.title">
            <img :src="newsphoto">
            <p class="title">{{news.title}}</p>
            <p>{{news.text}}</p>
            <p><br></p>
            <div class="subpageLink">
              <a class="btn">
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
import EmbededVideo from 'udn-newmedia-vue-components/components/EmbededVideo.vue'
import Bodymovin from 'udn-newmedia-vue-components/components/Bodymovin.vue'
import FBComment from 'udn-newmedia-vue-components/components/FBComment.vue'
import FadeInDown from '~/components/FadeInDown.vue'
import $eventBus from'~/plugins/eventBus.js'
import newsvideo from '~/assets/indexvideo.mp4'
import indexMob1 from '~/assets/index_mob1.jpg'
import indexWeb1 from '~/assets/index_web1.jpg'
import indexMob2 from '~/assets/index_mob2.jpg'
import indexWeb2 from '~/assets/index_web2.jpg'
import tsmcLogo from '~/assets/logo_tsmc.svg'
import newsphoto from '~/assets/photo.jpg'
import titleimg from '~/assets/title_news.svg'
import titleimgmob from '~/assets/title_news_mob.svg'
import titlefont from '../static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
  // require('~/plugins/pageLoadAnim.js')  
}

export default {
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
      newslist: [
        {
          title: '重回教育體制 埋下讓台灣暖起來的種子',
          text: '奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...'
        },
        {
          title: '台積電永續經營起步 張忠謀帶頭宣示',
          text: '1台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'
        },
        {
          title: '台積電董娘籲復興孝道 教部允發展教材',
          text: '2台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'          
        },
        {
          title: '台積電偏鄉送愛 鼓勵手心翻轉讓愛循環',
          text: '3全國教育局處長會議今天在新竹縣登場，台積電慈善基金會董事長張淑芬受邀演講，呼籲復興孝道精神...'          
        },
        {
          title: '台積電辦農村生態營 小學生：以後東西都要吃光光',
          text: '4台積電14A廠舉辦農村生態教育體驗營，60名來自台積電家庭孩子本周末至台南白河、柳營採玉米筍、做窯烤披薩...'
        },
        {
          title: '全台海拔最高日托中心揭牌 台積電董娘來關懷',
          text: '5台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'
        },
        {
          title: '祖父母節享天倫 張淑芬：家裡熱了更能愛別人',
          text: '6台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會..'
        },
        {
          title: '台積電永續經營起步 張忠謀帶頭宣示',
          text: '7台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'
        },
        {
          title: '台積電董娘籲復興孝道 教部允發展教材',
          text: '8台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'          
        },
        {
          title: '台積電偏鄉送愛 鼓勵手心翻轉讓愛循環',
          text: '9全國教育局處長會議今天在新竹縣登場，台積電慈善基金會董事長張淑芬受邀演講，呼籲復興孝道精神...'          
        },
        {
          title: '積電辦農村生態營 小學生：以後東西都要吃光光',
          text: '10台積電14A廠舉辦農村生態教育體驗營，60名來自台積電家庭孩子本周末至台南白河、柳營採玉米筍、做窯烤披薩...'
        },
        {
          title: '全台海拔最高日托中心揭牌 台積電董娘來關懷',
          text: '11台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'
        },
        {
          title: '祖父母節享天倫 張淑芬：家裡熱了更能愛別人',
          text: '12台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會..'
        },
        {
          title: '台積電永續經營起步 張忠謀帶頭宣示',
          text: '13台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'
        },
        {
          title: '台積電董娘籲復興孝道 教部允發展教材',
          text: '14台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'          
        },
        {
          title: '台積電偏鄉送愛 鼓勵手心翻轉讓愛循環',
          text: '15全國教育局處長會議今天在新竹縣登場，台積電慈善基金會董事長張淑芬受邀演講，呼籲復興孝道精神...'          
        },
        {
          title: '積電辦農村生態營 小學生：以後東西都要吃光光',
          text: '16台積電14A廠舉辦農村生態教育體驗營，60名來自台積電家庭孩子本周末至台南白河、柳營採玉米筍、做窯烤披薩...'
        },
        {
          title: '全台海拔最高日托中心揭牌 台積電董娘來關懷',
          text: '17台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...'
        },
        {
          title: '祖父母節享天倫 張淑芬：家裡熱了更能愛別人',
          text: '18台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會..'
        }
      ]
    }
  },
  computed: {
    covernewstitle: function () {
      return this.newslist[0].title.split(" ")[0]

    },
    covernewssubtitle: function () {
      return this.newslist[0].title.split(" ")[1]
    },
    contentList: function () {
      let currentList = []
      for (let i = 1; i <= 6; i++) {
        currentList.push(this.newslist[(this.page - 1) * 6 + i])
      }
      return currentList
    }
  },
  components: {
    HeadBar, ContentWrapper, EmbededVideo, Overlay, FBComment, Bodymovin, FadeInDown
  },
  created: function () {
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
  },
  mounted: function () {
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
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

<style scoped>
@font-face {
  font-family: 'GenJyuuGothic';
  src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
}

#news {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  background: #e4c8a9;
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

.titleblock {
  position: relative;
  margin-top: 20px;
  background: white;
  border-radius: 3px;
  padding: 80px;
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

.section.firstsection {
  margin-top: 80px;
  margin-bottom: 0;
  padding-top: 50px;
}

@media screen and (min-width: 1024px){
  .section {
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .section.firstsection {
    margin-top: 80px;
    padding-top: 100px;
  }
  .newsvideo{
    transform: translateY(-5%);    
  }
}

.news{
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

.newsblock{
  position: relative;
  background: white;
  width: 100%;
  margin: 0 5px 60px 5px;
  border-radius: 3px;
  padding: 20px;
}

@media screen and (min-width: 1024px){
  .newsblock{
    width: 30%;
    margin: 50px 5px;
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
</style>
