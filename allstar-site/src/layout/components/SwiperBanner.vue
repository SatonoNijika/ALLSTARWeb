<template>
    <div class="project">
        <div class="project-swiper">
            <swiper
                    :slidesPerView="1"
                    :spaceBetween="10"
                    :loop="true"
                    :centeredSlides="false"
                    :autoplay="{delay: 10000,disableOnInteraction: false}"
                    :navigation="navigation"
                    :modules="modules"
                    class="mySwiper">
                <swiper-slide v-for="event in events" :key="event.id">
                <div class="container">
                    <div class="swiper-content">
                        <div><img :src="getEventImageUrl(event.id)" alt="" style="height: 970px;  width: 100%; border-radius: 20px; /* 设置边角为圆润效果 */"></div>
                    </div>
                </div>
                </swiper-slide>
            </swiper>
            <div class='button-prev' @click.stop='prevEl'><img src="/public/img/zhuo.png" alt="" style="height: 100px;  width: 100px; ">
            </div>
            <div class='button-next' @click.stop='nextEl'><img src="/public/img/you.png" alt="" style="height: 100px;  width: 100px; ">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue'; // swiper所需组件
// 这是分页器和对应方法，swiper好像在6的时候就已经分离了分页器和一些其他工具
import {Autoplay, Navigation, Pagination, A11y} from 'swiper/modules';
// 引入swiper样式，对应css 如果使用less或者css只需要把scss改为对应的即可
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {ref} from "vue";
// setup语法糖只需要这样创建一个变量就可以正常使用分页器和对应功能，如果没有这个数组则无法使用对应功能
const modules = [Autoplay, Pagination, Navigation, A11y];
const navigation = ref({
    nextEl: '.button-next',
    prevEl: '.button-prev',
})
const prevEl = () => {
    // console.log('上一张' + index + item)
}
const nextEl = () => {
    // console.log('下一张')
}

const events = [
  { id: 7 },
  { id: 8 },
  { id: 4 },
];

const getEventImageUrl = (eventId) => {
  return `/public/img/item${eventId}.png`;
};
</script>


<style scoped lang="scss">
.project {
  width: 100%;
  height: 1000px;
  padding-bottom: 50px;
  &-swiper {
    position: relative;
    width: 90%;
    height: 980px;
    margin: auto;
    //padding-left: 3px;
    swiper {
      width: 100%;
      swiper-slide {
        height: 100%;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        border: 1px solid #E4E5EA;
        //width: 100%;
        background: #F9FAFE;
      }
    }
    .button-prev {
      position: absolute;
      top: 450px;
      left: -100px;
      z-index: 1000; /* 添加 z-index 属性 */
    }
    .button-next {
      position: absolute;
      top: 450px;
      right: -100px;
      z-index: 1000; /* 添加 z-index 属性 */
    }
  }
}

.container {
  width: 100%;
  height: 1100px;
  overflow: hidden;
}

.swiper-content {
  text-align: center;
  width: 100%;
  height: 958px;
  margin: 40px 0;
  border-right: 1px solid #E4E5EA;

}


</style>


