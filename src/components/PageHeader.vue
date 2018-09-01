<template>
  <!--通用导航-->
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#navbar-content" aria-expanded="false">
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">iFinance</a>
      </div>
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/">主页</router-link>
          </li>
          <li>
            <router-link to="/library">库</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
          <li>
            <a href="#" v-on:click="fullScreen">{{ accessibilityModel }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  import '../assets/js/screenfull'
  import App from '../App';

  export default {
    name: "PageHeader",
    data: function() {
      return {
        accessibilityModel:'无障碍模式'
      }
    },
    methods: {
      fullScreen: function () {
        this.accessibilityModel = App.methods.fullScreen();
      }
    }
  }
</script>

<style scoped>

</style>
