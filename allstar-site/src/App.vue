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
const baseWidth = 2750;  // Base width
const baseHeight = 1440; // Base height

const updateScale = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const widthScale = viewportWidth / baseWidth;
  const heightScale = viewportHeight / baseHeight;
  scale.value = Math.min(widthScale, heightScale);

  // Centering style
  wrapperStyle.value = {
    transform: `scale(${scale.value})`,
    transformOrigin: 'top center',  // 改为 'top center'
    width: `${baseWidth}px`,
    height: `${baseHeight}px`,
    position: 'absolute',
    top: `0`,  // 改为 0
    left: `50%`,
    transform: `translate(-50%, 0) scale(${scale.value})`,  // 调整以消除空白
  };
};

onMounted(() => {
  // 添加重定向逻辑
  try {
    const urlhash = window.location.hash;
    if (!urlhash.match("fromapp")) {
      if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
        window.location.replace("http://star.allstar-med.com/"); // 修改为你的手机站网址
      }
    }
  } catch (err) {
    console.error(err);
  }

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
    transformOrigin: 'top center',  // 改为 'top center'
    width: `${baseWidth}px`,
    height: `${baseHeight}px`,
    position: 'absolute',
    top: `0`,  // 改为 0
    left: `50%`,
    transform: `translate(-50%, 0) scale(${newScale})`,  // 调整以消除空白
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

@media (max-width: 600px) {
  #scale-wrapper {
    transform: scale(0.5); /* Adjust as necessary for smaller screens */
    transform-origin: top left;
    width: 100%;
    height: auto; /* Let height adjust to content */
    position: relative;
    top: 0;
    left: 0;
  }
}
</style>
