<script setup lang="ts" name="Base">
import useUser from './useUser'
const { name, gender, user, arr, switchName, switchGender, handleAdd, deleteAll, userInfo, changeUserInfo } = useUser()
</script>

<template>
  <div class="base">
    <div class="header">
      <button @click="switchName">我叫 {{ name }}</button>
      <br /><br />
      <button @click="switchGender">我是 {{ gender }}</button>
      <br /><br />
      <button @click="handleAdd({ name: `${Date.now()}` })">新增</button>
      <br /><br />
      <button @click="deleteAll">清空</button>
      <br /><br />
      <div v-for="(item, index) in arr" :key="index">
        {{ item.name }}
      </div>
    </div>
    <div class="content">
      <div style="padding: 10px; background-color: #ccc">user: {{ user }}</div>
      <div style="padding: 10px; background-color: #ccc">userInfo: {{ userInfo }}</div>
      <button @click="changeUserInfo">改变userInfo</button>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style>
html {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
</style>

<style lang="less" scoped>
.base {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  .header {
    padding: 10px;
    margin-bottom: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: skyblue;
    min-height: 400px;
    font-size: 20px;
  }

  .content {
    min-height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px;
    margin-bottom: 10px;
    background-color: lightseagreen;
  }

  .footer {
    background-color: lightpink;
    min-height: 400px;
  }
}
</style>
