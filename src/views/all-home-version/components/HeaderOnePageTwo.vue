<template>
  <div>
    <v-navigation-drawer
      class="hidden-md-and-up header-one-page-nav-drawer header_bg"
      v-model="drawer"
      fixed
      width="320"
    >
      <v-list-item class="pa-5">
        <div class="logo">
          <img
            src="../image/logo.png" class='img'
          />
        </div>
        <v-spacer></v-spacer>
        <v-btn
          class="close-icon"
          icon 
          @click="drawer = !drawer"
          v-html="iconSvg(closeIcon)"
        >
        </v-btn>
      </v-list-item>

      <scrollactive
        active-class="v-btn--active"
        bezier-easing-value=".5,0,.35,1"
        :offset="71"
      >
        <v-list>
          <v-list-item
            :ripple="false"
            v-for="item in items2"
            :key="item.title"
            :to="item.to"
            link
            class="scrollactive-item"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </scrollactive>
    </v-navigation-drawer>
    <!-- End sidebar mobile menu -->
    <!-- color="transparent"  color='#0f0f0f' -->
     <!-- fixed -->
    <v-app-bar
      dark
      height=152
      fixed
      color="transparent"
      elevate-on-scroll
      class="header-one-page-nav header-one-page-nav-two"
    >
      <router-link to="" class="logo">
        <img src="../image/logo.png" />
      </router-link>

      <v-toolbar-items class="hidden-xs-only hidden-sm-only height-auto ml--35">
        <scrollactive
          active-class="v-btn--active"
          bezier-easing-value=".5,0,.35,1"
          :offset="71"
        >
          <v-btn
            v-for="item in items2"
            :key="item.title"
            :to="item.to"
            link
            :ripple="false"
            text
            class="scrollactive-item"
            >{{ item.title }}</v-btn
          >
        </scrollactive>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="social-share-inner">
        <socialTwo @getimageUrl = getimageUrl  @walletAddress='walletAddress'/>
      </div>
      <!-- <a
        class="rn-btn"
        href="https://themeforest.net/checkout/from_item/30195230?license=regular"
      >
        <span>buy now</span>
      </a> -->
      <v-btn
        icon
        class="ma-0 pa-0 hidden-md-and-up"
        @click="drawer = !drawer"
        v-html="iconSvg(icon)"
      >
      </v-btn>
      <!-- End mobile menu icon -->
    </v-app-bar>
    <!-- End top header navbar -->
  </div>
</template>

<script>
import feather from "feather-icons";
import socialTwo from "./SocialTwo";
export default {
  components: {
    socialTwo,
  },
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", to: "/#home" },
      { title: "Roadmap", to: "/#Roadmap" },
      { title: "Mint", to: "/mint" },
      { title: "Redeem", to: "/redeemPage" },
      { title: "FAQ", to: "/#FAQ" },
    ],
    items2: [
      { title: "Home", to: "/#home" },
      { title: "Roadmap", to: "/#Roadmap" },
      { title: "Mint", to: "/mint" },
      { title: "Redeem", to: "/redeemPage" },
      { title: "FAQ", to: "/#FAQ" },
    ],
    icon: "menu",
    closeIcon: "x",
  }),
  methods: {
    iconSvg(icon) {
      return feather.icons[icon].toSvg();
    },
    getimageUrl(obj){
      this.$emit('getimageUrl',obj)
    },
    walletAddress(val){
      this.$emit('walletAddress',val)
    }
  },
};
</script>
<style lang="scss" scoped>
.logo{
 
}
.header_bg{
  // background:#1a1a1a;
}
.scrollactive-item{
  color:#ffff;
}
.header-one-page-nav .v-toolbar__content{
}
</style>
