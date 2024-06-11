<template>
  <div class="company-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">让我们建立联系</div>
          <div class="subtit">欢迎各位投资方和合作伙伴。</div>
          <div class="subtxt">我们的时事通讯为您提供HANGLOK的最新消息。</div>
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-box {
  padding: 145px 0;
  background-image: url('/public/img/contact.jpg');
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
  font-size: 96px;
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

.subtit {
  font-size: 30px;
  font-weight: bold;
  text-align: left; /* 将标题文字靠左对齐 */
}

.subtxt {
  font-size: 30px;
  margin-top: 13px;
  text-align: left; /* 将标题文字靠左对齐 */
}
</style>
