<template>
  <div class="patents-box">
    <div class="container">
      <div class="int-tit">
        <div class="title">Member Title</div>
        <div class="row">
          <div class="centered-content">
            <div class="txt">The number of patents we currently hold is over </div>
            <div class="b">
              <span class="numb">123</span>
            </div>
          </div>
        </div>
      </div>
      <div class="div-list">
        <ul class="list centered-list">
          <li>
            <div class="box">
              <div class="info">
                <div class="icon">
                    <img src="/public/img/docwork.png" alt="Icon Image">
                </div>
                <div class="tit">PCT</div>
                <div class="num">1</div>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="info">
                <div class="icon">
                    <img src="/public/img/invention.png" alt="Icon Image">
                </div>
                <div class="tit">PCT</div>
                <div class="num">2</div>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="info">
                <div class="icon">
                    <img src="/public/img/inven.png" alt="Icon Image">
                </div>
                <div class="tit">PCT</div>
                <div class="num">3</div>
              </div>
            </div>
          </li>
          <li>
            <div class="box">
              <div class="info">
                <div class="icon">
                    <img src="/public/img/med.png" alt="Icon Image">
                </div>
                <div class="tit">PCT</div>
                <div class="num">4</div>
              </div>
            </div>
          </li>
            <li>
            <div class="box">
              <div class="info">
                <div class="icon">
                    <img src="/public/img/design.png" alt="Icon Image">
                </div>
                <div class="tit">PCT</div>
                <div class="num">5</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.patents-box {
  padding: 95px 0;
}

.container {
  margin: 0 335px;
}

.int-tit {
  padding: 0;
  text-align: center;
}

.title {
  padding: 63px 0 47px;
  font-size: 72px;
  font-weight: bold;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
}

.centered-content {
  display: flex;
  align-items: center;
}

.txt {
  font-size: 42px;
  padding-right: 10px;
}

.b {
  font-size: 24px;
  font-weight: bold;
}

.div-list {
  padding-top: 90px;
}

.list {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center; /* 将列表水平居中 */
}

.centered-list li {
  margin: 0; /* 移除 li 的 margin */
  height: 331px;
  width: 361px;
  padding: 26px;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; /* 让 box 充满 li 的宽度 */
  height: 100%; /* 让 box 充满 li 的高度 */
  padding: 53px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.icon {
  font-size: 48px;
  width: 115px;
  height: 115px;
}

.icon img{
  font-size: 48px;
  width: 100%;
  height: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tit {
  font-size: 32px;
  margin-bottom: 31px;
  margin-top: 31px;
  width: 100%;
  height: 46px;
}

.num {
  font-size: 32px;
  font-weight: bold;
}

.numb {
  font-size: 64px;
  font-weight: bold;
}

</style>
