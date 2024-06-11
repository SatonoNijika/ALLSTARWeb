<template>
  <div class="product-box">
    <div class="container">
      <div class="tit-box">
        <h2 class="tit">向您介绍STAR-PROJECT</h2>
      </div>
      <div class="list">
        <ul class="flex-container">
          <li class="item" v-for="item in productList" :key="item.id">
            <dl>
              <dt>
                <img :src="item.image" alt="产品图片" />
              </dt>
              <dd>
                <span>{{ item.subtitle }}</span>
              </dd>
            </dl>
          </li>
          <!-- 这里可以添加更多的列表项 -->
        </ul>
      </div>
      <div class="list-2">
        <ul class="flex-container">
          <li class="item" v-for="item in productList2" :key="item.id">
            <dl>
              <dt>{{ item.title }}</dt>
              <dd>
                <img :src="item.image" alt="产品图片" />
              </dd>
            </dl>
          </li>
          <!-- 这里可以添加更多的列表项 -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const productList = ref([
  { id: 1, subtitle: '模型实验', image: '/public/img/vr1.jpg' },
  { id: 2, subtitle: '动物实验', image: '/public/img/vr2.jpg' },
  { id: 3, subtitle: '研究伦理实验', image: '/public/img/kaifa.jpg' },
  { id: 4, subtitle: '模型实验', image: '/public/img/banner7.jpg' },
  { id: 5, subtitle: '型式检验报告',  image: '/public/img/doc2.jpg' },
  { id: 6, subtitle: '临床伦理批准',  image: '/public/img/alldoc2.jpg' },
]);

const productList2 = ref([
  { id: 1, title: 'AI穿刺', subtitle: '子标题3', price: '价格3', image: '/public/img/banner6.jpg' },
  { id: 2, title: '稳定的Zuber策略机械手', subtitle: '子标题4', price: '价格4', image: '/public/img/vr4.jpg' },
]);
</script>

<style scoped>
.product-box {
  padding: 127px 0;
  background-color: rgb(242, 243, 245);
}

.container {
  margin: 0 340px;
}

.tit-box {
  height: 57px;
}

.tit {
  text-align: center;
  font-size: 80px;
}

.list {
  margin-top: 127px;
}

.list-2 {
  margin-top: 98px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.item {
  width: calc(33.333% - 64px);
  box-sizing: border-box;
  list-style: none;
  background-color: #fff;
  margin: 0px 32px 32px 32px;
  border-radius: 20px; /* 设置边角为圆润效果 */
}

.item img {
  max-width: 100%;
  max-height: 100%;
}

.list dl {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0px;
}

.list-2 dl {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 0px;
}

.list-2 dt {
  margin: 48px;
  font-size: 40px;
}

.list dd {
  padding: 0 30px;
  margin: 0px;
  height: 127px;
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
}

.list-2 dd {
  margin: 0px;
}

.list span, .list-2 span {
  font-size: 46px;
}


</style>
