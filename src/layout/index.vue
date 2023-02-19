<script setup lang="ts">
import { useCachedViewStoreHook } from '@/store/modules/cachedView'
import { computed } from 'vue'
const cachedViewList = computed(() => {
  return useCachedViewStoreHook().cachedViewList
})
const onClickLeft = () => history.go(-1)
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper__header" v-if="!$route.meta?.noNav">
      <van-nav-bar :title="`${$route.meta?.title}`">
        <template #left>
          <van-icon name="arrow-left" size="18" color="#888" @click="onClickLeft" />
        </template>
      </van-nav-bar>
    </div>
    <div
      class="app-wrapper__content"
      :style="{
        'padding-top': !$route.meta?.noNav ? '46px' : '',
        'padding-bottom': !$route.meta?.noTabbar ? '50px' : ''
      }"
    >
      <!-- <div>cachedViewList:{{ cachedViewList }}</div> -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViewList">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="app-wrapper__footer" v-if="!$route.meta?.noTabbar">
      <tabbar />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/styles/mixin.less';
:deep(.van-nav-bar__left) {
  padding: 0 10px;
  // background-color: red;
}

.app-wrapper {
  .clearfix();
  position: relative;
  width: 100%;
  height: 100%;

  &__header {
    width: 100%;
    height: 46px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  &__content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__footer {
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
