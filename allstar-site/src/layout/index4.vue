<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <!-- 使用导入的 SwiperBanner 组件 -->
                <Communitybanner />
                </div>
                <div>
                <CommunicateDuty />
                </div>
                <div>
                <CommunicateBox />
                </div>
                <div>
                <DutyBox />
                </div>
                <div>
                <CoopBox />
                </div>
                <div>
                <Coopcontent />
                </div>
                <div>
                <CoopTable />
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
import Communitybanner from './components/Communitybanner.vue';
import CommunicateBox from './components/CommunicateBox.vue';
import CommunicateDuty from './components/CommunicateDuty.vue';
import DutyBox from './components/DutyBox.vue';
import CoopBox from './components/CoopBox.vue';
import CoopTable from './components/CoopTable.vue';
import Coopcontent from './components/Coopcontent.vue';
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