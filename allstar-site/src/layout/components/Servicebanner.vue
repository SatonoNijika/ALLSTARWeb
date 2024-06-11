<template>
  <div class="company-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">SERVICE<br>SUPPORT</div>
          <div class="line"></div>
        </div>
        <div class="right">
          <div class="subtit">我们是 ALLSTAR</div>
          <div class="subtxt">- 我们为您提供服务与支持 -</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.company-box {
  width: 100%;
  height: 1065px;
  background-image: url('/public/img/vr1.jpg'); /* 设置背景图路径 */
  background-size: cover; /* 背景图填充整个容器 */
  background-position: center; /* 背景图居中对齐 */
  background-repeat: no-repeat; /* 不重复显示背景图 */
  color: #fff; /* 设置文字颜色为白色，以适应背景 */
}

.container {
  margin: 0 101px; /* 左右边距 */
  height: 100%; /* 容器高度撑满 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 垂直排列 */
}

.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.left {
  flex: 1;
}

.tit {
  font-size: 108px;
  font-weight: bold;
  margin-bottom: 10px; /* 调整标题与下划线的间距 */
  text-align: left; /* 将标题文字靠左对齐 */
}


.line {
  height: 15px;
  width: 150px;
  background-color: #fff;
  margin-top: 66px;
}

.right {
  flex: 2;
  margin-left: 30px;
  height: 250px;
  align-content: center;
}

.subtit {
  font-size: 56px;
  font-weight: bold;
  text-align: left; /* 将标题文字靠左对齐 */
}

.subtxt {
  font-size: 32px;
  margin-top: 13px;
  text-align: left; /* 将标题文字靠左对齐 */
}
</style>
