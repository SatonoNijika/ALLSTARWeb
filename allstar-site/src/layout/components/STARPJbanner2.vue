<template>
  <div class="banner-min">
    <div class="container">
      <div class="tit">集成 ALLSTAR 产品</div>
      <div class="txt">STARPJ集成了超声设备而不是CT成像，以减少患者和医生在手术过程中的辐射。结合光学设备进行实时定位，实现手术过程中的实时导航。同时集成力传感设备，实时获取针头插入过程中的力反馈信息，确保术中安全。</div>
    </div>
  </div>
</template>

<style scoped>
.banner-min {
  width: 100%;
  height: 1065px;
  background-image: url('/public/img/talk.jpg'); /* 设置背景图路径 */
  background-size: cover; /* 背景图填充整个容器 */
  background-position: center; /* 背景图居中对齐 */
  background-repeat: no-repeat; /* 不重复显示背景图 */
}

.container {
  margin: 0 500px; /* 左右边距 */
  height: 100%; /* 容器高度撑满 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 垂直排列 */
}

.tit {
  font-size: 120px;
  font-weight: bold;
   color: #ffffff; /* 文本颜色 */
  margin-bottom: 20px; /* 标题底部间距 */
}

.txt {
  font-size: 28px;
  color: #ffffff; /* 文本颜色 */
}
</style>
