<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <!-- 使用导入的 SwiperBanner 组件 -->
                <SNSbanner />
                </div>
                <div>
                <SNSlife /> 
                </div>
                <div>
                <IndBoxSwiperbd3 /> 
                </div>
                <div>
                <SNSBox /> 
                </div>
                <div>
                <SNSlifebox /> 
                </div>
                <div>
                <PolicyBox /> 
                </div>
            </div>
        </main>
        <!-- 使用导入的 FooterB 组件 -->
        <FooterBg />
        <FooterB />
    </div>
</template>

<script setup>
import HeaderBox from './components/HeaderBox.vue';
import FooterBg from './components/FooterBg.vue';
import FooterB from './components/FooterB.vue';
import SNSbanner from './components/SNSbanner.vue';
import SNSlife from './components/SNSlife.vue';
import IndBoxSwiperbd3 from './components/IndBoxSwiperbd3.vue';
import SNSBox from './components/SNSBox.vue';
import SNSlifebox from './components/SNSlifebox.vue';
import TeamBox from './components/TeamBox.vue';
import JoinBox from './components/JoinBox.vue';
import JoinUsBox from './components/JoinUsBox.vue';
import JoinType from './components/JoinType.vue';
import PolicyBox from './components/PolicyBox.vue';

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