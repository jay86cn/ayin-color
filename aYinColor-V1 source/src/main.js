import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './ayincolor-mixin.less';
import c from "./ayincolor-vue.js"
Vue.prototype.$c = c;

new Vue({
  render: h => h(App),
}).$mount('#app')
