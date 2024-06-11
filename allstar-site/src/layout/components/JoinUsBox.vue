<template>
  <div class="joinusbox">
    <div class="container">
      <div class="joinbox-tit">为什么选择ALLSTAR？</div>
      <div class="joinlist">
        <dl>
          <dt><img src="/public/img/seabay.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">优美的海滨工作环境</div>
            <div class="join-txt">提供优美的滨海城市工作环境、现代化的办公场所、配套完善的健身设施。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/Leaf.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">薪酬与福利</div>
            <div class="join-txt">按照国家和珠海全星医疗科技有限公司相关规定执行，提供具有竞争力的薪酬和福利待遇。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/human.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">全面的学习提升平台</div>
            <div class="join-txt">在校大学生报名实习的，提供全面的学习提升平台，并给予开具正式的实习证明文件</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/pocket.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">人才发展与支持</div>
            <div class="join-txt">根据人才层次，提供科研经费支持、实验平台，并积极协助符合珠海市人才政策的毕业生申报当地人才引进政策及其他相关福利。</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.joinusbox {
  padding: 120px 0;
}

.container {
  margin: 0 345px;
}

.joinbox-tit {
  font-size: 72px;
  font-weight: bold;
  background-image: linear-gradient(to top, #ffffff, #000000);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 80px;
}

.joinlist {
  margin: -32px; /* 调整列表之间的间距 */
  display: flex;
  justify-content: space-between;
  flex-direction: column; /* 垂直排列 */
}

dl {
  padding: 32px;
  background-color: #f5f5f5;
  flex: 1;
  margin: 16px; /* 控制列表之间的间距 */
  display: flex;
  flex-direction: row; /* 横向排列 dt 和 dd */
  align-items: center; /* 垂直居中 */
}


dt {
  font-size: 24px;
  font-weight: bold;
  padding-right: 32px;
  width: 64px;
  height: 64px;
  
}

img {
  width: 100%;
  height: 100%;

}

.join-tit {
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left; /* 将标题文字靠左对齐 */
}

.join-txt {
  font-size: 24px;
  color: rgb(144, 144, 144);
  text-align: left; /* 将标题文字靠左对齐 */
}
</style>
