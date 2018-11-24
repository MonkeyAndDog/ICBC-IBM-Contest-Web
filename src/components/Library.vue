<template>
  <div>
    <el-row class="section_card" :span="20" :gutter="20" type="flex" justify="center">
      <el-col>
        <router-link to="/epay">
          <el-card class="section_card">
            <el-header>
              线上账户服务
            </el-header>
            <img src="../assets/epay.jpg" style="width: 100%;">
          </el-card>
        </router-link>
      </el-col>
      <el-col>
        <router-link to="/transfer">
          <el-card>
            <el-header>
              工银e缴费
            </el-header>
            <img src="../assets/icbcepay.jpg" style="width: 100%;">
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>

</template>

<script>

  export default {
    name: "Library",
    mounted: function () {
      this.$store.commit("read_content", "您可使用的功能有线上账户服务，工银e缴费")
    }
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
