<template>
  <div class="company-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">Join Us</div>
          <div class="line"></div>
        </div>
        <div class="right">
          <div class="subtit">Create medical well-being for every human being!</div>
          <div class="subtxt">Provide world-class surgical treatment solutions and create fully intelligent multiple collaborative robots to free medicine hands and eyes.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-box {
  padding: 145px 0;
  background-image: url('/public/img/bg.png');
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
