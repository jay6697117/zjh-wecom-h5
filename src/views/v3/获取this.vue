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
  const { proxy, appContext } = getCurrentInstance() as ComponentInternalInstance
  // proxy 就是当前组件实例，可以理解为组件级别的 this，没有全局的、路由、状态管理之类的
  console.log('proxy', proxy)
  console.log('proxy?.$refs', proxy?.$refs)
  // 这个 global 就是全局实例
  const global = appContext.config.globalProperties
  console.log('global', global)
  console.log('globa.name', global.name)
})
</script>

<style lang="less" scoped></style>
