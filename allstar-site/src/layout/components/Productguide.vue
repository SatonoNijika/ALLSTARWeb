<template>
  <div class="Product-box">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="tit">下载最新的 C-STAR 高质量干预说明</div>
          <ul class="list">
            <li>C-STAR系统的组成</li>
            <li>C-STAR工作流程</li>
            <li>标记使用场景分析</li>
          </ul>
          <div class="link">
            <a href="#">下载PDF</a>
          </div>
        </div>
        <div class="right">
          <div class="pic">
            <img src="/public/img/xray.png" alt="Product Image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Product-box {
  padding: 168px 0; /* 上下168的padding */
}

.container {
  margin: 0 340px; /* 左右340的margin */
}

.flex-container {
  display: flex;
}

.left {
  flex: 0.55;
}

.right {
  flex: 1;
}

.tit {
 font-size: 52px;
 font-weight: bold;
 text-align: left;
}

.list {
  padding-top: 48px; /* ul有上48的padding */
}

.list li {
  padding: 12px 0;
  padding-left: 37px; /* li有12的上下padding和37的左padding */
  text-align: left;
  font-size: 28px;
  color: black;
}

.link {
  padding-top: 51px; /* div link有上48的padding */
  text-align: left;
}

.link a {
  height: 125px;
  width: 64px;
  font-size: 32px;
  background-color: rgb(41, 73, 195);
  color: white;
  text-decoration: none;
  border-radius: 20px; /* 设置边角为圆润效果 */
  padding: 0 24px;
}

.pic img {
  /* 图片样式 */
  width: 100%; /* 图片填充容器 */
  height: auto; /* 自适应高度 */
}
</style>
