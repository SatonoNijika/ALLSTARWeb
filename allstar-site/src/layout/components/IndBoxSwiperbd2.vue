<template>
  <div class="ind-box">
    <div class="container">
      <div class="int-tit">
        <div class="title">PROFESSOR</div>
      </div>
      <div class="swiper-bd">
        <div class="e-ani">
          <div class="swiper-container" ref="swiperContainer">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="event in events" :key="event.id">
                <div class="i pic-size">
                  <img :src="getEventImageUrl(event.id)" alt="Event Image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from 'swiper';

const events = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const getEventImageUrl = (eventId) => {
  // 构建本地图片路径
  return `/public/img/pro${eventId}.png`;
};

let swiper = null;
const swiperContainer = ref(null);


onMounted(() => {
  swiper = new Swiper(swiperContainer.value, {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true
  });
});

onBeforeUnmount(() => {
  if (swiper) {
    swiper.destroy();
  }
});
</script>

<style scoped>
.ind-box {
  width: 100%;
  overflow: hidden; /* 隐藏容器外部的内容 */
  height: 826px;
  padding-top: 74px;
  padding-bottom: 53px;
  background-color: #f2f3f5;
}

.int-tit {
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

.container {
  width: 100%;
  overflow: hidden; /* 隐藏容器外部的内容 */
}

.swiper-bd {
  width: calc(100% - 350px); /* 控制宽度在 container 的宽度内，减去左右 padding */
  padding-left: 175px;
  padding-right: 175px;
  margin: 13px 0;
  overflow: hidden; /* 隐藏容器外部的内容 */
}

.e-ani {
  width: 100%;
  overflow: hidden; /* 隐藏容器外部的内容 */
}

.swiper-wrapper {
  display: flex;
}

.swiper-slide {
  width: 25%; /* 每行显示 4 张图片，每张占据 25% 的宽度 */
  box-sizing: border-box;
  padding: 0 10px;
}

.pic-size {
  width: 100%;
  height: 600px; /* 设置图片高度为 600px */
  overflow: hidden; /* 限制图片只在容器内部显示 */
}

.pic-size img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 确保图片等比缩放并填充满容器 */
  border-radius: 20px; /* 设置边角为圆润效果 */
}
</style>