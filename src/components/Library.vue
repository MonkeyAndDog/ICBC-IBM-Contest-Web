<template>
  <div>
    <el-row class="section_card" :span="20" :gutter="20" type="flex" justify="center">
      <el-col>
        <router-link to="/epay">
          <el-card class="section_card">
            <el-header>
              EPay
            </el-header>
            <img src="../assets/logo.png" style="width: 100%;">
          </el-card>
        </router-link>
      </el-col>
      <el-col>
        <router-link to="/transfer">
          <el-card>
            <el-header>
              转账
            </el-header>
            <img src="../assets/logo.png" style="width: 100%;">
          </el-card>
        </router-link>
      </el-col>
    </el-row>
    <audio autoplay height="100" width="100">
      <source src="../assets/audio/section.mp3" type="audio/mp3"/>
      <embed height="100" width="100" src="../assets/audio/welcome.mp3"/>
    </audio>
  </div>

</template>

<script>

  export default {
    name: "Library",
  }
</script>

<style scoped>
  .section_card {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #000;
  }

  a:link {
    color: #000;
  }
</style>
