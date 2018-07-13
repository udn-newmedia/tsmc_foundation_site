<template>
    <FadeInDown>
        <HeadBar isNews='true' isPage='remote'></HeadBar>
        <div class="v_Cover">
            <Cover :bg="remote_cover_m" :bgweb="remote_cover_web"></Cover>
            <ContentWrapper>
                <h1 class="bigtitle title_position" style="position: absolute;">用科技力<br>照顧獨老的健康</h1>
            </ContentWrapper>
        </div>
        <div class="textContent">
            <div class="v_Content">
                <ContentWrapper>
                        <p><br></p>
                        <p><br></p>
                        <p>台灣社會高齡化速度比日本快5倍，內政部統計，截至去年，高齡人口已達314萬人，預估2025年，台灣每5人就有1名老人，將正式邁入「超高齡化」社會。</p>
                        <p><br></p>
                        <p>需要被照顧的老年人口漸多，已經嚴重吃緊的醫療人力漏洞，卻來不及補足。</p>
                        <p><br></p>
                        <p>「請問，我們可以怎麼幫忙？」長期照顧偏鄉、獨居老人的台積電慈善基金會，去年起走遍全台大小醫療機構，查訪醫療資源匱乏程度，試著用最擅長的「科技力」補足醫療人力缺口。</p>
                        <p><br></p>
                </ContentWrapper>
            </div>
            <div class="v_Content">
                <ContentWrapper>
                        <p><br></p>
                        <h2>台積電研發遠端關懷設備</h2>
                        <h2>守護長輩的「亞健康」</h2>
                        <p><br></p>
                        <p>台積電慈善基金會董事長張淑芬表示，台灣高齡社會中，佔最多數者是「亞健康」的長輩，生活還能自理，但卻很需要人小心呵護，避免落入「失能」族群。</p>
                        <p><br></p>
                        <p>台積電便在去年與衛福部立豐原醫院、長照企業受恩等攜手，經過半年的腦力激盪，共同研發出4大創新「遠端關懷設備」，包括智慧藥盒、室內定位、視訊設備、智慧手環等。</p>
                        <p><br></p>
                </ContentWrapper>
            </div>
            <p><br></p>
            <div class="v_ColumnFour">
                <ContentWrapper>
                        <ColumnFour :img1="img1_m" :img2="img2_m" :img3="img3_m" :img4="img4_m" :imgweb1="img1_pad" :imgweb2="img2_web" :imgweb3="img3_web" :imgweb4="img4_web" :imgsay1="imgsay1" :imgsay2="imgsay2" :imgsay3="imgsay3" :imgsay4="imgsay4"></ColumnFour>
                </ContentWrapper>
            </div>
            <p><br></p>      
            <div class="v_Content">
                <ContentWrapper>
                    <p><br></p>
                    <p>豐原醫院長賴慧貞表示，豐醫的社工初期先徵詢有使用意願的10名長輩，由台積電免費提供全套關懷設備試行，同時記錄長輩使用意見，進行軟硬體設備優化。</p>
                    <p><br></p>
                </ContentWrapper>
            </div>
            <div class="v_Content">
                <ContentWrapper>
                        <p><br></p>
                        <h2>阿嬤的血壓怎麼還沒回傳？</h2>
                        <h2>無聲警訊&nbsp;&nbsp;成功救命</h2>
                        <p><br></p>
                        <p>試行的10名長輩之一、一位兒女長期在外地工作的「陳阿嬤」，雖患有心血管、糖尿病、中風病史，但擔心造成兒女不便，時常強忍身體疾病疼痛不說、延誤就醫。</p>
                        <p><br></p>
                        <p>豐原醫院社工室主任劉紫娟表示，陳阿嬤使用關懷設備的意願很高，在設備裝設完後，很快的就學會操作。然而有一天，社工們發現陳阿嬤的血壓、體溫等生理數值，比平常更晚回傳。</p>
                        <p><br></p>
                        <p>進一步確認陳阿嬤的「室內定位」系統，社工發現阿嬤已經在臥房內停留了7.5個小時，比平常整整多出2個小時。</p>
                        <p><br></p>
                        <p>社工查覺異狀，趕緊通報、第一時間前往關心處理，才發現阿嬤倒臥在床上無法動彈，就醫檢驗發現是尿道阻塞，趕緊治療排除，及時避免了更嚴重的併發症。</p>
                        <p><br></p>
                        <p>劉紫娟表示，設備試行以前，一直預估將從長輩回傳的「生理數值」照顧他們的健康，但陳阿嬤的案例，讓醫院團隊認知「沒有數值」更是一項警訊、也能第一時間救援長輩的重要提醒。</p>
                </ContentWrapper>
            </div>
            <div class="v_Video">
                <ContentWrapper>
                    <p><br></p>
                    <p><br></p>
                    <EmbededVideo :src="video" :srcWeb="video"></EmbededVideo>
                    <p><br></p>
                    <p><br></p>
                </ContentWrapper>
            </div>
            <div class="v_Content">
                <ContentWrapper>
                        <h2>當長輩遇上智慧設備...</h2>
                        <h2>一起優化的溫馨火花</h2>
                        <p><br></p>
                        <p>台積電慈善基金會董事長張淑芬表示，其實遠端關懷設備對老人家來說，存在一定的挑戰性，設備試運行期間，觀察長輩許多使用狀況，發現許多一開始沒預料到的情形。</p>
                        <p><br></p>
                        <p>例如，具有即時監控長輩生理功能的「智慧手環」，最初的錶帶設計類似一般運動手環，但許多長輩視力、 肌力衰退，使用不易，便改為「魔鬼氈」設計。</p>
                        <p><br></p>
                        <p>「沒想到，老人家覺得魔鬼氈不透氣，很熱！」張淑芬笑著說，團隊又趕緊再改良第三版，選用更透氣的材質，並改用一般手錶的配戴方法，才終於換來長輩安心使用的笑臉。</p>
                        <p><br></p>
                        <p>協助開發遠端關懷設備的受恩公司副總經理施宣豪表示，一位生性節儉的獨居阿公「莊爺爺」，室內定位系統老是斷線，工作人員以為是機器故障，要前往維修時發現。</p>
                        <p><br></p>
                        <p>個性節儉的莊爺爺，看到設備的面板亮亮的，擔心電費暴漲，所以才一直把插頭拔掉，導致設備斷線。受恩趕緊研發「省電功能」的休眠模式，莊爺爺才終於安心使用。</p>
                        <p><br></p>
                </ContentWrapper>
            </div>
            <div class="v_ColumnOne">
                <ContentWrapper>
                        <p><br></p>
                        <ColumnOne :img1="img5_m" :imgweb1="img5_web"></ColumnOne>
                        <p><br></p>
                </ContentWrapper>
            </div>
            <p></p>
            <br>   
            <div class="v_Content">
                <ContentWrapper>
                        <h2>「有你們關心，我願意照顧好自己」</h2>
                        <p><br></p>
                        <p>社工李筱筑分享，陪著長輩一路使用台積電的遠端關懷設備，印象最深刻、也最心疼的是一位獨居長輩說，「以前量血壓都不知道要幹嘛，現在知道有你們在醫院幫我看，我每天都很期待要量」。</p>
                        <p><br></p>
                        <p>李筱筑表示，設備除了把關長輩的「生理健康」，經過設備試行後發現，其實在「心理陪伴」層面也發揮很大的幫助。</p>
                        <p><br></p>
                        <p>長輩不僅很期待來自醫療團隊、社工的關心。長輩之間也因為「設備」而有了新的話題，彼此會關心使用情形之外，也會比賽誰用的最「上手」，促進社交，有助延緩長輩失能與退化。</p>
                        <p><br></p>
                </ContentWrapper>
            </div>
            <div class="v_ColumnOne">
                <ContentWrapper>
                    <p><br></p>
                    <ColumnOne :img1="img6_m" :imgweb1="img6_web"></ColumnOne>
                    <p><br></p>
                </ContentWrapper>
            </div>
            <p><br></p> 
            <div class="v_Content">
                <ContentWrapper>
                        <h2>希望政府看一看</h2>
                        <h2>我們走過的路</h2>
                        <p><br></p>
                        <p>台積電慈善基金會董事長張淑芬表示，遠端關懷設備，從初期一套5000元，台積電持續研發、降低成本，到現在一套只需800元。</p>
                        <p><br></p>
                        <p>「我們的終極目標是希望，讓政府接手，大規模的去做，一套就可以更便宜，讓長輩享受健康，真的不必花大錢的。」</p>
                        <p><br></p>
                        <p>張淑芬表示，目前設備在豐原醫院試行成，功協助醫護、志工在一樣的工作時間內，關心到８倍的獨居老人。未來將持續擴大，幫助更多醫療體系，也陪伴更多老人家一起度過健康無憂的老年。</p>
                        <p><br></p>
                        <p><br></p>
                        <p><br></p>
                        <p><br></p>
                </ContentWrapper>
            </div>
        </div>
        <ContentWrapper id="vol_comment" style="padding: 3% 0;position: relative;z-index: 2;background-color: #fff;">
        <p><br></p>
        <h2>留言給我們</h2>
        <p><br></p>
        <FBComment :href="location"></FBComment>
        <p><br></p>
        </ContentWrapper>
        <Foot></Foot>
    </FadeInDown>
