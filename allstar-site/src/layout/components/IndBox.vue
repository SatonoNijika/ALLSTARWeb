<template>
<div class="divider"></div>
  <div class="indbox">
    <div class="container">
      <div class="pc-box">
        <div class="title">PRODUCT</div>
      </div>
      <div lass="tab-box">
        <div class="row1">
          <img src="/public/img/UR10.png" alt="Large Image" />
        </div>
       <div class="row2">
            <div class="list">
                <ul>
                    <li>
                        <div class="pic">
                        <i><img src="/public/img/UR10.jpg" alt="图片"></i>
                        </div>
                        <div class="tit">A-STAR</div>
                    </li>
                    <li>
                        <div class="pic">
                        <i><img src="/public/img/FTK500.png" alt="图片"></i>
                        </div>
                        <div class="tit">U-STAR</div>
                    </li>
                    <li>
                        <div class="pic">
                        <i><img src="/public/img/lichuangan.png" alt="图片"></i>
                        </div>
                        <div class="tit">C-STAR</div>
                    </li>
                    <li>
                        <div class="pic">
                        <i><img src="/public/img/chuangan.png" alt="图片"></i>
                        </div>
                        <div class="tit">On-STAR</div>
                    </li>
                    <li>
                        <div class="pic">
                        <i><img src="/public/img/timo.png" alt="图片"></i>
                        </div>
                        <div class="tit">Body-STAR</div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.indbox {
  /* 样式可以根据需求进行调整 */
  padding: 20px;
  border-radius: 8px;
}

.container {
  margin: 0 auto;
  width: calc(100% - 340px); /* 去除 175px * 2 的 padding */
  padding: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pc-box {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.tab-box {
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.row1 img {
  width: 100%; /* 大图片宽度占满容器 */
  height: 1000px; /* 自适应高度 */
  border-radius: 20px;
}

.row2 {
  display: flex;
}

.link-item {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
}

.divider {
  width: 100%;
  border-bottom: 3px solid #ddd; /* 添加分隔线样式 */
  margin-bottom: 20px; /* 调整分隔线与下方内容的间距 */
}

.title {
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  /* 使用线性渐变作为背景 */
  background-image: linear-gradient(to top, #ffffff, #800080);
  color: transparent; /* 文字颜色设为透明 */
  -webkit-background-clip: text; /* 将背景渐变裁剪到文字 */
  background-clip: text; /* 标准的背景裁剪属性 */
}

.list {
  width: 100%; /* 列表宽度与容器相同 */
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 0; /* 清除默认的外边距 */
}

li {
  width: 19%; /* 每个列表项宽度 */
  text-align: center; /* 文字居中 */
  background-color: #f9f9f9; /* 背景色 */
  border-radius: 16 px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影 */
}

.pic {
  width: 100%; /* 图片容器宽度占满父元素 */
  height: 409px; /* 图片容器高度 */
  margin: 10px auto; /* 水平居中 */
  border-radius: 8px; /* 图片容器圆角 */
  overflow: hidden; /* 隐藏溢出部分 */
}

.pic img {
  display: block;
  width: 100%; /* 图片宽度占满容器 */
  height: 100%; /* 图片高度自适应 */
}

.tit {
  margin-top: 15px; /* 标题与图片间距 */
  font-size: 38px;
  text-align: center; /* 文字居中 */
  background-color: #ddd;
  padding: 10px; /* 添加内边距 */
  border-radius: 8px; /* 圆角 */
}
</style>