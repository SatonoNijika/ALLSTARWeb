<template>
  <div class="joinusbox">
    <div class="container">
      <div class="joinbox-tit">ALLSTAR宗旨</div>
      <div class="joinlist">
        <dl>
          <dt><img src="/public/img/source.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-txt">探索颈部夹住技术、变革性技术和手术机器人的共同基础，以用于未来的介入诊断和治疗场景。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/repair.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-txt">向大湾区引进高端介入医学人才。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/question.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-txt">打造横琴医疗机器人品牌。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/inven.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-txt">关注和支持会员的权利和福利。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/Leaf.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-txt">该协会是一个非营利性组织。</div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
.joinusbox {
  padding: 120px 0;
  background-color: rgb(233, 234, 238);
}

.container {
  margin: 0 345px;
}

.joinbox-tit {
  font-size: 72px;
  font-weight: bold;
  background-image: linear-gradient(to top, #ffffff, #16186d);
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


.join-txt {
  font-size: 28px;
  font-weight: bold;
  color: rgb(127, 127, 127);
  text-align: left; /* 将标题文字靠左对齐 */
}
</style>
