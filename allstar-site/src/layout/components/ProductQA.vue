<template>
  <div class="list-container">
    <dl v-for="item in items" :key="item.id" class="list-item">
      <dt class="dt-item">
        {{ item.title }}
        <span class="plus-icon">+</span>
      </dt>
      <dd>{{ item.description }}</dd>
    </dl>
  </div>
</template>



<script setup>
// 定义列表项数据
const items = ref([
  { id: 1, title: '8', description: 'CT实力' },
  { id: 2, title: '46', description: 'STAR-PROJECT专利' },
  { id: 3, title: '28', description: '分贝、重量、可操作性' },
  { id: 4, title: '5', description: '产品好评' }
]);
</script>

<style scoped>
.list-container {
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.list-item {
  width: calc(25% - 10px); /* 25% width for each item with margin between */
  margin-bottom: 20px; /* Space between rows */
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;

}

dl {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

dt {
  font-weight: bold;
  font-size: 100px; /* Increase font size */
  flex: 1; /* 填充剩余空间 */
  text-align: center; /* 文字居中 */
  position: relative; /* 设置相对定位 */
}


.dt-item {
  padding: 5px; /* 字的大小范围内的内边距 */
  margin: 10px 0; /* 字大小范围外的外边距，上下各10px，左右为0 */
  justify-content: space-between;
}

.plus-icon {
  position: absolute; /* 设置绝对定位 */
  top: -20px; /* 距离顶部的位置，根据需要调整 */
  right: -20px; /* 距离右侧的位置，根据需要调整 */
  color: black; /* 图标的颜色，可以根据需要自定义 */
  width: -20px; /* 图标的宽度，根据需要调整 */
  height: -10px; /* 图标的高度，根据需要调整 */
  border-radius: 50%; /* 图标的圆角，使其变成圆形 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer; /* 鼠标指针样式，使其在悬停时显示为手型 */
}

dd {
  margin-top: 10px;
  font-size: 32px; /* Increase font size */
  color: #666;
  margin-left: 0px;
}
</style>
