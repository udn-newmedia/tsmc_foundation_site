<template>
  <div class="image-contain">
    <img :src="img1src">
    <div class="img-say">{{imgsay}}</div>
  </div>
</template>

<script>
export default {
    name: 'ColumnOne',
    props: ['img1', 'imgweb1', 'imgsay'],
    data () {
      return {
        img1src: ''
      }
    },
    methods: {
      srcRWD (mob, pc) {
        if(global.innerWidth < 768){
          console.log("mob")
            return mob
        }
        else{
          console.log('pc')
            return pc
        }
      },
    },
    mounted () {
      this.img1src = this.srcRWD(this.img1, this.imgweb1)    
      window.addEventListener('resize', () => {
        this.img1src = this.srcRWD(this.img1, this.imgweb1)         
        this.$forceUpdate()
      })      
    }
}
</script>

<style scoped>
  img{
    width: 100%;
  }
  .img-say{
    font-size: 17px;
    color: gray;
    margin-top: 10px;
  }
  @media screen and (max-width: 767px){
    .img-say{
      font-size: 15px;
    }
  }
  
</style>
