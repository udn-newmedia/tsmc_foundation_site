<template>
  <FadeInDown>
    <HeadBar isNews='true' isPage='volunteer'></HeadBar>
    <div class="v_Cover">
      <Cover :bg="volunteer_cover" :bgweb="volunteer_cover_pc"></Cover>
      <ContentWrapper>
        <h1 class="bigtitle" style="position: absolute; top: 20%;">志工社</h1>
      </ContentWrapper>
    </div>
    <ContentWrapper class="volSection">
      <div class="volunteerContent">
        <div class="volunteerArticle">
          <h2>台積電志工</h2>
          <p><br/></p>
          <p>台積電志工社於台積電慈善基金會董事長張淑芬的帶領之下，秉持「選定主題、長期投入」的志工社宗旨，透過志工活動， 讓同仁在工作與生活中，取得平衡。</p>
          <p><br></p>
          <p>目前志工團隊包含台積導覽志工、導讀志工、節能志工、社區志工、生態志工及廠區專案型志工。</p>
        </div>
        <div class="slideSection">
          <ul>
            <li v-for="item in carousel" :key="'photo_' + item.id" :style="{transform: 'translate(' + carousel_current_index * -100 + '%, 0)'}">
              <img :src="item.src" />
            </li>
          </ul>
          <div class="navi_container">
            <span v-for="(item, index) in carousel" :key="item.src" :class="{navi_open: navi_isOpen(index)}"
                  @click="handle_click(index)" @mouseenter="handle_mouseIn" @mouseout="handle_mouseOut"></span>
          </div>
        </div>
      </div>
    </ContentWrapper>
    <ContentWrapper class="volSection">
      <h2>近期活動</h2>
      <div class="oursEvent">
        <div class="eventItem" v-for="event in events" :key="'event_' + event.id">
          <a :href="event.pdf" target="_blank" @click="sentGA('近期活動PDF', event.title, '頁面:志工社')">
            <img :src="event.src" alt="">
            <h3>{{event.title}}</h3>
          </a>
        </div>
      </div>
    </ContentWrapper>
    <ContentWrapper class="volSection" style="background-color: #e0dfdf">
      <h2>關於我們</h2>
      <div class="aboutVolunteer">
        <div v-for="item in aboutUs" :key="'about_'+item.id" class="aboutSort">
          <p><b>{{item.title}}</b></p>
          <p class="sortContent">{{item.content}}</p>
          <p class="stackTime">{{item.stackTime}}</p>
        </div>
      </div>
    </ContentWrapper>
    <ContentWrapper id="vol_comment" style="padding: 3% 0;position: relative;z-index: 2;background-color: #fff;">
      <p><br></p>
      <h2>留言給我們</h2>
      <p><br></p>
      <FBComment :href="location"></FBComment>
      <p><br></p>
    </ContentWrapper>
    <Foot></Foot>
  </FadeInDown>
</template>

