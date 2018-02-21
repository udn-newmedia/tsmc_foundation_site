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
  props: ['jsonfile', 'MOBjsonfile', 'PADjsonfile', 'pcwidth', 'pcheight'],
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
    }
  },
  mounted: function () {
    let filepath, bodymovinobj
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
      loop: true,
      autoplay: true,
      path: filepath    
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