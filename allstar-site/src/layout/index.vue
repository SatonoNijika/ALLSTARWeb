<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <SwiperBanner />
                </div>
                <div>
                <List />
                </div>
                <div>
                <IndBox />
                </div>
                <div>
                <IndBoxSwiperSilde3 /> 
                </div>
                <div>
                <IndBoxSwiperbd /> 
                </div>
                <div>
                <IndBoxSwiperbd2 /> 
                </div>
                <div>
                <IndBoxSwiperSilde /> 
                </div>
                <div>
                <IndBoxSwiperSilde2 /> 
                </div>
            </div>
        </main>
        <FooterBg />
        <FooterB />
    </div>
</template>

<script setup>
import HeaderBox from './components/HeaderBox.vue';
import SwiperBanner from './components/SwiperBanner.vue';
import List from './components/List.vue';
import IndBox from './components/IndBox.vue';
import FooterBg from './components/FooterBg.vue';
import FooterB from './components/FooterB.vue';
import IndBoxSwiperSilde from './components/IndBoxSwiperSilde.vue';
import IndBoxSwiperSilde2 from './components/IndBoxSwiperSilde2.vue';
import IndBoxSwiperSilde3 from './components/IndBoxSwiperSilde3.vue';
import IndBoxSwiperbd from './components/IndBoxSwiperbd.vue';
import IndBoxSwiperbd2 from './components/IndBoxSwiperbd2.vue';
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%; /* 自适应父容器宽度 */
  margin: 0 auto;
  padding: 2px;
  color: #800080;
  /* 其他布局样式 */
}


main {
  margin-top: 20px;
}

</style>