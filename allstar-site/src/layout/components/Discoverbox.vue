<template>
  <div class="discover-box">
    <div class="container">
      <!-- pc-box -->
      <div class="pc-box">
        <div class="tit">人工智能规划</div>
      </div>
      <!-- video-box -->
      <div class="video-box">
        <!-- <video></video> -->
        <img src="/public/img/qt.jpg" alt="Star Image">
      </div>
      <!-- mess-box -->
      <div class="mess-box">
        <div class="txt">U-STAR 是一个软件平台，可从您的计划笔记本电脑或工作站访问，您可以在进入手术室之前使用它来制定机器人辅助针头干预导航的策略。它使用患者腹部的 CT 扫描来生成包含肝脏、肝血管和肝脏恶性肿瘤的 3D 患者数字身体。
            <br/><br/>
            导入患者的 CT 扫描后，U-STAR 的 IPGM 提供了一个简单的用户界面，允许您在 10 分钟内完成干预计划，您还可以查看和编辑计划。</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.discover-box {
  background-color: rgb(30, 32, 39);
}

.container {
  margin: 0 346px;
}

.tit {
  padding: 63px 0 26px;
  font-size: 84px;
  color: white;
}

.mess-box {
  padding: 85px 0 160px;
}

.video-box img {
  width: 1850px;
  height: 1024px;
  border-radius: 20px;
}

.txt {
    font-size: 30px;
    font-weight: 500;
    text-align: left;
    color: rgb(140, 140, 143);
    line-height: 1.5; /* 设置段间距为行高的1.5倍 */
}
</style>
