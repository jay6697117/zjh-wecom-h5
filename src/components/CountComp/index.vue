<template>
  <div class="count-comp">
    <div style="margin-bottom: 10px; background-color: #f1f1f1; padding: 4px; width: 40px; border-radius: 4px">
      {{ count }}
    </div>
    <van-button size="small" type="default" @click="handleAdd">Add</van-button>&nbsp;
    <van-button size="small" type="default" @click="handleSub">Sub</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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
