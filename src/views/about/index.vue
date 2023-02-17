<script setup name="About">
// import { ref } from 'vue'
</script>
<template>
  <div class="about">
    <div class="item">
      <div class="item-title">累加器</div>
      <count-comp />
    </div>

    <div class="item">
      <div class="item-title">温度转换器</div>
      <temperature />
    </div>
  </div>
</template>

<style lang="less" scoped>
.about {
  box-sizing: border-box;
  padding: 20px 15px 0;
  width: 100%;
  height: 100%;

  .item {
    background-color: #eee;
    padding: 10px;
    margin-bottom: 10px;

    .item-title {
      padding: 10px 0;
    }
  }
}
</style>
