<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  }
})
console.log('props', props)
// console.log('props.name', props.name)
// console.log('props.age', props.age)

const emit = defineEmits(['update:name', 'update:age'])
const updateName = () => {
  console.log('点击了updateName')
  emit('update:name', '这是新的名字')
}
const updateAge = () => {
  console.log('点击了updateAge')
  emit('update:age', 33)
}
</script>
<template>
  <div class="child">
    <div>props.name: {{ props.name }}</div>
    <div>props.age: {{ props.age }}</div>
    <button @click="updateName">更新name</button>
    <button @click="updateAge">更新age</button>
  </div>
</template>
<style lang="less" scoped>
.child {
  background-color: #ccc;
  padding: 10px;

  div {
    margin-bottom: 4px;
  }
  button {
    border: none;
    border: 1px solid #666;
    padding: 2px 6px;
    border-radius: 2px;
    margin-right: 10px;
  }
}
</style>
