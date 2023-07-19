<script setup>
import { reactive, toRef, toRefs } from 'vue'
import { showLoadingToast } from 'vant'

const data = reactive({
  name: '沐华',
  age: 18
})
console.log('data', data)
console.log('data.name', data.name)
console.log('data.age', data.age)

// 这样虽然能拿到 name / age，但是会变成普通变量，没有响应式效果了
// const { name, age } = data
// console.log('name', name)
// console.log('age', age)

// 取出来一个响应式属性
const name = toRef(data, 'name')
const age = toRef(data, 'age')
console.log('name', name)
console.log('age', age)

// 这样解构出来的所有属性都是有响应式的
// const { name, age } = toRefs(data)
// console.log('name', name)
// console.log('age', age)

// 不管是 toRef 还是 toRefs，这样修改是会把 data 里的 name 改掉的
// 就是会改变源对象属性，这才是响应式该有的样子
const toastInst = showLoadingToast({
    duration: 0,
    forbidClick: false,
    message: '加载中',
    loadingType: 'spinner',
    className: 'loading-toast',
  })
setTimeout(() => {
  name.value = '沐沐-666'
  age.value = '777'
  toastInst.close();
}, 3000)

</script>
<template>
  <div>{{ data }}</div>
</template>


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
