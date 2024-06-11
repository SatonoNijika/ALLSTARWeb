<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <!-- 使用导入的 SwiperBanner 组件 -->
                <Aboutbanner/>
                </div>
                <div>
                <!-- 使用导入的 SwiperBanner 组件 -->
                <CompanyBox/>
                </div>
                <div>
                <IndBoxSwiperbd3 /> 
                </div>
                <div>
                <mapbox />
                </div>
                <div>
                <ParentBox /> 
                </div>
                <div>
                <MissionBox /> 
                </div>
                <div>
                <TeamBox /> 
                </div>
                <div>
                <JoinBox /> 
                </div>
                <div>
                <JoinUsBox /> 
                </div>
                <div>
                <JoinType /> 
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
import Aboutbanner from './components/Aboutbanner.vue';
import CompanyBox from './components/CompanyBox.vue';
import IndBoxSwiperbd3 from './components/IndBoxSwiperbd3.vue';
import ParentBox from './components/ParentBox.vue';
import MissionBox from './components/MissionBox.vue';
import TeamBox from './components/TeamBox.vue';
import JoinBox from './components/JoinBox.vue';
import JoinUsBox from './components/JoinUsBox.vue';
import JoinType from './components/JoinType.vue';
import PolicyBox from './components/PolicyBox.vue';
import mapbox from './components/mapbox.vue';

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