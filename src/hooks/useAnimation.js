import { reactive } from 'vue'
export default function useAnimation({ todos }) {
  let animate = reactive({
    show: false,
    el: null
  })
  function beforeEnter(el) {
    console.log('beforeEnter el:', el)
    let dom = animate.el
    console.log('beforeEnter dom:', dom)
    let rect = dom.getBoundingClientRect()
    let x = window.innerWidth - rect.left - 60
    let y = rect.top - 10
    el.style.transform = `translate(-${x}px, ${y}px)`
  }
  function enter(el, done) {
    console.log('enter el:', el)
    document.body.offsetHeight
    el.style.transform = `translate(0,0)`
    el.addEventListener('transitionend', done)
  }
  function afterEnter(el) {
    animate.show = false
    el.style.display = 'none'
  }
  function removeTodo(event, index) {
    animate.el = event.target
    animate.show = true
    todos.value.splice(index, 1)
  }
  return { animate, beforeEnter, enter, afterEnter, removeTodo }
}
