<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#app-list" aria-expanded="false">
            <span class="sr-only"></span><span class="caret"></span>
          </button>
          <router-link class="navbar-brand" to="/library">应用列表</router-link>
        </div>
        <div class="collapse navbar-collapse" id="app-list">
          <ul class="nav navbar-nav">
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                账户管理服务 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/library/账户管理服务/线上账户服务">线上账户服务</router-link>
                </li>
                <li>
                  <router-link to="/library/账户管理服务/财务查询">财务查询</router-link>
                </li>
                <li>
                  <router-link to="/library/账户管理服务/信用卡办卡">信用卡办卡</router-link>
                </li>
              </ul>
            </li>
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                商户收单服务 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/library/商户收单服务/小额免密">小额免密</router-link>
                </li>
                <li>
                  <router-link to="/library/商户收单服务/APP移动在线支付">APP移动在线支付</router-link>
                </li>
                <li>
                  <router-link to="/library/商户收单服务/生物识别支付">生物识别支付</router-link>
                </li>
                <li>
                  <router-link to="/library/商户收单服务/ApplePay支付">Apple Pay支付</router-link>
                </li>
                <li>
                  <router-link to="/library/商户收单服务/H5移动在线支付">H5移动在线支付</router-link>
                </li>
                <li>
                  <router-link to="/library/商户收单服务/工银e缴费">工银e缴费</router-link>
                </li>
                <li>
                  <router-link to="/library/商户收单服务/二维码扫码支付">二维码扫码支付</router-link>
                </li>
              </ul>
            </li>
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                安全认证服务 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/library/安全认证服务/融安e信">融安e信</router-link>
                </li>
                <li>
                  <router-link to="/library/安全认证服务/在线身份认证">在线身份认证</router-link>
                </li>
              </ul>
            </li>
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                商户运营服务 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/library/商户运营服务/工银e生活">工银e生活</router-link>
                </li>
              </ul>
            </li>
            <li role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                 aria-haspopup="true"
                 aria-expanded="false">
                资金结算服务 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/library/资金结算服务/境内汇款">境内汇款</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container-fluid">
      <ol class="breadcrumb">
        <li><router-link to="/library">应用列表</router-link></li>
        <li><router-link to="$route.params.part">{{ $route.params.part }}</router-link></li>
        <li v-if="$route.params.section != '$route.params.part'" class="active">{{ $route.params.section }}</li>
        <li v-else ></li>
      </ol>
      <div v-if="$route.params.part === '商户收单服务' && $route.params.section === '二维码扫码支付'">
        <QrPayPanel></QrPayPanel>
      </div>
      <div v-else-if="$route.params.part != ' ' && $route.params.section != null">
        <div class="panel panel-danger">
          <div class="panel-heading">
            <h3>Sorry，应用暂未开放。😜</h3>
          </div>
          <div class="panel-body">
            <h5>您可以选择以下应用：</h5>
            <table class="table table-hover table-bordered">
              <thead>
              <tr>
                <th>ID号</th>
                <th>服务名</th>
                <th>可访问性</th>
                <th>链接</th>
              </tr>
              </thead>
              <tbody>
              <tr class="success">
                <td>1</td>
                <td>商户收单服务/二维码扫码支付</td>
                <td>可以</td>
                <td>
                  <router-link to="/library/商户收单服务/二维码扫码支付"><span class="glyphicon glyphicon-play"
                                                                  aria-hidden="true"></span>
                  </router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="panel-footer">
            <strong>iFinance 奉上</strong>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>请选择一个应用👆</h3>
          </div>
          <div class="panel-body">
            <div class="alert alert-info"><strong>注意!</strong>目前应用处于测试阶段，可访问的应用为：<br>
            </div>
            <table class="table table-hover table-bordered">
              <thead>
              <tr>
                <th>ID号</th>
                <th>服务名</th>
                <th>可访问性</th>
                <th>链接</th>
              </tr>
              </thead>
              <tbody>
              <tr class="success">
                <td>1</td>
                <td>商户收单服务/二维码扫码支付</td>
                <td>可以</td>
                <td>
                  <router-link to="/library/商户收单服务/二维码扫码支付"><span class="glyphicon glyphicon-play"
                                                                  aria-hidden="true"></span>
                  </router-link>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import QrPayPanel from "./QrPayPanel";
    export default {
        name: "Library",
      components: {QrPayPanel}
    }
</script>

<style scoped>

</style>
