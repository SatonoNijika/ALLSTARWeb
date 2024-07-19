<template>
<div class="row2">
  <div class="card">
    <div class="card-content">
      <h1>R-STAR</h1>
      <p>Towards next-generation interventions</p>
      <div class="image-container">
        <img src="/public/img/1a.jpg" alt="Device" class="device-image">
        <button class="learn-more">LEARN MORE</button>
      </div>
    </div>
  </div>

    <div class="card">
    <div class="card-content">
      <h1>R-STAR</h1>
      <p>Towards next-generation interventions</p>
      <div class="image-container">
        <img src="/public/img/2a.jpg" alt="Device" class="device-image">
        <button class="learn-more">LEARN MORE</button>
      </div>
    </div>
  </div>

    <div class="card">
    <div class="card-content">
      <h1>R-STAR</h1>
      <p>Towards next-generation interventions</p>
      <div class="image-container">
        <img src="/public/img/3a.jpg" alt="Device" class="device-image">
        <button class="learn-more">LEARN MORE</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SgnioCard',
};
</script>

<style scoped>
.card {
  background-color: #f1f1f1;
  border-radius: 10px;
  padding: 85px 155px;
  margin: 0px 25px;
  width: 540px;
  height: 760px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.row2 {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* 调整卡片之间的间距 */
  padding: 20px;
}

.card-content h1 {
  color: #3c50e0;
  margin: 0;
  font-size: 48px;
}

h1 {
  text-align: left;
}

.card-content p {
  color: #555;
  margin: 10px 0;
  font-size: 28px;
  text-align: left;
}

.image-container {
  position: relative;
  width: 100%;
}

.device-image {
  width: 100%;
  height: 654px;
  margin: 20px 0;
}

.learn-more {
  position: absolute;
  bottom: 10px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  background-color: #3c50e0;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 34px;
}

.learn-more:hover {
  background-color: #2a3ba0;
}
</style>
