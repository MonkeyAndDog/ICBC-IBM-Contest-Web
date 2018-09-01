// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/css/pace/pace-theme-minimal.css'
import './assets/js/pace.min'
import './assets/js/screenfull'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'

Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: router,
});
