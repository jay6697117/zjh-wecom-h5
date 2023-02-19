import { ref, reactive, computed } from 'vue'

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

const useUser = () => {
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
  const userInfo = computed({
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
  return {
    name,
    gender,
    user,
    arr,
    switchName,
    switchGender,
    handleAdd,
    deleteAll,
    userInfo,
    changeUserInfo
  }
}

export default useUser
