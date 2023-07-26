import _ from 'lodash'
import { ref, reactive, computed } from 'vue'
import useStorage from '@/hooks/useStorage.js'
import useAnimation from '@/hooks/useAnimation.js'
export default function useTodos() {
  let timer = ref(null)
  let showModal = ref(false)
  let title = ref('')
  let todos = useStorage('TODOS_VALUE', [
    { id: '1', title: '吃饭', done: false },
    { id: '2', title: '睡觉', done: true }
  ])

  let { animate, beforeEnter, enter, afterEnter, removeTodo } = useAnimation({ todos })

  function shuffle() {
    todos.value = _.shuffle(todos.value)
  }
  function clear() {
    todos.value = todos.value.filter(item => !item.done)
  }
  function addTodo() {
    if (!title.value) {
      //输入内容为空
      showModal.value = true
      timer.value = setTimeout(() => {
        showModal.value = false
      }, 2000)
      console.log('addTodo timer.value:', timer.value)
      return
    }
    //输入内容为真
    todos.value.push({ id: String(todos.value.length + 1), title: title.value, done: false })
    title.value = ''
  }
  //已做长度
  let dosLen = computed(() => {
    return todos.value.filter(item => item.done).length
  })
  //全部长度
  let todosLen = computed(() => {
    return todos.value.length
  })
  let allDone = computed({
    get() {
      return dosLen.value === todosLen.value //已做 === 全部todo
    },
    set(val) {
      console.log(`alldone val:`, val)
      todos.value.forEach(element => {
        element.done = val
      })
    }
  })

  return {
    timer,
    showModal,
    title,
    todos,
    animate,
    beforeEnter,
    enter,
    afterEnter,
    removeTodo,
    shuffle,
    clear,
    addTodo,
    dosLen,
    todosLen,
    allDone
  }
}
