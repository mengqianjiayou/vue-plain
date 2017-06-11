import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css'
import {store} from './store/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App,
  store
});
