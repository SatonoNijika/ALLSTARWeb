<template>
  <div class="ind-box">
    <div class="container">
      <div class="int-tit">
        <div class="title">SUPPORTS</div>
      </div>
      <div class="m-box">
        <div class="partners-list">
          <!-- 初始展示的图片列表 -->
          <div class="partner" v-for="(company, index) in companies" :key="index">
            <div class="partner-image-container">
              <img :src="company.imageUrl" :alt="company.name" class="partner-logo" />
            </div>
          </div>
        </div>
        <div class="partners-list2">
          <!-- 初始展示的图片列表 -->
          <div class="partner" v-for="(company, index) in companies" :key="index">
            <div class="partner-image-container">
              <img :src="company.imageUrl" :alt="company.name" class="partner-logo" />
            </div>
          </div>
        </div>
        <div class="partners-list3">
          <!-- 初始展示的图片列表 -->
          <div class="partner" v-for="(company, index) in companies" :key="index">
            <div class="partner-image-container">
              <img :src="company.imageUrl" :alt="company.name" class="partner-logo" />
            </div>
          </div>
        </div>
        <div class="partners-list4">
          <!-- 初始展示的图片列表 -->
          <div class="partner" v-for="(company, index) in companies" :key="index">
            <div class="partner-image-container">
              <img :src="company.imageUrl" :alt="company.name" class="partner-logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const companies = [
  { imageUrl: '/public/img/var1.png', name: 'Company 1' },
  { imageUrl: '/public/img/var2.png', name: 'Company 2' },
  { imageUrl: '/public/img/var3.png', name: 'Company 3' },
  { imageUrl: '/public/img/var1.png', name: 'Company 4' },
  { imageUrl: '/public/img/var2.png', name: 'Company 5' },
  { imageUrl: '/public/img/var3.png', name: 'Company 1' },
  { imageUrl: '/public/img/var1.png', name: 'Company 2' },
  { imageUrl: '/public/img/var2.png', name: 'Company 3' },
  { imageUrl: '/public/img/var3.png', name: 'Company 4' },
  { imageUrl: '/public/img/var1.png', name: 'Company 5' },
  { imageUrl: '/public/img/var2.png', name: 'Company 1' },
  { imageUrl: '/public/img/var3.png', name: 'Company 2' },
  { imageUrl: '/public/img/var1.png', name: 'Company 3' },
  { imageUrl: '/public/img/var2.png', name: 'Company 4' },
  { imageUrl: '/public/img/var3.png', name: 'Company 5' },
];

</script>

<style scoped>
.ind-box {
  padding: 100px 0;
}

.int-tit {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

.title {
  font-size: 72px;
  font-weight: bold;
  background-image: linear-gradient(to top, #ffffff, #800080);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}

.m-box {
  display: flex;
  justify-content: center;
  height: 180px;
  overflow: hidden;
}

.partners-list {
  align-items: center;
  display: flex;
  animation: scroll 50s linear infinite; /* 设置无限循环滚动动画，速度和时间可以根据需要调整 */
}
.partners-list2 {
  align-items: center;
  display: flex;
  animation: scroll 50s linear infinite; /* 设置无限循环滚动动画，速度和时间可以根据需要调整 */
}
.partners-list3 {
  align-items: center;
  display: flex;
  animation: scroll 50s linear infinite; /* 设置无限循环滚动动画，速度和时间可以根据需要调整 */
}
.partners-list4 {
  align-items: center;
  display: flex;
  animation: scroll 50s linear infinite; /* 设置无限循环滚动动画，速度和时间可以根据需要调整 */
}

.partner {
  padding: 0 50px;
}

.partner-image-container {
  width: 170px;
  height: 150px;
  box-shadow: 4px 4px 4px 4px rgba(0.4, 0.4, 0.4, 0.1);
}

.partner-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%); /* 图片集合向左滚动一个容器的宽度 */
  }
}
</style>
