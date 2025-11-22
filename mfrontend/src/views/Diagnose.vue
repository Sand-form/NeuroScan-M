<template>
  <div>
    <NavBar />

    <div class="container">
      <h2>EEG 抑郁症诊断</h2>

      <UploadCard @uploaded="handleUpload" />

      <DiagnoseResultCard v-if="result" :result="result" />
    </div>
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import UploadCard from '../components/UploadCard.vue'
import DiagnoseResultCard from '../components/DiagnoseResultCard.vue'
import { ref } from 'vue'
import { predictEEG } from '../api/eeg'

const result = ref(null)

const handleUpload = async (file) => {
  const res = await predictEEG(file)
  result.value = res.data
}
</script>
