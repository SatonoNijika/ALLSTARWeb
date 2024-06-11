<template>
  <div class="STARPJ-box">
    <div class="container">
      <div class="tit">欢迎来到ALLSTAR TECH</div>
      <div class="txt">
        驾驭您的雄心壮志，改变外科手术的未来。
      </div>
      <div class="list">
        <div class="item">
          <dl>
            <dt><img src="/public/img/sns1.png" alt="..."></dt>
            <dd>People focused</dd>
          </dl>
        </div>
        <div class="item">
          <dl>
            <dt><img src="/public/img/sns2.png" alt="..."></dt>
            <dd>Ambitious</dd>
          </dl>
        </div>
        <div class="item">
          <dl>
            <dt><img src="/public/img/sns3.png" alt="..."></dt>
            <dd>Fair&responsible</dd>
          </dl>
        </div>
        <div class="item">
          <dl>
            <dt><img src="/public/img/sns4.png" alt="..."></dt>
            <dd>Humble</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.STARPJ-box {
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: rgb(244, 245, 246);
}

.container {
  margin-left: 346px;
  margin-right: 346px;
}

.tit {
  font-size: 20px;
  font-weight: bold;
}

.txt {
  padding-top: 24px;
  font-size: 30px;
  text-align: center;
}

.list {
  margin: -16px;
  padding-top: 74px;
  display: flex; /* 使用 Flex 布局 */
}

.item {
  padding: 16px;
  flex: 1; /* 每个项目平均分配空间 */
}

dl {
  padding: 64px;
  background-color: white;
  border-radius: 30px;
}

dt img {
  width: 200px;
  height: 200px;
}

dd {
  padding-top: 42px;
  font-size: 32px;
  font-weight: bold;
  margin: 0;
}
</style>
