<template>
  <div id="campaigns">
    <HeadBar :bookmark-display="stickyAnchors"></HeadBar>
    <div class="fullscreen centercenter">
      <h1>我們做的事</h1>
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
              <h3><b>重回教育體制<br>埋下讓台灣暖起來的種子</b></h3>
              <p><br></p>
              <p>台積電慈善基金會對孝道的倡議，奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...</p>
            </div>
            <button>看更多</button>
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
              <h3><b>每年固定關懷長者<br>加起來超過160,000歲</b></h3>
              <p><br></p>
              <p>台積電慈善基金會對孝道的倡議，奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...</p>
            </div>
            <button>看更多</button>
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
              <h3><b>從國中小教育埋下種子<br>電力健檢年省9100萬度電</b></h3>
              <p><br></p>
              <p>台積電慈善基金會對孝道的倡議，奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...</p>
            </div>
            <button>看更多</button>
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
              <h3><b>建學堂、修教室<br>台積電伴讀1000個偏鄉家庭的孩子</b></h3>
              <p><br></p>
              <p>台積電慈善基金會對孝道的倡議，奠基於董事長張淑芬每一次握緊獨居老人的手，心頭湧起的期盼：假如每個家都重視孝道，台灣的獨居老人、偏鄉教養問題，就能從根本獲得改善。「獨居老人看著你的眼神，那種寂寞」...</p>
            </div>
            <button>看更多</button>
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
import ColumnTwo from 'udn-newmedia-vue-components/src/components/ColumnTwo.vue'
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
      tsmcLogo: tsmcLogo
    }
  },
  components: {
    HeadBar, ContentWrapper, ColumnTwo
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
    padding: 20px;
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
    transform: translateY(-20%);
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
