<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <!-- 使用导入的 SwiperBanner 组件 -->
                <Productbanner />
                </div>
                <div>
                <ProductDuty />
                </div>
                <div>
                <!-- 使用导入的 List 组件 -->
                <ProductQA />
                </div>
                <div>
                <Productlist />
                </div>
                <div>
                <ProductIDEA />  
                </div>
                <div>
                <Productvideo />  
                </div>
                 <div>
                <Productguide />  
                </div>
                <div>
                <CoopBox2 /> 
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
import Productbanner from './components/Productbanner.vue';
import Productlist from './components/Productlist.vue';
import ProductDuty from './components/ProductDuty.vue';
import ProductQA from './components/ProductQA.vue';
import ProductIDEA from './components/productIDEA.vue';
import CoopBox2 from './components/CoopBox2.vue';
import Productvideo from './components/Productvideo.vue';
import Productguide from './components/Productguide.vue';
import STARIMGBox2 from './components/STARIMGBox2.vue';
import Meetcontent from './components/Meetcontent.vue';
import MeetList from './components/MeetList.vue';
import ASTARBox from './components/ASTARBox.vue';
import Requirecontent from './components/Requirecontent.vue';
import RequireTable from './components/RequireTable.vue';
import CommentBox from './components/CommentBox.vue';
import QuestionBox from './components/QuestionBox.vue';
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