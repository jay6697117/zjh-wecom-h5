<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('hello vue3!')
const changeMsg = (param: string) => {
  msg.value = param
}

defineExpose({
  msg,
  changeMsg
})
</script>

<template>
  <div style="background-color: lightseagreen; padding: 20px; margin-top: 20px">defineExpose: {{ msg }}</div>
</template>

<style scoped></style>
