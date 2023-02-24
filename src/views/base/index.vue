<script setup lang="ts" name="Base">
import { ref, onMounted, reactive } from 'vue'
import type DialogExpose from '@/components/DialogExpose/index.vue'

const msg = ref('111')
const changeMsg = (val: string): void => {
  msg.value = val
}
const handleInput = (e: any) => {
  msg.value = e.target.value
}

const exposeRef = ref<InstanceType<typeof DialogExpose> | null>(null)
let msgExpose = ref('')
let changeMsgExpose: (val: string) => void = (val: string): void => {}

onMounted(() => {
  console.log('onMounted', exposeRef.value)
  // const { msg, changeMsg } = exposeRef.value as any
  // console.log('onMounted msg:', msg)
  // console.log('onMounted changeMsg:', changeMsg)
  // msgExpose.value = msg
  // changeMsgExpose = changeMsg
  msgExpose.value = exposeRef.value!.msg
  changeMsgExpose = exposeRef.value!.changeMsg
  console.log('onMounted msgExpose:', msgExpose)
  console.log('onMounted changeMsgExpose:', changeMsgExpose)
})
</script>

<template>
  <div class="base">
    <input type="text" :value="msg" @input="handleInput" />
    <!-- <Teleport to="#app">
      <dialog-props-emits :msg="msg" @change-msg="changeMsg" />
    </Teleport> -->
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
