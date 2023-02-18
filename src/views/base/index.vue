<script setup lang="ts" name="Base"></script>

<template>
  <div class="base">
    <div class="header"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<style lang="less" scoped>
.base {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  .header {
    margin-bottom: 10px;
    background-color: lightseagreen;
    height: 100px;
  }
  .content {
    // flex: 1;
    height: calc(100% - 200px);
    margin-bottom: 10px;
    background-color: lightblue;
  }

  .footer {
    background-color: gray;
    height: 100px;
  }
}
</style>
