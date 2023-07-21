<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    required: false,
    default: false
  },
  type: {
    type: String,
    required: false,
    default: ''
  }
})
const emit = defineEmits(['myClick'])
console.log('props', props)

const str = ref('')

// 函数写法，计算类型
// const isFirst = computed(() => props.type === 1)

// 对象写法
// const status = computed({
//   get() {
//     return props.visible
//   }, // 相当于 Vue2中的 this.visible
//   set(val) {
//     emit('myClick', val)
//   } // 相当于 Vue2中的 this.$emit('input', val)
// })

// 函数写法，计算类型
const strComputed = computed(() => '输出: ' + (str.value || '空'))
// 对象写法
const status = computed({
  get() {
    return '输出: ' + (str.value || '空')
  }, //相当于 Vue2中的 this.visible
  set(val) {
    alert(val)
    emit('myClick', val)
  } //相当于 Vue2中的 this.$emit('input', val)
})
// computed 第二个参数也是一个对象，调试用的
const hehe = computed(() => '输出: ' + (str.value || '空'), {
  onTrack(e) {
    console.log('onTrack run')
  },
  onTrigger(e) {
    console.log('onTrigger run')
  }
})

setTimeout(() => {
  str.value = '555'
  status.value = 'hello world'
}, 2000)

// const count = ref(1);
// const plusOne = computed(() => '输出:' + count.value, {
//   onTrack(e) {
//     console.log('onTrack run');
//   },
//   onTrigger(e) {
//     console.log('onTrigger run');
//   }
// })
// setTimeout(() => {
//   count.value = 2
// }, 2000)
</script>

<template>
  <h1>strComputed: {{ strComputed }}</h1>
  <h1>status: {{ status }}</h1>
  <h1>hehe: {{ hehe }}</h1>
  <!-- <div>plusOne: {{ plusOne }}</div> -->
</template>
<style lang="less" scoped></style>
