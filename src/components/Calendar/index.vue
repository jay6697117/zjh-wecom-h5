<template>
  <div class="calendar">
    <div class="header">
      <button @click="prevMonth">&lt;</button>
      <h2>{{ month }} {{ year }}</h2>
      <button @click="nextMonth">&gt;</button>
    </div>
    <div class="days">
      <div v-for="day in days" :key="day" class="day">{{ day }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.toLocaleString('default', { month: 'long' }))
const daysInMonth = computed(() => new Date(year.value, today.getMonth() + 1, 0).getDate())
const firstDayOfMonth = computed(() => new Date(year.value, today.getMonth(), 1).getDay())
const days = computed(() => {
  const daysArray: any[] = []
  for (let i = 1; i <= daysInMonth.value + firstDayOfMonth.value - 1; i++) {
    if (i < firstDayOfMonth.value) {
      daysArray.push('')
    } else {
      daysArray.push(i - firstDayOfMonth.value + 1)
    }
  }
  return daysArray
})

function prevMonth() {
  if (month.value === 'January') {
    year.value--
    month.value = 'December'
  } else {
    month.value = new Date(year.value, today.getMonth() - 1).toLocaleString('default', { month: 'long' })
  }
}

function nextMonth() {
  if (month.value === 'December') {
    year.value++
    month.value = 'January'
  } else {
    month.value = new Date(year.value, today.getMonth() + 1).toLocaleString('default', { month: 'long' })
  }
}
</script>

<style>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #eee;
}
</style>
