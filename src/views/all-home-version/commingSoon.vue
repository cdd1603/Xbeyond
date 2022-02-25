<template>
  <div class="active-dark">
    <!-- Start Header Area -->
    <!-- <HeaderOnePageTwo /> -->
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
    <div class="rn-slider-area poss_relative" id="home">
      <div
        class="slide personal-portfolio-slider slider-style-3 slider-paralax bg_image bg_image--25 d-flex align-center"
      >
        <BannerThree>
          <!-- <span slot="designation">FREELANCE DIGITAL DESIGNER</span> -->
          <h1 class="heading-title" slot="heading-title"> 
            <!-- Hello, I’m <span>Smith</span> Welcome to my World.  -->
             <div class="heading-title">
                  <div class="story_main_txt"> 
                  <p>
                    <!-- There has always been a legend in the ancient East, that the Orachi has set seven challenges for mankind. When each one is completed, a corresponding divine power will be given to the achiever.  -->
                  </p>
                  <p>
                    <!-- These seven divine powers are respectively the power of sky, earth, ice, fire, mountain, sea and wind. People who can complete all the challenges and obtain the seven powers will gain Nirvana. -->
                  </p>
                  <p>
                    <!-- For thousands of years, only one Ninja Master from Igaryu has completed all the challenges and gained all his super powers, but after that he disappeared…… -->
                  </p>
                </div>
              </div>
          </h1>
        </BannerThree>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <!-- <div class="section about-area rn-section-gap bg_color--1" id="about">
      <div class="about-wrapper">
        <div class="container">
         
        </div>
      </div>
    </div> -->
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <!-- <div
      class="section service-area rn-service-area rn-section-gap bg_color--5 bg_color"
      id="service"
    > -->
      <!-- <div class="container">
        <v-row>
          <v-col lg="12">
            <div
              class="section-title service-style--3 text-center mb--20 mb_sm--0 md_md--0"
            >
              <h2 class="heading-titles">
                <img src="./image/x_beyond.png" alt="" class='img'>
              </h2>
              <div class='xbeyond_txt'>
                <p>
                  The founder of X-Beyond, as an NFT enthusiast and also a MAYC owner, loves extreme sports and street culture. X-Beyond has been committed to pushing innovation to support the superior and authentic lifestyle inspired by sports, art, music & street culture. We’re always playing in between. We shall play in the streets. We shall play on earth and on top of mountains. We shall play on the sea and in the sky. We shall play with growing confidence and strength. X-Beyond will spare no effort to help players gain the super power of nature.
                </p>
                <p style='margin-top:10px'>
                Therefore, we are dedicated to leveraging our advantages and expertise to empower NFTers and help build a diverse community culture. We combine NFT with reality to propose customized solutions for sports and cultural enthusiasts. In addition, we will explore the metaverse, to provide visitors with advanced gears and to establish landmarks and extreme sports theme parks in the metaverse.    
              </p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="12">
            <div
              class="section-title service-style--3 text-center mb--20 mb_sm--0 md_md--0"
            >
              <div class="heading-titles">
                <img src="./image/mint_redeem_title.png" alt="" class='img'>
                <div class='redeem'>
                <p> Users who own parent NFTs can mint the customized Cruiser NFTs.  Each derivative accessory is 1 of 1 digital object that can only be created once from the corresponding parent NFT.</p>
                <p>
                 As a bridge between metaverse and reality, X-Beyond is going to help challengers expand their footprint in real life. Physical Cruisers,  which are 1-of-1 crafted based on the respective Cruiser NFTs,  are free to be redeemed by some lucky Cruiser NFT owners. 
                 After the launch of the Cruiser NFTs, we will do a raffle which is based on each single Cruiser NFT, and each lucky owner can claim a Genesis Force NFT as a redemption pass.
                </p>
                <p>
                  Genesis Force, as an ERC1155 token, might be the genesis token of X-Beyond Metaverse and will have a unique function in the future.
                </p>
              </div>
              </div>
            </div>
          </v-col>
        </v-row>
         <v-row>
          <v-col lg="12">
             <div
              class="section-title service-style--3 text-center mb--20 mb_sm--0 md_md--0"
            >
            <h4 class="heading-title_table mt40 mb20">
              How Physical Cruiser Mech will be distributed to Cruiser NFT owners?
            </h4>
            <div class='table_box'>
              <div class='table_bg'>
                <img src="./image/table.jpg" alt="" class='img'>
                <img src="./image/move_table.jpg" alt="" class='move_img'>
              </div>
            </div>
             <div class='table_txt mt40'>
               For example, as all know that there are 10,000 BAYC Cruiser NFTs in total, if 5,000 BAYC Cruiser NFTs are minted (which is 50% of 10,000), 2250 Physical Cruisers will be raffled for those Cruiser NFT owners.  Therefore, the number of raffled Physical Cruisers’ redemption will change correspondingly for other parent NFT collections.
             </div>
            </div>
          </v-col>
         </v-row>
      </div> -->
    <!-- </div> -->
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <!-- <div
      class="section rn-portfolio-area rn-section-gap bg_color--1 bg_roadmap"
      id="Roadmap"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title section-title--2 text-center mb--20">
              <div class="road_title">
                <img src="./image/roadmap2.png" alt="">
              </div>
            </div>
          </v-col>
        </v-row>
        <PortfolioFour />
      </v-container>
    </div> -->
    <!-- End Portfolio Area -->

    <!-- Start Blog Area  -->
    <!-- <div class="faq" id='FAQ'>
      <v-container>
        <v-col lg="12" xs="12">
          <div class="faq_title">
            <p>
              <v-img
                src="./image/faq.png"
              >
              </v-img>
            </p>

          </div>
          <div class="faq_main">
            <v-expansion-panels class="mb-6">
              <v-expansion-panel v-for="(item, i) in faq_arr" :key="i">
                <v-expansion-panel-header color="#000000">
                  <p class="header_txt">{{ item.title }}</p>
                  <template v-slot:actions>
                    <v-icon color="primary">
                      $expand
                    </v-icon>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content color="#0f0f0f">
                  <p class="content_txt">
                    {{ item.content }}
                  </p></v-expansion-panel-content
                >
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-container>
    </div> -->
    <!-- <div class="section rn-blog-area rn-section-gap bg_color--5" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="12">
            <div class="section-title text-left">
              <h2>Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <!-- End Blog Area  -->

    <!-- Start Contact Area  -->
    <!-- <div
      class="section rn-contact-area rn-section-gap bg_color--1"
      id="contact"
    >
      <div class="contact-form--1">
        <v-container>
         
        </v-container>
      </div>
    </div> -->
    <!-- End Contact Area  -->

    <!-- Start Footer Area  -->
    <!-- <Footer /> -->
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import HeaderOnePageTwo from "./components/HeaderOnePageTwo";
import BannerThree from "../../components/slider/BannerThree";
// import AboutFour from "../../components/about/AboutFour";
// import ServiceThree from "../../components/service/ServiceThree";
import PortfolioFour from "./components/PortfolioFour";
// import Blog from "../../components/blog/Blog";
// import Contact from "../../components/contact/Contact";
import Footer from "./components/FooterTwo";

