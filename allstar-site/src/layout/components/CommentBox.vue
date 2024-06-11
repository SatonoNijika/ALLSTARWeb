<template>
  <div class="company-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">常见问题解决</div>
          <div class="line"></div>
        </div>
        <div class="right">
          <div class="subtit">您似乎遇到了点问题。</div>
          <div class="subtxt">提供基础问题的解决方法，我们致力于总结大家的情况，给出统一的回复。</div>
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
