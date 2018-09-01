<template>
  <div id="app" v-bind:style="{ fontSize:contentFontSize + 'em' }">
    <PageHeader></PageHeader>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import $ from 'jquery';
import './assets/js/screenfull';

export default {
  name: 'App',
  components: {PageFooter, PageHeader},
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
      return this.accessibilityModel;
    },
    changeAccessibilityModel: function () {
      if (this.isAccessibilityModel) {
        this.accessibilityModel = '一般模式';
        this.contentFontSize = 3;
      } else {
        this.accessibilityModel = '无障碍模式';
        this.contentFontSize = 1;
      }
    }
  }
}
</script>

<style>
</style>
