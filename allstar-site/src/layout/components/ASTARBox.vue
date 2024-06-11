<template>
  <div class="product-intro">
    <div class="star-box">
      <!-- STAR-Box，上255下127的padding -->
    </div>
    <div class="container">
      <!-- 左右346的margin -->
      <div class="content-wrapper">
        <div class="tit">
          <!-- 带br的两段介绍 -->
          <p>凭借多年医疗介入机器人开发经验，<br>我们赋予STAR-PROJECT独特的优势，重新定义各种可能性。</p>
        </div>
        <div class="list" style="padding-top: 47px;">
          <!-- 上47padding -->
          <ul style="margin: -7px 0;">
            <!-- 上下-7的margin -->
            <li style="padding: 7px 0;">
              <!-- 上下7的padding -->
              <span>独特的STAR-PROJECT系统</span>
            </li>
            <li style="padding: 7px 0;">
              <!-- 上下7的padding -->
              <span>STAR-PROJECT带多自由度导针支架</span>
            </li>
            <li style="padding: 7px 0;">
              <!-- 上下7的padding -->
              <span>STAR-PROJECT高质量路径规划</span>
            </li>
            <li style="padding: 7px 0;">
              <!-- 上下7的padding -->
              <span>针架的独特设计</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-intro {
  padding: 200px 0 160px; /* 上255下127的padding */
  background-image: url('/public/img/win1.jpg'); /* 设置背景图路径 */
  height: 600px;
}

.container {
  margin: 0 380px; /* 左右346的margin */
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
}

.tit {
  font-size: 64px;
  text-align: right;
  color: black;
}

.list {
  padding-top: 47px; /* 上47padding */
  padding-right: 100px;
}

.list ul {
  margin: -7px 0; /* 上下-7的margin */
}

.list li {
  padding: 7px 0; /* 上下7的padding */
  text-align: right;
}

.list li span {
  font-size: 36px;
  list-style: none;
  color: black;
  font-weight: bold;
}
</style>