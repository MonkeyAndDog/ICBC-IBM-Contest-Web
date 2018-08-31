<template>
  <div id="qr_image_modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
            aria-hidden="true">&times;</span></button>
          <h3 class="modal-title" id="myModalLabel">呐~</h3>
        </div>
        <div class="modal-body">
          <div class="row center-block">
            <img class="center-block" v-bind:src="imageSrc"/>
            <h3 class="text-center">{{ message }}</h3>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QrImageDialog",
    data: function () {
      return {
        imageSrc: '',
        message: ''
      }
    },
    methods: {
      toggle: function () {
        $('#qr_image_modal').modal('toggle');
      }
    }
  }
</script>

<style scoped>

</style>
