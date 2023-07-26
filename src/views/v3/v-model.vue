<script lang="ts" setup>
import { ref } from 'vue'
import Child from './Child/index.vue'

const name = ref('沐华')
const age = ref(18)
</script>

<template>
  <h1>name: {{ name }}</h1>
  <h1>age: {{ age }}</h1>
  <Child v-model:name="name" v-model:age="age" />
</template>

<style lang="less" scoped></style>
