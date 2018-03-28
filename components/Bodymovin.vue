<template>
  <div id="bodymovin" ref="bodymovin"></div>
</template>

<script>
if (process.browser) {
  var bodymovin = require('lottie-web')
  var userdevice;
  if (window.innerWidth > 1023) {
    userdevice = 'pc' 
  } else {
    if (window.innerWidth < 768) {
      userdevice = 'mob'
    } else {
      userdevice = 'pad'
    }
  }
}
export default {
  name: 'Bodymovin',
  props: ['jsonfile', 'MOBjsonfile', 'PADjsonfile', 'pcwidth', 'pcheight', 'isLoop', 'isAutoplay', 'setClass'],
  data: function () {
    return {
      device: null,
    }
  },
  computed: {
    MOBfile: function () {
      return this.MOBjsonfile ? this.MOBjsonfile : this.jsonfile
    },
    PADfile: function () {
      return this.PADjsonfile ? this.PADjsonfile : this.jsonfile
    },
    loop: function() {
      if(this.isLoop === 'false'){
        return false
      } else {
        return true
      }
    },
    autoPlay: function() {
      if(this.isAutoplay === 'false'){
        return false
      } else {
        return true
      }
    }
  },
  mounted: function () {
    let filepath, bodymovinobj
    const self = this
    this.device = userdevice
    switch (this.device) {
      case 'pc':
        filepath = this.jsonfile
        break
      case 'mob':
        filepath = this.MOBfile
        break
      case 'pad':
        filepath = this.PADfile
        break
    }
    bodymovinobj = {
      container: this.$refs.bodymovin,
      renderer: 'svg',
      loop: self.loop,
      autoplay: self.autoPlay,
      path: filepath,
      rendererSettings: {
        className: self.setClass
      }
    }
    bodymovin.loadAnimation(bodymovinobj)
  }
}
</script>

<style scoped>

#bodymovin .content{
  padding: 0;
}

@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
   /* IE10+ CSS */
   #bodymovin{
     width: 1920px;
     height: 1080px;
   }
}

</style>