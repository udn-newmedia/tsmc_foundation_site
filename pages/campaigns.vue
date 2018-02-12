<template>
  <div id="campaigns">
    <HeadBar :bookmark-display="stickyAnchors"></HeadBar>
    <div class="fullscreen centercenter" style="position: relative;">
      <ContentWrapper class="hidden-mobile" style="position: relative;">
        <Bodymovin jsonfile="./smartBrain1/data.json" MOBjsonfile="./smartBrain1_mobile/data.json" PADjsonfile="./smartBrain1_mobile/data.json" style="position: absolute; top: 0; left: 0; z-index: 0; width: 100%;"></Bodymovin>
        <Bodymovin jsonfile="./smartBrain2/data.json" MOBjsonfile="./smartBrain2_mobile/data.json" PADjsonfile="./smartBrain2_mobile/data.json" style="width: 100%;　z-index: 2; transform: translateY(10%);"></Bodymovin>
      </ContentWrapper>
      <Bodymovin class="hidden-pc" jsonfile="./smartBrain1/data.json" MOBjsonfile="./smartBrain1_mobile/data.json" PADjsonfile="./smartBrain1_mobile/data.json" style="position: absolute; top: 0; left: 0; z-index: 0; width: 100%;"></Bodymovin>
      <Bodymovin class="hidden-pc" jsonfile="./smartBrain2/data.json" MOBjsonfile="./smartBrain2_mobile/data.json" PADjsonfile="./smartBrain2_mobile/data.json" style="width: 100%;　z-index: 2; transform: translateY(10%);"></Bodymovin>
    </div>
    <ContentWrapper class="section" background-color="#f2ede4">
      <div class="row">
        <div class="col-lg-7 col-sm-12">
          <h3><b>當八千顆聰明的腦遇上公益</b></h3>
          <p><br></p>
          <p>談及丈夫張忠謀，如何看待台積電做公益，張淑芬笑著說，「首先就被交代了兩個『不准』」，第一不准強迫他的員工，第二不准碰錢，她爽朗回應，「那正好，我沒有數目觀念！」</p>
          <p><br></p>
          <p>「我們沒有向台積電拿很多錢，反而讓台積電的公益之路走得更廣」，張淑芬說，台積電的善款不假外求，全是來自公司內部的「台積i公益」捐款平台，只限員工捐款，也公告各地志工人力缺口，鼓勵員工每年花個幾天、甚至幾小時也好，身體力行地參與公益。</p>
          <p><br></p>
          <p>她更順水推舟，立下做公益的原則：不亂捐錢、不對外募款。任何的救災必先確實估價，一塊錢一定當兩塊錢用，善款一定從公司會計，直接轉進救災帳戶，「直接、不浪費，這是我們對股東，應該負的責任」。</p>
          <p><br></p>
          <div class="hidden-mobile">
            <p>張淑芬身體力行，帶頭投入服務，台積電從2009年1500名志工，至今已達8000人，她形容自己像老母雞...</p>
            <p><br></p>
            <p>當8000顆台積電的聰明腦，一起投向公益，張淑芬說，原本只有一個小小的善念萌芽，會有好多點子進來加分，聚沙成塔的力量，最後讓事情變成十分，「我說，這就是智慧的慈悲」。</p>
          </div>
        </div>
        <div class="col-lg-1 hidden-mobile"></div>
        <div class="col-lg-4 hidden-mobile">
          <h3><br></h3>
          <p><br></p>
          <img :src="webpic1" style="width: 100%;">
          <h3 style="line-height: 1.8;"><b>把人「想助人的本性」抓出來，小雞就這樣一隻隻跟上。</b></h3>
        </div>
        <div class="hidden-pc">
          <h3><br></h3>
          <p><br></p>
          <img :src="mobpic1">
          <h3 style="line-height: 1.8;"><b>把人「想助人的本性」抓出來，小雞就這樣一隻隻跟上。</b></h3>
        </div>
        <div class="hidden-pc">
          <p><br></p>
          <p>張淑芬身體力行，帶頭投入服務，台積電從2009年1500名志工，至今已達8000人，她形容自己像老母雞...</p>
          <p><br></p>
          <p>當8000顆台積電的聰明腦，一起投向公益，張淑芬說，原本只有一個小小的善念萌芽，會有好多點子進來加分，聚沙成塔的力量，最後讓事情變成十分，「我說，這就是智慧的慈悲」。</p>
          <p><br></p>
          <p><br></p>
        </div>        
      </div>
    </ContentWrapper>
    <ContentWrapper background-color="#e0dfdf" class="workblocks">
      <div class="row">
        <div class="col-lg-8 workblock shiftupward">
          <div class="col-lg-10 textarea">
            <div class="paddingtopandbottom">
              <h2>孝道推廣</h2>
              <h3><b>重回教育體制<br>埋下讓台灣暖起來的種子</b></h3>
              <p><br></p>
              <div v-if="isLess[0]">
                <p>台積電慈善基金會對孝道的倡議，奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...</p>
              </div>
              <div v-else>
                <p>台積電慈善基金會對孝道的倡議，奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」</p>
                <p><br></p>
                <p>張淑芬說，這些長輩不見得需要錢，握著他們的手，儘管脆弱顫抖，卻仍努力的也抓緊你，他們需要的是有溫度的陪伴。</p>
                <p><br></p>
                <p>「生前孤零零，一過世卻誰都來了」，看著如此不堪的場景，張淑芬在心裡一次次的問著，這些孩子們，在自己的父母、爺爺奶奶最孤單的時候，都到哪裡去了？</p>
                <p><br></p>
                <p>張淑芬認為，每個獨居老人渴望的不是物質補助，而是陪伴，這些老人過得好，社會就會更好。但也發現家庭倫理、道德課程，早在16年前就從教科書裡廢除，張淑芬決心讓這些書本裡學不到的事，重返校園，根治現今麻木冷漠的社會。</p>
                <Quote 
                  text="「只有家裡熱了，才有能力去愛別人。」" 
                  color="#000"
                  borderColor="#fff"></Quote>
                <p>她相信「孝道」是改變社會的起點，基金會今年起，積極尋訪各縣市首長，盼能一起推廣。其中前台南市長、現任行政院長賴清德率先一口答應，推廣半年後，教育部再加入，讓台南市成為示範區。中央與地方將攜手整合教材與資源，首批由8所國中小種子學校，結合正式課程及非正式活動，啟動孝道教育。</p>                                                
              </div>
            </div>
            <button @click="toggleLess(0)">看更多</button>
          </div>
        </div>
        <img class="right" :src="webpic2">
      </div>
    </ContentWrapper>
    <ContentWrapper background-color="#e0dfdf" class="workblocks section">
      <div class="row">
        <img class="left shiftupward" :src="webpic3">
        <div class="col-lg-4"></div>
        <div class="col-lg-8 workblock">
          <div class="col-lg-2"></div>
          <div class="col-lg-10 textarea">
            <div class="paddingtopandbottom">
              <h2>獨居老人</h2>
              <h3><b>每年固定關懷長者<br>加起來超過160,000歲</b></h3>
              <p><br></p>
              <div v-if="isLess[1]">
                <p>台積電慈善基金會2013年開始投入社會長照服務，成立「愛互聯」慈善合作平台，結合各縣市醫院及在地慈善志工，到偏鄉照護獨居老人，從台中、新竹、台南、高雄、雙北市到花東，服務人次已超過七千人次，每年固定關懷的長輩，歲數加總超過160,000歲。...</p>
              </div>
              <div v-else>
                <p>台積電慈善基金會2013年開始投入社會長照服務，成立「愛互聯」慈善合作平台，結合各縣市醫院及在地慈善志工，到偏鄉照護獨居老人，從台中、新竹、台南、高雄、雙北市到花東，服務人次已超過七千人次，每年固定關懷的長輩，歲數加總超過160,000歲。</p>
                <p><br></p>
                <p>台積電慈善基金會也是榮民之家、地區性老人安養中心的固定志工，除了例行的老人陪伴服務，這群志工們也不時「按耐」不住最暖心的專業：竹北老人安養中心裡，志工們見燈光昏暗、管線裸露、生鏽的消防設備，他們在公司內部的員工專屬公益平台募款，引介協力廠商，為安養中心檢測電力系統、換上高效能LED燈具、加裝管線護套，並汰換老舊的消防與熱水設備，確保長輩的安全升級，更讓安養中心年省14萬電費支出。</p>
                <p><br></p>
                <p>今年，台積電慈善基金會更要走入偏鄉，為偏鄉獨居長輩的醫療想辦法，更多暖心故事，現在進行式。</p>
              </div>
            </div>
            <button @click="toggleLess(1)">看更多</button>
          </div>
        </div>
      </div>
    </ContentWrapper>
    <ContentWrapper background-color="#e0dfdf">
      <ColumnTwo
      :img1="mobpic4"
      :img2="mobpic5"
      :imgweb1="webpic4"
      :imgweb2="webpic5"
      ></ColumnTwo>
    </ContentWrapper>
    <ContentWrapper background-color="#e0dfdf" class="workblocks section">
      <div class="row">
        <div class="col-lg-8 workblock shiftupward">
          <div class="col-lg-10 textarea">
            <div class="paddingtopandbottom">
              <h2>環境保育</h2>
              <h3><b>從國中小教育埋下種子<br>電力健檢年省9100萬度電</b></h3>
              <p><br></p>
              <div v-if="isLess[2]">
                <p>台積電建設新廠前，堅持保留大面積用地，進行生態綠化工程，栽植多種原生樹種及誘鳥、誘蝶植物，作為動物棲息及覓食的場所。2012年成立台積生態志工，至今已接待34所偏鄉學校、千名孩童參訪。...</p>
              </div>
              <div v-else>
                <p>台積電建設新廠前，堅持保留大面積用地，進行生態綠化工程，栽植多種原生樹種及誘鳥、誘蝶植物，作為動物棲息及覓食的場所。2012年成立台積生態志工，至今已接待34所偏鄉學校、千名孩童參訪。</p>
                <p><br></p>
                <p>愛地球，台積電年省9100萬度電，更為樂得為其他企業、學校、醫院與社福機構「電路健檢」，抓出漏電、改善危險老舊線路，將專業與環保理念無償向外分享。「學校跟我們說謝謝，我都說不用！」，董事長張淑芬說，志工只請校方幫忙宣傳到家長會、其他學校，還有哪裡想省電，台積電都願意幫忙。</p>
              </div>
            </div>
            <button @click="toggleLess(2)">看更多</button>
          </div>
        </div>
        <img class="right" :src="webpic6">
      </div>
    </ContentWrapper>
    <ContentWrapper background-color="#e0dfdf">
      <ColumnTwo
      :img1="pic7"
      :img2="pic8"
      :imgweb1="pic7"
      :imgweb2="pic8"
      ></ColumnTwo>
    </ContentWrapper>
    <ContentWrapper background-color="#e0dfdf" class="workblocks section">
      <div class="row">
        <img class="left shiftupward" :src="webpic9">
        <div class="col-lg-4"></div>
        <div class="col-lg-8 workblock">
          <div class="col-lg-2"></div>
          <div class="col-lg-10 textarea">
            <div class="paddingtopandbottom">
              <h2>偏鄉教育</h2>
              <h3><b>建學堂、修教室<br>台積電伴讀1000個偏鄉家庭的孩子</b></h3>
              <p><br></p>
              <div v-if="isLess[3]">
                <p>從新竹坐高鐵到台北，換火車到花蓮，再租車去深山，還經常買不到回程的火車票，但台積電志工為偏鄉學童的教育，不曾停下腳步。2004年成軍的台積電偏鄉學童導讀志工，除了課後伴讀，我們更出錢出力，2004年至今，已投入逾億元改善偏鄉教育。...</p>                
              </div>
              <div v-else>
                <p>從新竹坐高鐵到台北，換火車到花蓮，再租車去深山，還經常買不到回程的火車票，但台積電志工為偏鄉學童的教育，不曾停下腳步。2004年成軍的台積電偏鄉學童導讀志工，除了課後伴讀，我們更出錢出力，2004年至今，已投入逾億元改善偏鄉教育。</p>
                <p><br></p>
                <p>蘇迪勒颱風，摧毀花蓮秀林鄉400多位部落孩童，由一面鐵皮搭建的課後學堂。台積電志工發揮專長勘查丈量，並募集607位同事愛心，3個月內打造新教室，更風塵僕僕，利用休假日往返花蓮當「老師」，「多一個孩子在身邊，少一個出去學壞，每趟來花蓮，都很有意義」。</p>
              </div>
            </div>
            <button @click="toggleLess(3)">看更多</button>
          </div>
        </div>
      </div>
    </ContentWrapper>    
    <ContentWrapper backgroundColor='#292b2e' class="footer">
      <p><br></p>
      <p><br></p>
      <div class="row" style="position: relative;">
        <div class="col-lg-6 tsmclogo">
          <img :src="tsmcLogo">
        </div>
        <div class="col-lg-6 tsmcfoundation">
          <p>台積電慈善基金會</p>
          <p>電話 : 03-563-6688 ext. 712-5030</p>
          <p>地址 : 300 新竹科學園區力行六路8號</p>
        </div>        
      </div>
    </ContentWrapper>      
  </div>
