<template>
  <div class="row">
      <div class="col-md-6 col-sm-6 left">
        <picture>
          <source :srcset="img1" media="(max-width: 1023px)">
          <img :src="imgweb1">
        </picture>
      </div>
      <div class="col-md-6 col-sm-6 right">
        <picture>
          <source :srcset="img2" media="(max-width: 1023px)">
          <img :src="imgweb2">
        </picture>
      </div>
      <div class="col-md-12" style="margin-bottom: 5px">
        <picture  class="bottom">
          <source :srcset="img3" media="(max-width: 1023px)">
          <img :src="imgweb3">
        </picture>
      </div>
      <div class="img-say">{{imgsay}}</div>
  </div>
</template>

<script>
export default {
    name: 'ColumnThree',
    props: ['img1', 'img2', 'img3', 'imgweb1', 'imgweb2', 'imgweb3', 'imgsay'],
    computed: {
      imgRWD1: function(){
        if(window.innerWidth < 768){
            return this.img1
        }
        else{
            return this.imgweb1
        }
      },
      imgRWD2: function(){
        if(window.innerWidth < 768){
            return this.img2
        }
        else{
            return this.imgweb2
        }
      },
      imgRWD3: function(){
        if(window.innerWidth < 768){
            return this.img3
        }
        else{
            return this.imgweb3
        }
      }
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
    margin-top: 5px;
  }
  @media screen and (max-width: 767px){
    .col-md-6{
      margin-top: 15px;
      padding: 0;
    }
    .col-md-12{
      margin-top: 15px;
      padding: 0;
    }
    .img-say{
      font-size: 15px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1024px){
    .col-md-6{
      margin-top: 15px;
      padding: 10px;
    }
    .col-md-12{
      margin-top: 15px;
      padding: 10px;
    }
    .col-md-12 img{
      margin-top: 10px;
    }
  }
  @media screen and (min-width: 1025px){
    .left{
      padding-left: 0;
    }
    .right{
      padding-right: 0;
    }
    .col-md-12{
      padding: 0;
      margin-top: 30px;
    }
  }

</style>