</template>

<script>
import Vue from "vue";
import Utils from "udn-newmedia-utils";
import Cover from "~/components/Cover.vue";
import ColumnOne from "~/components/ColumnOne.vue";
import ColumnFour from "~/components/ColumnFour.vue";
import ContentWrapper from "~/components/Content.vue";
import EmbededVideo from '~/components/EmbededVideo.vue';
import FadeInDown from "~/components/FadeInDown.vue";
import FBComment from "~/components/FBComment.vue";
import Foot from "~/components/Foot.vue";
import HeadBar from "~/components/HeadBar.vue";
import Quote from "~/components/Quote.vue";

import remote_cover_web from "~/assets/remote/0712/tsmc_cover_0712/cover_web.jpg";
import remote_cover_m from "~/assets/remote/0712/tsmc_cover_0712/cover-m.jpg";
import remote_cover_pad from "~/assets/remote/0712/tsmc_cover_0712/cover-pad.jpg";
import img1_web from "~/assets/remote/0712/tsmc_equ-1_0712/equ-1.jpg";
import img1_m from "~/assets/remote/0712/tsmc_equ-1_0712/equ-1-m.jpg";
import img1_pad from "~/assets/remote/0712/tsmc_equ-1_0712/equ-1-pad.jpg";
import img2_web from "~/assets/remote/0712/tsmc_equ-2_0712/equ-2.jpg";
import img2_m from "~/assets/remote/0712/tsmc_equ-2_0712/equ-2-m.jpg";
import img2_pad from "~/assets/remote/0712/tsmc_equ-2_0712/equ-2-pad.jpg";
import img3_web from "~/assets/remote/0712/tsmc_equ-3_0712/equ-3.jpg";
import img3_m from "~/assets/remote/0712/tsmc_equ-3_0712/equ-3-m.jpg";
import img3_pad from "~/assets/remote/0712/tsmc_equ-3_0712/equ-3-pad.jpg";
import img4_web from "~/assets/remote/0712/tsmc_equ-4_0712/equ-4.jpg";
import img4_m from "~/assets/remote/0712/tsmc_equ-4_0712/equ-4-m.jpg";
import img4_pad from "~/assets/remote/0712/tsmc_equ-4_0712/equ-4-pad.jpg";
import img5_web from "~/assets/remote/0712/tsmc_img-1_0712/img-1.jpg";
import img5_m from "~/assets/remote/0712/tsmc_img-1_0712/img-1-m.jpg";
import img5_pad from "~/assets/remote/0712/tsmc_img-1_0712/img-1-pad.jpg";
import img6_web from "~/assets/remote/0712/tsmc_img-2_0712/img-2.jpg";
import img6_m from "~/assets/remote/0712/tsmc_img-2_0712/img-2-m.jpg";
import img6_pad from "~/assets/remote/0712/tsmc_img-2_0712/img-2-pad.jpg";
import video from "~/assets/remote/tsmc_elder.mp4";