</template>

<script>
import HeadBar from '~/components/HeadBar.vue'
import ContentWrapper from '~/components/Content.vue'
import Bodymovin from 'udn-newmedia-vue-components/components/Bodymovin.vue'
import ColumnTwo from 'udn-newmedia-vue-components/src/components/ColumnTwo.vue'
import Quote from 'udn-newmedia-vue-components/src/components/Quote.vue'
import mobpic1 from '~/assets/campaigns_mob1.jpg'
import webpic1 from '~/assets/campaigns_web1.jpg'
import mobpic2 from '~/assets/campaigns_mob2.jpg'
import webpic2 from '~/assets/campaigns_web2.jpg'
import mobpic3 from '~/assets/campaigns_mob3.jpg'
import webpic3 from '~/assets/campaigns_web3.jpg'
import mobpic4 from '~/assets/campaigns_mob4.jpg'
import webpic4 from '~/assets/campaigns_web4.jpg'
import mobpic5 from '~/assets/campaigns_mob5.jpg'
import webpic5 from '~/assets/campaigns_web5.jpg'
import mobpic6 from '~/assets/campaigns_mob5.jpg'
import webpic6 from '~/assets/campaigns_web6.jpg'
import pic7 from '~/assets/campaigns7.jpg'
import pic8 from '~/assets/campaigns8.jpg'
import mobpic9 from '~/assets/campaigns_mob9.jpg'
import webpic9 from '~/assets/campaigns_web9.jpg'
import tsmcLogo from '~/assets/logo_tsmc.svg'

