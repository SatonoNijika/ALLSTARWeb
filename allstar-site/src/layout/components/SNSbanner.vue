<template>
  <div class="banner-min">
    <div class="container">
      <div class="tit">Company moment</div>
      <div class="txt">我们的使命是严肃而雄心勃勃的。但我们在开放、负责和有趣的文化中工作。</div>
    </div>
  </div>
</template>

<style scoped>
.banner-min {
  width: 100%;
  height: 665px;
  background-image: url('/public/img/snsbanner1.jpg'); /* 设置背景图路径 */
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
  font-size: 56px;
  font-weight: bold;
   color: #ffffff; /* 文本颜色 */
  margin-bottom: 20px; /* 标题底部间距 */
}

.txt {
  font-size: 28px;
  color: #ffffff; /* 文本颜色 */
}
</style>
