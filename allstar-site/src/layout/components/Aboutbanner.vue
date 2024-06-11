<template>
  <div class="banner-min">
    <div class="container">
      <div class="tit">ALLSTAR</div>
      <div class="txt">TO THE NEXT-GENERATION INTERVENTIONS</div>
    </div>
  </div>
</template>

<style scoped>
.banner-min {
  width: 100%;
  height: 1065px;
  background-image: url('/public/img/shoushu.jpg'); /* 设置背景图路径 */
  background-size: cover; /* 背景图填充整个容器 */
  background-position: center; /* 背景图居中对齐 */
  background-repeat: no-repeat; /* 不重复显示背景图 */
}

.container {
  margin: 0 101px; /* 左右边距 */
  height: 100%; /* 容器高度撑满 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 垂直排列 */
}

.tit {
  font-size: 196px;
  font-weight: bold;
   color: #ffffff; /* 文本颜色 */
  margin-bottom: 20px; /* 标题底部间距 */
}

.txt {
  font-size: 48px;
  color: #ffffff; /* 文本颜色 */
}
</style>
