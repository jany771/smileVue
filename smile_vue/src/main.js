import Vue from 'vue'
import App from './App.vue'
import {Button, Row, Col,Search, Swipe, SwipeItem, Lazyload} from 'vant'

Vue.config.productionTip = false

Vue.use(Button).use(Row).use(Col)
.use(Search).use(Swipe).use(SwipeItem).use(Lazyload)
new Vue({
  render: h => h(App),
}).$mount('#app')
