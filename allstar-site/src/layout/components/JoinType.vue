<template>
  <div class="join-bg">
    <div class="container">
      <div class="join-list">
        <div class="list-head">
          <div class="item">
            <dl>
              <dt>
                <a href="#">
                <span>团队</span>
                <i><img src="/public/img/loudou.png" alt="海滨工作环境图标"></i>
                </a>
              </dt>
            </dl>
          </div>
          <div class="item">
            <dl>
              <dt>
                <a href="#">
                <span>位置</span>
                <i><img src="/public/img/loudou.png" alt="海滨工作环境图标"></i>
                </a>
              </dt>
            </dl>
          </div>
          <div class="item">
            <dl>
              <dt>
                <a href="#">
                <span>全部重置</span>
                <i class="fas fa-sort"></i>
                </a>
              </dt>
            </dl>
          </div>
        </div>
        <div class="tips">20 找到工作</div>
        <div class="list">
          <ul>
            <li><a href="#"><span class="job">ROS机器人运动控制算法开发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">算法开发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">机器人研发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">嵌入式工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">仿真测试工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">UI开发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">Qt软件开发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">工业设计工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">美工设计工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">医学图像处理工程师兼实习生</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">AI医学图像算法开发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">博士后</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">视觉开发工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">数据结构工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">医学临床试验工程师</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">综合管理岗助理</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">行政助理</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">部门秘书</span><span class="location">珠海横琴</span></a></li>
            <li><a href="#"><span class="job">科研行政助理</span><span class="location">珠海横琴</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.join-bg {
  padding: 200px 0;
  background-color: rgb(243, 244, 246); /* 添加背景色 */
}

.container {
  margin: 0 346px;
}

.join-list {
  border: 1px solid rgb(255, 255, 255);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
  background-color: rgb(243, 244, 246); /* 添加背景色 */
}

.list-head {
  display: flex;
  align-items: center; /* 垂直居中 */
  background-color: rgb(255, 255, 255);
  height: 127px;
}

.item {
  text-align: center;
  height: 127px;
  width: 265px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}


.item dl {
  height: 100%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin: 0;
}
dt {
  font-size: 22px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

a {
  display: flex;
  text-decoration: none; /* 移除链接的下划线 */
}

span {
  color: rgb(162, 162, 162); /* 设置字体颜色 */
  cursor: pointer; /* 将鼠标指针设置为手型 */
}

i {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: 47px;
  height: 36px;
  padding-left: 15px;
}

i img {
  max-width: 100%; /* 确保图片不超出父元素的宽度 */
  max-height: 100%; /* 确保图片不超出父元素的高度 */
}

.tips {
  text-align: left;
  padding-right: 63px;
  padding-left: 63px;
  height: 95px;
  display: flex;
  align-items: center; /* 垂直居中 */
  font-size: 32px;
  color:#000000;
}

.list {
  background-color: rgb(255, 255, 255);
}

.list ul {
  list-style-type: none;
  padding: 0;
}


.list li {
  height: 160px;
  padding-right: 63px;
  padding-left: 63px;
  align-items: center; /* 垂直居中 */
  justify-content: space-between; /* 左右对齐 */
  border-bottom: 1px solid #e0e0e0; /* 添加底部分隔线 */
}

.job {
  font-size: 32px;
  color: rgb(65, 65, 225);
  text-align: left; /* 文本左对齐 */
  margin-right: auto; /* 将 job 元素推到最左边 */
}

.location {
  font-size: 32px;
  color: rgb(65, 65, 225);
  text-align: right; /* 文本右对齐 */
  margin-left: auto; /* 将 location 元素推到最右边 */
}
.list li a {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%; /* 让 a 元素撑满 li 的高度 */
  text-decoration: none;
  color: #000000;
}



</style>
