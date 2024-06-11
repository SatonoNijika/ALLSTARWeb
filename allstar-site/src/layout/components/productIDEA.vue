<template>
  <div class="product-box">
    <div class="container">
      <div class="tit-box">
        <h2 class="tit">STAR-PROJECT的高干预效率和准确性</h2>
      </div>
      <div class="list">
        <ul class="flex-container">
          <li class="item">
            <dl>
              <dt>单根穿刺针的穿透率</dt>
              <dd>>90%</dd>
            </dl>
          </li>
          <li class="item">
            <dl>
              <dt>第一次穿刺时间</dt>
              <dd>10±1分钟</dd>
            </dl>
          </li>
          <li class="item">
            <dl>
              <dt>平均调整次数</dt>
              <dd>1.7信息</dd>
            </dl>
          </li>
          <li class="item-2">
            <dl>
              <dt>手术期间的手眼分离</dt>
              <dd class="t1">
                <img src="/public/img/you.png" alt="特点1图片" />
                外科整合
              </dd>
            </dl>
          </li>
          <li class="item-2">
            <dl>
              <dt>多人协作手术</dt>
              <dd class="t1">
               <img src="/public/img/you.png" alt="特点1图片" />
                一人+一机
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-box {
  padding: 127px 0;
}

.container {
  margin: 0 340px;
}

.tit-box {
  height: 80px;
}

.tit {
  text-align: center;
  font-size: 64px;
}

.list {
  padding-top: 127px;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin: -32px;
  padding: 0px;
  list-style: none;
}

.item {
  flex-basis: 33.3%;
  box-sizing: border-box;
  
  padding: 32px;
}

.item-2 {
  flex-basis: 50%;
  box-sizing: border-box;
  list-style: none;
  
  padding: 32px;
}

.item dl {
  padding: 48px;
  border-radius: 20px; /* 设置边角为圆润效果 */
  background-color: rgb(242, 243, 245);
}

.item-2 dl {
  padding: 48px;
  border-radius: 20px; /* 设置边角为圆润效果 */
  background-color: rgb(242, 243, 245);
}

dt {
  display: flex;
  align-items: left;
  font-size: 28px;
  line-height: 2; /* 设置段间距为行高的1.5倍 */
}

dd {
  font-size: 48px;
  font-weight: bold;
  display: flex;
  align-items: left;
  margin: 0px;
  line-height: 2; /* 设置段间距为行高的1.5倍 */
}

img {
  width: 32px;
  height: 32px;
  margin-right: 10px; /* 调整图片与字体之间的间距 */
}

.t1 {
  font-size: 18px;
  display: flex;
  align-items: left;
  margin-top: 10px;
}
</style>
