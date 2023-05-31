<template>
  <div class="aaaa" ref="aaa">
    <h1>本文所有语法为 Vue 3.2.41 版本</h1>
    <div>str {{ str }}</div>
    <div>num {{ num }}</div>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  onMounted,
  defineProps,
  getCurrentInstance,
  nextTick,
  watch,
  type ComponentInternalInstance
} from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: false,
    default() {
      return []
    }
  },
  itemHeight: {
    type: Number,
    required: false,
    default: 30
  },
  height: {
    type: Number,
    required: false,
    default: 300
  }
})
let str = ref('')
const num = ref(0)
const foo = () => {
  console.log('1111')
}

setTimeout(() => {
  str.value = 'hello world'
  num.value = 123456
}, 2000)

watch(
  () => str,
  async val => {
    console.log('watch 执行了')
    await nextTick()
    console.log('val', val)
  },
  {
    immediate: true,
    deep: true
  }
)

onMounted(() => {
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  console.log('proxy?.$refs', proxy?.$refs)
})
</script>

<style lang="less" scoped></style>
