import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueParticles from "vue-particles";
import CoolLightBox from 'vue-cool-lightbox';
import VueScrollactive from 'vue-scrollactive';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/main.scss'
// import 'swiper/swiper-bundle.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import vMessage from './components/Message/index' 


Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(CoolLightBox);
Vue.use(VueScrollactive);
Vue.use(VueAwesomeSwiper)
Vue.use(vMessage)
Vue.prototype.$axios = axios


new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')