<template>
  <div class="active-dark">
    <!-- Start Header Area -->
    <HeaderOnePageTwo @getimageUrl = 'getimageUrl' @clearImage = 'clearImage'/>
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
    <!-- <div class="rn-slider-area poss_relative" id="home">
      <div
        class="slide personal-portfolio-slider slider-style-3 slider-paralax bg_image bg_image--25 d-flex align-center"
      >
        <BannerThree>
          <span slot="designation">FREELANCE DIGITAL DESIGNER</span>
          <h1 class="heading-title" slot="heading-title">
            Hello, I’m <span>Smith</span> Welcome to my World.
          </h1>
        </BannerThree>
      </div>
    </div> -->
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <!-- <div class="section about-area rn-section-gap bg_color--1" id="about">
      <div class="about-wrapper">
        <div class="container">
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/about/about-8.jpg"
              alt="About Images"
            />
          </AboutFour>
        </div>
      </div>
    </div> -->
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <div
      class="section service-area rn-service-area rn-section-gap bg_color--5"
      id="service"
    >
      <div class="container">
        <v-row>
          <v-col lg="12">
            <div
              class="
                section-title
                service-style--3
                text-center
                mb--20
                mb_sm--0
                md_md--0
              "
            >
              <div class="heading-titles">
                <img src="./image/mint.png" alt="" />
              </div>
              <div class="mint_txt">
                <!-- <p>Lorem ipsum dolor sit amet,consectetur</p>
                <p>adipisicing elit,sed do eiusmod tempor</p>
                <p>incididunt ut labore et dolore magna aliqua.</p> -->
                <p>Redeem your Physical Merch with Genesis Force

                You need a Genesis Force NFT in your wallet to redeem a Physical Mech</p>
              </div>
              <div class="mint_swiper">
                <div class="banner_box">
                  <div>
                    <div>
                      <div class="Slide_box" v-if='bannerurl'>
                         <v-img :src='bannerurl' class="img"></v-img>
                      </div>
                      <div v-else class="Slide_box">
                         <v-img :src='mintedNft' class="img"></v-img>
                      </div>
                    </div>
                    <!-- <swiper-slide>
                      <div class="Slide_box">2222</div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="Slide_box">33336</div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="Slide_box">4444</div>
                    </swiper-slide>
                    <swiper-slide>
                      <div class="Slide_box">5555</div>
                    </swiper-slide> -->
                  </div>
                </div>
            </div>
            <div class="swiper_box">
              <div class="swiper_main">
                <swiper ref="swiperThumbs" :options="swiperOptions">
                  <swiper-slide v-if='swiperArr.length == 0'>
                    <div class="Slide_box">
                      <v-img :src='parentNoItem'></v-img>
                    </div>
                  </swiper-slide>
                  <swiper-slide v-for='(item,index) in swiperArr' :key='index'>
                    <div class="Slide_box">
                      <v-img :src='item.imageurl' class="img"></v-img>
                    </div>
                  </swiper-slide>
                </swiper> 
                <div class="before_icon" :class='[swiperArr.length > 0 ? "mt100":""]'><</div>
                <div class="next_icon" :class='[swiperArr.length > 0 ? "mt100":""]'>></div>
                <!-- <div class='mint_title_txt'>
                  该项活动在20xx年xx月xx日开启
                </div> -->
                <div class='mint_title_txt' v-if='swiperArr.length >0'>
                  <p style='margin-bottom:0px;'>Public Price: 0.08ETH</p>
                  <p>Whitelist Price:0.07ETH</p>
                </div>
                <div class="mint_btn" @click='injectMetamask' style='margin-bottom:10px;margin-top:20px'>
                  injectMetamask
                </div>
                <div class="mint_btn" :class='[swiperArr.length ==0 ? "isDisabled":""]' @click='mintNft'>
                  Redeem
                </div>
              </div>
            </div>
            </div>
          </v-col>
        </v-row>
        <!-- <ServiceThree /> -->
      </div>
    </div>
    <!-- Start Service Area  -->
    <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="700px"
      @click:outside='dialogOutside'
    >
     <v-card v-show='threeStep'>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div class='confirmBox'>
                            <p>Your shipping information has been submitted</p>
                            <p>
                                 <v-btn
                                  class='closeBtn'
                                  color="blue darken-1"
                                  text
                                  @click="closeDialog"
                                >
                                  close
                                </v-btn>
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
     </v-card>
     <v-card v-show='twoStep'>
         <v-card-title>
          <div class='cardTitle'>
          </div>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <div class='confirmBox'>
                            <p>Confirm to submit?</p>
                            <p>
                               <v-btn
                                  class='yesBtn'
                                  color="blue darken-1"
                                  text
                                  @click="confirmSubmit"
                                >
                                  yes
                                </v-btn>
                                <v-btn
                                    class='noBtn'
                                    color="blue darken-1"
                                    text
                                    @click="cancelSubmit"
                                >
                                    no
                                </v-btn>
                            </p>
                        </div>
                      
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
     </v-card>
      <v-card v-show='oneStep'>
        <v-card-title>
          <div class='cardTitle'>
              <p>Delivery Info</p>
              <p>Please fill up your delivery address.</p>
              <p>Note: Taxes and duties will be charged to recipent when applicable</p>
          </div>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  label="Name*"
                  required
                  v-model='dialogForm.name'
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                  v-model='dialogForm.email'
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Mobile*"
                  required
                  v-model='dialogForm.mobile'
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Address*"
                  required
                  v-model='dialogForm.address'
                ></v-text-field>
              </v-col>
               <v-col cols="12">
                <v-text-field
                  label="Province*"
                  required
                  v-model='dialogForm.province'
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Country*"
                  required
                  v-model='dialogForm.country'
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <p class='contactUs'><small>Please contact this email for any question about the delivery information</small>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="onSubmit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>

