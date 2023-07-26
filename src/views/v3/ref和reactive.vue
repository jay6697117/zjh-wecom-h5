<template>
  <div>{{ count }}</div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  defineProps,
  getCurrentInstance,
  nextTick,
  watch,
  toRaw
} from 'vue'

const count = ref(111)
// 有人这么用
const arr = ref([])
console.log('arr.value', arr.value) // []
console.log('toRaw(arr.value)', toRaw(arr.value))

// 也有人这么用，一个组件里所有的属性全部定义在一个对象里，有点 Vue2 data 的味道
const data = reactive({
  name: '沐华',
  age: 18,
  gender: 'male'
})
console.log('data', data)
console.log('data.name', data.name) // 沐华

// 也有人一个组件里 ref 和 reactive 两种都用，随便你
</script>

<style lang="less">
.loading-toast.van-popup {
  box-sizing: border-box;
  max-width: 375px;
  max-height: 375px;
  width: 335px;
  height: 335px;
}

.loading-toast {
  .van-loading__spinner {
    color: red;
    width: 60px;
    height: 60px;
  }

  .van-toast__text {
    color: red;
    font-size: 80px;
    height: 100px;
    line-height: 100px;
  }
}
</style>

<style lang="less" scoped>
.container {
  width: 375px;
  padding: 15px 10px;
  background-color: #ccc;
}
</style>
