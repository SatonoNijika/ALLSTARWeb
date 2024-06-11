<template>
  <div class="teambox">
    <div class="container">
      <div class="flex-container">
        <div class="left">
          <div class="box">
            <div class="box-content">
              <div class="tit">PARTNERS</div>
              <div class="list">
                <ul>
                  <li><span>北京理工大学</span></li>
                  <li><span>中山大学</span></li>
                  <li><span>同济大学</span></li>
                  <li><span>中科院苏州生物学院医学研究所</span></li>
                </ul>
                <ul>
                  <li><span>伦敦国王学院</span></li>
                  <li><span>麻省理工学院</span></li>
                </ul>
              </div>
            </div>
          </div>
        <div class="box">
            <div class="box-content">
              <div class="tit">USERS</div>
              <div class="list">
                <ul>
                  <li><span>珠海市人民医院</span></li>
                  <li><span>广州孙逸仙纪念医院</span></li>
                  <li><span>华中科技大学同济医学院附属同济医院</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="r-box">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teambox {
  padding: 63px 0;
  background-color: rgb(245, 245, 245);
  height: 550px;
}

.container {
  margin: 0 346px;
  max-width: 100%; /* 使用最大宽度 */
}

.flex-container {
  display: flex;
}

.left {
  flex: 1;
  display: flex; /* 横向排列左侧的 box */
  justify-content: space-between; /* 两个 box 之间的间距 */
}

.box {
  padding: 63px;
}

.tit {
  font-size: 72px;
  font-weight: bold;
  text-align: left; /* 将标题文字靠左对齐 */
}

.list ul {
  padding-right: 63px;
}

.list {
  display: flex;
  justify-content: space-between;
  padding-top: 64px;
}

.list li {
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
  white-space: nowrap; /* 禁止文字换行 */
}

.list li span {
  display: inline-block; /* 将 span 设置为内联块级元素 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 超出部分以省略号表示 */
}

.r-box {
  flex: 1;
  display: flex;
  justify-content: right;
  align-items: flex-end; /* 图片垂直居底 */
  padding-top: 63px;
}

.r-box img {
  width: 320px;
  height: 130px;
}
</style>
