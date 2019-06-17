import Vue from 'vue'
import App from './App'
import router from './router'
import './utils/flexble'
import './static/scss/common.scss'
import './static/fonts/iconfont.css'
import Head from './components/Head'
import store from './store'
import {
  DatePicker,
  TimePicker
} from 'element-ui'

import alertMessage from './components/alertMessage'

Vue.use(DatePicker)

Vue.use(TimePicker)

Vue.component('Head', Head)

let AlertClass = Vue.extend(alertMessage)
Vue.prototype.$alert = (text) => {
  let AlertComponent = new AlertClass({
    propsData: {
      text
    }
  })
  AlertComponent.$mount()
  document.body.appendChild(AlertComponent.$el);
}



Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
