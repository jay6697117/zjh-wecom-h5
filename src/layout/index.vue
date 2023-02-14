<script setup lang="ts">
import { useCachedViewStoreHook } from '@/store/modules/cachedView'
import { computed } from 'vue'
const cachedViewList = computed(() => {
  return useCachedViewStoreHook().cachedViewList
})
</script>
<template>
  <div class="app-wrapper">
    <div class="app-wrapper__content">
      <!-- <router-view v-slot="{ Component, route }"> -->
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViewList">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="app-wrapper__footer" v-if="true">
      <tabbar />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/styles/mixin.less';

.app-wrapper {
  .clearfix();
  position: relative;
  width: 100%;
  height: 100%;

  &__content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__footer {
    background-color: red;
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
