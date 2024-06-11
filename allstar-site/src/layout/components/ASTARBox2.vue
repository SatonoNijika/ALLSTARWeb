<template>
  <div class="astar-box">
    <div class="container">
      <div class="tit">ASTARBOX</div>
      <div class="sub-tit" style="padding-top: 13px;">Subtitle</div>
      <div class="video-box" style="padding-top: 63px;">
        <!-- 在这里放置视频文件 -->
      </div>
      <div class="tabs-box" style="margin-top: 163px;">
        <div class="e-ani">
          <button v-for="index in 5" :key="index">
            <span>Button {{ index }}</span>
            <span>Description {{ index }}</span>
          </button>
        </div>
        <div class="style">
          <div class="mess">
            <!-- 这里放置根据按钮选择的图像 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.astar-box {
  padding: 127px 0; /* 上下127的padding */
}

.container {
  margin: 0 346px; /* 左右346的margin */
}

</style>