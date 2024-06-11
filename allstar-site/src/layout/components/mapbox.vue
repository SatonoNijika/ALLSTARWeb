<template>
  <div class="company-box">
    <div class="map-box-container">
        <div class="int-tit">
            <div class="title">Company Map</div>
        </div>
      <el-tabs v-model="activeTab">
        <el-tab-pane label="国内地址" name="first">
          <div class="content-wrapper">
            <div class="left">
              <div class="item" v-for="item in items" :key="item.id">
                <div class="tit">{{ item.title }}</div>
                <dl>
                  <dt>{{ item.dt }}</dt>
                  <dd>{{ item.dd }}</dd>
                </dl>
              </div>
            </div>
            <div class="right">
              <div class="bd">
                <div class="map-box">  
                  <img src="/public/img/map-bg-01.jpg" alt="Map Image" />
                  <div class="tips" :style="tipsStyle">
                    <i><img src="/public/img/mapred.png" alt="Map Image" /></i>
                    <span class="name">珠海横琴</span>
                  </div>
                    <div class="tips1" :style="tipsStyle1">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name2">北京</span>
                  </div>
                  <div class="tips1" :style="tipsStyle2">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name2">上海</span>
                  </div>
                  <div class="tips1" :style="tipsStyle3">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name2">南京</span>
                  </div>
                  <div class="tips1" :style="tipsStyle4">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name3">杭州</span>
                  </div>
                    <div class="tips1" :style="tipsStyle5">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name2">武汉</span>
                  </div>
                    <div class="tips1" :style="tipsStyle6">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name2">重庆</span>
                  </div>
                   <div class="tips1" :style="tipsStyle7">
                    <i><img src="/public/img/mapgray.png" alt="Map Image" /></i>
                    <span class="name2">西安</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <!-- Add more tabs as needed -->
      </el-tabs>
    </div>
  </div>
</template>


<script>
import { ElTabs, ElTabPane } from 'element-plus';
import { ref } from 'vue';

export default {
  components: {
    ElTabs,
    ElTabPane
  },
  setup() {
    const activeTab = ref('first');
    const items = ref([
      { id: 1, title: 'CHINA', dt: '珠海横琴', dd: '珠海横琴三一总部大厦1号楼' },
    ]);

    // Define the position for the tips
    const tipsStyle = ref({
      top: '627px', // adjust the top position
      left: '715px' // adjust the left position
    });

    const tipsStyle1 = ref({
      top: '350px', // adjust the top position
      left: '730px' // adjust the left position
    });

     const tipsStyle2 = ref({
      top: '492px', // adjust the top position
      left: '830px' // adjust the left position
    });

     const tipsStyle3 = ref({
      top: '470px', // adjust the top position
      left: '790px' // adjust the left position
    });

      const tipsStyle4 = ref({
      top: '510px', // adjust the top position
      left: '820px' // adjust the left position
    });

      const tipsStyle5 = ref({
      top: '500px', // adjust the top position
      left: '700px' // adjust the left position
    });

      const tipsStyle6 = ref({
      top: '510px', // adjust the top position
      left: '600px' // adjust the left position
    });

     const tipsStyle7 = ref({
      top: '437px', // adjust the top position
      left: '625px' // adjust the left position
    });


    return {
      activeTab,
      items,
      tipsStyle,
      tipsStyle1,
      tipsStyle2,
      tipsStyle3,
      tipsStyle4,
      tipsStyle5,
      tipsStyle6,
      tipsStyle7
    };
  }
};
</script>

<style scoped>
.company-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 102px;
  margin-bottom: 130px;
}

.title {
    margin-top: 63px;
    margin-bottom: 47px;
}

.int-tit {
  font-size: 74px;
  font-weight: bold;
}

.map-box-container {
  padding-top: 51px;
  width: 1480px;
  height: 782px;
}

.content-wrapper {
  display: flex;
}

.left {
  padding: 25px;
  flex: 0.2;
}

.right {
  flex: 1;
}

.item {
  margin-bottom: 25px;
}

.tit {
  font-size: 48px;
  text-align: left;
  color: rgb(41, 73, 195);
}

dl {
  padding-top: 25px;
}

dt {
  font-size: 32px;
  margin: 0;
  line-height: 1.5;
  text-align: left;
  color: rgb(70, 70, 70);
}

dd {
  font-size: 18px;
  margin: 0;
  line-height: 3;
  text-align: left;
  color: rgb(174, 174, 174);
}

.bd {
  margin-bottom: 15px;
}

.map-box {
  position: relative;
  width: 100%;
  height: 800px;
}

.map-box img {
  width: 100%;
  height: 100%;
}

.tips {
  position: absolute;
  display: flex;
  align-items: center;
}

.tips1 {
  position: absolute;
  display: flex;
  align-items: center;
}

.tips i {
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0 5px;
}

.tips1 i {
  position: relative;
  width: 22px;
  height: 22px;
  margin: 0 5px;
}

.line {
  height: 2px;
  background-color: rgb(41, 73, 195);
  width: 50px;
  position: relative;
  right: 5px;
}

.name {
  font-size: 24px;
  padding-left: 10px;
  color: red;
  margin-left: -145px;
  font-weight: bold;
    text-shadow: 
    -1px -1px 0 #fff,  
     1px -1px 0 #fff,
    -1px  1px 0 #fff,
     1px  1px 0 #fff; /* Black outline */
}

.name2 {
  font-size: 18px;
  padding-left: 10px;
  color: rgb(105, 102, 102);
  margin-left: -10px;
  font-weight: bold;
    text-shadow: 
    -1px -1px 0 #fff,  
     1px -1px 0 #fff,
    -1px  1px 0 #fff,
     1px  1px 0 #fff; /* Black outline */
}

.name3 {
  font-size: 18px;
  padding-left: 10px;
  color: rgb(105, 102, 102);
  margin-left: -75px;
  font-weight: bold;
    text-shadow: 
    -1px -1px 0 #fff,  
     1px -1px 0 #fff,
    -1px  1px 0 #fff,
     1px  1px 0 #fff; /* Black outline */
}

::v-deep .el-tabs__item {
  font-size: 25px !important; /* Adjust this value as needed */
}
</style>

