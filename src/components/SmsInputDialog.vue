<template>
  <div id="sms_input_dialog" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <div class="row center-block">
            <el-input id="sms_input" v-model="params.smsInput" placeholder="短信验证码" disabled></el-input>
            <el-input id="corp_ser_no" v-model="params.corpSerNoOriginal" placeholder="原始交易单号" disabled></el-input>
            <el-input id="sms_send_no" v-model="params.smsSendNo" placeholder="短信编号" autofocus></el-input>
            <el-button @click="submit">提交</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {btts} from "../assets/js/baidu_tts_cors.js"

  export default {
    name: "SmsInputDialog",
    data: function () {
      return {
        message: '',
        params: {
          smsSendNo: '',
          corpSerNoOriginal: ''
        }
      }
    },
    props: {
      parent_smsSendNo: String
    },
    methods: {
      set_corpSerNoOriginal: function (corpSerNoOriginal) {
        this.params.corpSerNoOriginal = corpSerNoOriginal;
      },
      toggle: function () {
        $('#sms_input_dialog').modal('toggle');
      },
      submit: function () {
        var that = this;
        $.ajax({
          type: "post",
          url: "http://localhost:8080/ifinance/verify/smsVerify",
          data: this.$data.params,
          success: function (result) {
            if (result.status === "0") {
              that.read_input("账户开户成功")
              that.toggle()
            } else {
              that.read_input("账户开户失败")
            }
          }
        })
      },
      read_input: function (content) {
        if (this.reading) {
          return;
        }
        this.reading = true;
        let text = content;
        // 调用语音合成接口
        // 参数含义请参考 https://ai.baidu.com/docs#/TTS-API/41ac79a6
        this.audio = btts({
          tex: text,
          tok: '24.9270aa0ff0f9747e26851feafda13f73.2592000.1545602364.282335-14926821',
          spd: 5,
          pit: 5,
          vol: 15,
          per: 4
        }, {
          volume: 0.3,
          autoDestory: true,
          timeout: 10000,
          hidden: false,
          onInit: function (htmlAudioElement) {

          },
          onSuccess: function (htmlAudioElement) {
            this.audio = htmlAudioElement;
            this.audio.autoplay = true;
            this.audio.controls = false;
          },
          onError: function (text) {
            alert(text)
          },
          onTimeout: function () {
            alert('timeout')
          }
        });
        this.reading = false;
      }
    },
    get_focus: function () {
      $('#sms_send_no').focus();
    }

  }
</script>

<style scoped>

</style>
