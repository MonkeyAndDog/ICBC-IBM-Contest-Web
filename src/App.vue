<template>
  <div id="app" v-bind:style="{ fontSize:contentFontSize + 'em' }" v-on:change-model="changeModel">
    <PageHeader></PageHeader>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import $ from 'jquery'
import './assets/js/screenfull'
export default {
  name: 'App',
  components: {PageFooter, PageHeader},
  data: function() {
    return {
      contentFontSize: 1
    }
  },
  methods: {
    changeModel: function (fontSize) {
      this.contentFontSize = fontSize;
      alert(666)
    }
  }
}
</script>

<style>
</style>
