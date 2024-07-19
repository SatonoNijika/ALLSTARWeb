<template>
  <div class="footer-b">
    <div class="container">
      <div class="flexbox">
        <div class="text-block">
          <div class="left">Copyright © 2023-2024 ALL-STAR-MED. All Rights Reserved.</div>
          <div class="right">粤ICP备2024244685号-1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.footer-b {
  background-color: rgb(34, 35, 36); /* 深蓝色背景 */
  color: #fff;
  padding: 10px 0;
  display: flex;
  justify-content: center; /* 内容水平居中 */
  align-items: center; /* 内容垂直居中 */
  height: 75px;
}

.container {
  display: flex;
  justify-content: center; /* 内容水平居中 */
  align-items: center; /* 内容垂直居中 */
  width: 100%; /* 宽度占满容器 */
}

.flexbox {
  display: flex;
  justify-content: center; /* 内容水平居中 */
  align-items: center; /* 内容垂直居中 */
  width: 100%; /* 宽度占满容器 */
}

.text-block {
  display: flex;
  flex-direction: column; /* 垂直布局 */
  align-items: center; /* 水平居中 */
  text-align: center; /* 文本居中 */
}

.left,
.right {
  margin: 5px 0; /* 设置上下外边距 */
}

</style>