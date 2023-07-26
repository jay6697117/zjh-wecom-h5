import { ref, watchEffect } from 'vue'
export default function useStorage(key, value = []) {
  let refData = ref(JSON.parse(window.localStorage.getItem(key)) || value)
  watchEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(refData.value))
  })
  return refData
}
