<script setup>
import { watch, ref, reactive } from 'vue'

const name = ref('沐华')
const data = reactive({
  age: 18,
  money: 100000000000000000000,
  children: []
})

// 监听 ref 属性
watch(name, (newName, oldName) => {})

// 监听其他属性、路由或者状态管理的都这样
watch(
  () => data.age,
  (newAge, oldAge) => {}
)

// 监听多个属性，数组放多个值，返回的新值和老值也是数组形式
watch([data.age, data.money], ([newAge, newMoney], [oldAge, oldMoney]) => {})

// 第三个参数是一个对象，为可配置项，有5个可配置属性
watch(data.children, (newList, oldList) => {}, {
  // 这两个和 Vue2 一样，没啥说的
  immediate: true,
  deep: true,
  // 回调函数的执行时机，默认在组件更新之前调用。更新后调用改成post
  flush: 'pre', // 默认值是 pre，可改成 post 或 sync
  // 下面两个是调试用的
  onTrack(e) {
    debugger
  },
  onTrigger(e) {
    debugger
  }
})
</script>
