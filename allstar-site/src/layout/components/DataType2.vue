<template>
  <div class="element-type">
    <div class="elementor-container">
      <div class="elementor-widget" style="padding: 96px 240px;">
        <span class="tit-span">米尔顿凯恩斯大学医院 Versius 机器人辅助手术项目的结果</span><br/>
        <span>MKUH 报告称，自引入 Versius 以来，对康复时间表、患者预后和手术人员的福祉产生了重大影响，包括每年节省 450 个床位日。</span>
        <div class="wid-inner">
          <span class="custom-span">下载案例的研究</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.element-type {
  width: 1200px;
  margin: 0 auto; /* 将元素水平居中 */
}

.elementor-container {
  background-image: url('/public/img/kaifa.jpg');
  background-size: cover;
  background-position: center;
  color: #fff; /* 设置文字颜色为白色，以适应背景 */
  border-radius: 20px; /* 设置边角为圆润效果 */
  margin-bottom: 40px;
  text-shadow: -1px -1px 0 #000,  
               1px -1px 0 #000,
               -1px 1px 0 #000,
               1px 1px 0 #000; /* 描边效果，可以自行调整阴影的偏移和颜色 */
}

.elementor-widget {
  padding: 96px 240px;
}

.wid-inner {
  text-align: center;
}

.custom-span {
  display: block; /* 将 <span> 元素转换为块级元素，占据整行 */
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 60px; /* 上方间距为 20px */
}

.tit-span {
  display: block; /* 将 <span> 元素转换为块级元素，占据整行 */
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 20px; /* 上方间距为 20px */
  text-shadow: -1px -1px 0 #000,  
               1px -1px 0 #000,
               -1px 1px 0 #000,
               1px 1px 0 #000; /* 描边效果，可以自行调整阴影的偏移和颜色 */
}
</style>
