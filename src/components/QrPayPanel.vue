<template>
  <div>
    <QrImageDialog ref="qr_image_dialog"></QrImageDialog>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h2 class="panel-title">二维码生成</h2>
      </div>
      <div class="panel-body">
        <div id="qr_form">
          <div class="input-group">
            <input v-model="merId" name="merId" type="text" class="form-control"
                   placeholder="商户线下档案编号"/>
            <span class="input-group-addon">号</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="storeCode" name="storeCode" type="text" class="form-control"
                   placeholder="e生活档案编号"/>
            <span class="input-group-addon">号</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="outTradeNo" name="outTradeNo" type="text" class="form-control"
                   placeholder="商户系统订单号"/>
            <span class="input-group-addon">号</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="orderAmt" name="orderAmt" type="text" class="form-control"
                   placeholder="订单总金额"/>
            <span class="input-group-addon">元</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="tradeDate" name="tradeDate" type="text" class="form-control"
                   placeholder="订单生成日期"/>
            <span class="input-group-addon">年-月-日</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="tradeTime" name="tradeTime" type="text" class="form-control"
                   placeholder="订单生成时间"/>
            <span class="input-group-addon">时-分-秒</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="payExpire" name="payExpire" type="text" class="form-control"
                   placeholder="二维码有效期"/>
            <span class="input-group-addon">秒</span>
          </div>
          <br>
          <div class="input-group">
            <input v-model="tporderCreateIp" name="tporderCreateIp" type="text" class="form-control"
                   placeholder="订单生成的机器IP"/>
            <span class="input-group-addon">IP地址</span>
          </div>
          <br>
          <div class="input-group">
            <label for="notifyFlagInput" class="col-lg-8 control-label">是否开启通知接口</label>
            <div class="col-lg-8">
              <select v-model="notifyFlagInput" id="notifyFlagInput" name="notifyFlag"
                      class="form-control">
                <option value="1">是</option>
                <option value="0">否</option>
              </select>
            </div>
          </div>
          <hr>
          <div class="center-block">
            <button v-on:click="post" class="btn btn-primary btn-lg">提交</button>
            <button v-on:click="postDefault" class="btn btn-success btn-lg">提交测试默认值</button>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import QrImageDialog from "./QrImageDialog"
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  export default {
    name: "QrPayPanel",
    components: {QrImageDialog},
    data: function () {
      return {
        merId: '',
        storeCode: '',
        outTradeNo: '',
        orderAmt: '',
        tradeDate: '',
        tradeTime: '',
        payExpire: '',
        tporderCreateIp: '',
        notifyFlagInput: '',
      }
    },
    methods: {
      postDefault: function () {
        Vue.http.options.emulateJSON = true;
        Vue.http.options.crossOrigin = true;
        this.merId = '020002040095';
        this.storeCode = '02000015087';
        this.outTradeNo = 'ZHL777O15002039';
        this.orderAmt = '7370';
        this.tradeDate = '20171210';
        this.tradeTime = '160346';
        this.payExpire = '1200';
        this.tporderCreateIp = '127.0.0.1';
        this.notifyFlagInput = '1';
        this.post();
      },
      post: function () {
        Vue.http.options.emulateJSON = true;
        Vue.http.options.crossOrigin = true;
        Pace.restart();
        this.$http.post('http://localhost:8080/icbc/qr/getQrCode', {
          'merId': this.merId,
          'storeCode': this.storeCode,
          'outTradeNo': this.outTradeNo,
          'orderAmt': this.orderAmt,
          'tradeDate': this.tradeDate,
          'tradeTime': this.tradeTime,
          'payExpire': this.payExpire,
          'tporderCreateIp': this.tporderCreateIp,
          'notifyFlag': this.notifyFlagInput
        }, {
          'headers': {
            'Access-Control-Allow-Origin': '*'
          }
        }).then(function (response) {
          var respText = response.bodyText;
          var respJson = JSON.parse(respText);
          if (respJson.status === "0") {
            this.$refs.qr_image_dialog.imageSrc = respJson.data;
            this.$refs.qr_image_dialog.message = '';
            console.log(respJson)
          } else {
            this.$refs.qr_image_dialog.imageSrc = '';
            this.$refs.qr_image_dialog.message = respJson.msg;
          }
          this.$refs.qr_image_dialog.toggle();
        }, function (response) {
          console.log(response)
        });
      }
    }
  }
</script>

<style scoped>

</style>
