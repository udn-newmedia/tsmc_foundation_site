<template>
    <div id="head-bar" :style="{top: top+'px'}">
        <ContentWrapper 
            background-color="#fff" style="position: relative;">
            <div id="hbutton-contain" :class="{open: isOpen}" class="hidden-pc">
                <slot></slot>
                <div class="link"></div>
                <div class="links" 
                    v-for="link in titlelist"
                    :key="link.title">
                    <div class="link">
                        <nuxt-link :to="link.link">{{link.title}}</nuxt-link>
                    </div>                    
                </div>
            </div>
            <div id="icon">
                <!-- <a href="."><img :src="logo"></a> -->
                <nuxt-link to="/"><img :src="logo"></nuxt-link>
            </div>
            <div class="icons hidden-mobile">
                <div class="links" 
                    v-for="link in titlelist"
                    :key="link.title">
                    <div class="link">
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
            <div id="hbutton" class="hidden-lg">
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
  name: 'Headbar',
  props: ['color', 'buttonColor', 'bookmarkDisplay'],
  components: {ContentWrapper},
  data: function () {
    return {
      top: 0,
      isOpen: false,
      inner: 'inner',
      outer: 'outer',
      logo: tsmcLogo,
      titlelist: [
        {
          link: '/news',
          title: '最新動態'     
        },
        {
          link: '/aboutus',
          title: '我們的故事'
        },
        {
          link: '/campaigns',
          title: '我們做的事'          
        },
        {
          link: '/partners',
          title: '愛互聯'          
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
  mounted: function () {
    // window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleClick: function () {
      this.isOpen = !this.isOpen
    //   console.log('hamburger click')
      // ga("send", {
      //     "hitType": "event",
      //     "eventCategory": "Ham Click",
      //     "eventAction": "click",
      //     "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [Ham Click]"
      // });
    },
    // handleScroll: function(event) {
    //   let currentH = window.pageYOffset
    //   if (currentH < window.innerHeight / 2) {
    //     this.top = 0
    //   }else {
    //     if (window.innerWidth <= 1024) {
    //         this.top = 4
    //     }else {
    //         this.top = 6
    //     }
    //   }
    // }
    show: function () {
      console.log('test')       
    }
  }
}
</script>

<style>
#head-bar {
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    transition: opacity 0.7s ease;
}

#icon {
    position: absolute;
    top: 0;
}

#icon img {
    width: 157px;
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
        top: 79px;
        background-color: #fff;
        height: 100vh;
        width: 100%;
        transition: transform 0.7s ease;
        transform: translate(0, -110%);
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
        height: 50px;
        line-height: 80px;
    }
    
    .icons {
        height: 80px;
    }

    .icons img{
        height: 24px;
        margin: 0 5px;
    }

}

.icons .link{
    margin: 0 10px;
}

.link a{
    color: black;    
}

#hbutton-contain .link{
    display: block;
    border-bottom: solid 1px black;
    height: 60px;
    line-height: 60px;
}

.links .link{
    cursor: pointer;
}
</style>