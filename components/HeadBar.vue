<template>
    <div id="head-bar" :style="{top: top+'px'}">
        <ContentWrapper>
          <div id="icon">
              <!-- <a href="."><img :src="logo"></a> -->
              <nuxt-link to="/"><img :src="logo"></nuxt-link>
          </div>          
        </ContentWrapper>     
        <ContentWrapper class="myWrapper" :style="{transform: 'translate(0, -'+ headSlideIn +'%)'}"
            background-color="#fff" style="position: relative;">
            <div id="hbutton-contain" :class="{open: isOpen}" class="hidden-pc" style="padding-top: 25px;">
                <div class="links"
                    v-for="link in titlelist"
                    :key="link.title">
                    <div class="link" :class="{isBold: link.isBold}">
                        <div class="redNum" v-if="link.isNew" style="top: 50%;margin-top: -17.5px;right: 50%;margin-right: -57.5px">N</div>
                        <nuxt-link :to="link.link">{{link.title}}</nuxt-link>
                    </div>                    
                </div>
                <slot name='comment-mob'></slot>
            </div>
            <div class="icons hidden-mobile"
                    v-show="showlinks">
                <div class="links" 
                    v-for="link in titlelist"
                    :key="link.title">
                    <div class="link" :class="{isBold: link.isBold}">
                        <div class="redNum" v-if="link.isNew">N</div>
                        <nuxt-link :to="link.link">{{link.title}}</nuxt-link>
                    </div>                    
                </div>
                <slot name="comment"></slot>
                <!-- <div class="links">
                    <div class="link">
                        <a @click.prevent="show">留言區</a>
                    </div>
                </div>                 -->
            </div>
            <div id="hbutton" class="hidden-lg hidden-md">
                <div id="nav-icon" :class="{open: isOpen}"
                    @click="handleClick()">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </ContentWrapper>
        <!-- <slot v-if="bookmarkDisplay"></slot> -->
    </div>
</template>

<script>
import tsmcLogo from '~/assets/logo_tsmc.svg'
import ContentWrapper from './Content'

export default {
/** 
 * 本元件之功能：
 *  head bar，釘在網頁最上緣，內含其他子頁連結
 * 變數:
 *  -titlelist: 子頁連結和留言區
 *  -showlinks: 一開始連結們皆不顯示，待使用者scroll後才顯示
*/    
  name: 'Headbar',
  props: ['color', 'buttonColor', 'bookmarkDisplay', 'isNews', 'isPage'],
  components: {ContentWrapper},
  data: function () {
    return {
      top: 0,
      headSlideIn: 100,
      isOpen: false,
      inner: 'inner',
      outer: 'outer',
      logo: tsmcLogo,
      showlinks: false,
      titlelist: [
        {
          link: '/news',
          title: '最新動態',
          isNew: this.isNews,
          isBold: false
        },
        {
          link: '/aboutus',
          title: '關於我們',
          isNew: false,
          isBold: false
        },
        {
          link: '/campaigns',
          title: '我們做的事',
          isNew: false,
          isBold: false         
        },
        {
          link: '/partners',
          title: '愛互聯',
          isNew: false,
          isBold: false         
        }
        // {
        //   link: '',
        //   title: '留言區'
        // }
      ]
    }
  },
  created: function() {
    // var self = this
    // this.$eventHub.$on('emitHeadbarTitle', function(msg) {
    //     self.getTitle.push(msg)
    //     setTimeout(function(){
    //         $('.scrollTo-Btn').hover(function(){
    //             $(this).css('color', self.backgroundColor)
    //             $(this).css('background-color', self.color)
    //         }, function(){
    //             $(this).css('color', self.color)
    //             $(this).css('background-color', self.backgroundColor)
    //         })
    //     }, 500)
    // })        
  },
  beforeMount: function () {
    // 等待使用者scroll後，連結區才顯示  
    // window.addEventListener('scroll', this.handleScroll)

  },
  beforeDestroyed: function () {
    // window.removeEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    // window.removeEventListener('scroll', this.handleScroll)
  },  
  mounted: function () {
    this.handlePage()
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleClick: function () {
      this.isOpen = !this.isOpen
      // console.log('hamburger click')
      // ga("send", {
      //     "hitType": "event",
      //     "eventCategory": "Ham Click",
      //     "eventAction": "click",
      //     "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Ham Click]"
      // });
    },
    handleScroll: function(event) {
      this.showlinks = true
      if(window.pageYOffset > 10) {
        this.headSlideIn = 0
        window.removeEventListener('scroll', this.handleScroll) 
      }
    },
    handlePage: function() {
      switch(this.isPage) {
        case 'news':
          this.titlelist[0].isBold = true;
        break;
        case 'aboutus':
          this.titlelist[1].isBold = true;
        break;
        case 'campaigns':
          this.titlelist[2].isBold = true;
        break;
        case 'partners':
          this.titlelist[3].isBold = true;
        break;
        default: 
        break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.redNum{
  position: absolute;
  top: 0;
  right: -20px;
  z-index: 80;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #fff;
  border-radius: 50%;
  background-color: #84d4ff;
  animation: jumping 555ms ease-out infinite alternate-reverse;
}
#head-bar {
    position: fixed;
    background-color: transparent;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
}
.myWrapper{
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  height: 70px;
  background-color: #fff;
  transition: opacity 0.7s ease, transform 700ms ease;
  .content{
    display: flex;
  }
}
.isBold{
  font-weight: bold !important;
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
  .myWrapper{
    height: 80px;
  }
}

#icon {
    position: fixed;
    z-index: 99;
    display: inline-flex;
    align-items: center;
    height: 80px;
    a{
      width: 235px;
    }
}
#icon img {
    /* width: 157px; */
    width: 235px;
}
.icons {
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#hbutton {
    width: 46px;
    height: 46px;
    top: 0;
    right: 0;
    position: absolute;
}

#nav-icon {
    width: 46px;
    height: 46px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    opacity: 1;
}

