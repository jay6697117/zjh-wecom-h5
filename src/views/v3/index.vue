<script lang="ts" setup>
import { watch, ref, reactive, onMounted, toRaw } from 'vue'

const name = ref('沐华')

interface DataType {
  age: number
  money: number
  children: any[]
}

const data: DataType = reactive({
  age: 18,
  money: 10000,
  children: []
})

// 监听 ref 属性
watch(name, (newName, oldName) => {
  console.log('watch newName 1:', newName)
})

// 监听其他属性、路由或者状态管理的都这样
watch(
  () => data.age,
  (newAge, oldAge) => {
    console.log('watch newAge 2:', newAge)
  }
)

// 监听多个属性，数组放多个值，返回的新值和老值也是数组形式
watch(
  () => [data.age, data.money, data.children],
  ([newAge, newMoney, newChildren]) => {
    // console.log('[newAge, newMoney,newChildren] 3', [newAge, newMoney, newChildren])
    console.log('[newAge, newMoney, toRaw(newChildren)] 3:', [newAge, newMoney, toRaw(newChildren)])
  }
)

// 第三个参数是一个对象，为可配置项，有5个可配置属性
watch(
  data.children,
  (newList, oldList) => {
    // console.log('children newList 4', newList)
    console.log('children toRaw(newList) 4:', toRaw(newList), toRaw(newList).length)
  },
  {
    // 这两个和 Vue2 一样，没啥说的
    // immediate: true,
    deep: true,
    // 回调函数的执行时机，默认在组件更新之前调用。更新后调用改成post
    flush: 'pre', // 默认值是 pre，可改成 post 或 sync
    // flush: 'post', // 默认值是 pre，可改成 post 或 sync
    // flush: 'sync', // 默认值是 pre，可改成 post 或 sync
    // 下面两个是调试用的
    onTrack(e) {
      console.log('onTrack run')
    },
    onTrigger(e) {
      console.log('onTrigger run')
    }
  }
)

name.value = '沐华-666'
data.age = 777
data.money = 30000
data.children.push(1)
</script>
<template>
  <div>
    {{ name }}
  </div>
  <div>
    {{ data }}
  </div>
</template>

<style lang="less" scoped>
div {
  background-color: #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
</style>