<script>
  import Vue from 'vue'
  import Utils from 'udn-newmedia-utils'
  import Cover from '~/components/Cover.vue'
  import ContentWrapper from '~/components/Content.vue'
  import FadeInDown from '~/components/FadeInDown.vue'
  import Foot from '~/components/Foot.vue'
  import FBComment from '~/components/FBComment.vue'
  import HeadBar from '~/components/HeadBar.vue'

  import volunteer_cover from '~/assets/0425_update/volunteer_cover_mob.jpg'
  import volunteer_cover_pc from '~/assets/0425_update/volunteer_cover_pc.jpg'
  import ImgSlide_1 from '~/assets/0425_update/volunteer_slide_1.jpg'
  import ImgSlide_2 from '~/assets/0425_update/volunteer_slide_2.jpg'
  import ImgSlide_3 from '~/assets/0425_update/volunteer_slide_3.jpg'
  import ImgSlide_4 from '~/assets/0425_update/volunteer_slide_4.jpg'
  import ImgSlide_5 from '~/assets/0425_update/volunteer_slide_5.jpg'
  import ImgSlide_6 from '~/assets/0425_update/volunteer_slide_6.jpg'

  import ImgEvent_1 from '~/assets/0425_update/volunteer_event_1.jpg'
  import ImgEvent_2 from '~/assets/0425_update/volunteer_event_2.jpg'
  import ImgEvent_3 from '~/assets/0425_update/volunteer_event_3.jpg'

  if (process.browser) {
    require('~/plugins/fb-sdk.js')
  }

  export default {
    name: 'volunteer',
    components: {
      Cover,
      ContentWrapper,
      FadeInDown,
      Foot,
      FBComment,
      HeadBar,
    },
    data () {
      return {
        location: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/volunteer/index.html',
        isFBReady: false,
        volunteer_cover: volunteer_cover,
        volunteer_cover_pc: volunteer_cover_pc,
        carousel_interval: null,
        carousel_current_index: 0,
        carousel: [
          {
            'id': 0,
            'src': ImgSlide_1,
            'isOpen': true
          },
          {
            'id': 1,
            'src': ImgSlide_2,
            'isOpen': false
          },
          {
            'id': 2,
            'src': ImgSlide_3,
            'isOpen': false
          },
          {
            'id': 3,
            'src': ImgSlide_4,
            'isOpen': false
          },
          {
            'id': 4,
            'src': ImgSlide_5,
            'isOpen': false
          },
          {
            'id': 5,
            'src': ImgSlide_6,
            'isOpen': false
          }
        ],
        events: [
          {
            'id': 0,
            'title': '2018志工大會',
            'src': ImgEvent_1,
            'pdf': 'https://udn.com/upf/newmedia/2018_data/tsmccharity/events/2018_volunteer_daikai.pdf'
          },
          {
            'id': 1,
            'title': '嘉義水上課輔班',
            'src': ImgEvent_2,
            'pdf': 'https://udn.com/upf/newmedia/2018_data/tsmccharity/events/greenbean_on_water.pdf'
          },
          {
            'id': 2,
            'title': '呼吸自然孝',
            'src': ImgEvent_3,
            'pdf': 'https://udn.com/upf/newmedia/2018_data/tsmccharity/events/breath_to_life.pdf'
          },
        ],
        aboutUs: [
          {
            'id': 0,
            'title': '導覽志工',
            'content': '利用假日為台中自然科學博物館「半導體的世界」展覽館及台積創新館的觀眾做解說服務',
            'stackTime': '累計服務超過80,000小時'
          },
          {
            'id': 1,
            'title': '導讀志工',
            'content': '為新竹、台中、台南偏遠地區的小學提供說故事服務，引起孩童閱讀書籍的興趣',
            'stackTime': '累計服務超過65,000小時 '
          },
          {
            'id': 2,
            'title': '節能志工',
            'content': '對新竹、台中、台南地區有需要進行節能的學校，提供專業諮詢，並協助改善能源使用效率',
            'stackTime': '累計服務超過6,000小時'
          },
          {
            'id': 3,
            'title': '社區志工',
            'content': '長期服務榮民之家與德蘭兒童中心，用歡笑與陪伴串聯起長輩、孩子與志工情誼',
            'stackTime': '累計服務超過18,000小時 '
          },
          {
            'id': 4,
            'title': '生態志工',
            'content': '導覽新竹廠區、台中廠區之美，以及於台南水雉生態園區進行導覽解說服務',
            'stackTime': '累計服務超過5,000小時'
          },
          {
            'id': 5,
            'title': '廠處專案 18個廠處單位',
            'content': '各廠規劃豐富多元的公益活動，舉凡環境保護、弱勢關懷皆有台積志工的身影',
            'stackTime': '累計服務超過60,000小時'
          }
        ]
      }
    },
    methods: {
      handle_click (index) {
        this.carousel_current_index = index
        clearInterval(this.carousel_interval)
      },
      navi_isOpen (index) {
        if(this.carousel_current_index === index){
          return true
        }
        return false
      },
      handle_mouseIn () {
        clearInterval(this.carousel_interval)
      },
      handle_mouseOut () {
        this.carousel_interval = setInterval(this.forInterVal, 3333)
      },
      forInterVal () {
        if (this.carousel_current_index < this.carousel.length - 1) {
          this.carousel_current_index ++
        }
        else {
          this.carousel_current_index = 0
        }
      },
      sentGA (from, to, by) {
        ga("send", {
            "hitType": "event",
            "eventCategory": "HeadBar",
            "eventAction": "click",
            "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ by +"] [" + from + "] [" + to + "]"
        });
        console.log("[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] ["+ by +"] [" + from + "] [" + to + "]")
      },
      onFBReady: function () {
        this.isFBReady = true
      },
    },
    mounted () {
      this.carousel_interval = setInterval(this.forInterVal, 3333)
      setTimeout(()=>{
        this.showfirstimg = !this.showfirstimg
        this.isFBReady = Vue.FB != undefined
        Vue.FB.XFBML.parse();
        window.addEventListener('fb-sdk-ready', this.onFBReady)
      }, 500)
    },
    beforeDestroy () {
      clearInterval(this.carousel_interval)
    }
  }
</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'GenJyuuGothic';
    src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
  }
  #vol_comment{
    line-height: 1.5;
    font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
    word-wrap: break-word;
    text-align: justify;
    position: relative;
    background-color: #e4c8a9;
  }
  .v_Cover{
    position: relative;
    width: 100%;
    img{
      width: 100%;
      max-height: 100vh;
    }
  }
  .aboutVolunteer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
  }
  .aboutSort{
    width: 100%;
    padding: 15px;
    background-color: #fff;
    margin-bottom: 15px;
    @media screen and (min-width: 1024px) {
      width: 49%;
      padding: 25px;
    }
  }
  h1.bigtitle.bigtitle {
    font-family: 'GenJyuuGothic';
    font-weight: bold;
    color: white;
  }
  .sortContent{
    margin: 10px 0;
  }
  .stackTime{
    color: red;
  }
  .oursEvent{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15px;
    a{
      color: #000;
    }
    h3{
      text-decoration: none;
      text-align: center;
      color: #000;
      margin-bottom: 25px;
    }
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
  .eventItem{
    width: 100%;
    img{
      width: 100%;
      max-height: 100%;
    }
    @media screen and (min-width: 1024px) {
      width: 32%;
    }
  }
  .volSection{
    padding-top: 70px;
    padding-bottom: 70px;
    line-height: 1.5;
    font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
    word-wrap: break-word;
    text-align: justify;
    background: #f2ede4;
  }
  .volunteerContent{
    width: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }
  .volunteerArticle{
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 50%;
      padding: 5% 5% 5% 0;
    }
  }
  .slideSection{
    position: relative;
    z-index: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    @media screen and (min-width: 1024px) {
      margin-top: 0;
    }
    ul{
      width: 100%;
      list-style: none;
      overflow: auto;
      display: flex;
      padding: 0;
      margin: 0;
      overflow: hidden;
      li{
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 444ms ease-in-out;
        img{
          width: 100%;
          max-height: 100%;
        }
      }
    }
    @media screen and (min-width: 1024px) {
      width: 50%;
    }
  }
  .navi_container{
    position: absolute;
    z-index: 10;
    bottom: -30px;
    left: 0;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      display: block;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background-color: #e4c8a9;
      margin: 0 5px;
      cursor: pointer;
    }
    .navi_open{
      background-color: #70cbfa;
    }
  }
</style>