#nav-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    margin: 0 auto;
    background: #e4c8a9;
    border-radius: 2px;
    opacity: 1;
    right: 12px;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

#nav-icon span:nth-child(1) {
    top: 12px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
    top: 21px;
}

#nav-icon span:nth-child(4) {
    top: 30px;
}

#nav-icon.open span:nth-child(1) {
    top: 12px;
    width: 0%;
}

#nav-icon.open span:nth-child(2) {
    transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
    transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
    top: 30px;
    width: 0%;
}

#hbutton-contain {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    display: block;
    text-align: center;
}

.hbutton {
    padding: 0 12px;
    color: #e4c8a9;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    float: left;
}

.hbutton:hover {
    background-color: #FF4612;
}

.hbutton-select {
    color: #F589BA;
}

@media screen and (max-width: 767px){
    #head-bar {
        height: 79px;
    }
    .icons {
        width: 40%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1023px) {
    #head-bar {
        height: 79px;
    }
    .icons {
        width: 22.5%;
    }    
}

@media screen and (max-width: 1023px) {
    #icon {
        height: 46px;
        line-height: 46px;
    }
    .icons {
        height: 46px;
    }
    .icons img{
        height: 24px;
        margin-left: 5px;
    }
    #hbutton-contain {
        top: 70px;
        background-color: #fff;
        height: 100vh;
        width: 100%;
        transition: transform 0.7s ease;
        transform: translate(110%, 0);
    }
    #hbutton-contain.open {
        transform: translate(0, 0);
    }
    .hbutton {
        margin: 1px auto 0 auto;
        background-color: #231815;
        color: #e4c8a9;
        height: 60px;
        padding: 0;
        line-height: 60px;
        font-size: 20px;
        text-align: center;
        margin-top: 1px;
        letter-spacing: 8px;
        float: none;
    }
    #logo-contain {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20%;
    }
}

@media screen and (min-width: 1024px) {
    #head-bar {
        height: 80px;
    }
    #icon {
        img{
          height: 80%;
          width: auto;
        }
    }
    
    .icons {
        height: 80px;
    }

    .icons img{
        height: 24px;
        margin: 0 5px;
    }
    // .links{
    //   animation: fadeInDown 432ms ease-out;
    //   animation-fill-mode: both;
    // }
}

.icons .link{
  position: relative;
  margin: 0 20px;
}

.link a{
    color: black;    
}

#hbutton-contain .link{
  position: relative;
  display: block;
  border-bottom: solid 1px lightgray;
  height: 70px;
  width: calc(100% - 30px);
  margin: 0 auto;
  line-height: 70px;
}

.links .link{
    cursor: pointer;
}

.link a{
    text-decoration: none;
}

@media screen and (max-width: 1023px){
  #head-bar #icon, #head-bar #hbutton{
   transform: translateY(25%);
  }
}
// @keyframes fadeInDown {
//   from{
//     opacity: 0;
//     transform: translate(0, -30px);
//   }
//   to{
//     opacity: 1;
//     transform: translate(0, 0);
//   }
// }
@keyframes jumping{
  from{
    transform: translate(0, 0);
  }
  to{
    transform: translate(0 , -5px)
  }
}
</style>