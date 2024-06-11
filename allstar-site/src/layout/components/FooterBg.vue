<template>
  <div class="footer-bg">
    <div class="container">
      <div class="footer-t">
        <div class="flex-box">
          <div class="left">
            <div class="logo">
              <img src="/public/img/logo3.png" alt="Logo Image">
            </div>
            <!-- 添加 tit 文本 -->
            <div class="tit">
              珠海横琴全星医疗科技有限公司
            </div>
            <div class="cont-btn">
              <!-- 横向排列的图标列表 -->
              <ul class="icon-list">
                <li>
                  <img src="/public/img/video.png" alt="Video Icon" class="icon">
                </li>
                <li>
                  <img src="/public/img/pic.png" alt="Pic Icon" class="icon">
                </li>
                <li>
                  <img src="/public/img/doc.png" alt="Doc Icon" class="icon">
                </li>
              </ul>
            </div>
          </div>
         <div class="center">
            <div class="list">
              <dl class="dl-item">
                <dt>产品中心</dt>
                <dd>
                  <span>了解STARPJ</span><br>
                  <span>U-STAR规划</span><br>
                  <span>STARPJ介绍</span>
                </dd>
              </dl>
                <dl class="dl-item">
                <dt>应用</dt>
                <dd>
                  <span>肝肿瘤穿刺</span><br>
                  <span>肝肿瘤消融</span><br>
                  <span>多维可视化 (2D/3D)</span><br>
                  <span>图像AI处理 (医疗影像)</span>
                </dd>
              </dl>
              <dl class="dl-item">
                <dt>服务与支持</dt>
                <dd>
                  <span>资料下载</span><br>
                  <span>产品维修</span><br>
                  <span>常见问题解决</span>
                </dd>
              </dl>
               <dl class="dl-item">
                <dt>全星社区</dt>
                <dd>
                  <span>合作伙伴/供应商</span><br>
                  <span>社区特征</span><br>
                  <span>培训支持</span>
                </dd>
              </dl>
              <dl class="dl-item2">
                <dt>联系我们</dt>
                <dd>
                  <span>公司邮箱：info@allstar-med.com </span><br>
                  <span>公司地址：珠海横琴三一总部大厦1号楼</span><br>
                  <span>热线邮箱：283557625@qq.com（售后服务）</span><br>
                </dd>
              </dl>
            </div>
          </div>
          <div class="right">
            <div class="qr-code">
              <!-- 二维码图片及描述 -->
              <dl>
                <dt class="pic">
                  <img src="/public/img/qrcode.jpg" alt="QR Code">
                </dt>
                <dd>Pay attention to</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElImage } from 'element-plus'; // 导入 Element Plus 的图片组件
</script>

<style scoped>
.footer-bg {
  background-color: rgb(34, 35, 36); /* 深灰色背景 */
  height: 500px;
  display: flex;
  justify-content: center; /* 内容水平居中 */
  align-items: center; /* 内容垂直居中 */
  border-bottom: 2px solid #fff; /* 添加顶部边框 */
}

.container {
  width: 100%;
  margin-left: 264px; /* 左外边距 */
  margin-right: 264px; /* 右外边距 */
}

.footer-t {
  max-width: 100%; /* 最大宽度不超过.container */
  max-height: calc(500px - 254px); /* 最大高度不超过.footer-bg减去上下外边距 */
  margin-top: 127px; /* 上外边距 */
  margin-bottom: 127px; /* 下外边距 */
  overflow: hidden; /* 超出部分隐藏 */
  display: flex; /* 将.footer-t设置为flex布局 */
  justify-content: center; /* 内容水平居中 */
  align-items: flex-start; /* 内容垂直顶部对齐 */
}

.flex-box {
  display: flex;
  justify-content: space-between; /* 左右两端对齐 */
  align-items: flex-start; /* 垂直顶部对齐 */
  width: 100%; /* 宽度占满.footer-t */
  max-height: calc(500px - 254px); /* 最大高度不超过.footer-bg减去上下外边距 */
}

.left {
  flex-direction: column; /* 垂直布局 */
  align-items: flex-start; /* 水平靠左对齐 */
  justify-content: space-between; /* 垂直方向上均匀分布 */
  height: 246px; /* 设置高度占据父容器的100% */
  width: 350px;
}

.center {
  flex: 1; /* 均分剩余空间 */
  display: flex; /* 将.center设置为flex布局 */
  justify-content: space-around; /* 均匀分布子元素 */
  align-items: flex-start; /* 垂直顶部对齐 */
  padding-left: 129px;
  padding-right: 129px;
}

.tit {
  padding-top: 0; /* 移除顶部内边距 */
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  align-self: flex-start; /* 让标题靠左对齐 */
}

.logo img {
  max-width: 260px; /* 设置 logo 图片的最大宽度 */
  max-height: 206px; /* 设置 logo 图片的最大高度 */
}

.cont-btn {
  width: 100%; /* 宽度占满父元素 */
  display: flex;
  justify-content: flex-start; /* 水平靠左对齐图标列表 */
}

.icon-list {
  display: flex; /* 横向排列 */
  list-style: none; /* 去除列表样式 */
  padding: 0; /* 去除内边距 */
}

.icon-list li {
  margin-right: 48px; /* 设置左右外边距为10px */
}

.icon {
  width: 32px; /* 设置图片宽度 */
  height: 32px; /* 设置图片高度 */
  padding: 10px;
  background-color: #fff;
  border-radius: 20px; /* 设置边角为圆润效果 */
}

.list {
  display: flex;
  list-style: none;
  flex: 1; /* 均分剩余空间 */
  justify-content: space-around; /* 均匀分布元素 */
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  height: 100%;
}

.dl-item {
  padding-right: 10px;
  padding-left: 10px;
  width: 50%;
  margin: 0;
}

.dl-item2 {
  padding-right: 12px;
  padding-left: 42px;
  width: 80%;
  margin: 0;
}

/* 为所有定义列表添加间距 */
dl {
  margin-bottom: 20px;
}

/* 设置标题样式 */
dt {
  font-weight: bold;
  color: rgb(253, 250, 250);
  margin: 0;
  text-align: left; /* 文本左对齐 */
  font-size: 24px;
}

/* 设置描述样式 */
dd {
  display: table-cell;
  padding-top: 18px;
  margin: 0;
}

/* 设置子描述样式 */
span {
  display: block;
  margin-bottom: 5px;
  color: rgb(144, 144, 144);
  text-align: left; /* 文本左对齐 */
  font-size: 20px;
}

.qr-code {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 236px;
  width: 154px;
}

.qr-code dl {
  margin: 0; /* 去除默认的外边距 */
  padding: 0; /* 去除默认的内边距 */
}

.qr-code dt.pic {
  text-align: center; /* 图片水平居中 */
}

.qr-code img {
  max-width: 100%; /* 图片宽度不超过容器 */
  height: auto; /* 保持图片高度自适应 */
}

.qr-code dd {
  text-align: center; /* 描述文本水平居中 */
  font-size: 20px;
  color: #fff;
}

.footer-b {
  background-color: rgb(65, 65, 225); /* 深蓝色背景 */
  color: #fff;
  padding: 10px 0;
  height: 75px;
  display: flex;
  justify-content: center; /* 内容水平居中 */
  align-items: center; /* 内容垂直居中 */
}

.flexbox {
  display: flex;
  justify-content: space-between;
}

.left,
.right,
.center {
  text-align: center;
  display: flex;
}

.center {
  flex: 1; /* 均分剩余空间 */
}

</style>