<script>
import parentNoItem from './image/noItem.jpg'
import mintedNft from './image/mint_1.jpg'
import HeaderOnePageTwo from "./components/HeaderOnePageTwo";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mockMintERC721,mint,api} from '../../utils/interact_contract'
const collectionIDs = {
    'BAYC': 1,
    'MAYC': 2,
}

export default {
  components: {
    HeaderOnePageTwo,
    swiper,
    swiperSlide,
  },
  data() {
    let that = this
    return {
      swiperOptions: {
        slidesPerView: 4,//显示个数
        slideToClickedSlide: true,
        freeMode: true,
        grabCursor: true,
        navigation: {
            prevEl: '.before_icon',
            nextEl: '.next_icon'
        },
        watchSlidesVisibility: true, // 防止不可点击
        on:{
          click:function(e){
            const realIndex = this.clickedIndex
            that.handleClickSlide(realIndex)
          }
        }
      },
      swiperOptions2: {
        loop:true,
      },
      swiperArr:[
      ],
      bannerurl:'',
      parentNoItem,
      mintedNft,
      tokenId:'',
      collectionID: 'BAYC',
      dialog: false,
      oneStep:true,
      twoStep:false,
      threeStep:false,
      dialogForm:{
          email:'',
          name:'',
          mobile:'',
          address:'',
          province:'',
          country:''
      }
    };
  },
  methods:{
    getimageUrl(obj){
      // this.swiperArr = []
      this.swiperArr = this.unique(this.swiperArr.concat(obj.image))
      this.bannerurl=obj.image[0].imageurl
      this.tokenid = obj.image[0].tokenID
    },
    clearImage(){
      this.swiperArr = []
      this.bannerurl= []
    },
    handleClickSlide(index){
      this.bannerurl = this.swiperArr[index].imageurl
      this.tokenid =  this.swiperArr[index].tokenID
      console.log('tokenid',this.tokenid)
    },
    async injectMetamask(){
       const { success, status } =  await mockMintERC721( window.ethereum.selectedAddress, this.tokenid);
    },
    async mintNft(){
    //   const cid = collectionIDs[this.collectionID] * 1e10;
    //   const { success, status } = await mint(cid, this.tokenid);
      this.dialog = true
    },
    unique(arr){
      //给了个去重
      return Array.from(new Set(arr))
    },
    onSubmit(){
        this.oneStep = false
        this.twoStep = true
    },
    confirmSubmit(){
        // this.twoStep = false
        // this.threeStep = true
        console.log('1123',this.dialogForm)
        this.$axios.post(api,{
         data:{
           name:'1'
         }
        }).then(res=>{
          console.log('res',res)
        })
    },
    cancelSubmit(){
        this.twoStep = false
        this.oneStep = true
    },
    dialogOutside(){
        this.dialog = false
        this.oneStep = true
        this.twoStep = false
        this.threeStep = false
    },
    closeDialog(){
        this.dialog = false
        this.oneStep = true
        this.twoStep = false
        this.threeStep = false
    },
  },
  mounted(){
    // this.$nextTick(()=>{
    //       const swiperTop = this.$refs.swiperTop.swiper
    //       const swiperThumbs = this.$refs.swiperThumbs.swiper
    //       swiperTop.controller.control = swiperThumbs
    //       swiperThumbs.controller.control = swiperTop
    // })
  }
};
</script>
<style lang="scss" scoped>
.heading-titles {
  display: flex;
  justify-content: center;
}
.mint_txt {
  margin-top: 15px;
  color: #fff;
}
.mint_swiper {
      color: #fff;
      margin-top: 33px;
      display:flex;
      justify-content: center;
      .banner_box {
        width: 400px;
        height: 400px;
        background: #808080;
        .Slide_box{
           width: 400px;
           height:400px;
          .img{
            width: 100%;
            height:100%;
          }
        }
      }
    }
    .swiper_box {
      // width: 821px;
      // height: 150px;
      margin-top: 48px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      .swiper_main {
        width: 662px;
        height: 100%;
        position: relative;
     .before_icon {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #ffff;
        background: #1a1a1a;
        border-radius: 50%;
        position: absolute;
        margin-top: -80px;
        left: -80px;
        top: 40%;
        font-size: 20px;
        z-index: 10;
      }
      .next_icon {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #ffff;
        background: #1a1a1a;
        border-radius: 50%;
        position: absolute;
        margin-top: -80px;
        right: -80px;
        top: 40%;
        font-size: 20px;
        z-index: 10;
      }
      .mt100{
        margin-top:-110px
      }
        .Slide_box{
            width: 150px;
            height:150px;
            background:#1a1a1a;
            color:#ffff;
            text-align: center;
            line-height: 150px;
        }
      }
    }
    .mint_title_txt{
      color:#fff;
      margin-top:30px;
      margin-bottom:10px;
    }
     .mint_btn{
        width: 238px;
        height:80px;
        cursor: pointer;
        background:#1a1a1a;
        color:#fff;
        text-align: center;
        line-height: 80px;
        font-size:24px;
        margin-left:50%;
        transform: translate(-119px,0px);
        // p{
        //   margin-bottom:0px !important;
        // }
    }
    .isDisabled{
      cursor: not-allowed;
      background: rgba(204, 204, 204, 0.7);
      color: #000000;
    }
    .cardTitle{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .contactUs{
        display: flex;
        justify-content: center;
    }
    .confirmBox{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:45px;
        p:nth-child(2){
            margin-top:20px;
            .noBtn{
                margin-left:10px;
            }
            .yesBtn{
                margin-right:10px
            }
        }
    }
</style>
