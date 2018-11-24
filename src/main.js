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
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/js/baidu_tts_cors"

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;

const store = new Vuex.Store({
  state: {
    contentFontSize: 1,
    audio: null
  },
  mutations: {
    changeModel: function (state, size) {
      state.contentFontSize = size;
      screenfull.toggle();
    },
    read_content:function (content) {
      
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
  store: store,
  computed: {
    modelFontSize: function () {
      return this.$store.getters.fontSize;
    }
  }
});
