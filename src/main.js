import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FirebaseInit from "./utils/firebase";

Vue.config.productionTip = false

FirebaseInit();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
