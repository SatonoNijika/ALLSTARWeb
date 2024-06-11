<template>
  <div class="joinusbox">
    <div class="container">
      <div class="joinbox-tit">ALLSTAR能为您提供</div>
      <div class="joinlist">
        <dl>
          <dt><img src="/public/img/source.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">资料中心</div>
            <div class="join-txt">欢迎访问我们的资料中心，这里提供了关于产品的最新资料、使用手册、技术文档和常见问题解答等。无论您是新手还是高级用户，都能从这里找到有用的信息。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/repair.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">产品维修</div>
            <div class="join-txt">我们提供专业的产品维修服务，无论是保修期内还是过保修期，都可以通过我们的维修服务解决您遇到的问题。请联系我们的客服团队获取更多帮助。</div>
          </dd>
        </dl>
        <dl>
          <dt><img src="/public/img/question.png" alt="海滨工作环境图标"></dt>
          <dd>
            <div class="join-tit">常见问题解决</div>
            <div class="join-txt">在这里，我们整理了一些常见问题及其解决方案，希望能帮助您快速解决遇到的困扰。如果您遇到了无法解决的问题，也欢迎随时联系我们的客服团队寻求帮助。</div>
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
