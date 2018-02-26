<template>
  <div id="Overlay" v-show="show" @click='close'>
    <div id="popup">
      <div class="closebtn" @click="close">
        <span></span>
        <span></span>        
      </div>
      <slot></slot>
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
export default {
  name: 'Overlay',
  props: ['mainContainer','show'],
  components: {},
  data: function () {
    return {
    }
  },
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
  methods: {
    close: function () {
      // this.showornot = false
      this.$eventBus.$emit('closeOverlay')
      document.getElementById(this.mainContainer).classList.remove('blur');
    }
  }
}
</script>

<style>
#Overlay {
  position: fixed;
  display: block;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0,0,0,.7);
  z-index: 999999;
}
#popup {
  position: absolute;
  width: 100%;
  max-width: 800px;
  height: 500px;
  background: rgb(255,255,255);
  /* border: 5px solid rgb(90,90,90); */
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
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
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  border: 1px solid black;
  background: black;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  transform: translateX(50px) translateY(-50px);
  cursor: pointer;
}

.closebtn span {
  position: absolute;
  height: 2px;
  width: 50%;
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
@media screen and (max-width: 768px) {
  .closebtn{
    transform: translateX(-8px) translateY(-38px);
  } 
}
</style>