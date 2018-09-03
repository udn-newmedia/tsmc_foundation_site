<template>
  <FadeInDown>
    <HeadBar isNews='true' isPage='remote'></HeadBar>
      <div class="v_Cover">
        <Cover :bg="remote_cover_m" :bgweb="remote_cover_web"></Cover>
          <ContentWrapper>
            <h1 class="bigtitle title_position" style="position: absolute;">用科技力<br>給長輩更好的照護</h1>
          </ContentWrapper>
      </div>
      <div class="textContent">
        <div class="v_Content">
          <ContentWrapper>
            <p><br></p>
            <p><br></p>
            <p>台灣社會高齡化速度比日本快5倍，內政部統計，截至去年，高齡人口已達314萬人，預估2025年，台灣每5人就有1名老人，將正式邁入「超高齡化」社會。</p>
            <p><br></p>
            <p>需要被照顧的老年人口漸多，已經嚴重吃緊的醫療人力漏洞，卻來不及補足。衛福部統計，目前長照2.0人力缺口已破萬，到109年將達1.5萬。</p>
            <p><br></p>
            <p>「請問，我們可以怎麼幫忙？」長期照顧偏鄉、獨居老人的台積電慈善基金會，去年起走遍全台大小醫療機構，查訪醫療資源匱乏程度，以及第一線社工實際遇到的困境與問題，試著用最擅長的「科技力」協助解決、補上醫療人力缺口。</p>
            <p><br></p>
          </ContentWrapper>
        </div>
        <div class="v_Content">
          <ContentWrapper>
            <p><br></p>
            <h2>台積電+豐原醫院</h2>
            <h2>研發遠端關懷設備 守護長輩的「亞健康」</h2>
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
            <h2>台積電+苗栗後龍日照中心</h2>
            <h2>研發智能系統 解決照服員煩惱</h2>
            <p><br></p>
            <p>走進衛福部苗栗醫院位於後龍鎮的日照中心，幾名老人家正在跟著照顧服務員舞動手腳，透過記憶動作、全身動一動，大腦和身體都能被刺激到。</p>
            <p><br></p>
            <p>在日照中心的長輩都有失能或失智的狀況，日照中心對長期照顧的家人而言，不只是重要的喘息資源，專業的社工、治療師，能夠提供老人家更好的照護；透過與其他長輩互動，更能讓長輩重拾消失已久的社交生活，有效減緩失能與失智惡化的速度。</p>
            <p><br></p>
            <p>陪伴、照顧長輩是日照中心社工最重要的工作，但現在社工一天的工作時間，卻得用來填寫大量文書資料。</p>
          </ContentWrapper>
        </div>
        <div class="v_ColumnOne">
          <ContentWrapper>
              <p><br></p>
              <ColumnOne :img1="img0820_1" :imgweb1="img0820_1_pc"></ColumnOne>
              <p><br></p>
          </ContentWrapper>
        </div>
        <div class="v_Content">
          <ContentWrapper>
              <p><br></p>
              <p>苗栗醫院社工室主任徐慧琪指出，長輩的飲水量、活動狀況等都得靠社工手寫，和家屬的溝通資料也都是手寫，一間日照中心通常僅配置1名社工、1名照顧服務員，收滿時長輩有20到30位，每天光寫文書就花費社工許多時間，這些手寫資料卻沒辦法有效地進入系統，做為後續照顧的分析依據。</p>
              <p><br></p>
              <p>台積電與苗栗醫院合作開發智能系統，照顧服務員只需要透過語音，就能將長輩的生理狀況記錄進系統；每天登記的資料進入資訊系統後，能自動產出成「家屬連絡簿」，協助家屬掌握長輩狀況。</p>
              <p><br></p>
          </ContentWrapper>
        </div>
        <div class="v_ColumnOne">
          <ContentWrapper>
              <p><br></p>
              <ColumnOne :img1="img0820_2" :imgweb1="img0820_2_pc"></ColumnOne>
              <p><br></p>
          </ContentWrapper>
        </div>                 
        <p><br></p> 
        <div class="v_Content">
          <ContentWrapper>
            <p>智能系統節省了照顧服務員大量的手寫工作，分析長輩活動成效、產生報表過去要花好幾小時，現在僅需20分鐘；彙整資料給家屬的時間也縮短12倍，心力能專注照護長輩。</p>
            <p><br></p>
            <h2>智能定位</h2>
            <h2>長輩活動不被鐵欄杆框住</h2>
            <p><br></p>
            <p>「還有一個問題，所有日照中心都告訴我們，他們有老人走失的經驗。」徐慧琪說，老人走失對照顧者而言是件很嚴重的事，但很難避免，因為許多長輩是失智的問題，根本不清楚自己走到哪裡了，許多日照中心都透過裝設圍牆、欄杆來解決，「但我們不想框住長輩。」</p>
            <p><br></p>
            <p>因此，在台積電與苗栗醫院合作開發的智能系統中，有「智能定位」功能。每個長輩身上都別著一個用客家花布裝著的感應裝置，當長輩走到日照中心設定的範圍外，或在一個地方待超過5分鐘未動，系統都會提醒，讓社工、照服員能及時警覺。</p>
            <p><br></p>
            <ColumnOne :img1="img0820_3" :imgweb1="img0820_3_pc"></ColumnOne>
            <p><br></p>
            <ColumnOne :img1="img0820_4" :imgweb1="img0820_4_pc"></ColumnOne>
            <p><br></p>
            <p>透過智能定位，在後龍日照中心的長輩可以在中心內自由活動，可以隨時走到外面的花園散步，而不會被一層層的圍牆、欄杆限縮活動空間。</p>
            <p><br></p>
            <h2>「這裡讓我的媽媽重新覺得自己是個人」</h2>
            <p><br></p>
            <p>家屬李小姐印象中的母親是個溫柔的人，但在失智之後，變得相當暴躁，同樣的問題一問再問，漸漸的鄰居不愛與她母親互動，母親喪失了社交生活，失智狀況跟著惡化。</p>
            <p><br></p>
            <p>到了日照中心後，專業的社工、照服員都知道母親失智的情況，會耐心與專業的引導，花許多時間陪母親聊天；每天她來接母親時，社工都會以聯絡簿轉知母親今天的情況，方便她接手照顧。</p>
            <p><br></p>
            <p>從社工給的家屬聯絡簿和母親每天的反應中，讓李小姐感觸「我很感謝有這個地方，起碼讓媽媽有人說話，應該會讓她（指母親）覺得自己是個人。」</p>
            <p><br></p>
            <h2>希望政府看一看</h2>
            <h2>我們走過的路</h2>
            <p><br></p>
            <p>台積電慈善基金會董事長張淑芬表示，遠端關懷設備，從初期一套5000元，台積電持續研發、降低成本，到現在一套只需800元。</p>
            <p><br></p>
            <p>「我們的終極目標是希望，讓政府接手，大規模的去做，一套就可以更便宜，讓長輩享受健康，真的不必花大錢的。」</p>
            <p><br></p>
            <p>目前遠端關懷設備在豐原醫院試行成功，協助醫護、志工在一樣的工作時間內，關心到８倍的獨居老人；智能系統在苗栗後龍日照中心也已上軌道，未來將持續擴大，幫助更多醫療體系，也陪伴更多老人家一起度過健康無憂的老年。</p>
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
import EmbededVideo from "~/components/EmbededVideo.vue";
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

