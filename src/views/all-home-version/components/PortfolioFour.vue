<template>
  <v-row>
    <!-- Start Single Portfolio  -->
    <v-col
      lg="3"
      md="6"
      sm="6"
      xs='12'
      cols="12"
      class="mt--40"
      v-for="(item, i) in portfolioContent"
      :key="i"
    >
      <div class="portfolio">
        <div class="thumbnail-inner">
            <v-img class="thumbnail" :src="item.src" ></v-img>
          <!-- <v-img class="bg-blr-image" :src="item.src"></v-img> -->
          <!-- <img :src='item.src' class="thumbnail" /> -->
        </div>
        <!-- <div class="content">
          <div class="inner">
            <p>{{ item.meta }}</p>
            <h4>
              <router-link to="portfolio-details">{{ item.title }}</router-link>
            </h4>
            <div class="portfolio-button">
              <router-link class="rn-btn" to="/portfolio-details"
                >Case Study</router-link
              >
            </div>
          </div>
        </div> -->
      </div>
    </v-col>
    <!-- End Single Portfolio  -->
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        portfolioContent: [
          // {
          //   src: require("../image/group_1.jpg"),
          //   meta: "Development",
          //   title: "Getting tickets to the big show",
          // },
          // {
          //   src: require("../image/group_2.jpg"),
          //   meta: "Development",
          //   title: "Getting tickets to the big show",
          // },
          {
            src: require("../image/road_1.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
           src: require("../image/road_2.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
            src: require("../image/road_3.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          },
          {
           src: require("../image/road_4.jpg"),
            meta: "Development",
            title: "Getting tickets to the big show",
          }
        ],
      };
    },
  };
</script>
<style lang="scss" scoped>

// .portfolio{
//   @media only screen and (min-width: 768px) and (max-width: 991px){
//     min-height: 600px !important;
//   }
// }

@media only screen and (min-width: 1264px) and (max-width: 1903px){
  .portfolio {
    min-height: 600px;
}
}
@media only screen and (max-width: 767px){
  .portfolio {
      min-height: 800px;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1264px){
  .portfolio {
    min-height: 900px;
}
}

@media only screen and (min-width: 992px) and (max-width: 1263px){
  .portfolio {
    min-height: 900px;
}
}

@media only screen and (min-width: 768px) and (max-width: 991px){
  .portfolio {
    min-height: 700px;
}
}



.portfolio .thumbnail-inner .thumbnail{
  @media (max-width:1600px) and (min-width:1500px){
    
  }
  @media only screen and (max-width:600px){

  }
}
</style>
