<template>
  <div class="joinusbox">
    <div class="container">
      <div class="joinbox-tit">常见问题一览</div>
      <div class="joinlist">
        <dl>
          <dt><img src="/public/img/question.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">穿刺针误入大动脉</div>
            <div class="join-txt">机械臂需要专注力感知，穿刺针要跟随动脉跳动而跳动，同时保持呼吸跟随</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/question.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">消融范围控制（肿瘤邻近重要结构）</div>
            <div class="join-txt">在机器人系统中设定安全边界参数，确保消融范围不会超出预定区域，避免损伤邻近的重要结构。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/question.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">病灶周围脏器的保护</div>
            <div class="join-txt">保护周围脏器：超声引导下18GPTC针进入腹腔，置入引流管，腹腔灌注2500ml 左右形成人工腹水，把肝脏用水和周围组织分隔开，避免消融时热损伤周围。</div>
          </dd>
        </dl>
         <dl>
          <dt><img src="/public/img/question.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">肿瘤的针道转移</div>
            <div class="join-txt">控制出血：在穿刺过程中控制出血可以减少肿瘤细胞随血液进入针道的风险。这可以通过使用止血技术或选择适当的穿刺路径来实现。</div>
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
