<template>
    <div id="cover" :style="{backgroundImage: 'url(' + currentData + ')'}" :class="{top: top, bottom: bottom, aligncenter: aligncenter}">
        <div id="title-contain">
            <h1>{{title}}</h1>
            <div id="sub-title">{{subtitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cover',
    props: ['title', 'subtitle', 'bg', 'bgweb', "position", "arrowColor", "hint", "hintColor"],
    data: function(){
        return{
            currentData: '',
            aligncenter: false,
            top: false,
            bottom: false,
        }
    },
    created: function(){
        if(this.position == 'top'){
            this.top = true
        }
        if(this.position == 'bottom'){
            this.bottom = true
        }
        if(this.position == 'middle'){
            this.aligncenter = true
        }
    },
    methods: {
      bgRWD: function(event){
        if(global.innerWidth <= 768){
            if(global.matchMedia("(orientation: landscape)").matches){
                return this.bgweb
            }
            else{
                return this.bg
            }
        }
        else{
            return this.bgweb
        }
      }
    },
    mounted () {
      this.currentData = this.bgRWD()
      window.addEventListener('resize', () => {
          this.currentData = this.bgRWD()
      })
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', () => {
          this.currentData = this.bgRWD()
      })
    },
}
</script>

<style scoped>
    @font-face {
      font-family: 'GenJyuuGothic';
      src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
    }
    #title-contain{
        padding: 20px;
    }
    #cover{
        height: 100vh;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 12% 8%;
    }
    #cover.top{
        justify-content: flex-start;
    }
    #cover.bottom{
        justify-content: flex-end;
    }
    .aligncenter{
        align-items: center;
    }
    h1{
      font-family: 'GenJyuuGothic';
      color: #fff;
      font-size: 55px;
      font-weight: bold;
      letter-spacing: -1px;
      line-height: 1.1;
      text-shadow: 0 0px 18px rgba(48,48,48,1);
      margin: 0;
    }
    #sub-title{
        font-size: 55px;
        color: #FFFFFF;
    }

    @media screen and (max-width: 767px) {
        h1{
            font-size: 40px;
        }
        #sub-title{
            font-size: 25px;
        }
        #cover{
            padding: 30% 0;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        h1{
            font-size: 45px;
        }
        #sub-title{
            font-size: 30px;
        }
        #cover{
            padding: 30% 0;
        }
        #title-contain{
            padding: 0 100px;
        }
    }

</style>
