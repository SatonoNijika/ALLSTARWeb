<template>
  <div class="discover-box">
    <div class="container">
      <!-- pc-box -->
      <div class="pc-box">
        <div class="tit">在ALLSTAR的生活</div> 
      </div>
      <!-- video-box -->
      <div class="video-box">
        <!-- <video></video> -->
        <img src="/public/img/snsbanner2.jpg" alt="Star Image">
      </div>
      <!-- mess-box -->
      <div class="mess-box">
        <div class="txt">在多元化、开放和协作的工作环境中，创意可以蓬勃发展。在健康的乐趣之间取得平衡，是激励我们的员工留下来与我们一起发展的动力。
            <br/><br/>
            我们的员工使CMR变得伟大。与我们交谈，您很快就会意识到我们是不同的。我们是多元化的、个性化的、富有创造力的和友好的——在我们的整体使命中团结一致。</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.discover-box {
  background-color: rgb(244, 245, 246);
}

.container {
  margin: 0 346px;
}

.tit {
  padding: 63px 0 46px;
  font-size: 44px;
  font-weight: bold;
}

.mess-box {
  padding: 85px 0 160px;
}

.video-box img {
  width: 1120px;
  height: 630px;
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
