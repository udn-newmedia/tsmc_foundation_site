<template>
  <FadeInDown :class="{mustOverflow: useOverflow}">
    <div id="news">
      <HeadBar :bookmark-display="stickyAnchors" :isNews='false' isPage="news"></HeadBar>
      <div class="fullscreen" style="position: absolute; left: 0; top: 0; z-index: 0;">
        <Bodymovin pcwidth="880" pcheight="840" jsonfile="./index_cover/common/fly.json" MOBjsonfile="./index_cover/common/mobile/fly/data.json" PADjsonfile="./index_cover/common/mobile/fly/data.json" style="position: absolute; top: 0; left: 0; width: 100%;"></Bodymovin>
      </div>
      <ContentWrapper class="fullscreen hidden-mobile" style="position: absolute; left: 0; top: 0; z-index: 0;">
        <h1 class="bigtitle" style="position: absolute; top: 20%;">最新<br>動態</h1>
      </ContentWrapper>
      <div class="covertransform">
        <ContentWrapper class="section firstsection">
          <div class="row">
            <div class="col-lg-3 col-sm-3 col-xs-12"></div>
            <div class="col-lg-2 col-sm-2 hidden-mobile"></div>
            <div class="col-lg-7 col-sm-7 hidden-mobile titleblock" style="z-index: 99; padding-bottom: 0">
              <h2>{{coverNew.title}}</h2>
              <h2>{{coverNew.subTitle}}</h2>
              <p>{{coverNew.text}}</p>
              <div class="subpageLink">
                <a class="btn" :href="coverNew.link" target="_blank" @click.prevent="showCoverComment()">
                  <span>完整內文
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <h1 class="bigtitle hidden-pc" style="margin-top: 20%; margin-bottom: 20px;">最新<br>動態</h1>
          <EmbededVideo class="newsvideo" :src="newsvideo" :srcWeb="newsvideo" background-color="#e4c8a9" control-color="#333"></EmbededVideo>
        </ContentWrapper>
      </div>
      <ContentWrapper>
        <div class="newsblock hidden-pc" style="z-index: 1;">
          <h2>{{coverNew.title}}</h2>
          <h2 class="subtitle">{{coverNew.subTitle}}</h2>
          <p>{{coverNew.text}}</p>
          <div class="subpageLink">
            <a class="btn" :href="coverNew.link" target="_blank" @click.prevent="showCoverComment()">
              <span>完整內文
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper class="section" ref='newsGroup'>
        <div class="news" ref='test'>
          <div class="newsblock"
            v-for="(news, index) in contentList(page)"
            :key="news.title">
            <div class='imgContain'>
              <img :src="news.img">
            </div>
            <p class="title"><b>{{news.title}}</b></p>
            <p>{{news.text}}</p>
            <p><br></p>
            <div class="subpageLink">
              <a class="btn" :href="news.link" target="_blank"  @click.prevent="showComments(index)">
                <span>完整內文
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <nav class="section" aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click.prevent="changePage('previous')" aria-label="Previous">
              <span aria-hidden="true" class="arrow">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li v-for="(index, item) in pageList" :key="'page_is_' + item"
              class="page-item"><a class="page-link" :class="{'activePage': checkPage(index)}" @click.prevent="changePage(index)">{{index}}</a></li>
          <li class="page-item">
            <a class="page-link" @click.prevent="changePage('next')" aria-label="Next">
              <span aria-hidden="true" class="arrow">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
      <ContentWrapper background-color="#fff" style="padding: 3% 0;">
        <p><br></p>
        <h2>留言給我們</h2>
        <p><br></p>
        <FBComment :href="location"></FBComment>
        <p><br></p>
      </ContentWrapper>
      <Foot></Foot>
    </div>
    <Overlay mainContainer="news" :show="showMessageBoard" :flowData="sendData"></Overlay>
  </FadeInDown>
</template>

<script>
import Vue from 'vue'
import Utils from 'udn-newmedia-utils'
import HeadBar from '~/components/HeadBar.vue'
import ContentWrapper from '~/components/Content.vue'
import Foot from '~/components/Foot.vue'
import Overlay from '~/components/Overlay.vue'
import EmbededVideo from '~/components/EmbededVideo.vue'
import Bodymovin from '~/components/Bodymovin.vue'
import FBComment from '~/components/FBComment.vue'
import FadeInDown from '~/components/FadeInDown.vue'
import $eventBus from'~/plugins/eventBus.js'
import newsvideo from '~/assets/newsvideo.mp4'
import indexMob1 from '~/assets/index_mob1.jpg'
import indexWeb1 from '~/assets/index_web1.jpg'
import indexMob2 from '~/assets/index_mob2.jpg'
import indexWeb2 from '~/assets/index_web2.jpg'
import tsmcLogo from '~/assets/logo_tsmc.svg'
import newsphoto from '~/assets/photo.jpg'
import titleimg from '~/assets/title_news.svg'
import titleimgmob from '~/assets/title_news_mob.svg'
import titlefont from '../static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf'

import news_video_poster from '../assets/news_video_post.jpg'

import img1 from '~/assets/1.jpg'
import img2 from '~/assets/2.jpg'
import img3 from '~/assets/3.jpg'
import img4 from '~/assets/4.jpg'
import img5 from '~/assets/5.jpg'
import img6 from '~/assets/6.jpg'
import img7 from '~/assets/7.jpg'
import img8 from '~/assets/8.jpg'
import img9 from '~/assets/9.jpg'
import img10 from '~/assets/10.jpg'
import img11 from '~/assets/11.jpg'
import img12 from '~/assets/12.jpg'
import img13 from '~/assets/13.jpg'
import img14 from '~/assets/14.jpg'
import img15 from '~/assets/15.jpg'
import img16 from '~/assets/16.jpg'
import img17 from '~/assets/17.jpg'

import CoverNewsMedia from '../assets/news/coverNews.jpg'
import ArticleMedia_1 from '../assets/news/1.jpg'
import ArticleMedia_2 from '../assets/news/2.jpg'
import ArticleMedia_2_1 from '../assets/news/2-1.jpg'
import ArticleMedia_3 from '../assets/news/3.jpg'
import ArticleMedia_4 from '../assets/news/4.jpg'
import ArticleMedia_5 from '../assets/news/5.jpg'
import ArticleMedia_6 from '../assets/news/6.jpg'
import ArticleMedia_6_2 from '../assets/news/6-2.jpg'
import ArticleMedia_6_3 from '../assets/news/6-3.jpg'
import ArticleMedia_6_4 from '../assets/news/6-4.jpg'
import ArticleMedia_6_5 from '../assets/news/6-5.jpg'
import ArticleMedia_6_6 from '../assets/news/6-6.jpg'
import ArticleMedia_6_7 from '../assets/news/6-7.jpg'
import ArticleMedia_6_8 from '../assets/news/6-video.mp4'
import ArticleMedia_6_9 from '../assets/news/6-poster.jpg'
import ArticleMedia_7 from '../assets/news/7.jpg'
import ArticleMedia_8 from '../assets/news/8.jpg'
import ArticleMedia_8_2 from '../assets/news/8-2.jpg'
import ArticleMedia_9 from '../assets/news/9.jpg'
import ArticleMedia_9_2 from '../assets/news/9-2.jpg'
import ArticleMedia_10 from '../assets/news/10.jpg'
import ArticleMedia_10_2 from '../assets/news/10-2.jpg'
import ArticleMedia_10_3 from '../assets/news/10-3.jpg'
import ArticleMedia_10_4 from '../assets/news/10-4.jpg'
import ArticleMedia_11 from '../assets/news/11.jpg'
import ArticleMedia_12 from '../assets/news/12.jpg'
import ArticleMedia_12_2 from '../assets/news/12-2.jpg'
import ArticleMedia_12_3 from '../assets/news/12-3.jpg'
import ArticleMedia_13 from '../assets/news/13.jpg'
import ArticleMedia_13_2 from '../assets/news/13-2.jpg'
import ArticleMedia_14 from '../assets/news/14.jpg'
import ArticleMedia_14_2 from '../assets/news/14-2.jpg'
import ArticleMedia_14_3 from '../assets/news/14-3.jpg'
import ArticleMedia_14_4 from '../assets/news/14-4.jpg'
import ArticleMedia_15_1 from '../assets/news/15-1.jpg'
import ArticleMedia_15_2 from '../assets/news/15-2.jpg'

