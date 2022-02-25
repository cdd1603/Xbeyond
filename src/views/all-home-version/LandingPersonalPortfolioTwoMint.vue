<template>
  <div class="active-dark">
    <!-- Start Header Area -->
    <HeaderOnePageTwo @getimageUrl = 'getimageUrl' @clearImage = 'clearImage' @walletAddress='walletAddress' />
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
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
                <p>Choose a parent NFT in your connected wallet, and mint your Cruiser NFT</p>
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
                <div class="mint_btn" @click='injectMetamask' :class='[ isDisabled == true ? "isDisabled":""]' style='margin-bottom:10px;margin-top:20px'>
                  injectMetamask
                </div>
                <div class="mint_btn" :class='[(swiperArr.length ==0 || isDisabled == true) ? "isDisabled":""]' @click='mintNft'>
                  Mint
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

    <!-- Start Portfolio Area -->
    <!-- End Contact Area  -->

    <!-- Start Footer Area  -->
    <!-- <Footer /> -->
    <!-- End Footer Area  -->
  </div>
</template>

<script>
import parentNoItem from './image/noItem.jpg'
import mintedNft from './image/mint_1.jpg'
import HeaderOnePageTwo from "./components/HeaderOnePageTwo";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mockMintERC721,mint,isWhitelist,mintWhitelist} from '../../utils/interact_contract'
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
      isDisabled:false,
      iswhite:false
    };
  },
  methods:{
    getimageUrl(obj){
      // this.swiperArr = []
      this.swiperArr = this.unique(this.swiperArr.concat(obj.image))
      let arr = []
      this.swiperArr.forEach(item=>{
        if(!item.isMint){
          arr.unshift(item)
        }else{
          arr.push(item)
        }
      })
      this.swiperArr = arr
      this.bannerurl= this.swiperArr[0].imageurl
      this.tokenid =  this.swiperArr[0].tokenID
    },
    async walletAddress(val){
      let whiteArr =  await isWhitelist(val)
      //在白名单里面返回一个数组  不在白名单返回false
      if(whiteArr && whiteArr.length >0){
        this.iswhite = true
      }else{
        this.iswhite = false
      }
    },
    clearImage(){
      this.swiperArr = []
      this.bannerurl= []
    },
    handleClickSlide(index){
      this.bannerurl = this.swiperArr[index].imageurl
      this.tokenid =  this.swiperArr[index].tokenID
      if(this.swiperArr[index].isMint){
        this.isDisabled = true
      }else {
        this.isDisabled = false
      }
    },
    async injectMetamask(){
       if(this.isDisabled == false){
          const { status, description } =  await mockMintERC721( window.ethereum.selectedAddress, this.tokenid);
          if(!status){
            this.$message.info('The action has beencancelled')
          }else {
            this.$message.info(description)
          }
       }else{
         this.$message.warning('Please choose your parent NFT to mint from.')
       }
      
    },
    async mintNft(){
      if(this.isDisabled == false){
        if(this.iswhite){
           this.$message.info('The WL price  will be only applicable for the first mint with your current wallet !')
           var address = window.ethereum.selectedAddress;
           const cid = collectionIDs[this.collectionID] * 1e10;
           const { status, description } = await mintWhitelist(address, this.iswhite, cid, this.tokenid);
           if(!status){
            this.$message.info('The action has beencancelled')
           }else {
            this.$message.success(description)
           }
           this.iswhite = false
        }else{
          const cid = collectionIDs[this.collectionID] * 1e10;
          const { status, description } = await mint(cid, this.tokenid);
          if(!status){
            this.$message.info('The action has beencancelled')
          }else {
              this.$message.success(description)
          }
        }
      }else{
        this.$message.warning('Please choose your parent NFT to mint from.')
      }
      
    },
    unique(arr){
      //给了个去重
      return Array.from(new Set(arr))
    }
  },
  mounted(){

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
      margin-top: 23px;
      display:flex;
      justify-content: center;
      .banner_box {
        width: 300px;
        height: 300px;
        background: #808080;
        .Slide_box{
           width: 300px;
           height:300px;
          .img{
            width: 100%;
            height:100%;
          }
        }
      }
    }
    .swiper_box {
      margin-top: 38px;
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
      margin-top:10px;
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
</style>
