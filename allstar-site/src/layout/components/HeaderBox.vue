<template>
  <div class="headerbox">
    <div class="header-flex">
      <!-- 左边放置公司logo -->
      <div class="logo-container">
        <img src="/public/img/logo4.png" alt="公司logo" />
      </div>

      <!-- 中间放置5个横向的nav btn -->
      <ul class="nav-buttons">
        <li><router-link to="/Home" class="nav-link"><span>HOME</span></router-link></li>
        <li>
          <router-link to="/product" class="nav-link"><span>PRODUCT</span></router-link>
        <!-- 添加二级菜单 -->
          <div class="submenu">
            <ul>
              <li><router-link to="/STARPJ" class="nav-link2">了解STARPJ</router-link></li>
              <li><router-link to="/USTAR" class="nav-link2">U-STAR规划</router-link></li>
              <li>STARPJ介绍</li>
            </ul>
          </div>  
        </li>
        <li>
          <router-link to="/service" class="nav-link"><span>SERVICE SUPPORT</span></router-link>
        <!-- 添加二级菜单 -->
          <div class="submenu">
            <ul>
              <li><router-link to="/Download" class="nav-link2">资料下载</router-link></li>
              <li><router-link to="/Require" class="nav-link2">产品维修</router-link></li>
              <li><router-link to="/CommentQA" class="nav-link2">常见问题解决</router-link></li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/communicate" class="nav-link"><span>COMMUNICATE</span></router-link>
        <!-- 添加二级菜单 -->
          <div class="submenu">
            <ul>
              <li>合作伙伴/供应商</li>
              <li>社区特征</li>
              <li>培训支持</li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="/about" class="nav-link"><span>ABOUT US</span></router-link>
        <!-- 添加二级菜单 -->
          <div class="submenu">
            <ul>
              <li><router-link to="/CompanySNS" class="nav-link2">公司动态</router-link></li>
              <li><router-link to="/JoinUS" class="nav-link2">加入我们</router-link></li>
            </ul>
          </div>
        </li>
      </ul>
      
      <!-- 右边放置搜索框及语言切换 -->
      <div class="header-right">
        <div class="lang gap">
          <span class="item" :class="{ active: locale === 'zh-cn' }" @click="changeLanguage('zh-cn')">简体中文</span> /
          <span class="item" :class="{ active: locale === 'en' }" @click="changeLanguage('en')">EN</span>
        </div>
        <div class="nav">
          <i class="el-icon-search"></i>
          <el-input
            placeholder="请输入搜索内容"
            v-model="searchText"
            clearable
            class="custom-input"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

//语言切换
function changeLanguage(lang) {
  locale.value = lang;
  localStorage.setItem('locale', lang);
}


const searchText = ref(''); // 响应式数据

</script>

<style lang="scss" scoped>
.headerbox {
  background-color: #ffffff;
  color: #000000;
  border: 6px solid #ffffff;
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  padding: 10px;
  position: relative;
  z-index: 10;
}

.header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 10;
}

.logo-container {
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  margin-left: 120px;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 32px;
}

.logo-container img {
  width: 280px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.nav-buttons {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 100%;
  position: relative;
  z-index: 10;
}

.nav-buttons li {
  height: 100%;
  position: relative;
}

.gap {
  margin-right: 20px;
}

.lang {
  font-size: 24px;
  color: rgb(11, 51, 129);
  .item {
    cursor: pointer;
    &.active {
      font-size: 24px;
      font-weight: bold;
      color: rgb(11, 51, 129);
    }
  }
}

.nav-buttons li a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(11, 51, 129);
  text-decoration: none;
  padding: 0 30px;
  border-radius: 20px;
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  margin-right: 15px;
  margin-left: 15px;
}

.nav-buttons li a.nav-link {
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}

.nav-buttons li a.nav-link2 {
  height: 100%;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  padding: 0px;
  margin: 0px;
}

.nav-buttons li a span {
  font-size: 32px;
  font-weight: bold;
  font-family: 'Arial', sans-serif;
}

.nav-buttons li a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.submenu {
  position: absolute;
  top: 100%;
  left: 50%; /* Start submenu at the center of the parent menu item */
  transform: translateX(-50%); /* Adjust position to align properly */
  display: none;
  width: 200px;
  z-index: 20;
}

.nav-buttons li {
  position: relative;
}

.nav-buttons li:hover .submenu {
  display: block;
}

.submenu ul {
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #6a9690;
  border-radius: 20px;
  z-index: 20;
}

.submenu ul li {
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}

.submenu ul li:hover {
  background-color: #f0f0f0;
}

.header-right {
  margin-right: 280px;
  display: flex;
  align-items: center;
}

.nav {
  display: flex;
  align-items: center;
  padding-right: 10px;
}

.custom-input {
  width: 200px;
}


</style>