if (process.browser) {
  require('~/plugins/fb-sdk.js')
  require('~/components/Overlay.vue')
  // require('~/plugins/pageLoadAnim.js')
}

export default {
  head () {
    return {
      title: '台積電慈善基金會-最新動態',      
      meta: [
        {
          property: 'og:url',
          content: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/news/index.html'
        },        
        { property: 'og:title',
          content: '台積電慈善基金會-最新動態'
        },
        { property: 'og:description',
          content: '除了捐款，台積電還做了哪些事？台積電慈善基金會董事長張淑芬於災害發生後第一時間親臨現場訪視災民，並研擬出台積電對於此次災後復原協助方向。台積電慈善基金會-最新動態'
        },
        { hid: 'description',
          name: 'description',
          content: '除了捐款，台積電還做了哪些事？台積電慈善基金會董事長張淑芬於災害發生後第一時間親臨現場訪視災民，並研擬出台積電對於此次災後復原協助方向。台積電慈善基金會-最新動態'
        },
        { name: 'keywords',
          content: '新聞、報導、消息、台積電、tsmc、公益、慈善、基金會、CSR、倡議、志工、捐款、UDN、聯合報、張淑芬'
        },
      ]
    }
  },   
  /**
   * 變數:
   *  - showMessageBoard: (true or false) 是否顯示留言區
  */
  data: function () {
    return {
      location: 'https://udn.com/upf/newmedia/2018_data/tsmccharity/news/index.html',
      stickyAnchors: true,
      useOverflow: false,
      indexMob1: indexMob1,
      indexWeb1: indexWeb1,
      indexMob2: indexMob2,
      indexWeb2: indexWeb2,
      tsmcLogo: tsmcLogo,
      newsvideo: newsvideo,
      newsphoto: newsphoto,
      titleimg: titleimg,
      titleimgmob: titleimgmob,
      news_video_poster: news_video_poster,
      showMessageBoard: false,
      sendData: null,
      page: 1,
      isFBReady: false,
      pageList: [],
      coverNew:{
        title: '除了捐款',
        subTitle: '台積電還做了哪些事？',
        text: '上月6日花蓮發生強震，台積電慈善基金會董事長張淑芬於災害發生後第一時間親臨現場訪視災民，並研擬出台積電對於此次災後復原協助方向...',
        link: 'https://udn.com/news/story/11809/3040848',
        img: img5,
        ArticleTitle: "除了捐款 台積電還做了哪些事？",
        ArticleTime: '2018-03-20',
        Article: [
          {
            'src': CoverNewsMedia,
            'imgsay': '圖為花蓮強震過後，台積電志工團隊進駐，為花蓮市弱勢家戶修繕受創的家園。聯合報系資料照片'
          },
          '上月6日花蓮發生強震，台積電慈善基金會董事長張淑芬於災害發生後第一時間親臨現場訪視災民，並研擬出台積電對於此次災後復原協助方向。對比花蓮縣政府善款使用方式遭受批評，受災戶大讚「好險有台積電」，指出台機電對受災戶的協助最直接快速。館長陳之漢收回捐給花蓮縣政府的捐款後，發文表示自己將把100萬善款改捐給台積電。',
          '台積電對於災民協助親力親為，讓館長陳之漢決定將收回的款項改捐台積電。網友贊同回應「台積電真的很甘心，高雄氣爆他們也幫很多忙」，紛紛留言稱讚台積電，表示當初高雄氣爆發生時，張淑芬甚至親自做義工，台積電也協助疏通便道、修繕屋宅、清理積水等，「台機電是台灣最後的良心」。',
          '花蓮縣政府將約20億善款中的8億用於紓困石材、觀光業之舉惹議，館長陳之漢要求退款後決定將善款捐給台積電協助災民。過去莫拉克風災、高雄氣爆與八仙塵暴等災害發生時，台積電皆以最有效率的方式協助救災，讓民眾大讚「謝謝台積電」。',
          '花蓮地震發生當時張淑芬恰好人在花蓮，因此在事發後她親自到現場，強調台積電會以不同方式救災，包括發起募款、提供人力協助、協助災後復原等。台積電表示不與其他企業比較捐錢數目，而是以最實際的行動幫助災民。',
          '2014年高雄氣爆救災當時，張忠謀曾說「台積電在921地震、88風災時捐了很多錢，但1年後發現捐款還沒用完，受捐單位也不知道如何用錢」，「捐錢的企業捐完之後就覺得盡完責任，但能夠出點力加上錢花在刀口上，這樣最好」。因此張忠謀與張淑芬兩人親臨災區，了解災民需求，再評估如何將錢花在刀口上。',
          '花蓮地震災後許多地方傳出缺水問題，台積電立即調派10部水車協助，並派遣搬運工幫助災民清理家園。根據台積電擬定的救災三階段方案，農曆年前台積電支援修補水庫，並建立與啟動募款及人力志工招募平台；農曆年後，台積電仿效高雄氣爆的心靈輔導營，帶領災區兒童離開災區；並對政府專業判定的非結構受損住宅，協助修補受損的房舍。有網友在網上發文分享台積電在最短的時間內進場施工、整理災區，協助了200多戶的社區居民，讓他們有家住，不會流落街頭，大讚台積電的高效率。'
        ]
      },
        newslist: [
        {
          title: '張淑芬關懷淹水校 贈冰箱、置物櫃、水閘門',
          text: '台積電慈善基金會董事長張淑芬日前親自帶隊，前往823水災區的台南市北門區錦湖國小，除致贈3台電冰箱...',
          link: 'https://udn.com/news/story/12440/3341186',
          img: img17,
          ArticleTitle: '張忠謀妻張淑芬豪送淹水校 3冰箱20置物櫃還有水閘門',
          ArticleTime: '2018-08-31',
          Article: [
            '台積電慈善基金會董事長張淑芬親自帶隊，今天到823水災區的台南市北門區錦湖國小進行關懷活動，除致贈3台電冰箱、20個置物櫃，更換㕑房爐心，不致於營養午餐斷炊，還允諾更換鋁合金材質的水閘門。',
            '錦湖國小校長周志強表示，學校這次淹水約90至100公分，水深及腰，教室全部進水，財損有資訊設備及電器用品、碎紙機等，損失80萬以上，感謝各界的關心。',
            '周志強說，88水災時，台積電就來幫忙，致贈置物櫃，後來又有不鏽鋼的高腳架，淹大水時可以墊高，的確少了很多災情；張淑芬笑稱「台積電還是有用的」；周志強表示，台積電令人感動。',
            '張淑芬在到錦湖國小之前，還慰問安南區受災的員工，她說，這次水災讓她學會在家安裝水閘門擋水，提供給政府參考，還說救災，企業與政府一起做會更快。',
            '張淑芬還提醒周志強，要教小朋友記住在困難時有很多團體幫助，將來長大也要幫助別人，張志強表示持續在做。',
            {
              'src': ArticleMedia_15_1,
              'imgsay': '台積電慈善基金會董事長張淑芬（右）關心小朋友吃營養午餐。記者吳政修/攝影'
            },
            {
              'src': ArticleMedia_15_2,
              'imgsay': '錦湖國小校長周志強（左二）拿水災照片給台積電慈善基金會董事長張淑芬（左一）看。記者吳政修/攝影'
            }
          ]
        },        
        {
          title: '張淑芬分享微孝與愛 籲企業助花蓮震災戶',
          text: '張淑芬帶著台積電員工「把愛送出去」，也盼企業界一起參與，她把這個想法與業界分享，籲1個月1萬元認養1戶...',
          link: 'https://udn.com/news/story/7327/3122071',
          img: img15,
          ArticleTitle: '張淑芬分享微孝與愛 籲企業助花蓮震災戶',
          ArticleTime: '2018-05-03',
          Article: [
            {
              'src': img15,
              'imgsay': '內政部、財團法人台積電慈善基金會和高雄市政府共同主辦「微孝無所不在．企業推動孝行推廣分享會」高雄場，充滿感人氣氛。'
            },
            '內政部、財團法人台積電慈善基金會和高雄市政府共同主辦「微孝無所不在．企業推動孝行推廣分享會」高雄場，台積電慈善基金會董事長張淑芬分享把孝道融入教科書內，讓「孝」成為理所當然，並把對長輩的愛進一步送出去關懷社會弱勢，她並呼籲企業界共同關心花蓮震災中需要幫助的低收弱勢，以每個月1萬元共同「認養」這些弱勢者一年，幫助他們度過艱難。',
            '「微孝無所不在．企業推動孝行推廣分享會」今天下午在高雄市政府鳳山行政中心1樓多媒體視聽會議室進行，張淑芬和內政部長葉俊榮、國家發展委員會主委陳美伶、高雄市代理市長許立明、日月光營運長吳田玉、台積電慈善基金會副執行長彭冠宇等與會，現場也坐滿前往聆聽的民眾。',
            '高雄石化氣爆之後，台積電慈善基會號召許多企業共同為災戶修繕房屋、關懷弱勢，重建工作告一個段落後，張淑芬看到許多社會弱勢需要關懷，許多社會倫理問題令人憂心，於是決定做孝道，從台南到全國，讓內政部與教育部合作，把孝道放進教科書裡，讓「孝」是理所當然的倫理成為社會氛圍，然後往前跨一步，推動「把愛送出去」。',
            '「弱勢和獨居老人需要的不見得是錢，他們需要的是愛。」張淑芬說，關懷獨居老人的經驗裡，看到老人家平時無家人關懷，往生之後親戚才出現，這讓她決心推孝道、要把「愛」送出去。',
            '這次花蓮震災，張淑芬和台積電員工到花蓮幫助受災戶，她說助人要先把自己的看法拉高上來，看自己的能力能做些什麼，她拉高來看，知道能做的是低收入戶，因此重點放在此，另透過團購、鼓勵台積電員工到花蓮旅遊等方式幫助當地民眾。',
            '張淑芬不只帶著基金會、台積電員工「把愛送出去」，也期盼企業界一起參與，她前天把這個想法與企業界的朋友分享，就以1個月1萬元「認養」1戶，可以是幾個人一起認養，一起送愛給需要幫助的人。',
            '許立明認同張淑芬的想法，認為高雄的企業人士一定願意投入，高市府也會盡力協助。',
            '內政部長葉俊榮談到「孝」時，分享一些生活上的小故事，他認為孝不一定要犧牲很多，大家要快樂行孝，行孝也要生活化，母親的活動不是孝的聚焦，生活中隨時行孝、了解父母長輩真正的需求更重要。'
          ]
        },
        {
          title: '產官攜手微孝傳愛 台積電籲認養弱勢者',
          text: '內政部長葉俊榮說，從小學就教唱媽媽的歌，但感受「媽媽的味道」大家都該及時行孝，讓孝順生活化成為一種社會價值...',
          link: 'https://udn.com/news/story/7240/3122030',
          img: img16,
          ArticleTitle: '產官攜手微孝傳愛 台積電籲認養弱勢者',
          ArticleTime: '2018-05-03',
          Article: [
            '無孝就無德、百善孝為先是亙古不變的孝行觀念，但是隨著時代演變，很多人忙得無暇陪同父母、和爺爺奶奶也變得疏離，內政部長葉俊榮分享他用哼唱媽媽的歌感受媽媽的味道。',
            '內政部攜手高市府、台積電慈善基金會合辦「微孝無所不在」企業推動孝行分享會，今天在高雄市鳳山行政中心多媒體視聽會議室舉行。',
            '葉俊榮、國發會主委陳美伶、高雄市代理市長許立明、台積電慈善基金會董事長張淑芬等人都出席活動，宣傳孝行，也有學校分享教孝的感人故事。',
            '葉俊榮致詞指出，從小學唱媽媽的歌，如今只要有機會就會哼唱媽媽的歌，感受「媽媽的味道」鼓勵大家及時行孝，讓孝順生活化也成為一種社會價值。',
            '平常忙於工作，許立明談到孝順，語帶哽咽的自覺愧疚，沒有太多的時間陪同父母，盼此活動可以讓不孝的人有機會檢討。',
            '張淑芬推廣微孝，也談到台積電參與高雄氣爆、花蓮賑災的救援行動。她分享了地震震垮老伯伯家的屋頂、雨水濕透了他的被褥，因為慈善會的協助，老伯重展笑顏，讓團隊感受到被需要與社會的溫情。',
            '她呼籲企業響應並認養弱勢家庭，即便每個月新台幣一萬元，也能成為支撐弱勢者活下去的力量。',
            '張淑芬鼓勵企業及善心者用愛做為揮灑人生的彩筆，讓生命的畫布更為精彩絢麗。',
            '許立明說高雄市感謝台積電在氣爆時相挺、疼惜，他相信很多企業都會響應這個善行義舉。'
          ]
        },
        {
          title: '台積志工動起來 要給花蓮災民安全的住所',
          text: '針對本月6日深夜花蓮發生規模6.0地震所造成的傷害，台積電12日公布震災後協助復原方案，共同與民眾重建家園...',
          link: 'https://udn.com/news/story/7328/2982811',
          img: img1,
          ArticleTitle: '台積志工動起來 要給花蓮災民安全的住所',
          ArticleTime: '2018-02-12',
          Article: [
            {
              'src': ArticleMedia_1,
              'imgsay': '台積電表示，台積公司慈善基金會董事長張淑芬於事發後第一時間親臨受創地區，感同身受當地區民面對天災無情的驚懼擔憂。圖／本報資料照片'
            },
            '台積電12日宣布，針對本月6日深夜花蓮地區發生規模6.0地震所造成的傷害，台積慈善基金會董事長張淑芬於事發後第一時間前往花蓮受創地區，感同身受當地區民面對天災無情的驚懼擔憂。',
            '張淑芬在勘察花蓮災區後有感而發地表示：「雖然家倒了，只要人安在，未來仍有無限希望。如同在襁褓中熟睡的小嬰兒，雖然歷經了這可怕的一刻，然而，若我們給予足夠的關懷與愛，相信必能堅強平安長大，未來仍有無限的可能，花蓮，加油！」',
            '台積電以過去協助莫拉克風災、高雄氣爆與八仙塵爆的第一線經驗，研擬出台積公司對此次花蓮地震的災後復原協助方向，希望集結公司同仁與其他企業的力量，在政府的救災工作之外，以企業最直接、有效率的方式，先協助居民得以有安全的住所後，再進一步協助花蓮地區的觀光產業重建。',
            '台積公司花蓮地震災後協助復原方案包括：',
            '1.號召該公司同仁發起募款，透過內部「i公益平台」集結款項，並邀集志工社夥伴提供人力協助；',
            '2.邀請台灣半導體設備暨材料協會（SEMI Taiwan）的會員企業，以及台積公司產業鏈的企業一同參與災後復原。上述資源將由台積電慈善基金會統籌規劃，針對各個階段不同的需求，給予受創地區居民必要的協助。',
            '台積電表示，將本著善盡企業社會責任的初衷，在瞭解政府整個救災、重建的規劃藍圖後，挺身而出，做為政府的救災的夥伴，共同與民眾重建家園、協助他們回歸正常生活。'
          ]
        },
        {
          title: '台積電發起募款 幫助花蓮災民、觀光重建',
          text: '台積電今天宣布，針對花蓮大地震所造成的傷害，以過去協助莫拉克風災、高雄氣爆與八仙塵爆的第一線經驗...',
          link: 'https://udn.com/news/story/11809/2982504',
          img: img2,
          ArticleTitle: '台積電發起募款 幫助花蓮災民、觀光重建',
          ArticleTime: '2018-02-12 ',
          Article: [
            {
              'src': ArticleMedia_2,
              'imgsay': '台積電表示，台積公司慈善基金會董事長張淑芬於事發後第一時間親臨受創地區，感同身受當地區民面對天災無情的驚懼擔憂。'
            },
            '台積電今天宣布，針對花蓮大地震所造成的傷害，以過去協助莫拉克風災、高雄氣爆與八仙塵爆的第一線經驗，研擬出台積電的災後復原協助方向，集結公司同仁與其他企業的力量，在政府的救災工作之外，以企業最直接、有效率的方式，先協助居民得以有安全的住所後，再進一步協助花蓮地區的觀光產業重建。',
            '台積電表示，台積公司慈善基金會董事長張淑芬於事發後第一時間親臨受創地區，感同身受當地區民面對天災無情的驚懼擔憂，她表示，「雖然家倒了，只要人安在，未來仍有無限希望。」就如同在襁褓中熟睡的小嬰兒，雖然歷經了這可怕的一刻，然而，若我們給予足夠的關懷與愛，相信必能堅強平安長大，未來仍有無限的可能，「花蓮，加油」。',
            {
              'src': ArticleMedia_2_1,
              'imgsay': '台積電今天宣布，針對花蓮大地震所造成的傷害，將集結公司同仁與其他企業的力量，先協助居民得以有安全的住所。'
            },
            '台積電針對花蓮地震災後協助復原方案包含，號召公司同仁發起募款，透過內部「i公益平台」集結款項，並邀集志工社夥伴提供人力協助；邀請台灣半導體設備暨材料協會（SEMI Taiwan）的會員企業，以及台積公司產業鏈的企業一同參與災後復原。',
            '這些將由台積電慈善基金會統籌規劃，針對各個階段不同的需求，給予受創地區居民必要的協助。',
            '台積電說明，公司本著善盡企業社會責任的初衷，在瞭解政府整個救災、重建的規劃藍圖後，挺身而出，做為政府的救災的夥伴，共同與民眾重建家園、協助他們回歸正常生活。'
          ]
        },
        {
          title: '台積電員工與老人圍爐 捐善款助弱勢',
          text: '台積電慈善基金會志工，今帶著幼兒園小小志工們到新竹市秋霖園老人日照中心拜早年圍爐，並捐出善款助弱勢...',
          link: 'https://udn.com/news/story/7324/2977967',
          img: img3,
          ArticleTitle: '台積電員工與老人圍爐 捐善款助弱勢',
          ArticleTime: '2018-02-09',
          Article: [
            {
              'src': ArticleMedia_3,
              'imgsay': null,
            },
            '台積電慈善基金會多位志工，今天帶著多位幼兒園小小志工們到新竹市秋霖園老人日照中心拜早年，與長輩們一起圍爐用餐，並捐出善款助弱勢家庭，長輩們開心直呼「好溫暖」。',
            '台積電晶圓三廠廠長汪業傑受訪表示，天主教新竹社會服務中心每年為弱勢家庭募集愛心年菜暨關懷服務經費，台積電慈善基金會已連續5年發起捐款募集活動，在同仁們熱心響應下，希望能讓弱勢家庭的圍爐年菜有著落。',
            '汪業傑指出，今年動員許多單位同仁愛心，共募得新台幣69萬8800元，基金會也加碼捐贈裝有帽子、圍巾等保暖物資的「暖暖包」，希望能在歲末寒冬中，為弱勢家庭送上溫暖愛心年菜，平安過好年。',
            '天主教新竹社會服務中心執行長楊銀美受訪說，社服中心在地深耕50年，除了秋霖園老人照護中心，還有失能長者、獨居老人的居家服務外，也長期投入弱勢家庭服務工作，盼讓他們都能重獲信心，更有能力脫離困境。',
            '台積電慈善基金會志工與新竹縣五峰鄉聖心幼兒園的小小志工，今天一起到天主教新竹社服中心的秋霖園老人日間照顧中心，帶來簡單卻充滿溫暖的表演，用歡樂歌聲向長輩們拜早年。',
            '午間，志工們也與秋霖園的長輩一起圍爐，主動添飯、夾菜，大家在餐桌上聊天，讓寒天中的午餐變得更熱情，不少長輩開心直呼「今天圍爐變得好熱鬧，吃起飯來感覺特別溫暖。」'
          ]
        },
        {
          title: '水餃配雞湯 「中部愛互聯」關懷老人',
          text: '「中部愛互聯」昨在台中公園辦活動幫助獨居老人，有近百名老人參與；與會的台積電慈善基金會董事長張淑芬說...',
          link: 'https://udn.com/news/story/7325/2974670',
          img: img4,
          ArticleTitle: '水餃配雞湯 「中部愛互聯」關懷老人',
          ArticleTime: '2018-02-07',
          Article: [
            {
              'src': ArticleMedia_4,
              'imgsay': '台積電慈善基金會董事長張淑芬（左二）昨參與「中部愛互聯」活動，關懷獨居老人。'
            },
            '「中部愛互聯」昨在台中公園辦活動幫助獨居老人，有近百名老人參與；與會的台積電慈善基金會董事長張淑芬說，她在花蓮停留兩天，前晚剛離開花蓮，2小時後就強震，她獻唱一曲佛教歌曲，為長者、為花蓮祈福。',
            '由鉅建設林增連基金會董事長林嘉琪說，台灣獨居長者照護需求大增，基金會與中國醫大附設醫院合作，響應張淑芬發起的「中部愛互聯」關懷獨居老人平台，已第4年，可照顧中部300多名獨居長者，希望平台力量加大，增加照顧能量。',
            '張淑芬、林嘉琪、中國附醫院長周德陽、副院長楊麗慧等為活動揭開序幕，與獨居長者包水餃，轉動祈福轉輪。',
            '中國附醫副院長楊麗慧說，考量老人身體及生活機能，改由志工幫忙包水餃，大家一起包起象徵「五福臨門」的五顏六色水餃，搭配雞湯，讓老人感受社會溫暖。'
          ]
        },
        {
          title: '台積電董娘籲復興孝道　教部允發展教材',
          text: '張淑芬今天受邀演講「復興孝道的起心動念」，她提到社會中有許多獨居老人，缺乏親人照顧，因此希望各界一同重視「孝道」...',
          link: 'https://udn.com/news/story/6885/2605338',
          img: img5,
          ArticleTitle: '台積電董娘籲復興孝道　教部允發展教材',
          ArticleTime: '2017-07-26',
          Article: [
            {
              'src': ArticleMedia_5,
              'imgsay': null
            },
            '全國教育局處長會議今天在新竹縣登場，台積電慈善基金會董事長張淑芬受邀演講，呼籲復興孝道精神。教育部承諾發展教材，並在全國選出8所中小學擔任種子學校。',
            '張淑芬今天受邀演講「復興孝道的起心動念」，她提到社會中有許多獨居老人，缺乏親人照顧，因此希望各界一同重視「孝道」的精神，並從體制內做起，從學校就要加強教育。',
            '張淑芬提到，最近看到一份教育部的公文，擬把孝道放入「教綱」內，讓她感動到想哭。教育部國教署長邱乾國會後受訪表示，並非要納入十二年國教課綱，而是發展與孝道有關的教案、教材和教學資源。',
            '邱乾國說，首批會在全國選出8所國中小，漸次推動孝道教材，可結合正式課程，也可透過活動方式推廣。'
          ]
        },
        {
          title: '台積電捐車捐油　為熱便當開路進偏鄉',
          text: '罹患癌症及三高的藍大姊，曾是門諾基金會送餐的個案，原以為自己的人生就是這般過下去，卻在門諾基金會社工的鼓勵下...',
          link: 'https://udn.com/news/story/7328/2836239',
          img: img6,
          ArticleTitle: '台積電捐車捐油　為熱便當開路進偏鄉',
          ArticleTime: '2017-11-23',
          Article: [
            {
              'src': ArticleMedia_6,
              'imgsay': null
            },
            '罹患癌症及三高的藍大姊，曾是門諾基金會送餐的個案，原以為自己的人生就是這般過下去，卻在門諾基金會社工的鼓勵下，開始騎著腳踏車為附近的長輩送餐，她從接受幫忙者到幫助者，讓愛循環不息。台積電慈善基金會號招300多名員工募集100萬，將挹注在偏鄉送餐志工的交通費補助，鼓勵像藍大姊這樣的個案站出來，今天在花蓮門諾基金會舉辦捐贈儀式。',
            '台積電的員工在2015集資208萬元，捐贈門諾醫院2輛保溫送餐車，讓溫熱的餐點可以送抵最偏鄉的獨老家中，2年來，每輛送餐車跑了十幾萬公里，每個月送餐約4000份。台積產品發展副處長林志賢說，一直在思考除了捐車之外，還怎麼能做得更好更完善。',
            {
              'src': ArticleMedia_6_8,
              'poster': ArticleMedia_6_9,
            },
            '而門諾基金會以藍大姊個案，向台積電提出「手心翻轉」計畫，鼓勵更多被幫助的人站出來幫助他人，而這計畫得到公司內很大的迴響，短短2個星期內，就有332名員工募集到100萬元，要贊助這個計畫，讓曾受過幫助的朋友，有機會、有能力來幫助更需要的朋友，讓愛繼續循環。',
            '57歲的藍大姊每天都騎著腳腳踏車，為附近的長輩送餐，還不忘親切地跟長輩們寒暄問暖，讓阿公阿嬤「揪感心」，每天殷切的盼她來到。送餐守護中心組長吳柏宏表示，藍大姊的丈夫早年離世，膝下無子女，本身罹癌、有三高又曾中風，在4年前由縣府轉介接受門諾基金會的送餐服務。藍大姊因找工作不易，思想十分負面，認為自己一輩子就是得要接受政府幫忙。',
            {
              'src': ArticleMedia_6_7,
              'imgsay': '台積產品發展功能組織副處長林志賢(左)、台積產品發展功能組織資深處長黃源昌(右)，探訪與個案。圖／門諾基金會提供'
            },
            {
              'src': ArticleMedia_6_4,
              'imgsay': '台積產品發展功能組織副處長林志賢、副處長林志豐、部經理洪偉碩、副處長陳怡旭、資深處長黃源昌(左起)，前往探視個案。圖／門諾基金會提供'
            },
            '然而在社工的鼓勵下，從今年初起，藍大姊開始為附近個案送便當，從一開始膽怯，到現在比一般社工更能關心個案，甚至把長輩當成父母般的照顧。她時常掛在嘴邊的就是「平平都是甘苦人，所以更能體會」。',
            '吳柏宏說，以前她是拿了便當默默離開，現在能滔滔不絕的分享送餐故事，看到她因付出而變得開朗，人生觀也不在灰暗了，真值得高興!',
            '「我想跟全部的員工說，我以他們為傲!」台積電慈善基金會董事長張淑芬表示，因為員工的自動自發發作公益，為社會、社會弱勢做更多的事，也謝謝門諾照顧這些老人。',
            {
              'src': ArticleMedia_6_2,
              'imgsay': '台積電的員工在2015集資208萬元，捐贈門諾醫院2輛保溫送餐車，讓溫熱的餐點可以送抵最偏鄉的獨老家中，今天再度捐贈100萬，挹注在偏鄉送餐志工的交通費補助。'
            },
            {
              'src': ArticleMedia_6_5,
              'imgsay': '台積電慈善基金會再度捐贈100萬，挹注在偏鄉送餐志工的交通費補助。',
            },
            {
              'src': ArticleMedia_6_3,
              'imgsay': '台積電慈善基金會再度捐贈100萬，挹注在偏鄉送餐志工的交通費補助。'
            },
            {
              'src': ArticleMedia_6_6,
              'imgsay': '台積電慈善基金會董事長張淑芬(中)以及台積產品發展資深處長黃源昌(右)代表致贈給門諾基金會董事長林久恩(左)。'
            },
            '在溫馨的捐贈儀式之後，台積產品發展功能組織資深處長黃源昌更率領台積產品發展功能組織團隊，與門諾基金會執行長邱燕銀一起去水璉做關懷志工，也帶了些物資來給3名長輩。',
            '72歲獨居的鄭阿公，因為退化性關節炎生活自理不便，平常也鮮少有人來訪，今天看到這麼多人來，讓他感動落淚；另1名76歲與孫女同住的黃阿公因為頸椎曾摔傷導致行動受限還有些重聽，阿公知道今天有客人來訪，早早就在客廳等待，等到遠到而來的客人。',
            '送餐志工小娟也跟台積產品發展功能組織的伙伴分享，幫門諾基金會送餐已經3、4年，在送餐工作中她體會送餐不只是送一個便當而已，而是一份對長者的溫暖。'
          ]
        },
        {
          title: '台積電永續經營起步　張忠謀帶頭宣示',
          text: '台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會...',
          link: 'https://udn.com/news/story/7240/2633448',
          img: img7,
          ArticleTitle: '台積電永續經營起步　張忠謀帶頭宣示',
          ArticleTime: '2017-08-09',
          Article: [
            {
              'src': ArticleMedia_7,
              'imgsay': null
            },
            '台積電專案經理孫讀文今日表示，台積電在企業永續經營上率先起步，是因董事長張忠謀帶頭宣示，台積電目前已成立節能委員會，要求製程機台廠商創新節能設計，並在確保安全無虞之下，落實於所有廠區。',
            '安永聯合會計師事務所今日舉辦「綠色工廠與企業社會責任之推動」研討會，邀請台積電風險管理暨工安環保衛生處專案經理孫讀文分享台積電善盡企業社會責任與邁向綠色工廠的經驗。',
            '孫讀文指出，台積電董事長張忠謀的公司治理哲學最在乎的就是「誠信」，身為晶圓代工的台積電絕對不與客戶競爭，並與客戶維持互信、雙贏且長期的合作關係。',
            '孫讀文說，台積電不但善盡企業社會責任，也致力企業永續經營，發展綠色工廠、取得綠建築認證、廢棄物再生、廠區回收水再利用等。',
            '因應政府「溫室氣體減量法」施行，台積電成立公司碳管理平台，進行節能減碳、推動碳權管理，更成立節能委員會，要求製程機台廠商創新節能設計，並在確保安全無虞之下，落實於所有廠區。',
            '孫讀文說，如今台積電與產官學合作推動綠色工廠評估規範，以自身經驗協助更多製造業者建立永續經營思維。',
            '安永會計師曾于哲指出，企業社會責任不再只是被動的法規遵循，而是已經轉變為積極主動的企業永續思維；在追求經濟績效持續增長同時，也應關注環境與社會發展，實踐企業的社會責任。'
          ]
        },
        {
          title: '台積電送暖 助學童延續布農族文化',
          text: '學生人數不到百人，距離平地市區車程約1個半鐘頭的南投縣信義鄉雙龍國小，是地處偏鄉的布農族特色學校...',
          link: 'https://udn.com/news/story/6898/2936746',
          img: img8,
          ArticleTitle: '台積電送暖 助學童延續布農族文化',
          ArticleTime: '2018-01-18',
          Article: [
            {
              'src': ArticleMedia_8,
              'imgsay': '台積電晶圓十五Ｂ廠邀請南投信義鄉雙龍國小學童到廠區參觀、互動。'
            },
            '學生人數不到百人，距離平地市區車程約1個半鐘頭的南投縣信義鄉雙龍國小，是地處偏鄉的布農族特色學校，長期透過合唱與射箭運動，讓學生可以學習、延續布農族文化。',
            '雙龍國小校長伍福義表示，雙龍國小長期致力於學生的合唱教學，並與布農族的八部合音相結合；射箭運動則是與布農族狩獵文化相融合。但因地處偏遠，家長工作機會不多，經濟較為弱勢，學校的合唱台、樂器皆破舊損壞，射箭運動的器材也不足，影響學生教學。',
            '台積電慈善基金會與台積電晶圓十五B廠因長期關懷雙龍部落等偏鄉地區，在知道雙龍小學的需求後，購買了相關設備器材，幫助孩童們日常使用，充實音樂與體育的發展課程。',
            {
              'src': ArticleMedia_8_2,
              'imgsay': '台積電慈善基金會與台積電晶圓十五Ｂ廠協助信義鄉雙龍國小購買、修復音樂教學與射箭運動器材。'
            },
            '台積電晶圓十五B廠去年9月安排雙龍國小的孩童到社教機構校外教學，並前往台積電晶圓十五B廠廠區參觀、表演與員工互動。過程中，台積電晶圓十五B廠了解雙龍國小教育設施器材耗損，在台積電慈善基金會的協助下，台積電晶圓十五B廠副處長鄭祥瑞，率領廠區志工團隊致贈學校相關器材，希望讓孩童的活動練習更為便利。',
            '鄭祥瑞指出，愛是在需要的人身上看見自己的責任，偏鄉孩子的教育不能被怠慢。聽著雙龍的孩童們，唱出布農族象徵豐收與活力的歌謠，純淨的天籟與快樂的演唱，實在感動人心。他承諾，台積電晶圓十五B廠將持續守候這群純樸的孩子，讓孩子們的笑容持續綻放。'
          ]
        },
        {
          title: '台積電：企業別怕別急　我們一起挺過去',
          text: '台積電慈善基金會董事長張淑芬8日在與教育部國教署合辦的「把愛送出去 — 暖家傳孝」記者會上，帶領現場的教育部官員...',
          link: 'https://udn.com/news/story/7240/2975434',
          img: img9,
          ArticleTitle: '台積電：企業別怕別急　我們一起挺過去',
          ArticleTime: '2018-02-08',
          Article: [
            {
              'src': ArticleMedia_9,
              'imgsay': null,
            },
            '台積電慈善基金會董事長張淑芬8日在與教育部國教署合辦的「把愛送出去 — 暖家傳孝」記者會上，帶領現場的教育部官員、教師、學生等，共同為花蓮受災民眾祈福，也鼓勵大家不要害怕，要勇敢面對。',
            '張淑芬透露，花蓮地震當時她人就在花蓮，腳底下感受到一陣陣的搖晃，甚至還能感覺到地面下有一股股熱氣傳來。當時她甚至想，「就這樣死掉也沒關係」。',
            {
              'src': ArticleMedia_9_2,
              'imgsay': null
            },
            '不過，她離開花蓮，就開始想可以為花蓮地震做些什麼。張淑芬呼籲，政府已經全力在救災，但後續的復健與需要幫助的事情很多、很久，希望大家先看看，看到政府做不足的再進去，讓力量、資源可以被更好的運用。'
          ]
        },
        {
          title: '全台最高托老中心　台積董娘揭牌',
          text: '全台最高海拔「中部愛互聯雙龍日托中心」揭牌成立，讓長輩白天不致獨守家中，家屬得以安心工作。衛福部長陳時中...',
          link: 'https://udn.com/news/story/7325/2683167',
          img: img10,
          ArticleTitle: '全台最高托老中心　台積董娘揭牌',
          ArticleTime: '2017-09-05',
          Article: [
            {
              'src': ArticleMedia_10_2,
              'imgsay': '雙龍部落日托中心成立，與會人員穿上布農族傳統服飾主持揭牌儀式。'
            },
            {
              'src': ArticleMedia_10,
              'imgsay': '雙龍日托中心是全台海拔最高的老人日照據點。'
            },
            '南投縣信義鄉「中部愛互聯雙龍日托中心」是全台最高海拔的老人日托中心，上午在衛福部長陳時中見證下，結合中國醫藥大學附設醫院、台積電慈善基金會董事長張淑芬、林增連慈善基金會及老五老基金會，共同在信義鄉雙龍村正式揭牌成立，讓長輩白天不致獨守家中，家屬得以安心工作。',
            '衛福部長陳時中說，自己換乘坐了兩小時車才抵達雙龍部落，才發現這裡真是「好山、好水、好遠、好辛苦」的偏鄉，感謝大家因為愛，將彼此連結起來，南投縣副縣長陳正昇指出，信義鄉為台灣醫療資源最缺乏也最弱勢的地區之一，青壯年外流嚴重，高齡人口所占比例持續上升，受到生活及飲食習慣影響，居民的慢性病罹患率遠高於平地居民。',
            {
              'src': ArticleMedia_10_4,
              'imgsay': '衛福部長陳時中上午來到信義鄉雙龍部落見證雙龍日托中心的揭牌儀式。'
            },
            {
              'src': ArticleMedia_10_3,
              'imgsay': '台積電慈善基金會張淑芬（左）串起中部愛互聯平台一同提供老人照護服務。'
            },
            '中國醫藥大學附設醫院院長周德陽說，中國附醫自1997年起，便信義鄉偏遠山區居民整合性的醫療照護，全力守護鄉民健康達21年，與社區醫療群、政府單位及公益團體，合力推動各項醫療保健服務，同時深耕社區老人健康營造，包括24小時醫療、到宅醫療與到宅復健等，深獲居民信賴，就醫病人的整體滿意度高達94%。',
            '台積電慈善基金會董事長張淑芬則表示，為了串聯社會上愛的力量，2014年創辦「愛互聯」關懷平台，整合中國附醫及老五老基金會成立了「中部愛互聯」，以具體行動給予獨居或弱勢的年長者溫暖照護，白天時將失能、失智長輩接送到日間照顧中心， 在這裡接受照顧服務，參與復建、文康休閒活動，與人交流互動，延緩退化。'
          ]
        },
        {
          title: '倡孝道　台積電勵企業一起「微孝」',
          text: '「溫暖的家，就是社會更好的起點」。台積電慈善基金會近年致力推廣「孝道」，去年與國教署合作發展教材...',
          link: 'https://udn.com/news/story/7266/2962925',
          img: img11,
          ArticleTitle: '倡孝道　台積電勵企業一起「微孝」',
          ArticleTime: '2018-02-01',
          Article: [
            {
              'src': ArticleMedia_11,
              'imgsay': '台積電慈善基金會近年致力推廣「孝道」，今與內政部、台南市政府攜手舉辦「微孝，無所不在」孝行推廣分享會，從各層面為社會注入「孝」的暖流。'
            },
            '「溫暖的家，就是社會更好的起點」。台積電慈善基金會近年致力推廣「孝道」，去年與國教署合作發展教材，今再與內政部、台南市府攜手，邀集在地企業、校內教職員等舉辦孝行分享會，多管齊下，撒下「孝的種子」。',
            '內政部、台南市府與台積電慈善基金會，今在成功大學舉辦「微孝，無所不在」孝行推廣分享會。由台南代理市長李孟諺主持，與會的百餘人中，包括在地學校教職員、區公所職員，與台南在地企業如東陽實業、萬國通路等。',
            '台積電慈善基金會董事長張淑芬也親自到場，與在座企業分享台積電的孝道推行心路歷程。她表示，基金會過去在照顧獨居老人時，意識到「孝」不只是理念口號，更是一種感動、一種具體行動，是一個家的核心價值，呼籲每個人別吝嗇抱抱家中的長輩，「微孝，無所不在」。',
            '李孟諺表示，內政部每年舉辦的孝行獎選拔，由在地縣市府推薦家家戶戶的孝順事蹟，因此今天除了企業，更特地邀請第一線教職員、深入鄰里的區公所人員一同到場，共同啟動各自的「微孝行動」，也一同挖掘更多孝順楷模，感動與影響社會各個角落的家庭。'
          ]
        },
        {
          title: '台積電農村營　學童：以後飯要吃光光',
          text: '台積電舉辦農村生態教育營，參與的孩子說，以前讀過「誰知盤中飧，粒粒皆辛苦」，親身體會才真感受到食物...',
          link: 'https://udn.com/news/story/7326/2929432',
          img: img12,
          ArticleTitle: '台積電農村營　學童：以後飯要吃光光',
          ArticleTime: '2018-01-14',
          Article: [
          {
            'src': ArticleMedia_12,
            'imgsay': null
          },
          '台積電14A廠本周末舉辦農村生態教育體驗營，讓來自60名台積電家庭孩子體驗採玉米筍等農作物。孩子說，以前在書中讀過「誰知盤中飧，粒粒皆辛苦」，如今更體會能吃到食物不容易，笑說「以後東西都要吃光」。',
          '台積電14A廠資深廠長陳培宏表示，結合「孝道」與「生態」是台積電CSR的創舉，正是響應慈善基金會董事長張淑芬的理念，台積14廠的吉祥物是黑琵（音近Happy），即代表非常重視台南生態的黑面琵鷺，謝謝來自台積電60個家庭小朋友，也包含友好的光榮及新山國小孩子主動參加，相信「孝道Happy」會讓家庭更幸福、讓社會更美好。',
          {
            'src': ArticleMedia_12_2,
            'imgsay': null
          },
          {
            'src': ArticleMedia_12_3,
            'imgsay': '台積電14A廠舉辦農村生態教育體驗營，60名來自台積電家庭孩子本周末至台南白河、柳營採玉米筍、做窯烤披薩。'
          },
          '小學生鄭家茜說，雖然採玉米筍時鞋子都沾滿泥巴，但摘採過程很好玩，她從這兩天的體驗營了解食物取得不易，「以後吃東西都要吃光光！」',
          '學生李亭蓁說，自己採玉米筍、自己做窯烤披薩，都是第一次的體驗，希望以後還能參加類似活動，和媽媽一起去玩。',
          '台積電慈善基金會董事長張淑芬感動地說，看見南科同仁主動發起農村生態體驗營，其中又融入孝道的引導，真的很感動。她說，站在第一線關懷低收入戶獨居老人多年，看到傳統的倫理觀念漸漸式微，因此在2年前開始推動孝道，至今已有孝道教材推廣全國小學。',
          '張淑芬表示，台積人親自站出來，讓自己的孩子透過實地採收玉米筍等農作，加上動手準備食材，讓小孩去親近大自然、了解進而保護這個環境土地，也從悉心照料農作的過程中感受師長教養的用心，並非理所當然，很替他們喝采，「從自身做起永遠是體會最多」。'
          ]
        },
        {
          title: '祖父母節享天倫 張淑芬：家裡熱了更能愛別人',
          text: '「抱抱身邊的長輩，大聲說出我愛你！」教部舉辦「祖孫野餐趣」，吸引上百位民眾扶老攜幼參與，台積電慈善基金會...',
          link: 'https://udn.com/news/story/7266/2665652',
          img: img13,
          ArticleTitle: '祖父母節享天倫 張淑芬：家裡熱了更能愛別人',
          ArticleTime: '2017-08-26',
          Article: [
            {
              'src': ArticleMedia_13,
              'imgsay': '歡慶祖父母節，教育部今舉辦「祖孫野餐趣」活動，吸引民眾扶老攜幼到場共享天倫。'
            },
            '「抱抱身邊的長輩，大聲說出我愛你！」明是「祖父母節」，教育部今舉辦「祖孫野餐趣」，吸引上百位民眾扶老攜幼參與，積極推動「孝道倫理」的台積電慈善基金會董事長張淑芬，也到場共襄盛舉。',
            '台灣已邁入高齡化社會，教育部宣揚家庭親情倫理，將每年8月第4個周日，訂為「祖父母節」。祖父母節邁入第8年，今午後上百家庭，齊聚在內湖區大湖公園野餐共享天倫。',
            '台積電慈善基金會近年積極推廣「孝道」復興，日前教育部已正式發布公文，計畫發展相關教案、教材和教學資源，並選出8所「種子」國中小，將孝道結合正式課程、活動，讓倫理從小紮根。',
            {
              'src': ArticleMedia_13_2,
              'imgsay': '歡慶祖父母節，教育部今舉辦「祖孫野餐趣」活動，台積電慈善基金會董事長張淑芬，也到場共襄盛舉。'
            },
            '張淑芬表示，台積電對孝道的倡議，奠基在每次志工服務時，握著獨居老人的手、看見他們寂寞的眼神中對陪伴的渴望，讓她相信「孝道」是改變社會的起點，「只有家裡熱了，才有能力去愛別人」，因此決心讓這個16年前就從教科書裡廢除、書本裡學不到的事，重返校園、溫暖每個家庭。'
          ]
        },
        {
          title: '孝道X生態　親情澆灌小幼苗',
          text: '「我的快樂，是因為您的付出！」台積電生態志工今年首度將生態與孝道結合，由小幼苗的栽種與故事，讓員工孩子...',
          link: 'https://udn.com/news/story/7324/2785606',
          img: img14,
          ArticleTitle: '結合生態與孝道 台積電生態志工帶孩子體驗',
          ArticleTime: '2017-10-29',
          Article: [
            '「我的快樂，是因為您的付出！」台積電生態志工今年首度將生態與孝道結合，由小幼苗的栽種與故事，讓員工的孩子體會到父母親的愛，有孩童送上卡片、親吻父親「我愛您」，感動在場許多人。',
            '這場活動今天在台積電12廠P7舉行，共24個家庭加入活動，生態志工先導覽公司旁的生態池，緊接著讓孩童體驗無塵服，認識到父母親的工作環境，志工們還帶領孩子動手做卡片拓印，父母與孩子們攜手DIY胎苗製作，充滿許多歡笑。',
            '台積電慈善基金會董事長張淑芬、12廠廠長張宗生等人也參與活動，張淑芬表示，孝道其實就在生活當中，是很自然的，台積電志工們藉種樹苗讓孩子們了解，成長的過程是被父母親用心的照顧和澆灌，非常重要。',
            '張淑芬說，她長期推廣「孝道」的概念，認為教育要從小孩開始，台積電慈善基金會除了爭取體制內的改變，促使教育部發展相關教案、教材和教學資源外，另也積極在竹科推廣，目前透過竹科志工委員會號召，希望從單一公司的力量，推廣到科學園區來分享「孝道的愛」。',
            '台積電在新廠興建時，即保留大面積進行生態綠化工程，栽植多種原生樹種及誘鳥、誘蝶植物，提供動物棲息及覓食的場所，2012年成立台積生態志工，至今已接待34所偏鄉學校、千名孩童參訪。',
            '今天特別邀請員工的家庭近50人參訪，現場有小朋友把植栽獻給父母，還有孩童奉茶時，輕聲告訴爸媽「謝謝您愛我」，一席話讓在座的家長紅了眼眶，感動不已。張宗生表示，今天的活動試辦很成功，未來會在廠區繼續推廣孝道。',
            '「收到孩子的卡片很感動！」王姓工程師的妻兒參與活動，席間孩子認真做卡片、全家人一起手做胎苗，成為全家人美好的回憶。'
          ]
        },
      ],
    }
  },
  components: {
    HeadBar, ContentWrapper, EmbededVideo, Overlay, FBComment, Bodymovin, FadeInDown, Foot
  },
  created: function () {
    for (let i = 0; i < Math.ceil(this.newslist.length / 6); i++) {
      this.pageList.push(i + 1)
    }
    // 關閉留言區
    this.$eventBus.$on('closeOverlay', this.closeOverlay)
  },
  mounted: function () {
    // 載入 FB sdk
    this.isFBReady = Vue.FB != undefined
    setTimeout(function(){
      Vue.FB.XFBML.parse();
    }, 500)
    window.addEventListener('fb-sdk-ready', this.onFBReady)
  },
  beforeDestroy: function () {
    this.$eventBus.$off('closeOverlay')
    window.removeEventListener('fb-sdk-ready', this.onFBReady)
  },
  methods: {
    checkPage: function (p) {
      if(this.page === p) {
        return true
      } else {
        return false
      }
    },
    changePage: function (msg) {
      window.scrollTo(0, this.$refs.newsGroup.$el.offsetTop - 50);
      switch (msg) {
        case 'previous':
          if (this.page > 1) {
            this.page --
          } else {
            window.alert('no more')
          }
          break
        case 'next':
          if (this.page < Math.ceil(this.newslist.length / 6)) {
            this.page ++
          } else {
            window.alert('no more')
          }
          break
        default:
          this.page = msg
        break;
      }
    },
    showComments: function (index) {
      this.showMessageBoard = true
      this.useOverflow = true
      this.sendData = this.newslist[(this.page - 1) * 6 + index]
      ga("send", {
          "hitType": "event",
          "eventCategory": "News",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [觀看"+ this.newslist[(this.page - 1) * 6 + index].title +"] [頁面: 最新動態]"
      });
    },
    showCoverComment: function () {
      this.showMessageBoard = true
      this.useOverflow = true
      this.sendData = this.coverNew
      ga("send", {
          "hitType": "event",
          "eventCategory": "News",
          "eventAction": "click",
          "eventLabel": "[" + Utils.detectPlatform() + "] [" + document.querySelector('title').innerHTML + "] [觀看至頂文章] [頁面: 最新動態]"
      });
    },
    closeOverlay: function () {
      this.showMessageBoard = false
      this.useOverflow = false
    },
    onFBReady: function () {
      this.isFBReady = true
    },
    contentList: function (page) {
      let currentList = []
      const self = this
      const page_fixed = page - 1
      for(let i = page_fixed*6; i < page_fixed*6+6; i++){
        if(self.newslist[i] !== undefined){
          currentList.push(self.newslist[i])
        }
      }
      return currentList
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'GenJyuuGothic';
  src: url('~/static/fonts/GenJyuuGothicL-Monospace-Heavy.ttf');
}
.link{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom: solid 1px black;
}
@media screen and (min-width: 1024px){
  .link{
    border-bottom: none;
  }
  .links{
    animation: fadeInDown 432ms ease-out;
    animation-fill-mode: both;
  }
  @keyframes fadeInDown {
    from{
      opacity: 0;
      transform: translate(0, -30px);
    }
    to{
      opacity: 1;
      transform: translate(0, 0);
    }
  }
}
#news {
  line-height: 1.5;
  font-family: Arial, "微軟正黑體","Microsoft JhengHei", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  background: #e4c8a9;
}

@media screen and (max-width: 767px){
  .hidden-mobile{
    display: none!important;
  }
}

@media screen and (min-width: 768px){
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

h1.bigtitle.bigtitle {
  font-family: 'GenJyuuGothic';
  font-weight: bold;
  color: white;
}

.titleblock {
  position: relative;
  margin-top: 20px;
  background: white;
  border-radius: 3px;
  padding: 80px;
}
.title{
  font-size: 21px;
  line-height: 1.6;
  text-align: left;
}
@media screen and (min-width: 768px) and (max-width: 1023px){
  .titleblock {
    padding: 40px;
  }
}

.titleblock p {
  padding-top: 30px;
}

.titleblock button {
  position: absolute;
  margin-right: 80px;
  bottom: 0;
  right: 0;
  transform: translateY(50%);
}

@media screen and (max-width: 768px){
  img {
    width: 100%;
  }
}

.section {
  padding-top: 50px;
  margin-bottom: 50px;
}

.section.firstsection {
  padding-top: 80px;
  margin-bottom: 0;
  padding-top: 50px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .section {
    margin-bottom: 50px;
  }
  .section.firstsection {
    padding-top: 100px;
  }
  .newsvideo{
    transform: translateY(-5%);
  }
}

@media screen and (min-width: 1024px){
  .section {
    margin-bottom: 100px;
  }
  .section.firstsection {
    padding-top: 100px;
  }
  .newsvideo{
    transform: translateY(-5%);
  }
}

/* .covertransform{
  transform: translateY(80px);
} */

@media screen and (min-width: 1024px){
  .covertransform{
    transform: translateY(100px);
  }
}

.news{
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.newsblock{
  position: relative;
  background: white;
  width: 100%;
  margin: 0 0 60px 0;
  border-radius: 3px;
  padding: 20px;
  padding-bottom: 50px;
}

@media screen and (min-width: 768px) and (max-width: 1023px){
  .newsblock{
    width: 45%;
    margin: 50px 1.5%;
  }
}

@media screen and (min-width: 1024px){
  .newsblock{
    width: 32%;
    margin: 50px 0.6%;
  }
  .newsblock{
    p{
      line-height: 1.7;
    }
  }
}

.newsblock .title{
  padding: 20px 0;
}
.title{
  font-size: 26px;
  line-height: 1.5;
}
.newsblock button{
  position: absolute;
  bottom: 0;
  right: 10px;
  transform: translateY(50%);
}

img{
  width: 100%;
}

nav{
  text-align: center;
}

.pagination>li>a.page-link{
  background-color: transparent;
  border: 1px solid black;
  color: black;
  padding: 6px 12px;
  font-size: 16px;
  cursor: pointer;
}

.pagination>li>a.page-link.activePage{
  background-color: black;
  color: white;
}

.covertitle{
  width: 100px;
  height: 200px;

}

@media screen and (min-width: 1024px){
  .covertitle{
    width: 200px;
    height: 400px;
    margin: 20px 0;
  }
  .newsblock .title{
    font-size: 22px;
    padding-bottom: 10px;
  }
}

.btn {
  cursor: pointer;
  background-color: #333;
  line-height: 40px;
  z-index: 0;
}
.btn span {
  color: #fff;
  display: block;
  padding-left: 13px;
  padding-right: 13px;
  line-height: 40px;
  transform-origin: center left;
  transition: color 0.3s ease;
  position: relative;
  z-index: 1;
}
.btn:before,
.btn:after {
  content: '';
  background: #70cbfa;
  height: 100%;
  width: 0;
  position: absolute;
  transition: 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.btn:before {
  top: 0;
  left: 0;
  right: auto;
}
.btn:after {
  bottom: 0;
  left: 0;
}

@media screen and (min-width: 1024px) {
  .btn:hover:before {
    width: 0;
    left: 0;
    border-radius: 4px;
  }
  .btn:hover:after {
    width: 100%;
    left: 0;
    right: auto;
    border-radius: 4px;
  }
}
.subpageLink {
 position: absolute;
 bottom: 0;
 right: 20px;
 transform: translateY(50%);
}

.titleblock .subpageLink {
 position: relative;
 display: block;
 float: right;
}

.absolutefullscreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
}

.fa.fa-external-link{
  padding: 0 5px;
}

@media screen and (max-width: 1023px){
  .newsblock .subtitle{
    margin-bottom: 10px;
  }
}

.link a{
  color: #000;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10px;
}
.mustOverflow{
  position: fixed;
  width: 100% !important;
  height: 100vh !important;
  overflow: hidden;
}
</style>
