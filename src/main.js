import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios.js'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faChevronDown, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLine, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import mixin from './mixin.js'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: { id: 'G-3XFDPNECY9' }
})

Vue.component('ImgInputer', ImgInputer)

library.add(faLine, faCartPlus, faChevronDown, faTrash, faCheck, faFacebook, faInstagram, faTwitter)
Vue.mixin(mixin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAwesomeSwiper)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    AOS.init({ })
  },
  render: h => h(App)
}).$mount('#app')
