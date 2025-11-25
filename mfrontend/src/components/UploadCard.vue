<template>
  <div class="upload-card">
    <h3 class="title">上传 EEG 文件</h3>

    <label class="upload-area">
      <div class="upload-icon">📁</div>
      <div class="text">点击或拖拽文件到此处上传</div>
      <input type="file" @change="onFileChange" />
    </label>
  </div>
</template>

<script>
export default {
  name: "UploadCard",
  emits: ["file-selected"],
  methods: {
    onFileChange(e) {
      const file = e.target.files[0]
      this.$emit("file-selected", file)
    },
  },
}
</script>