export default {
  data: function () {
    return {
      stickyAnchors: true,
      mobpic1: mobpic1,
      webpic1: webpic1,
      mobpic2: mobpic2,
      webpic2: webpic2,
      mobpic3: mobpic3,
      webpic3: webpic3,
      mobpic4: mobpic4,
      webpic4: webpic4,
      mobpic5: mobpic5,
      webpic5: webpic5,
      mobpic6: mobpic6,
      webpic6: webpic6,
      pic7: pic7,
      pic8: pic8,
      mobpic9: mobpic9,
      webpic9: webpic9,
      tsmcLogo: tsmcLogo,
      isLess: [true, true, true, true]
    }
  },
  components: {
    HeadBar, ContentWrapper, ColumnTwo, Quote, Bodymovin
  },
  methods: {
    toggleLess: function (whichone) {
      let index = Number(whichone)
      this.isLess[index] = !this.isLess[index]
      this.$forceUpdate()
    }
  }
}
</script>

<style>
#campaigns {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
}

@media screen and (max-width: 1023px){  
  .hidden-mobile{
    display: none!important;
  }
}

@media screen and (min-width: 1024px){  
  .hidden-pc{
    display: none!important;
  }
}

.fullscreen {
  width: 100%;
  height: 100vh;
}

.centercenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.subpageLink {
  text-align: right;
}

