<script setup lang="ts" name="Home">
import { ref } from 'vue'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const wx = (window as any).wx
const show = ref(false)
let timeoutId: null | ReturnType<typeof setTimeout> = null

const showNotifyFn = () => {
  show.value = true
  timeoutId = setTimeout(() => {
    show.value = false
  }, 2000)
  console.log('timeoutId', timeoutId)
}

// const onClickLeft = () => {}

const foo = async () => {
  console.log('click run')
  showToast({
    message: '加载中...',
    duration: 2000
  })
  await wx.checkJsApi({
    jsApiList: ['chooseImage'], // 需要检测的JS接口列表
    success: function (res: any) {
      console.log('res ', res)
      showToast(res.errMsg)
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
  })
}
</script>

<template>
  <div class="home">
    <div class="home-item"><van-button type="default" @click="$router.push('/base')">去base</van-button></div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 10px' }" dashed>文字</van-divider>
    <div class="home-item"><van-button type="default" @click="$router.push('/demo')">去demo</van-button></div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 10px' }" dashed>文字</van-divider>
    <div class="home-item"><van-tag type="primary" @click="foo">标签</van-tag></div>
    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 10px' }" dashed>文字</van-divider>
    <div class="home-item"><van-button type="primary" text="组件调用" @click="showNotifyFn" /></div>
    <van-notify v-model:show="show" type="success">
      <van-icon name="bell" style="margin-right: 4px" />
      <span>通知内容</span>
    </van-notify>
  </div>
</template>

<style lang="less" scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  // background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  .home-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
