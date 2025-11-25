<template>
  <div class="result-card">
    <el-card>
      <h2>Diagnosis Result</h2>

      <div v-if="loading" class="loading">Analyzing EEG signal...</div>

      <div v-else>
        <p><strong>Prediction:</strong> {{ result.prediction }}</p>
        <p><strong>Confidence:</strong> {{ result.confidence }}</p>

        <el-button type="primary" @click="$emit('back')">
          Back
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DiagnoseResultCard",
  props: {
    loading: { type: Boolean, default: false },
    result: {
      type: Object,
      default: () => ({
        prediction: "Unknown",
        confidence: "0.00",
      }),
    },
  },
};
</script>

<style scoped>
.result-card {
  max-width: 500px;
  margin: 30px auto;
}

.loading {
  padding: 20px;
  font-size: 18px;
  color: #4f46e5;
  font-weight: bold;
}
</style>