if (process.browser) {
  require("~/plugins/fb-sdk.js");
}

export default {
  name: "remote",
  components: {
    Cover,
    ColumnOne,
    ColumnFour,
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
      location: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/remote/index.html',
      remote_cover_web: remote_cover_web,
      remote_cover_m: remote_cover_m,
      remote_cover_pad: remote_cover_pad,
      img1_web: img1_web,
      img1_m: img1_m,
      img1_pad: img1_pad,
      img2_web: img2_web,
      img2_m: img2_m,
      img2_pad: img2_pad,
      img3_web: img3_web,
      img3_m: img3_m,
      img3_pad: img3_pad,
      img4_web: img4_web,
      img4_m: img4_m,
      img4_pad: img4_pad,
      img5_web: img5_web,
      img5_m: img5_m,
      img5_pad: img5_pad,
      img6_web: img6_web,
      img6_m: img6_m,
      img6_pad: img6_pad,
    //   imgsay1: "智慧藥盒／鬧鈴提醒 未吃志工立即關心聯繫",
    //   imgsay2: "健康手環／醫院即時監控生理功能",
    //   imgsay3: "視訊系統／社工訪視頻率 躍升８倍",
    //   imgsay4: "室內定位／生病跌倒 醫院零時差關心救援",
      imgsay2: "智慧藥盒／鬧鈴提醒 未吃志工立即關心聯繫",
      imgsay3: "健康手環／醫院即時監控生理功能",
      imgsay4: "視訊系統／社工訪視頻率 躍升８倍",
      imgsay1: "室內定位／生病跌倒 醫院零時差關心救援",
      video: video
    };
  },
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "GenJyuuGothic";
  src: url("~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf");
}
.v_Cover {
  position: relative;
  width: 100%;
  img {
    width: 100%;
    max-height: 100vh;
  }
}
h1.bigtitle.bigtitle {
  font-family: "GenJyuuGothic";
  font-weight: bold;
  color: #fff2a2;
}
.title_position{
    bottom: 20%;
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
  font-family: Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
  h3 {
    font-weight: bold;
  }
}
.v_FBComment {
  font-family: Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}
.v_Foot {
  font-family: Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
}
.remoteSection{
  padding-top: 70px;
  padding-bottom: 70px;
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  background: #f2ede4; 
}
#vol_comment{
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  position: relative;
  background-color: #e4c8a9;
}
</style>