<template>
  <div>
    <audio autoplay height="100" width="100">
      <source src="../assets/audio/welcome.mp3" type="audio/mp3"/>
      <embed height="100" width="100" src="../assets/audio/welcome.mp3"/>
    </audio>
    <el-card>
      <router-link to="/library"><img src="../assets/start.jpg" width="100%" height="100%"></router-link>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Starter"
  }
</script>

<style scoped>

</style>
