<script lang="ts" setup>
import { onMounted, ref, reactive, computed } from 'vue'

const container = ref() // container节点
const blank = ref() // blank节点
let list: any[] = reactive([]) // 列表
const page = ref(1) // 当前页数
const limit = 20 // 一页展示
// 最大页数
const maxPage = computed(() => Math.ceil(list.length / limit))
console.log('list :>> ', list)
console.log('maxPage :>> ', maxPage.value)
// 真实展示的列表
const showList = computed(() => list.slice(0, page.value * limit))
const handleScroll = () => {
  console.log('handleScroll run')
  // 当前页数与最大页数的比较
  if (page.value > maxPage.value) return
  const clientHeight = container.value?.clientHeight
  const blankTop = blank.value?.getBoundingClientRect().top
  console.log('clientHeight :>> ', clientHeight)
  console.log('blankTop :>> ', blankTop)
  if (clientHeight === blankTop) {
    // blank出现在视图，则当前页数加1
    page.value++
  }
}

const getList = () => {
  return new Promise((resolve, reject) => {
    //步骤一:创建异步对象
    var ajax = new XMLHttpRequest()
    //步骤二:设置请求的url参数,参数一是请求的类型,参数二是请求的url,可以带参数
    ajax.open('get', 'http://127.0.0.1:8000')
    //步骤三:发送请求
    ajax.send()
    //步骤四:注册事件 onreadystatechange 状态改变就会调用
    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && ajax.status == 200) {
        //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
        resolve(JSON.parse(ajax.responseText))
      }
    }
  })
}

onMounted(async () => {
  const res = (await getList()) as any[]
  console.log('res :>> ', res)
  // list = res || []
  res.forEach(element => {
    list.push(element)
  })

  // const container  = document.getElementById('container');
  // container!.addEventListener('scroll',()=>{
  //   console.log('object 111');
  // })
})
</script>

<template>
  <!-- <h1>{{ showList.length }} - {{ maxPage }}</h1> -->
  <div id="container" @scroll="handleScroll" ref="container">
    <div class="sunshine" v-for="item in showList" :key="item.tid">
      <img :src="item.src" />
      <span>{{ item.text }}</span>
    </div>
    <div ref="blank">111</div>
  </div>
</template>
