<template>
  <div class="form-container">
    <div class="form-inner-container">
      <!-- 表单内容 -->
      <el-form ref="form" :model="form" label-position="top">
        <el-form-item label="姓氏">
          <el-input v-model="form.lastName"></el-input>
        </el-form-item>

        <el-form-item label="名字">
          <el-input v-model="form.firstName"></el-input>
        </el-form-item>

        <el-form-item label="组织">
          <el-input v-model="form.organization"></el-input>
        </el-form-item>

        <el-form-item label="国家">
          <el-select v-model="form.country" placeholder="请选择国家">
            <el-option
              v-for="country in sortedCountries"
              :key="country.value"
              :label="country.label"
              :value="country.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="电邮">
          <el-input v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="意见和问题">
          <el-input type="textarea" v-model="form.opinion"></el-input>
        </el-form-item>

        <el-form-item>
          <el-checkbox v-model="form.subscribe">我乐意继续接受allstar相关信息</el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  lastName: '',
  firstName: '',
  organization: '',
  country: '',
  email: '',
  phone: '',
  opinion: '',
  subscribe: false,
});

// 国家列表，按首字母排序
const countries = [
  { value: 'CN', label: '中国' },
  // ...其他国家
];

const sortedCountries = countries.sort((a, b) => a.label.localeCompare(b.label));

const onSubmit = () => {
  // 处理表单提交
  console.log('提交表单', form.value);
  // 在这里，您可以进一步处理表单数据，例如发送到服务器或生成文档
};
</script>

<style>
.form-container {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 1000px;
}

.form-inner-container {
  width: 1000px;
  height: 900px;
  border: 2px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
}

.el-form-item {
  margin-bottom: 20px;
}

/* 设置表单字体大小 */
.el-form-item__label, .el-input__inner, .el-textarea__inner, .el-checkbox__label {
  font-size: 20px;
  font-weight: bold;
}
</style>