@media screen and (min-width: 1024px){
  .iconWrapper {
    display: flex;
    justify-content: space-around;
  }  
}

@media screen and (max-width: 1023px){
  .icon {
    padding: 25px;
  }
}

.icon p {
  padding-top: 10px;
  text-align: center;
}

.tsmcfoundation {
  bottom: 0;
  right: 0;
  color:  #717376;
  margin-top: 10px;
}

@media screen and (min-width: 1024px){
  .tsmcfoundation {
    position: absolute;
    border-left: solid 1px;
    padding-left: 10px;
    margin-top: 0;
  }
}

.tsmclogo img {
  margin-right: 10px;
}

.footer .row {
  margin-bottom: 10px;
}

@media screen and (max-width: 1023px){
  img {
    width: 100%;
  }
}

.section {
  padding-top: 50px;
  padding-bottom: 50px;
}

.workblock{
  background: white;
  border-radius: 3px;  
}

@media screen and (max-width: 1023px){
  .workblock{
    margin-top: 25px;
    margin-bottom: 25px; 
  }  
  .workblock .textarea{
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
  .workblock .paddingtopandbottom{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .workblock button{
    width: 100px;
    align-self: flex-end;
    transform: translateY(50%);
    padding: 5px;
  }
}

@media screen and (min-width: 1024px){
  .section {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  .workblocks .row{
    position: relative;
  }

  .workblock{
    position: relative;
    background: white;
    padding-left: 80px;
    padding-right: 80px;
    z-index: 0;
  }

  .workblock.shiftupward{
    transform: translateY(-140px);
  }

  img.shiftupward{
    transform: translateY(-30%);
  }

  .workblocks img{
    position: absolute;
    width: 40%;
    z-index: 1;
  }

  .workblocks img.right{
    top: 0;
    right: 0;  
  }

  .workblocks img.left{
    top: 0;
    left: 0;
  }

  .textarea{
    padding-right: 0;
  }

  .textarea button{
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(50%);
  }

  .workblock .paddingtopandbottom{
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>
