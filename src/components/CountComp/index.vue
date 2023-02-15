<template>
  <div class="count-comp">
    <div>{{ count }}</div>
    <van-button size="small" type="default" @click="handleAdd">Add</van-button>&nbsp;
    <van-button size="small" type="default" @click="handleSub">Sub</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
console.log(111)
const count = ref(0)
const handleAdd = () => {
  count.value += 1
}
const handleSub = () => {
  count.value -= 1
}
</script>

<style lang="less" scoped>
.count-comp {
  padding: 10px;
  background-color: skyblue;
}
</style>
