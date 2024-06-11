<template>
  <el-container>
    <el-header>
      <h1>SGNIO Piercing Robot</h1>
    </el-header>
    <el-main>
      <div class="image-container">
        <img src="/public/img/sgnnm-pic-01.png" alt="SGNIO Piercing Robot">
        <div class="annotation" style="top: 20%; left: 30%;">Force perception</div>
        <div class="annotation" style="top: 40%; left: 20%;">Near infrared optical positioning</div>
        <div class="annotation" style="top: 60%; left: 30%;">Force measurement</div>
        <div class="annotation" style="top: 80%; left: 40%;">Ultrasonic probe</div>
      </div>
      <el-card class="text-container">
        <p>The SIEM executive end integrates near-infrared optical positioning technology, real-time ultrasonic imaging and display technology, force sensing and haptic control technology, making the surgical process more accurate, intuitive, convenient and safe. In addition, the SIEM executive end is equipped with a more versatile chuck, enabling the robot to accommodate more types of puncture needles.</p>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'RobotInfo'
};
</script>

<style scoped>
.image-container {
  position: relative;
  text-align: center;
}

.image-container img {
  width: 100%;
  max-width: 600px;
  height: auto;
}

.annotation {
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px;
  border-radius: 3px;
}

.text-container {
  margin-top: 20px;
  padding: 20px;
}
</style>
