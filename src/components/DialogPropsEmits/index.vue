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
  <div class="dialog">
    <h1>{{ props.msg }}</h1>
    <button @click="changeMsg">改变msg</button>
  </div>
</template>

<style scoped>
.dialog {
  background-color: #eee;
  border: 5px solid red;
  margin: 20px 0;
  padding: 10px;
}
</style>
