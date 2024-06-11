<template>
    <div class="layout-container">
        <HeaderBox />
        <main>
            <div>
                <div>
                <STARPJbanner />
                </div>
                <div>
                <STARPJDsg />
                </div>
                <div>
                <DsgBox />
                </div>
                <div>
                <STARPJbanner2 />
                </div>
            </div>
        </main>
        <FooterBg />
        <FooterB />
    </div>
</template>

<script setup>
import HeaderBox from './components/HeaderBox.vue';
import FooterBg from './components/FooterBg.vue';
import FooterB from './components/FooterB.vue';
import STARPJbanner from './components/STARPJbanner.vue';
import STARPJbanner2 from './components/STARPJbanner2.vue';
import STARPJDsg from './components/STARPJDsg.vue';
import DsgBox from './components/DsgBox.vue';
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