export default {
  components: {
    HeaderOnePageTwo,
    BannerThree,
    // AboutFour,
    // ServiceThree,
    PortfolioFour,
    // Blog,
    // Contact,
    Footer,
  },
  data() {
    return {
      faq_arr: [
        {
          title: "01    Who can mint Cruiser NFTs? ",
          content: "The owners of BAYC, MAYC (only those generated before 31 Jan 2022 are valid). Other parent NFTs will be applicable in future. ",
        },
        {
          title: "02    When will the official mint and raffle start?",
          content: "Please follow up in our official discord.",
        },
        {
          title: "03    What will the mint price be?",
          content: "0.08eth for public 0.07eth for WhiteList",
        },
        {
          title: "04    How does the raffle work and redeem a physical merch?",
          content:
            "After the launch of minting, we will do a raffle which is based on each single Cruiser NFT, and each lucky owner can claim a Genesis Force NFT as a redemption pass. Both the Cruiser NFT and Genesis Force NFT are required to be in the same wallet for the redemption of a physical merch which is crafted from the corresponding Cruiser NFT. The Genesis Force might be the genesis token of X-Beyond Metaverse.",
        },
        {
          title: "05 Is there any utility for the Cruiser NFT?",
          content: "Yes, 3D Cruiser NFTs which have being developed by team will be used in the metaverse and we are going to establish a sports hub in Sandbox. Stay tuned for it.",
        },
        {
          title: "06    How does X-Beyond work?",
          content:
            "X-Beyond utilizes a purpose-built ERC 721 compatible smart contract to enable users to craft derivative NFTs from their existing NFTs. Our smart contract ensures that only the current owner of the NFT is able to create the derivative NFT and only one NFT can be minted for each corresponding parent NFT.",
        },
        // {
        //   title: "07    How Does XBeyond Work?",
        //   content:
        //     "XBeyond utilizes a purpose-built ERC 721 compatible smart contract to enable users to craft derivative NFTs from their existing NFTs. Our smart contract ensures that only the current owner of the NFT is able to create the derivative NFT and that only one NFT is minted for each corresponding parent NFT.",
        // },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.bg_image--25{
    background-color: #101010;
    background-image: url(./image/banner.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height:1093px;
    @media (max-width:600px){
      background-image: url(./image/comming_move_banner.jpg);
    }
}
.bg_color{
  background:#1a1a1a;
}
.bg_roadmap{
  background:#000000;
}
.heading-titles{
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media(max-width:600px){
    margin-top:10px;
  }
}
.section-title p{
    padding:0px 0px !important;
 }
.xbeyond_txt{
  margin:58px 0px 117px 0px;
  width: 100%;
  text-align: justify;
  @media(max-width:600px){
    margin:29px 0px 58.5px 0px;
  }
}
.redeem{
    color:#fff;
    background:#000000;
    padding:57px 57px 61px 57px;
    text-align: justify;
    @media(max-width:600px){
      padding:15px 0px 30px 0px;
    }
}
.faq {
  background: #1a1a1a;
  .faq_title {
    display: flex;
    padding: 124px 0px 52px 0px;
    justify-content: space-between;
  }
  .faq_main {
    padding-bottom: 101px;
    border-bottom: 2px solid #313131;
    .header_txt {
      color: #ffff;
      font-weight: bold;
    }
    .content_txt {
      color: #ffff;
      display: flex;
      justify-content: flex-start;
      padding-left: 26px;
      margin: 1% 0px;
    }
  }
}
.table_box{
  width: 100%;
  display: flex;
  justify-content: center;
  .table_bg{
     .img{
       display: block;
       width: 100%;
       @media (max-width:600px){
        display: none;
       }
     }
     .move_img{
       display: none;
       @media (max-width:600px){
        display: block;
       }
     }

  }
  
}
.table_txt{
  color:#fff;
  font-size: 18px;
  text-align: justify;
  @media (max-width:600px){
    font-size:13px;
  }
}
.heading-title_table{
  @media (max-width:600px){
    font-size:13px;
  }
}
.mt40{
  margin-top:40px;
}

.mb20{
  margin-bottom:40px;
}
.heading-title{
  margin-top:-130px;
  .story_main_txt{
    p{
      color:#ffff;
      width: 90%;
      font-size:16px;
      font-weight: 300;
      text-align: justify;
      @media (max-width:600px){
        font-size: 12px !important;
        width: 100%;
      }
    }
  }
  @media (max-width:600px){
    margin-top:-250px;
  }
  // @media (max-width:1263px) and (min-width:601px){
  //   margin-top:-30px;
  // }
}
// .container .portfolio{
//   @media only screen and (max-width: 767px){
//     min-height:auto !important;
//   }
// }
.v-application .primary--text {
    color: #ffff !important;
    caret-color: #ffff !important;
}
</style>
 