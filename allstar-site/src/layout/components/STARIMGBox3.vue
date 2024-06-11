<template>
  <div class="STARIMG-Box">
    <div class="container">
      <div class="flex">
        <div class="left">
          <div class="pic">
            <img src="/public/img/needle.png" alt="Star Image">
          </div>
        </div>
        <div class="right">
          <div class="tit">A-STAR 配备独家设计的针架</div>
          <div class="txt">A-STAR针架通过对标记的光学跟踪来工作。基于光学定位算法，在机器人控制界面上实时显示消融针/穿刺针与目标的相对位置。医生可以清楚地看到针尖及其延伸线在患者体内的位置。因此，可以更精确地控制针的运动，提高穿刺精度。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.STARIMG-Box {
  padding: 128px 0;
}

.container {
  margin: 0 346px;
}

.flex {
  display: flex;
}

.left {
  flex: 0.8;
}

.pic {
  /* 确保 pic 容器内的内容水平居中 */
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.pic img {
  width: 536px; /* 图片宽度充满父容器 */
  height: 730px; /* 保持高度自适应 */
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
}

.tit {
  font-size: 72px;
  margin-top: 20px; /* 标题与内容之间的间距 */
  text-align: left;
  font-weight: bold;
}

.txt {
  padding-top: 50px;
  font-size: 28px;
  text-align: left;
  line-height: 1.8; /* 设置段间距为行高的1.5倍 */
  color: #000;
}
</style>
