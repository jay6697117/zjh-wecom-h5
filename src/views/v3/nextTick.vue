<script setup>
import { nextTick } from 'vue'

// 方式 一 异步调用1
const handleClick = async () => {
  await nextTick()
  console.log('沐华 1')
}

// 方式二 回掉函数
nextTick(() => {
  console.log('沐华 2')
})

// 方式三 异步调用2
nextTick().then(() => {
  console.log('沐华 3')
})
</script>

<template>
  <button @click="handleClick">点 我 呀</button>
</template>

<style lang="less" scoped>
button {
  margin: 10px;
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
