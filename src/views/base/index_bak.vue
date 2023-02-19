<script setup lang="ts" name="Base">
import { ref, reactive, type Ref, computed, watch, watchEffect } from 'vue'

/* -----------1---------- */
//枚举
const enum MyName {
  CN = '张金辉',
  EN = 'zhangjinhui'
}

const enum Gender {
  MAN = '男生',
  WOMAN = '女生'
}

//常量
const name = ref(MyName.CN)
const gender = ref(Gender.MAN)

// 对象
const user = reactive({
  name,
  gender
})

// 数组
const arr = reactive([{ name: 'hahaha' }])

// console.log('user', user)
// console.log('arr', arr)

// 事件直接定义
const switchName = () => {
  name.value = name.value === MyName.CN ? MyName.EN : MyName.CN
}
const switchGender = () => {
  gender.value = gender.value === Gender.MAN ? Gender.WOMAN : Gender.MAN
}
const handleAdd = (params: { name: string }) => {
  console.log('handleAdd:', params)
  arr.push(params)
}
const deleteAll = () => {
  arr.splice(0, arr.length)
}
/* -----------2---------- */
// const userInfo = computed(() => {
//   return name.value + '-' + gender.value
// })
let userInfo = computed({
  get: () => {
    // return name.value + '-' + gender.value\
    return { name: name.value, gender: gender.value }
  },
  set: obj => {
    console.log('userInfo set obj', obj)
    name.value = obj.name
    gender.value = obj.gender
  }
})
const changeUserInfo = () => {
  userInfo.value = { name: '李世民' as any, gender: '妖魔' as any }
  // userInfo.value = '1111' //无法为“value”赋值，因为它是只读属性。ts(2540)
}
// watch(
//   name,
//   (newValue, oldValue) => {
//     console.log('newValue 1:', newValue)
//     // console.log('oldValue 1:', oldValue)
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// )

// watch(
//   user,
//   (newValue, oldValue) => {
//     console.log('newValue 2:', newValue)
//     // console.log('oldValue 2:', oldValue)
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// )

// watch(
//   arr,
//   (newValue, oldValue) => {
//     console.log('newValue 3:', newValue)
//     // console.log('oldValue 3:', oldValue)
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// )

// 可监听对象的某个属性，这里监听user.name
// watch(
//   ()=>user.name,
//   (newValue, oldValue) => {
//     console.log('newValue 4:', newValue)
//     // console.log('oldValue 2:', oldValue)
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// )

// 不需要说明监听谁
// 用到user.gender就监听user.gender
watchEffect(() => {
  console.log('user被修改了:', user.name,'--',user.gender)
})

/* computed & watch & watchEffect */
</script>

<template>
  <div class="base">
    <div class="header">
      <button @click="switchName">我叫 {{ name }}</button>
      <br /><br />
      <button @click="switchGender">我是 {{ gender }}</button>
      <br /><br />
      <button @click="handleAdd({ name: `${Date.now()}` })">新增</button>
      <br /><br />
      <button @click="deleteAll">清空</button>
      <br /><br />
      <div v-for="(item, index) in arr" :key="index">
        {{ item.name }}
      </div>
    </div>
    <div class="content">
      <div style="padding: 10px; background-color: #ccc">userInfo: {{ userInfo }}</div>
      <button @click="changeUserInfo">改变userInfo</button>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style>
html {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
</style>

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
    padding: 10px;
    margin-bottom: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: skyblue;
    min-height: 400px;
    font-size: 20px;
  }

  .content {
    min-height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px;
    margin-bottom: 10px;
    background-color: lightseagreen;
  }

  .footer {
    background-color: lightpink;
    min-height: 400px;
  }
}
</style>
