<template>
  <div class="home">
    <!-- 渐变动画背景 -->
    <div class="background"></div>

    <div class="content">
      <!-- 标题 -->
      <h1 class="title">NeuroScan-M 抑郁症智能诊断系统</h1>
      <p class="subtitle">基于 MDDGCN 的脑电情绪解码平台</p>

      <!-- 功能卡片区 -->
      <div class="card-container">
        <el-card class="feature-card" shadow="hover">
          <div class="icon-circle">
            <i class="icon el-icon-upload"></i>
          </div>
          <h3>上传 EEG 数据</h3>
          <p>支持多通道 EEG 文件上传，系统自动完成预处理。</p>
        </el-card>

        <el-card class="feature-card" shadow="hover">
          <div class="icon-circle">
            <i class="icon el-icon-data-line"></i>
          </div>
          <h3>智能诊断</h3>
          <p>基于 MDDGCN 模型，实现深度抑郁症智能识别。</p>
        </el-card>

        <el-card class="feature-card" shadow="hover">
          <div class="icon-circle">
            <i class="icon el-icon-document"></i>
          </div>
          <h3>报告生成</h3>
          <p>自动生成诊断报告，可下载、分享及历史查询。</p>
        </el-card>
      </div>

      <!-- 按钮区 -->
      <div class="btn-area">
        <el-button type="primary" size="large" round @click="gotoDiagnose">
          开始诊断
        </el-button>
        <el-button type="success" size="large" round @click="gotoAbout">
          查看系统介绍
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()

const gotoDiagnose = () => router.push("/diagnose")
const gotoAbout = () => router.push("/about")
</script>

<style scoped>
/* ========================= */
/*       背景动画渐变         */
/* ========================= */
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(130deg, #6a5af9, #2fb7ff, #1fd1a1);
  background-size: 300% 300%;
  animation: gradientFlow 10s ease infinite;
  filter: blur(3px);
  z-index: -1;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* ========================= */
/*        内容主布局          */
/* ========================= */
.content {
  text-align: center;
  margin-top: 80px;
  color: white;
  animation: fadeIn 1.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.title {
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 50px;
}

/* ========================= */
/*         功能卡片           */
/* ========================= */
.card-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 0 auto 50px auto;
  max-width: 1000px;
}

.feature-card {
  width: 260px;
  border-radius: 16px;
  text-align: center;
  padding: 20px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(12px);
  color: white;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.03);
}

/* 圆形图标 */
.icon-circle {
  width: 70px;
  height: 70px;
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 15px auto;
}

.icon {
  font-size: 32px;
  color: white;
}

/* ========================= */
/*          按钮区域          */
/* ========================= */
.btn-area {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
