<template>
  <div class="container">
    <h1>111</h1>
    <van-field
      ref="fieldRef"
      v-model="value1"
      label="文本"
      left-icon="smile-o"
      right-icon="warning-o"
      placeholder="显示图标"
    />
    <zjh-divider ref="zjhDividerRef" :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
      文本
    </zjh-divider>
    <CountCompExpose ref="countCompExposeRef" />
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
  toRaw,
  type ComponentInternalInstance
} from 'vue'
import { Divider as ZjhDivider } from 'vant'
import CountCompExpose from './CountCompExpose/index.vue'

const value1 = ref('666')
// 方法一，这个变量名和 DOM 上的 ref 属性必须同名，会自动形成绑定
const fieldRef = ref(null)
// 方法三，比如在ts里,可以直接获取到组件类型,可以这样获取子组件
const countCompExposeRef = ref<InstanceType<typeof CountCompExpose> | null>(null)
// 方法四，也可以这样 获取 vant 的组件类型
const zjhDividerRef = ref<InstanceType<typeof ZjhDivider>>()

onMounted(() => {
  console.log('fieldRef.value', fieldRef.value)
  console.log('countCompExposeRef', countCompExposeRef)
  console.log('countCompExposeRef.value.count', countCompExposeRef.value?.count)
  console.log('countCompExposeRef.value.handleAdd', countCompExposeRef.value?.handleAdd)
  console.log('countCompExposeRef.value.handleSub', countCompExposeRef.value?.handleSub)
  console.log('zjhDividerRef.value', zjhDividerRef.value)

  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  console.log('proxy?.$refs', proxy?.$refs)
})
</script>

<style lang="less" scoped>
.container {
  width: 375px;
  height: 100%;
  padding: 15px 10px;
  background-color: #f8f8f8;

  .content {
    background-color: skyblue;
  }
}
</style>
