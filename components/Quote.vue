<template>
    <div class="quote-contain" v-bind:style="{ 'border-top-color': borderColor, 'border-bottom-color': borderColor}">
        <div class="row">
            <div class="col-sm-3" v-if="img" :class="imgPosition">
                <div class="quote-img">
                    <img :src="img">
                </div>
            </div>
            <div :class="dynamicClass" class='pushpadtop'>
                <div class="quote-text" v-html="text" v-bind:style="{color: color}"></div>
                <div class="quote-ref">{{refer}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quote',
    props: ['text', 'refer', 'color', 'borderColor', 'img', 'imgPosition'],
    computed: {
        dynamicClass: function(){
            if(this.img != undefined){
                return 'col-sm-9'
            }
            else{
                return 'col-sm-12'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .quote-contain {
        width: 100%;
        /* display: table; */
        font-weight: bold;
        font-size: 32px;
        min-height: 125px;
        color: black;
        padding: 15px 0;
        border-top: dotted 1px #DCDDDD;
        border-bottom: dotted 1px #DCDDDD;
        position: relative;
        letter-spacing: -1px;
    }
    .right{
        order: 5;
    }
    .left{
        order: 0;
    }
    .quote-text{
        /* float: left; */
        /* display: table-cell; */
        vertical-align: middle;
    }
    .quote-ref{
        float: right;
        font-size: 16px;
        margin-top: 30px;
    }
    .quote-img{
        text-align: center;
        img{
            width: 100%;
            padding: 5%;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .row{
            display: flex;
        }        
    }
    @media screen and (max-width: 767px) {
        .quote-img{
            text-align: center;
            img{
                width: 60%;
            }
        }
        .quote-text{
            margin-top: 20px;
        }
        .quote-contain{
            font-size: 26px;
        }
    }
    @media screen and (min-width: 1024px){
        .row{
            display: flex;
        }
        .quote-contain {
            padding: 50px 0;
            min-height: 220px;
        }
        .quote-ref{
            font-size: 17px;
        }
        .pushpadtop{
            padding-top: 20px;
        }
    }
</style>