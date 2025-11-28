<template>
  <div class="about">
    <div class="background"></div>

    <div class="content">
      <h1 class="title">NeuroScan-M 系统介绍</h1>
      <p class="subtitle">基于 MDDGCN 的智能抑郁症脑电诊断平台</p>

      <div class="card-container">

        <!-- 系统简介 -->
        <el-card class="info-card" shadow="hover">
          <h2>🧠 系统简介</h2>
          <p>
            NeuroScan-M 是一套基于脑电（EEG）数据的智能抑郁症诊断系统。
            通过深度学习模型 <strong>MDDGCN</strong> 对时空特征进行融合式分析，
            能够辅助识别潜在的抑郁风险。
          </p>
        </el-card>

        <!-- 技术特点 -->
        <el-card class="info-card" shadow="hover">
          <h2>⚙️ 技术特点</h2>
          <ul>
            <li>多通道 EEG 数据自动预处理</li>
            <li>动态时域与空间域特征联合建模</li>
            <li>基于 DFGCM + MDCM + AFPM 的全新图卷积结构</li>
            <li>支持 EEG 信号上传、诊断、报告生成</li>
          </ul>
        </el-card>

        <!-- 诊断流程 -->
        <el-card class="info-card" shadow="hover">
          <h2>📈 使用流程</h2>
          <ol>
            <li>上传 EEG 文件（支持多通道）</li>
            <li>系统自动进行数据预处理与特征提取</li>
            <li>深度模型 MDDGCN 进行智能判别</li>
            <li>生成可视化诊断报告</li>
          </ol>
        </el-card>

        <!-- 注意说明 -->
        <el-card class="info-card" shadow="hover">
          <h2>⚠️ 使用说明</h2>
          <p>
            本系统仅作为科研用途的辅助诊断工具，不能替代临床医疗判断。
            所有分析结果应结合病史与医生意见综合评估。
          </p>
        </el-card>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  color: white;
  padding-bottom: 60px;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #6a5af9, #2fb7ff, #1fd1a1);
  background-size: 300% 300%;
  animation: flow 10s infinite ease;
  filter: blur(4px);
  z-index: -1;
}

@keyframes flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 主体内容 */
.content {
  padding-top: 80px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 1.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.title {
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
}

/* 卡片 */
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 25px;
}

.info-card {
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  color: white;
  text-align: left;
  transition: transform 0.4s ease;
}

.info-card:hover {
  transform: translateY(-8px);
}

.info-card h2 {
  margin-bottom: 10px;
  font-weight: 700;
}

.info-card ul,
.info-card ol {
  margin-left: 20px;
}

.info-card li {
  margin-bottom: 6px;
}
</style>
