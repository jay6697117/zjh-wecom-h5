<script setup lang="ts">
import { ref, reactive } from 'vue'
let x = ref(0)
let y = ref(32)
const setX = (e: any) => {
  const val = e.target.value
  x.value = val
  y.value = val * (9 / 5) + 32
}
const setY = (e: any) => {
  const val = e.target.value
  y.value = val
  x.value = (val - 32) * (5 / 9)
}
</script>

<template>
  <div>
    <div>
      <div>x:{{ x }}</div>
      <input type="text" :value="x" @change="setX" />
    </div>

    <div>
      <div>y:{{ y }}</div>
      <input type="text" :value="y" @change="setY" />
    </div>
  </div>
</template>

<style scoped></style>
