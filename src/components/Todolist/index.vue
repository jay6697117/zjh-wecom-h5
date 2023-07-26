<template>
  <div class="todos">
    <h2>title:{{ title }}</h2>
    <div class="input">
      输入:
      <input type="text" v-model="title" @keydown.enter="addTodo" />
      &nbsp;
      <button @click="clear" v-if="dosLen">&nbsp;清理&nbsp;</button>
    </div>
    <!-- 弹框提示过渡动画 -->
    <transition name="modal">
      <div class="modal-wrap" v-show="showModal"><div class="modal">哥, 你啥也没输入！</div></div>
    </transition>
    <!-- todos列表动画 -->
    <div class="todos-ul">
      <transition-group name="flip-list" tag="ul">
        <template v-if="todos.length">
          <li class="todos-li" v-for="(item, index) in todos" :key="item.id">
            <input class="checkbox" type="checkbox" v-model="item.done" />
            <span class="title" :class="{ done: item.done }">{{ item.title }}</span>
            <!-- <span class="remove-todo" @click="removeTodo($event, index)">{{ item.title }}❌</span> -->
            <span class="remove-todo" @click="removeTodo($event, index)">❌</span>
          </li>
        </template>
        <template v-else>
          <li class="todos-li"><span style="color: rgba(0, 0, 255, 0.6)">暂无数据</span></li>
        </template>
      </transition-group>
    </div>
    <div class="undo-todo">
      <span style="padding-right: 5px">已做/全部:</span>
      <span style="color: red">{{ dosLen }}/</span>
      <span style="color: red">{{ todosLen }}</span>
    </div>
    <div class="select-all">
      全选
      <input type="checkbox" v-model="allDone" />
      &nbsp;
      <span>allDone: {{ allDone }}</span>
    </div>
    <div style="padding: 10px 0">
      <button style="padding: 2px 8px" @click="shuffle">洗牌</button>
    </div>
    <!-- 垃圾桶 -->
    <span class="dustbin">🗑</span>
    <!-- 飞入垃圾桶动画 -->
    <div class="animate-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="animate" v-show="animate.show">📋</div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'
import useTodos from '@/hooks/useTodos'
const {
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
} = useTodos()
onBeforeUnmount(() => {
  console.log('onBeforeUnmount timer.value 1:', timer.value)
  //清除定时器
  clearTimeout(timer)
  timer.value = null
  console.log('onBeforeUnmount timer.value 2:', timer.value)
})
</script>

<style lang="less" scoped>
.todos {
  .modal-wrap {
    position: fixed;
    top: 150px;
    left: 50%;
    transform: translate(-50%, 0);
    .modal {
      padding: 20px;
      width: 300px;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  // 动画:start
  .modal-enter-active,
  .modal-leave-active {
    transition: all 1s ease;
  }
  .modal-enter-to,
  .modal-leave-from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: translate(-50%, -400px);
  }
  // 动画:end
  .input > * {
    height: 22px;
  }
  .todos-ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .todos-li {
      padding-top: 5px;
      width: 200px;
      text-align: left;
      .title {
        padding-left: 5px;
      }
      .done {
        color: #ccc;
        text-decoration: line-through;
      }

      .remove-todo {
        padding: 0 4px;
        // background-color: #ccc;
        border-radius: 2px;
      }
    }
    .flip-list-move {
      transition: transform 1s ease;
    }
    .flip-list-enter-active,
    .flip-list-leave-active {
      transition: all 0.5s ease;
    }
    .flip-list-enter-to,
    .flip-list-leave-from {
      opacity: 1;
      transform: translateX(0);
    }
    .flip-list-enter-from,
    .flip-list-leave-to {
      opacity: 0;
      transform: translateX(100px);
    }
  }

  .undo-todo {
    width: 200px;
    margin: 0 auto;
    padding-top: 5px;
    text-align: left;
  }
  .select-all {
    width: 200px;
    margin: 0 auto;
    padding-top: 5px;
    text-align: left;
  }
  .dustbin {
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .animate-wrap {
    .animate {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 99;
      transition: all 0.5s linear;
    }
  }
}
</style>
