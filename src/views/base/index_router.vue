<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
let routeInfo: any = reactive(route)
const goHome = () => {
  router.push({
    path: '/home',
    query: {
      id: 'w13131313123123'
    }
  })
}
</script>

<template>
  <div style="padding: 20px; background-color: lightskyblue">
    {{ routeInfo.query.msg }}
  </div>
  <button @click="goHome">go home</button>
</template>

<style scoped></style>
