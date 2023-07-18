<template>
  <div class="container">
    <van-field v-model="value1" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"> 文本 </van-divider>
    <count-comp />
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted, defineProps, getCurrentInstance, nextTick, watch } from 'vue'

const value1 = ref('')
</script>

<style lang="less" scoped>
.container {
  width: 375px;
  height: 100%;
  padding: 15px 10px;
  background-color: #f8f8f8;

  .content {
    background-color: skyblue;
  }
}
</style>
