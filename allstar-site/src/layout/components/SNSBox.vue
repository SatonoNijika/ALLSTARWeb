<template>
  <div class="dsgbox">
    <div class="container">
      <div class="flex">
        <div class="left">
          <img src="/public/img/sns6.png" alt="Product 1 Image">
        </div>
        <div class="right">
          <div class="dsgtext">
            <div class="dsgcontainer">
                <div class="box">
                    <div class="tit">我们是谁</div>
                    <div class="txt">
                        要加入 ALLSTAR 大家庭，您需要保持好奇心，不断提出问题以找到可以改变手术未来的答案。你可能从事商业和营销、机器学习、软件工程或制造业等工作，但我们会为你提供合适的工具，让你有所作为。
                    </div>
                    <div class="btn">
                        <a href="#">阅读更多</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
       <div class="right">
          <div class="dsgtext">
            <div class="dsgcontainer">
                    <div class="box">
                    <div class="tit">我们做什么</div>
                    <div class="txt">
                        我们的下一代技术使我们的员工有机会在外科进步的最前沿工作。在 ALLSTAR 开始外科职业生涯将使您也能做到这一点。
                    </div>
                    <div class="btn">
                        <a href="#">阅读更多</a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="left">
          <img src="/public/img/banner10.png" alt="Product 1 Image">
        </div>
      </div>
      <div class="flex">
        <div class="left">
          <img src="/public/img/sns5.png" alt="Product 1 Image">
        </div>
        <div class="right">
          <div class="dsgtext">
            <div class="dsgcontainer">
                    <div class="box">
                    <div class="tit">我们的价值观</div>
                    <ul>
                        <li>以人为本</li>
                        <li>有雄心</li>
                        <li>谦逊</li>
                        <li>公平负责</li>
                    </ul>
                    <div class="txt">
                        这些核心价值观支撑着我们如何照顾我们的员工和客户，以及我们如何相互合作。加入我们，您会发现我们的文化使我们与众不同。
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
.dsgbox {
    background-color: rgb(244, 245, 246);
}

.container {
  margin-left: 546px;
  margin-right: 546px;
}

.flex {
  margin-left: -128px;
  margin-right: -128px;
  padding: 120px 0;
  display: flex;
}

.left {
  flex: 0.5;
}

.left img {
  width: 550px;
  height: 550px;
  border-radius: 40px;
}

.right {
  flex: 0.7;
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
  font-size: 46px;
  font-weight: bold;
  text-align: left;
}

.txt {
  padding-top: 26px;
  text-align: left;
  font-size: 22px;
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

li {
  font-weight: bold;
  text-align: left;
  line-height: 1.5; /* 设置段间距为行高的1.5倍 */
  font-size: 20px;
  color: black;
}


</style>
