<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  msg: {
    type: String,
    required: true,
    default: ''
  }
})
const emit = defineEmits(['change-msg'])

// change-msg
const changeMsg = () => {
  emit('change-msg', '你好啊')
}
</script>

<template>
  <div style="background-color: #eee;">
    <h1>{{props.msg}}</h1>
    <button @click="changeMsg">改变msg</button>
  </div>
</template>

<style scoped></style>
