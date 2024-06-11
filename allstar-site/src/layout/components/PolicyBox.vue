<template>
  <div class="cont-box">
    <div class="container">
      <div class="flex-box">
        <div class="top">
          <div class="tit">
            <span>横琴新区人才引进政策</span>
          </div>
        </div>
        <div class="bottom">
          <div class="padding-wrapper">
            <a href="https://www.hengqin.gov.cn/macao_zh_hans/zwgk/zcfg/zyzc/content/post_3647811.html" class="btn">更多</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cont-box {
  display: flex;
  height: 425px;
  position: relative;
  background-image: url('/public/img/doc1.jpg');
  align-items: center; /* 居中对齐 */
  background-size: cover; /* 背景图填充整个容器 */

}


.container {
  margin: 0 354px;
}

.flex-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; /* 居中对齐 */
  height: 100%;
}
.top {
  padding-top: 20px;
}

.tit {
  font-size: 42px;
  font-weight: bold;
  text-align: left; /* 将标题文字靠左对齐 */
}

.bottom {
  display: flex; /* 使用 Flex 布局 */
  justify-content: flex-start; /* 左对齐 */
  align-items: center; /* 垂直居中对齐 */
  padding-top: 74px;
}

.padding-wrapper {
  padding: 0 42px;
}

.btn {
  padding: 10px 42px;
  background-color: rgb(255, 180, 0);
  border-radius: 50px;
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-size: 32px;
}
</style>
