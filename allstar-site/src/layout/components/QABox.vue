<template>
  <div class="dsgbox">
    <div class="container">
      <div class="flex">
        <div class="left">
          <img src="/public/img/QA.jpg" alt="Product 1 Image">
        </div>
        <div class="right">
          <div class="dsgtext">
            <div class="dsgcontainer">
                <div class="box">
                    <div class="tit">经验丰富的支持团队 24/7 全天候响应</div>
                    <div class="txt">
                        Get real-time guidance through your technical issues with the help of the Technical Support Team.您可以通过电话访问平均具有 10+ 年系统实践经验的技术工程师库。
                    </div>
                    <div class="btn">
                        <a href="#">阅读更多</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-left: 346px;
  margin-right: 346px;
}

.flex {
  margin-left: -128px;
  margin-right: -128px;
  padding: 120px 0;
  display: flex;
}

.left {
  flex: 0.7;
}

.left img {
  width: 870px;
  height: 580px;
}

.right {
  flex: 0.8;
  display: flex;
  align-items: center; /* 垂直居中 */
}

.dsgtext {
 padding: 0 127px;
}

.type {
  font-size: 64px;
  text-align: left;
}

.tit {
  font-size: 36px;
  font-weight: bold;
  text-align: left;
}

.txt {
  padding-top: 26px;
  text-align: left;
  font-size: 18px;
  line-height: 1.8; /* 设置段间距为行高的1.5倍 */
}

.btn {
  padding-top: 54px; /* div link有上48的padding */
  text-align: left;
}

.btn a {
  height: 125px;
  width: 64px;
  font-size: 32px;
  background-color: rgb(41, 73, 195);
  color: white;
  text-decoration: none;
  border-radius: 20px; /* 设置边角为圆润效果 */
  padding: 5px 24px;
}


</style>
