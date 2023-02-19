<script setup lang="ts" name="Ts">
import { reactive, ref, computed, defineProps, defineEmits, onMounted } from 'vue'

interface IUser {
  name: string
  age: number
  gender?: string
}
/* eslint-disable */

const props = defineProps({
  name: {
    type: String,
    required: false,
    default: ''
  },
  age: {
    type: Number,
    required: false,
    default: 0
  }
})
console.log('props', props)

const emits = defineEmits(['handle-change'])

const handleChange = (val: string) => {
  emits('handle-change', val)
}
console.log('emits', emits)

// ref简单类型
const variant = ref<string>('zjh')
// ref复杂类型
const user = ref<IUser>({ name: 'zjh', age: 18 })
//reactive对象
const user1 = reactive<IUser>({ name: '林三心', age: 20 })
//reactive数组
const user2 = reactive<IUser[]>([{ name: '林三心', age: 20 }])

// computed
const text = computed<string>(() => {
  return variant.value + ' -- ' + '1'
})

const users = computed<IUser[]>(() => {
  const temp = user2.map(item => {
    item.gender = '男'
    return item
  })
  return temp
})

// 模板ref
const imgRef = ref<null | HTMLImageElement>(null)
onMounted(() => {
  console.log('imgRef', imgRef)
  console.log('imgRef.value?.src:', imgRef.value?.src)
})

// 自定义组件
// ref取自定义组件加范型

// 原生事件
const handleInputChange = (event: Event) => {
  console.log('handleInputChange:', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div>{{ variant }}</div>
  <div>{{ user }}</div>
  <div>{{ user1 }}</div>
  <div>{{ user2 }}</div>
  <div>{{ text }}</div>
  <div>{{ users }}</div>
  <img
    ref="imgRef"
    src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=Mzg2NjY2NTcyNg==&mid=2247487764&idx=1&sn=81737d867b9d7d9eff2b63c64a4a16fa&send_time="
    alt="1"
  />
  <input type="text" @change="handleInputChange" />
</template>

<style lang="less" scoped>
div {
  font-size: 20px;
  padding: 10px;
  margin-top: 10px;
  background-color: #ccc;
}
</style>
