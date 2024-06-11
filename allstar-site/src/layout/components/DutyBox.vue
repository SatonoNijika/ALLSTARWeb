<template>
  <div class="duty-box">
    <div class="container">
      <div class="tit">ALLSTAR社区的使命</div>
        <div class="list">
            <ul>
                <li>
                <dl class="txt-container">
                    <dt class="txt">1</dt>
                    <dd>
                        <div class="sub-tit">合作伙伴</div>
                        <div class="mess">开展学术交流，激活学术思想，倡导学术民主，优化学术环境，促进介入医学合作伙伴发展。</div>
                    </dd>
                </dl>
                </li>

                <li>
                <dl class="txt-container">
                    <dt class="txt">2</dt>
                    <dd>
                        <div class="sub-tit">供应商</div>
                        <div class="mess">吸引、留住和培养手术机器人相关领域的供应商</div>
                    </dd>
                </dl>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<style scoped>
.duty-box {
  padding: 120px 0;
}

.container {
  margin: 0 475px;
}

.tit {
  text-align: center;
  font-size: 56px;
  font-weight: bold;
}

.txt {
  text-align: center;
  font-weight: bold;
  text-align: left; /* 将标题文字靠左对齐 */
  font-size: 64px;
}

.list {
  padding-top: 75px;
}

.list li {
  list-style: none;
  padding: 37px;
}

.txt-container {
  display: flex;
  align-items: center;
}

ul {
    margin: 0px;
    padding: 0px;
}

.list dl {
  margin: 0;
}

dt {
  float: left;
}

dd {
  padding-left: 70px;
}

.sub-tit {
  font-size: 48px;
  text-align: center;
  text-align: left; /* 将标题文字靠左对齐 */
}

.mess {
  font-size: 28px;
  text-align: center;
  text-align: left; /* 将标题文字靠左对齐 */
  padding-top: 20px;
  color: rgb(147, 147, 147);
}
</style>
