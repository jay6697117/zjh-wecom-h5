<template>
  <div class="virtual-list" ref="list" :style="`height:${height - 1}px`">
    <div
      class="item"
      v-for="(item, index) in visibleItems"
      :key="index"
      :style="{ transform: `translateY(${item.offset}px)`, height: `${props.itemHeight}px` }"
    >
      <div class="item-son">{{ item.content }} {{ props.itemHeight }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, defineProps, type Ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default() {
      return []
    }
  },
  itemHeight: {
    type: Number,
    required: true,
    default: 30
  },
  height: {
    type: Number,
    required: true,
    default: 300
  }
})

const list: Ref<{
  scrollTop: number
  addEventListener: (p1: string, p2: () => void) => void
} | null> = ref(null)

const scrollTop = ref(0)

// const totalHeight = computed(() => props.items.length * props.itemHeight)

const visibleRange = computed(() => {
  const top = Math.floor(scrollTop.value / props.itemHeight)
  const bottom = top + Math.ceil(props.height / props.itemHeight)
  return { top, bottom }
})

const visibleItems = computed(() => {
  const { top, bottom } = visibleRange.value
  return props.items.slice(top, bottom).map((content, index) => {
    return {
      content,
      offset: (top + index) * props.itemHeight
    }
  })
})

const handleScroll = () => {
  scrollTop.value = list.value!.scrollTop
}

onMounted(() => {
  list.value!.addEventListener('scroll', handleScroll)
})
</script>

<style lang="less">
.virtual-list {
  overflow-y: auto;
  position: relative;
  width: 100%;
  height: 100%;

  .item {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;

    .item-son {
      height: 20px;
      background-color: #ccc;
      margin-bottom: 10px;
    }
  }
}
</style>
