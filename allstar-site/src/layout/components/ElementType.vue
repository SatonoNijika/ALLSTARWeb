<template>
  <div class="elementor-container">
    <div class="column">
      <div class="widget">
        <div class="widget-container">
          <h2>资料中心</h2>
        </div>
        <div class="widget-container">
          <h3>Data Center</h3>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="widget">
        <div class="widget-container">
          <h2>产品维修</h2>
        </div>
        <div class="widget-container">
          <h3>Product maintenance</h3>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="widget">
        <div class="widget-container">
          <h2>常见问题解决</h2>
        </div>
        <div class="widget-container">
          <h3>Common problem solving</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
</script>

<style scoped>
.elementor-container {
  height: 300px;
}

.column {
  padding: 80px 60px;
  display: inline-block;
  width: 30%; /* 每个 column 占据 30% 的宽度 */
  box-sizing: border-box; /* 让 padding 不会撑开宽度 */
  vertical-align: top; /* 垂直对齐顶部 */
}

.widget {
  margin-bottom: 80px;
  border: 0.2px solid rgb(196, 194, 194); /* 添加黑色边框 */
}

.widget-container {
  margin-bottom: 20px;
}

h3 {
  font-size: 24px;
  font-weight: bold;
}

h2 {
  font-size: 36px;
  font-weight: bold;
}
</style>
