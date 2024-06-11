<template>
  <div class="STARPJ-box">
    <div class="container">
      <div class="tit">STAR-PROJECT设计理念</div>
      <div class="txt">
        手术计划操作系统和中控系统分别扮演着医生的“大脑”角色，手术计划操作系统完成了医生在手术前的定位工作思路， 中控台车辆将这个想法与机械臂和光学跟踪定位器串联起来。<br/><br/>
        <div class="blue">
            逐步实现“简化复杂操作，简单操作自动化”的愿景。
        </div>
      </div>
      <div class="list">
        <div class="item">
          <dl>
            <dt><img src="/public/img/brain.png" alt="..."></dt>
            <dd>医生的得力助手</dd>
          </dl>
        </div>
        <div class="item">
          <dl>
            <dt><img src="/public/img/cover.png" alt="..."></dt>
            <dd>机械操作覆盖率高</dd>
          </dl>
        </div>
        <div class="item">
          <dl>
            <dt><img src="/public/img/cal.png" alt="..."></dt>
            <dd>简化复杂手术</dd>
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
  font-size: 64px;
}

.txt {
  padding-top: 54px;
  font-size: 20px;
  text-align: left;
}

.blue {
  font-size: 32px;
  text-align: left;
  font-weight: bold;
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
  width: 100px;
  height: 100px;
}

dd {
  padding-top: 42px;
  font-size: 20px;
  margin: 0;
}
</style>
