<template>
    <FadeInDown>
        <HeadBar isNews='true' isPage='remote'></HeadBar>
        <div class="v_Cover">
            <Cover :bg="remote_cover" :bgweb="remote_cover"></Cover>
            <ContentWrapper>
                <h1 class="bigtitle" style="position: absolute; top: 20%;">志工社獨老<br>遠距關懷</h1>
            </ContentWrapper>
        </div>
        <div class="textContent">
            <div class="v_Quote">
            <ContentWrapper>
                <p></p>
                <br>
                <p></p>
                <br>
                <Quote :img="quote" text="「台積電做能做的，但我們不回頭去看，就是一直往前，想著怎麼樣能做得更實在、更徹底，怎樣才能真正幫助到人。」" refer="──張淑芬"></Quote>    
                <p></p>
                <br>
            </ContentWrapper>
            </div>
            <div class="v_Content">
                <ContentWrapper>
                    <Content>
                        <h3>做到最實在 台積電與高雄氣爆</h3>
                        <p></p>
                        <br>
                        <p>台積電基金會2014年起，走訪遍布全台的醫療、社福單位，尋找一樣對獨居老人，有協助意願的夥伴，串接起志同道合的點與線，打造全國性的獨居老人照顧網──「愛互聯」。</p>
                        <p></p>
                        <br>
                        <p>針對獨老醫療，位於各縣市的愛互聯醫療單位，首先為低收入的獨居老人，提供掛號服務專線，並減免掛號費，降低經濟弱勢的獨居老人醫療門檻。</p>
                        <p></p>
                        <br>
                        <p>接著，基金會再與在地民間社福單位志工攜手，協助獨老前往合作醫療院所就診，並協助診後的服藥、起居，更重要的，愛互聯為獨老的需求，一起找資源。</p>
                        <p></p>
                        <br>
                        <p>愛互聯目前在全台，「兵分六區」投入服務行動（北部、竹苗、台中、台南、高雄、花東），今年還有14家偏遠地區醫院，和更多的社福單位，表示有意願加入串連。</p>
                    </Content>
                </ContentWrapper>
            </div>
            <p></p>
            <br>
            <div class="v_Video">
                <ContentWrapper>
                    <EmbededVideo :src="video"></EmbededVideo>
                </ContentWrapper>
            </div>
            <p></p>
            <br>
            <div class="v_Content">
                <ContentWrapper>
                    <Content>
                        <h3>被需要台積電有溫度了</h3>
                        <p></p>
                        <br>
                        <p>台積電慈善基金會今年正式成立，延續以往做公益的智慧。志工們還是堅持要走到第一線，去感受問題，去碰觸受助者真正的需求。</p>
                        <p></p>
                        <br>
                        <p>至於陪伴性質的服務，基金會則堅持，一旦投入就要長久延續。張淑芬一次離開榮民之家時，見長輩不捨的眼神，從此銘記，「讓人盼不到下一次快樂，比從來沒快樂過，更痛！」</p>
                        <p></p>
                        <br>
                        <p>台積電志工到偏鄉去服務，一趟只有300元車馬費，但志工要自己從新竹坐高鐵到台北，換火車到花蓮，再租車去深山，還經常買不到回程的火車票。</p>
                        <p></p>
                        <br>
                        <p>張淑芬說，這些她清楚、很不捨，其實自己有時也矛盾，鼓勵當志工，又捨不得員工當志工，就怕他們沒時間陪家人，未料隨即就看見，員工把孩子父母都帶來，一起當志工。</p>
                    </Content>
                </ContentWrapper>
            </div>
            <p></p>
            <br>
            <div class="v_ColumnThree">
                <ContentWrapper>
                    <Content>
                        <ColumnThree :imgsay="say" :img1="remote_cover" :img2="remote_cover" :img3="remote_cover"></ColumnThree>
                    </Content>
                </ContentWrapper>
            </div>
            <p></p>
            <br>
            <div class="v_Content">
                <ContentWrapper>
                    <Content>
                        <h3>做到最實在 台積電與高雄氣爆</h3>
                        <p></p>
                        <br>
                        <p>台積電基金會2014年起，走訪遍布全台的醫療、社福單位，尋找一樣對獨居老人，有協助意願的夥伴，串接起志同道合的點與線，打造全國性的獨居老人照顧網──「愛互聯」。</p>
                        <p></p>
                        <br>
                        <p>針對獨老醫療，位於各縣市的愛互聯醫療單位，首先為低收入的獨居老人，提供掛號服務專線，並減免掛號費，降低經濟弱勢的獨居老人醫療門檻。</p>
                        <p></p>
                        <br>
                        <p>接著，基金會再與在地民間社福單位志工攜手，協助獨老前往合作醫療院所就診，並協助診後的服藥、起居，更重要的，愛互聯為獨老的需求，一起找資源。</p>
                        <p></p>
                        <br>
                        <p>愛互聯目前在全台，「兵分六區」投入服務行動（北部、竹苗、台中、台南、高雄、花東），今年還有14家偏遠地區醫院，和更多的社福單位，表示有意願加入串連。</p>
                        <p></p>
                        <br>
                        <p></p>
                        <br>
                    </Content>
                </ContentWrapper>
            </div>
        </div>
        <p></p>
        <br>
        <div class="v_FBComment">
            <ContentWrapper>
                <h3>留言給我們</h3>
                <FBComment></FBComment>
            </ContentWrapper>
        </div>
        <p></p>
        <br>
        <div class="v_Foot">
            <Foot></Foot>
        </div>
    </FadeInDown>
</template>

<script>
import Vue from "vue";
import Utils from "udn-newmedia-utils";
import Cover from "~/components/Cover.vue";
import ContentWrapper from "~/components/Content.vue";
import EmbededVideo from "~/components/EmbededVideo.vue";
import FadeInDown from "~/components/FadeInDown.vue";
import FBComment from '~/components/FBComment.vue'
import Foot from "~/components/Foot.vue";
import HeadBar from "~/components/HeadBar.vue";
import Quote from "~/components/Quote.vue";
import ColumnThree from "~/components/ColumnThree.vue";

import remote_cover from "~/assets/remote/remote_cover.jpg";
import quote from "~/assets/quote.png";
import video from "~/assets/newsvideo.mp4";

if (process.browser) {
    require('~/plugins/fb-sdk.js')
}

export default {
  name: "remote",
  components: {
    Cover,
    ColumnThree,
    ContentWrapper,
    EmbededVideo,
    FadeInDown,
    FBComment,
    Foot,
    HeadBar,
    Quote
  },
  data() {
    return {
      remote_cover: remote_cover,
      quote: quote,
      video: video,
      say:
        "台積電志工發揮知識力，利用假日到新竹偏鄉小學當「家教」，陪孩子讀書算數學。"
    };
  },
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'GenJyuuGothic';
        src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
    }
    .v_Cover{
        position: relative;
        width: 100%;
        img{
        width: 100%;
        max-height: 100vh;
        }
    }    
    h1.bigtitle.bigtitle {
        font-family: 'GenJyuuGothic';
        font-weight: bold;
        color: #fff2a2;
    }    
    // .v_Cover {
    //     h1 {
    //         color: #fff2a2;
    //         font-weight: 900;
    //     //     @font-face {
    //             font-family: 'GenJyuuGothic';
    //     //         src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
    //     //     }
    //     }
    // }
    .textContent {
        background-color: #f2ede4;
        font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
        h3 {
            font-weight: bold;
        }
    }
    .v_FBComment {
        font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
    }
    .v_Foot {
        font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
    }
    
</style>