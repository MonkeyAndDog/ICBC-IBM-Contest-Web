<template>
  <div style="padding: 10px;">
    <SmsInputDialog ref="sms_input_dialog" :parent_smsSendNo="this.params.corpSerno"></SmsInputDialog>
    <el-input class="input_space" v-model="params.corpNo" placeholder="合作方机构编号" @focus="read_input('合作方机构编号输入')"
              autofocus></el-input>
    <el-input class="input_space" v-model="params.corpSerno" placeholder="合作方交易单号"
              @focus="read_input('合作方交易单号输入')"></el-input>
    <el-input class="input_space" v-model="params.outServiceCode" placeholder="外部服务代码"
              @focus="read_input('外部服务代码输入')"></el-input>
    <el-input class="input_space" v-model="params.corpCisNo" placeholder="合作方客户号"
              @focus="read_input('合作方客户号输入')"></el-input>
    <el-input class="input_space" v-model="params.corpMediumId" placeholder="合作方介质号，如微信号"
              @focus="read_input('合作方介质号，如微信号输入')"></el-input>
    <el-input class="input_space" v-model="params.bindMedium" placeholder="绑定的I类卡号" @focus="read_input('绑定的I类卡号输入')"
    ></el-input>
    <el-input class="input_space" v-model="params.certType" placeholder="证件类型" @focus="read_input('证件类型输入')"></el-input>
    <el-input class="input_space" v-model="params.certNo" placeholder="证件号码" @focus="read_input('证件号码输入')"></el-input>
    <el-input class="input_space" v-model="params.custName" placeholder="户名" @focus="read_input('户名输入')"></el-input>
    <el-input class="input_space" v-model="params.mobileNo" placeholder="手机号" @focus="read_input('手机号输入')"></el-input>
    <el-input class="input_space" v-model="params.notifyAddr" placeholder="通知地址，合作方服务地址"
              @focus="read_input('通知地址，合作方服务地址输入')"></el-input>
    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
  import {btts} from "../assets/js/baidu_tts_cors.js"
  import SmsInputDialog from "./SmsInputDialog";

  export default {

    name: "EPayPanel",
    components: {SmsInputDialog},
    data: function () {
      return {
        audio: null,
        params: {
          corpNo: 'IICAMP0000000809',
          corpSerno: '',
          outServiceCode: 'openaccount',
          corpCisNo: '1',
          corpMediumId: '',
          bindMedium: '6212880200000000139',
          certType: '0',
          certNo: '110110198801051116',
          custName: '测试五',
          mobileNo: '18944444444',
          notifyAddr: '',
        },
        reading: false
      }
    },
    methods: {
      submit: function () {
        var that = this;
        $.ajax({
          type: "post",
          url: "http://localhost:8080/ifinance/create/createAccount",
          data: this.$data.params,
          success: function (result) {
            if (result.status === "0") {
              console.log(result);
              that.read_input("账户受理成功，您的短信编号是：" + result.data + "，请输入您的短信验证码")
              that.$refs.sms_input_dialog.toggle();
              that.$refs.sms_input_dialog.$data.params.smsSendNo = "";
              that.$refs.sms_input_dialog.set_corpSerNoOriginal(that.params.corpSerno);
            } else {
              that.read_input("账户受理失败")
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
    mounted: function () {
      let text = " ";
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
    }
  }
</script>

<style scoped>
  .input_space {
    margin-bottom: 10px
  }
</style>
