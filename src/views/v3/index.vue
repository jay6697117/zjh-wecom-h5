<template>
  <div class="container">
    <h1>111</h1>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  computed,
  onBeforeMount,
  onMounted,
  defineProps,
  getCurrentInstance,
  nextTick,
  watch,
  toRaw,
  type ComponentInternalInstance
} from 'vue'
import { showLoadingToast } from 'vant'

const p1 = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ msg: '请求成功', data: [1, 2, 3], code: 200 })
    }, 2000)
  })
}

const getData = async () => {
  const toastInst = showLoadingToast({
    duration: 0,
    forbidClick: false,
    message: '加载中',
    loadingType: 'spinner',
    className: 'loading-toast',
    teleport: document.getElementsByClassName('container')[0]
  })
  try {
    const res = await p1()
    console.log('res',Date.now(), res)
    toastInst.close()
  } catch (error) {
    toastInst.close()
    console.log('error', error)
  }
}

onBeforeMount(() => {
  console.log('onBeforeMount run');
  getData()
})
onMounted(() => {
  console.log('onMounted run');
  getData()
})
</script>


<style lang="less">
.loading-toast.van-popup {
  box-sizing: border-box;
  max-width: 375px;
  max-height: 375px;
  width: 335px;
  height: 335px;
}

.loading-toast {
  .van-loading__spinner {
    color: red;
    width: 60px;
    height: 60px;
  }

  .van-toast__text {
    color: red;
    font-size: 80px;
    height: 100px;
    line-height: 100px;
  }
}
</style>

<style lang="less" scoped>
.container {
  width: 375px;
  padding: 15px 10px;
  background-color: #ccc;
}
</style>
