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

  export default {
    name: "PageHeader",
    data: function () {
      return {
        isAccessibilityModel: false,
        accessibilityModel: '无障碍模式',
        contentFontSize: 1
      }
    },
    methods: {
      fullScreen: function () {
        screenfull.toggle();
        this.isAccessibilityModel = !this.isAccessibilityModel;
        this.changeAccessibilityModel();
      },
      changeAccessibilityModel: function () {
        if (this.isAccessibilityModel) {
          this.accessibilityModel = '一般模式';
          this.contentFontSize = 3;
          this.$emit('change-model', this.contentFontSize);
        } else {
          this.accessibilityModel = '无障碍模式';
          this.contentFontSize = 1;
          this.$emit('change-model', this.contentFontSize);
        }
      }
    }
  }
</script>

<style scoped>

</style>
