<template>
  <div class="col_container">
    <div class="col_left">
      <div class="col_left_item">
        <img :src="img1src" alt="">
        <!-- <div v-bind:style="{ backgroundImage: 'url(' + imgRWD1 + ')' }" class="bg_img"></div> -->
        <div class="discription">
          <div class="dot">1</div>
          <div class="say_wrap">
            <div class="img-say">{{saySplit1_1}}</div>
            <div class="img-say">{{saySplit1_2}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="col_right">

      <div class="col_right_item">
        <img :src="img2src" alt="">
        <div class="discription">
          <div class="dot">2</div>
            <div class="say_wrap">
              <div class="img-say">{{saySplit2_1}}</div>
              <div class="img-say">{{saySplit2_2}}</div>
            </div>
          </div>
      </div>

      <div class="col_right_item">
        <img :src="img3src" alt=""> 
        <div class="discription">
          <div class="dot">3</div>
          <div class="say_wrap">
            <div class="img-say">{{saySplit3_1}}</div>
            <div class="img-say">{{saySplit3_2}}</div>
          </div>
        </div> 
      </div>

      <div class="col_right_item">
        <img :src="img4src" alt="">
        <div class="discription">
          <div class="dot">4</div>
          <div class="say_wrap">
            <div class="img-say">{{saySplit4_1}}</div>
            <div class="img-say">{{saySplit4_2}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  if (process.browser) {
    require('~/plugins/fb-sdk.js')
  }
  export default {
    name: 'ColumnFour',
    props: ['img1', 'img2', 'img3', 'img4', 'imgweb1', 'imgweb2', 'imgweb3', 'imgweb4', 'imgsay1', 'imgsay2', 'imgsay3', 'imgsay4'],
    data() { 
      return {
        img1src: '',
        img2src: '',    
        img3src: '',
        img4src: '',
      }
    },    
    computed: {
      // 字串切割 for換行
      saySplit1_1: function(){
        return this.imgsay1.split('／')[0];
      },
      saySplit1_2: function(){
        return this.imgsay1.split('／')[1];
      },
      saySplit2_1: function(){
        return this.imgsay2.split('／')[0];
      },
      saySplit2_2: function(){
        return this.imgsay2.split('／')[1];
      },
      saySplit3_1: function(){
        return this.imgsay3.split('／')[0];
      },
      saySplit3_2: function(){
        return this.imgsay3.split('／')[1];
      },
      saySplit4_1: function(){
        return this.imgsay4.split('／')[0];
      },
      saySplit4_2: function(){
        return this.imgsay4.split('／')[1];
      }
    },
    methods: {
      srcRWD (mob, pc) {
        if(global.innerWidth < 768){
            return mob
        }
        else{
            return pc
        }
      },                
    },
    created(){

    },
    mounted() { 
      this.img1src = this.srcRWD(this.img1, this.imgweb1)
      this.img2src = this.srcRWD(this.img2, this.imgweb2)    
      this.img3src = this.srcRWD(this.img3, this.imgweb3)
      this.img4src = this.srcRWD(this.img4, this.imgweb4)      
      window.addEventListener('resize', () => {
        this.img1src = this.srcRWD(this.img1, this.imgweb1)
        this.img2src = this.srcRWD(this.img2, this.imgweb2)    
        this.img3src = this.srcRWD(this.img3, this.imgweb3)
        this.img4src = this.srcRWD(this.img4, this.imgweb4)          
        this.$forceUpdate()
      })
    },
  }
</script>

<style scoped>
  /* .col_container {
    position: relative;
    width: 100%;
  }
  .col_left {
    position: relative;
    float: left;
    width: 67%;
    height: 100%;
    padding-right: 2%;
  }
  .col_left_item{
    width: 100%;
    height: 90%;
  }
  .col_right {
    float: left;
    position: relative;
    width: 33%;
    height: 100%;
  }
  .col_right_item{
    width: 100%;
    height: 25%;
  }
  .discription {
    height: 15%;
    padding: 1%;
    color: #808080;
  }
  .dot {
    height: 30px;
    width: 30px;
    background-color: #70cbfa;
    border-radius: 50%;
    margin-right: 1%;
    float: left;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    color: #fff;
  }
  .say_wrap {
    float: left;
  }
  .img-say {
    height: 30px;
    font-size: 17px;
  }
  .bg_img {
    background-repeat: no-repeat;
    background-size: cover;
  }

  img {
    width: 100%;
    height: 100%;
  } */
  .col_container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .col_left {
    position: relative;
    float: left;
    height: 60%;
    width: 100%;
    padding-right: 2%;
  }
  .col_left_item{
    width: 100%;
    height: 90%;
    padding-right: 1%;
  }
  .col_right {
    float: left;
    position: relative;
    height: 40%;
    width: 100%;
  }
  .col_right_item{
    height: 25%;
    width: 33%;
    float: left;
    padding-right: 2%;
  }
  .discription {
    height: 15%;
    padding: 1%;
    margin-top: 5px;
    color: #808080;
  }
  .dot {
    height: 30px;
    width: 30px;
    background-color: #70cbfa;
    border-radius: 50%;
    margin-right: 1%;
    float: left;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    color: #fff;
  }
  .say_wrap {
    float: left;
    width: 80%;
  }
  .img-say {
    height: 30px;
    font-size: 17px;
  }
  .bg_img {
    background-repeat: no-repeat;
    background-size: cover;
  }

  img {
    width: 100%;
    /* height: 100%; */
  }

  @media screen and (max-width: 767px){
    .col_container {
      height: 100%;
    }
    .col_left {
      float: none;
      width: 100%;
      padding: 0px;
    }
    .col_left_item{
      width: 100%;
      height: 100%;
    }
    .col_right {
      float: none;
      width: 100%;
    }
    .col_right_item{
      width: 100%;
      height: 100%;
    }
    .discription {
      margin-bottom: 20px;  
    }
    .img-say {
      font-size: 16px;
    }
  }

  /* @media screen and (min-width: 768px) and (max-width: 1024px){
    .col_container {
      height: 100%;
    }
    .col_left {
      height: 60%;
      width: 100%;
    }
    .col_left_item {
      padding-right: 1%;
    }
    .col_right {
      height: 40%;
      width: 100%;
    }
    .col_right_item {
      width: 33%;
      float: left;
      padding-right: 2%;
    }
    .discription {
      margin-top: 5px;
    }
    .say_wrap {
      width: 80%;
    }
  } */

</style>
