<template>
  <div class="company-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">资料中心</div>
          <div class="line"></div>
        </div>
        <div class="right">
          <div class="subtit">我们着手改变外科手术。</div>
          <div class="subtxt">认真对待我们的使命，并为手术机器人提供循证方法。下面是我们持续致力于研究的资料。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-box {
  padding: 145px 0;
  background-image: url('/public/img/docm.jpg');
  background-size: cover;
  background-position: center;
  color: #fff; /* 设置文字颜色为白色，以适应背景 */
}

.container {
  margin: 0 229px;
}

.flex-container {
  display: flex;
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