import img0820_1 from '../assets/0820_image/1534409980216_m.jpg'
import img0820_1_pc from '../assets/0820_image/1534409980216.jpg'
import img0820_2 from '../assets/0820_image/1534409159716_m.jpg'
import img0820_2_pc from '../assets/0820_image/1534409159716.jpg'
import img0820_3 from '../assets/0820_image/DSC_1118_m.jpg'
import img0820_3_pc from '../assets/0820_image/DSC_1118.jpg'
import img0820_4 from '../assets/0820_image/DSC_1239_m.jpg'
import img0820_4_pc from '../assets/0820_image/DSC_1239.jpg'

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
  head () {
    return {
      title: '台積電慈善基金會-用科技力照顧長輩',
      meta: [
        {
          property: 'og:url',
          content: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/remote/index.html'
        },
        { property: 'og:title',
          content: '台積電慈善基金會-用科技力照顧長輩'
        },
        { property: 'og:description',
          content: '預估2025年，台灣每5人就有1名老人，將正式邁入「超高齡化」社會，但需要被照顧的老年人口漸多，醫療人力卻來不及補足。長期照顧偏鄉、獨居老人的台積電慈善基金會，去年起走遍全台大小醫療機構，查訪醫療資源匱乏程度，以及第一線社工實際遇到的困境與問題，試著用最擅長的「科技力」協助解決醫療人力缺口。'
        },
        { hid: 'description',
          name: 'description',
          content: '預估2025年，台灣每5人就有1名老人，將正式邁入「超高齡化」社會，但需要被照顧的老年人口漸多，醫療人力卻來不及補足。長期照顧偏鄉、獨居老人的台積電慈善基金會，去年起走遍全台大小醫療機構，查訪醫療資源匱乏程度，以及第一線社工實際遇到的困境與問題，試著用最擅長的「科技力」協助解決醫療人力缺口。'
        },
        { name: 'keywords',
          content: '愛、老人、關懷、醫療、弱勢、社福、捐款、台積電、tsmc、互聯、慈善、基金會、CSR、倡議、志工、UDN、聯合報、張淑芬'
        },
      ]
    }
  },     
  data() {
    return {
      location: "https://udn.com/upf/newmedia/2018_data/tsmccharity/remote/index.html",
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
      img0820_1: img0820_1,
      img0820_1_pc: img0820_1_pc,
      img0820_2: img0820_2,
      img0820_2_pc: img0820_2_pc,
      img0820_3: img0820_3,
      img0820_3_pc: img0820_3_pc,
      img0820_4: img0820_4,
      img0820_4_pc: img0820_4_pc,
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
.title_position {
  bottom: 20%;
}
.textContent {
  background-color: #f2ede4;
  line-height: 1.5;
  font-family: Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
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
.remoteSection {
  padding-top: 70px;
  padding-bottom: 70px;
  line-height: 1.5;
  font-family: Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  background: #f2ede4;
}
#vol_comment {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體", "Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  position: relative;
  background-color: #e4c8a9;
}
</style>