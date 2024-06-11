<template>
  <div class="element-type">
    <div class="elementor-container">
      <div class="elementor-widget" style="padding: 96px 240px;">
        <span class="tit-span">感受压力：进行手术对身体和精神的影响</span><br/>
        <span>强调腹腔镜手术对我们外科医生的影响</span>
        <div class="wid-inner">
          <span class="custom-span">阅读我们的报告</span>
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
  background-image: url('/public/img/shoushu.jpg');
  background-size: cover;
  background-position: center;
  color: #fff; /* 设置文字颜色为白色，以适应背景 */
  border-radius: 20px; /* 设置边角为圆润效果 */
  margin-bottom: 40px;
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
}
</style>
