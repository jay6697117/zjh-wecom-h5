<script setup>
import { reactive, watchEffect } from 'vue'

const userInfo = reactive({
  name: 'zjh',
  age: 11
})

// 正常使用
watchEffect(() => {
  // 会自动收集这个函数使用到的属性作为依赖，进行监听
  // 监听的是 userInfo.name 属性，不会监听 userInfo
  console.log('userInfo.name:', userInfo.name)
  console.log('userInfo.age:', userInfo.age)
})

// 有两个参数，参数一是触发监听回调函数，参数二是可选配置项
watchEffect(
  onInvalidate => {
    console.log('沐华 --> onInvalidate')
    onInvalidate(() => {
      console.log('onInvalidate run...')
    })
  },
  {
    // 这里是可配置项，意思和 watch 是一样的，不过这只有3个可配置的
    flush: 'pre',
    // flush: 'post',
    onTrack(e) {
      console.log('onTrack run')
    },
    onTrigger(e) {
      console.log('onTrigger run')
    }
  }
)

setTimeout(() => {
  userInfo.name = 'zjh-666'
  userInfo.age = 33
}, 1000)
</script>

<template>
  <div>{{ userInfo }}</div>
</template>

<style lang="less" scoped></style>
