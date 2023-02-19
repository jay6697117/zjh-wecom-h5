<script setup lang="ts" name="Base">
import {
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from 'vue'

onBeforeMount(() => {
  console.log('挂载前 -- 1')
})
onMounted(() => {
  console.log('挂载 -- 2')
})
onBeforeUpdate(() => {
  console.log('更新前 -- 3')
})
onUpdated(() => {
  console.log('更新 --4')
})
onBeforeUnmount(() => {
  console.log('销毁前 -- 5')
})
onUnmounted(() => {
  console.log('销毁 -- 6')
})
// 设置keep-live include
onActivated(() => {
  console.log('kee-alive激活本组件')
})
// 设置keep-live include
onDeactivated(() => {
  console.log('kee-alive隐藏本组件')
})
onErrorCaptured((err) => {
  console.log('错误捕获:',err)
})

const throwError = () => {
  throw new Error('我抛出了错误')
}
</script>

<template>
  <div class="base">
    <div class="home-item"><van-button type="default" @click="$router.push('/home')">去home</van-button></div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 10px' }" dashed>文字</van-divider>
    <van-button type="default" @click="throwError">抛出错误</van-button>
  </div>
</template>

<style lang="less" scoped>
.base {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 15px;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: stretch;
}
</style>
