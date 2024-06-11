<template>
  <div class="company-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">让我们建立联系</div>
          <div class="subtxt">我们的时事通讯为您提供ALLSTAR的最新消息。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.company-box {
  background-image: url('/public/img/contact.jpg');
  height: 640px;
  background-size: cover;
  background-position: center;
  color: #fff; /* 设置文字颜色为白色，以适应背景 */
  display: flex; /* 使用 flexbox 布局 */
  align-items: center; /* 将子元素垂直居中 */
  background-color: rgba(0, 0, 0, 2); /* 设置背景颜色为黑色，透明度为 0.7 */
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
