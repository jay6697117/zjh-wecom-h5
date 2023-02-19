<script setup lang="ts" name="Base">
import { ref, onMounted, reactive } from 'vue'
const msg = ref('111')
const changeMsg = (val: string): void => {
  msg.value = val
}
const handleInput = (e: any) => {
  msg.value = e.target.value
}
const exposeRef = ref(null)

let msgExpose =ref('')
let changeMsgExpose: (val: string) => void = (val: string): void => {}

onMounted(() => {
  console.log('onMounted', exposeRef.value)
  const { msg, changeMsg } = exposeRef.value as any
  setTimeout(() => {
    console.log('onMounted msg:', msg)
    console.log('onMounted msg:', changeMsg)
    msgExpose.value = msg;
    changeMsgExpose = changeMsg;
  }, 2000)
})
</script>

<template>
  <div class="base">
    <input type="text" :value="msg" @input="handleInput" />
    <dialog-props-emits :msg="msg" @change-msg="changeMsg" />
    <dialog-expose ref="exposeRef" />
    <button @click="changeMsgExpose('父组件 changeMsgExpose')">changeMsgExpose</button>
    <div>msgExpose:{{ msgExpose }}</div>
  </div>
</template>

<style lang="less" scoped>
.base {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 15px;
  background-color: skyblue;
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-start;
  // align-items: stretch;
}
</style>
