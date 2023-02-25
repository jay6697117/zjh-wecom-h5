<script setup lang="ts">
import { ref } from 'vue'

// 弹窗是否可见
const visible = ref(false)

// 打开弹窗
const handleOpen = () => {
  visible.value = true
}
// 关闭弹窗
const handleClose = () => {
  visible.value = false
}
// 确认弹窗
const handleConfirm = () => {
  emits('confirm')
  handleClose()
}

// 定义 props 类型
interface Props {
  title?: string // 弹窗标题 无？表示required: true
  content?: string // 弹窗内容 ?表示这个key可以为未定义
}
// 获取 props 值
// withDefaults 第一个参数定义Props类型，第二个参数定义默认值
const props = withDefaults(defineProps<Props>(), {
  title: '',
  content: ''
})
const emits = defineEmits<{
  (event: 'confirm'): void
}>()
</script>

<template>
  <div class="modal" v-if="visible">
    <div class="header">
      <h3>{{ props.title }}</h3>
      <div @click="handleClose">x</div>
    </div>
    <div class="body">
      <p>{{ props.content }}</p>
    </div>
    <div class="footer">
      <button @click="handleClose">取消</button>
      &nbsp;&nbsp;
      <button @click="handleConfirm">确定</button>
    </div>
  </div>

  <button @click="handleOpen">打开弹窗</button>
</template>

<style lang="less" scoped>
.modal {
  padding: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .body {
    padding: 10px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
