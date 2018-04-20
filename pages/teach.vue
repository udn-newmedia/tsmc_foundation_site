<template>
  <FadeInDown>
    <div class="teach">
      <HeadBar :bookmark-display="stickyAnchors" isNews="false" isPage="teach"></HeadBar>
      <iframe src="https://www.tsmc-foundation.org/community/kimage_02002.aspx" frameborder="0"></iframe>
    </div>
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import HeadBar from '~/components/HeadBar.vue'
import FadeInDown from '~/components/FadeInDown.vue'

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
      location: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/aboutus',
      stickyAnchors: true,
      // bgWeb: bgWeb,
      // bgMob: bgMob,
      showMessageBoard: false,
      isFBReady: false
    }
  },
  components: {
    HeadBar, FadeInDown
  },
  created: function () {
  },
  mounted: function () {
    // 載入 FB sdk
    this.isFBReady = Vue.FB != undefined
    window.addEventListener('fb-sdk-ready', this.onFBReady)
    setTimeout(function(){
      Vue.FB.XFBML.parse();
    }, 500)
  },
  beforeDestroy: function () {

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

<style lang="scss" scoped>
.teach{
  position: relative;
  padding-top: 70px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  iframe{
    width: 100%;
    height: 100vh;
  }
}
</style>
