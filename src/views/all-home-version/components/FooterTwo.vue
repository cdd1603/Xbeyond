<template>
  <!-- Start Footer Style Two  -->
  <div
    class="footer-style-2 ptb--30 bg_image bg_image--1 footer_bg"
    data-black-overlay="6"
  >
    <div class="wrapper plr--50 plr_sm--20">
      <v-row align="center" align-content='space-between'>
        <v-col lg="6" md="6" sm="6" cols="12">
          <div class="inner">
            <!-- <div class="logo text-center text-sm-left mb_sm--20">
              <router-link to="/"
                ><img :src="logo" alt="Logo images"
              /></router-link>
            </div> -->
            <div class="contacts_box">
              <div class="contact_txt">Contacts</div>
              <div class="icon_box">
                <v-img
                  class="img"
                  lazy-src="../image/right_arrows.png"
                  max-height="10"
                  max-width="15"
                  src="../image/right_arrows.png"
                ></v-img>
              </div>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="6" md="6" sm="6" cols="12">
          <div class="inner text-center">
            <ul class="social-share rn-lg-size d-flex justify-center liststyle">
              <li class='img_li'>
                <img src="../image/Logomark-Transparent White.svg" class="img">
              </li>
               <li class='img_li'>
                <img src="../image/discord.svg" class="img">
              </li>
               <li class='img_li'>
                <img src="../image/twitter.svg" class="img">
              </li>
            </ul>
          </div>
        </v-col>
        <!-- End .col -->
        <!-- <v-col lg="4" md="4" sm="12" cols="12">
          <div class="inner text-md-right text-center mt_md--20 mt_sm--20">
            <div class="text">
              <p>
                Copyright © {{ new Date().getFullYear() }} Rainbow-Themes. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </v-col> -->
        <!-- End .col -->
      </v-row>
    </div>
  </div>
  <!-- End Footer Style Two  -->
</template>

<script>
export default {
  data() {
    return {
      // logo: require("../../assets/images/logo/logo.png"),
      // socialList: [
      //   {
      //     icon: "fa-facebook-f",
      //     url: "../../../assets/images/bg/xbeyond/1.png",
      //   },
      //   {
      //     icon: "fa-linkedin-in",
      //     url: "../../../assets/images/bg/xbeyond/2.png",
      //   },
      //   {
      //     icon: "fa-twitter",
      //     url: "../../../assets/images/bg/xbeyond/3.png",
      //   }
      // ],
    };
  },
};
</script>
<style lang="scss" scoped>
.footer_bg {
  background: #1a1a1a;
}
.inner {
  .contacts_box{
    display: flex;
    @media (max-width:1920px) {
      // margin-left:300px;
      margin-left:34%;
    }
    @media (max-width:600px){
      margin-left:0;
    }
  }
  .contact_txt {
    width: 350px;
    height: 27px;
    background: #0f0f0f;
    color: #ffff;
    box-sizing: border-box;
    padding-left: 38px;
    font-size: 14px;
    @media (max-width:600px){
     width: 250px;
     margin-left:10px;
    }
  }
  .icon_box{
      width: 37px;
      height:27px;
      background:#262626;
      display: flex;
      align-items: center;
      justify-content: center;
      .img{
          width: 100%;
          height:100%;
       }
  }
}
.img_li{
  width: 24px;
  height:22px;
  .img{
    width: 100%;
    height:100%;
  }
}
.text-center{
   @media (max-width:1920px) {
      margin-right:-20%
   }
    @media (max-width:600px){
      display: flex;
      justify-content: start;
      margin-left:35%;
      margin-top:10px;
    }
}
</style>
