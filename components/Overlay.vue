<template>
  <div id="Overlay" v-if="show" @click.stop='close'>
    <div class="closebtn" @click="close">
      <span></span>
      <span></span>
    </div>
    <div id="popup" @click.stop>
      <div class="newsArticle">
        <div class="titleBox">
          <h2>{{flowData.ArticleTitle}}<span>{{flowData.ArticleTime}}</span></h2>
        </div>
        <div class="articleContent" v-for="(para, index) in flowData.Article" :key="'para_' + index">
          <ColumnOne v-if="isMedia(para.src) === true" :img1="para.src" :imgweb1="para.src" :imgsay="para.imgsay"></ColumnOne>
          <EmbededVideo v-else-if="isMedia(para.src) === 'isVideo'" :src="para.src" :srcWeb="para.src" :poster="para.poster" :posterWeb="para.poster" customControl="true" controlColor="#000"></EmbededVideo>
          <p v-else>{{para}}</p>
        </div>
        <div class="reference">
          <Share :href="flowData.link"></Share>
          <div class="checkOriginal">
            <img :src="udnLogo"><a :href="flowData.link" target="_blank"><p>查看原始新聞</p></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 本元件之功能：
 *  留言區，周圍都蓋黑幕，顯示FB留言板
 * 參數:
 *  -mainContainer: 要模糊和蓋黑幕的Element
 *  -show: 是否顯示留言區
*/
if (process.browser) {
  require('~/plugins/fb-sdk.js')
}
import ColumnOne from '~/components/ColumnOne.vue'
import Share from '~/components/Share.vue'
import EmbededVideo from '~/components/EmbededVideo.vue'

import udnLogo from '~/assets/news/udn-logo-small.svg'
import testVideo from '~/assets/news/6-video.mp4'
import testImg from '~/assets/news/1.jpg'
export default {
  name: 'Overlay',
  props: ['mainContainer', 'show', 'flowData'],
  components: {
    ColumnOne,
    Share,
    EmbededVideo
  },
  data: function () {
    return {
      testVideo: testVideo,
      udnLogo: udnLogo,
    }
  },
  // computed: {

  // },
  watch: {
    show: function (newval, oldval) {
      if (newval) {
        document.getElementById(this.mainContainer).setAttribute('class', 'blur');
      }
    }
  },
  mounted: function () {
    if (this.show) {
      document.getElementById(this.mainContainer).setAttribute('class', 'blur');
    }
  },
  updated: function() {
    console.log('updated overlay')
    setTimeout(function(){
      window.FB.XFBML.parse();
    }, 500)
  },
  methods: {
    isMedia: function(src) {
      const isImg = /\.(png|jpe?g|gif|svg)(\?.*)?$/g
      const isVideo = /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/g
      if(isImg.test(src)){
        return true
      } else if (isVideo.test(src)) {
        // console.log('isVideo')
        // console.log(src)
        return 'isVideo'
      }
      else {
        return false
      }
    },
    close: function () {
      // this.showornot = false
      this.$eventBus.$emit('closeOverlay')
      document.getElementById(this.mainContainer).classList.remove('blur');
    }
  }
}
</script>

<style lang="scss" scope>
.newsArticle{
  padding: 15px;
  margin: 0 auto;
}
.titleBox{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  h2{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    font-size: 26px;
    font-weight: bold;
    line-height: 32px;
  }
  span{
    font-size: 15px;
    color: #686868;
    line-height: 1.8;
    font-weight: normal;
  }
}
p{
    font-size: 18px;
    line-height: 32px;
    margin: 0;
}
.reference {
  display: flex;
  flex-direction: column;
}
.checkOriginal{
  display: flex;
  align-items: flex-end;
  margin-top: 50px;
  img{
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
  a{
    color: #000;
    p{
      font-size: 15px;
    }
  }
}
.articleContent{
  width: 100%;
  margin-bottom: 30px;
}
#Overlay {
  position: fixed;
  display: block;
  width: 100%;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,.7);
  z-index: 99999;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
}
#popup {
  position: absolute;
  z-index: 9999;
  width: 100%;
  max-width: 880px;
  height: 80vh;
  border-radius: 8px !important;
  background: rgb(255,255,255);
  /* border: 5px solid rgb(90,90,90); */
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  padding: 0 15px;
  background-clip: content-box;
  animation: FadeIn 434ms ease-out;
  animation-fill-mode: both;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
#popup::-webkit-scrollbar {
    display: none;
}
.blur {
  filter: blur(5px);
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
}
.closebtn{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;
  // background: black;
  width: 30px;
  height: 30px;
  // border-radius: 50px;
/*  transform: translateX(50px) translateY(-50px);*/
  cursor: pointer;
}

.closebtn span {
  position: absolute;
  height: 3px;
  width: 150%;
  margin: 0;
  background: #fff;
  border-radius: 2px;
}

.closebtn span:nth-child(1){
  transform: rotate(45deg);
}

.closebtn span:nth-child(2){
  transform: rotate(-45deg);
}

@media screen and (min-width: 767px) and (max-width: 1023px){
  h2{
      font-size: 30px;
      line-height: 36px;
  }
  p{
      font-size: 20px;
      line-height: 36px;
  }
}
@media screen and (min-width: 1024px) {
  h2{
      font-size: 30px;
      line-height: 1.5;
  }
  p{
      font-size: 21px;
      line-height: 2;
  }
  .titleBox{
    justify-content: space-between;
    h2{
      width: 100%;
      flex-direction: row;
    }
  }
  .newsArticle{
    padding: 35px 50px;
  }
  p>br{
      line-height: 50px;
  }
  .checkOriginal{
    margin-top: 0;
  }
  .reference{
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}
@keyframes FadeIn {
  from {
    opacity: 0;
    transform: translate(0, -30px);
  }
  to{
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
