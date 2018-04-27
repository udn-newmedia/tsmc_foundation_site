<template>
  <ContentWrapper backgroundColor='#292b2e' class="footer">
    <p><br></p>
    <div class="row" style="position: relative;">
      <div class="col-lg-4 col-sm-6 tsmclogo">
        <img :src="tsmcLogo">
      </div>
      <div class="col-lg-8 col-sm-6 tsmcfoundation">
        <p v-if="theMob">台積電慈善基金會</p>
        <p>電話 : 03-563-6688</p>
        <p>地址 : 300 新竹科學園區力行六路8號</p>
      </div>
    </div>
  </ContentWrapper>
</template>

<script>

import ContentWrapper from '~/components/Content.vue'
import tsmcLogo from '~/assets/logo_tsmc.svg'

export default {

  name: 'Foot',
  components: {
  	ContentWrapper
  },
  data () {
    return {
    	tsmcLogo: tsmcLogo,
    	theMob: true
    }
  },
  methods: {
    showRWD: function () {
      if(window.innerWidth <= 768) {
        this.theMob = false
      } else {
        this.theMob = true
      }
    }
  },
  mounted: function() {
    this.showRWD()
    window.addEventListener('resize', () => {
      this.showRWD()
    })
  }
}
</script>

<style lang="scss" scoped>

.footer{
	padding-bottom: 50px;
}
.tsmclogo img {
  margin-right: 10px;
}
.tsmclogo{
  margin-bottom: 10px;
}
.tsmcfoundation {
  color:  #717376;
  p{
  	padding-left: 15px;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .row{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (min-width: 1024px) {
  .row{
    display: flex;
    align-items: center;
    justify-content: center;
  }
	.footer{
		padding-bottom: 40px;
	}
	.tsmcfoundation{
		border-left: solid 1px;
	}
  .tsmclogo{
    display: flex;
    justify-content: flex-end;
    img{
      width: 80%;
      margin-right: 20px;
    }
  }
}
</style>
