<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <CommentBox />
                </div>
                <div>
                <QABox />
                </div>
                <div>
                <QuestionBox />
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
import Servicebanner from './components/Servicebanner.vue';
import QABox from './components/QABox.vue';
import ElementType from './components/ElementType.vue';
import Datacontent from './components/Datacontent.vue';
import DataBox from './components/DataBox.vue';
import DataType from './components/DataType.vue';
import DataType2 from './components/DataType2.vue';
import Articalcontent from './components/Articalcontent.vue';
import ArticleList from './components/ArticleList.vue';
import Meetcontent from './components/Meetcontent.vue';
import MeetList from './components/MeetList.vue';
import RequireBox from './components/RequireBox.vue';
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