<script setup>
import { ref } from 'vue'
const str = ref('blue') // 蓝色
// let str = 'blue'
setTimeout(() => {
  // str = 'purple' // 非响应式数据不可以动态改变
  str.value = 'purple' // 响应式数据可以动态改变
}, 2000)
</script>

<template>
  <div class="name">沐华</div>
</template>

<style lang="less" scoped>
.name {
  font-size: 30px;
  color: red;
  padding: 20px;
  background-color: v-bind(str); // JS 中的色值变量 #f00 就赋值到这来了
}
</style>
