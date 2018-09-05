// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import './assets/css/pace/pace-theme-minimal.css'
import './assets/js/pace.min'
import './assets/js/screenfull'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Vuex from 'vuex'
import './assets/js/screenfull';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;

const store = new Vuex.Store({
  state: {
    contentFontSize: 1
  },
  mutations: {
    changeModel: function (state, size) {
      state.contentFontSize = size;
      screenfull.toggle();
    }
  },
  getters: {
    fontSize: function (state) {
      return state.contentFontSize;
    }
  }
})

new Vue({
  el: '#app',
  components: {App},
  template: '<App v-bind:model-font-size="modelFontSize" />',
  router: router,
  store:store,
  computed: {
    modelFontSize: function () {
      return this.$store.getters.fontSize;
    }
  }
});
