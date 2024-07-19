<template>
  <div class="dsgbox">
    <div class="container">
      <div class="flex">
        <div class="left">
          <div class="pic">
          <video src="/public/videos/qt4.mp4" autoplay loop muted></video>
          </div> 
        </div>
        <div class="right">
          <div class="dsgtext">
            <div class="dsgcontainer">
                <div class="box">
                    <div class="tit">无缝DICOM传输</div>
                    <div class="txt">
                        U-STAR 集成了 PACS（图片存档和通信系统），这是一个用于图像和数据的安全数字存档。凭借 PACS 的高效图像存储、检索和传输功能，IPGM 提供了从访问 CT 扫描到程序规划的无缝体验。
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
                    <div class="tit">AI 驱动的 CT Image 工作站</div>
                    <div class="txt">
                        在深度学习模型的支持下，U-STAR能够在CT图像中自动分割肝脏、肝血管和肝脏恶性肿瘤。
                        <br/><br/>
                        U-STAR 还提供了一套图像标记工具，如 Q-STAR 等。您可以轻松地通过 AI 模型微调分割结果推断，或启动自己的新分割项目。
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="left">
          <div class="pic">
            <video src="/public/videos/sg.mp4" autoplay loop muted></video>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="left">
          <div class="pic">
            <video src="/public/videos/qt6.mp4" autoplay loop muted></video>
          </div>
        </div>
        <div class="right">
          <div class="dsgtext">
            <div class="dsgcontainer">
                    <div class="box">
                    <div class="tit">多维度手术规划</div>
                    <div class="txt">
                       U-STAR作为R-STAR的必要规划软件部分，为您提供了一种便捷的方法，不仅可以获取针头插入目标点和入口点，还可以在SIEM上指定超声探头的着陆区域。这样，在针头插入过程中可以获得清晰的超声视图。
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
  background-color: rgb(243, 245, 246);
}

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

.left video {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.right {
  flex: 1;
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
  font-size: 56px;
  text-align: left;
}

.txt {
  padding-top: 26px;
  text-align: left;
  font-size: 32px;
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

.pic {
    width: 824px;
    height: 584px;
    background-color: rgb(218, 219, 221);
    display: flex;
    align-items: center; /* 垂直居中 */
    border-radius: 20px;
}
</style>
