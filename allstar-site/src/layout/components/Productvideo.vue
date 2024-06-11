<template>
  <div class="provideo-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="video">
            <!-- 这里放置视频图片 -->
            <img src="/public/img/rob.png" alt="Video Thumbnail">
          </div>
        </div>
        <div class="right">
          <div class="title">C-STAR的质量干预</div>
          <div class="text">观看视频，了解C-STAR如何治疗更多患者并提高手术质量。<br/><br/><br/> 了解 C-STAR 如何通过整合术前增强 CT、术中 CT、术中近红外光学、超声、语音、力感知和视觉信息，实现现场重建的综合感知和混合现实干预。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.provideo-box {
  padding: 128px 0; /* 上下128的padding */
  background-color: rgb(41, 73, 195);
}

.container {
  margin: 0 340px; /* 左右340的margin */
}

.flex-container {
  display: flex;
  align-items: center;
}

.left {
  flex: 1;
}

.right {
  flex: 1;
  padding-left: 168px; /* right有一个左168的padding */
}

.video img {
  /* 视频图片样式 */
  width: 100%; /* 填充视频容器 */
  height: auto; /* 自适应高度 */
  border-radius: 20px;
}

.title {
  font-size: 54px;
  font-weight: bold;
  color: white;
  text-align: left;
}

.text {
  padding-top: 48px; /* txt有一个上48的padding */
  font-size: 28px;
  color: white;
  text-align: left;
}
</style>
