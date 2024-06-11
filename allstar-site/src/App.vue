<template>
  <el-config-provider :locale="elementLocales[locale]">
    <div id="scale-wrapper" :style="wrapperStyle">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { elementLocales } from '@/i18n';
const { locale } = useI18n();
locale.value = localStorage.getItem('locale') || 'zh-cn';

const scale = ref(1);
const baseWidth = 2750;  // 基准宽度
const baseHeight = 1440; // 基准高度

const updateScale = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widthScale = viewportWidth / baseWidth;
  const heightScale = viewportHeight / baseHeight;
  scale.value = Math.min(widthScale, heightScale);

  // 设置居中样式
  wrapperStyle.value = {
    transform: `scale(${scale.value})`,
    transformOrigin: 'center center',
    width: `${baseWidth}px`,
    height: `${baseHeight}px`,
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%) scale(${scale.value})`,
  };
};

onMounted(() => {
  updateScale();
  window.addEventListener('resize', updateScale);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScale);
});

const wrapperStyle = ref({});

watch(scale, (newScale) => {
  wrapperStyle.value = {
    transform: `scale(${newScale})`,
    transformOrigin: 'center center',
    width: `${baseWidth}px`,
    height: `${baseHeight}px`,
    position: 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%) scale(${newScale})`,
  };
});
</script>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 99vw;
  height: 100vh;
  position: relative;
}
#scale-wrapper {
  width: 100%;
  height: 100%;
}
</style>
