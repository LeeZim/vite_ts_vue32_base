<template>
  <div class="container mx-auto">
    <ul class="grid grid-cols-3 p-16 gap-6">
      <li
        class="rounded-lg shadow-md border border-solid border-gray-600 border-opacity-20 p-4 box-border"
        v-for="column in columnList"
        :key="column.id"
      >
        <img
          class="mx-auto rounded-full w-12 h-12 my-4"
          :src="column.avatar"
          alt="column.title"
        />
        <h5 class="mb-2 text-xl">{{ column.title }}</h5>
        <p class="h-16 text-base text-left text-gray-500">
          {{ column.description }}
        </p>
        <a
          class="flex rounded-md mx-auto border border-solid w-20 h-9 border-blue-500 text-blue-500 text-sm justify-center items-center hover:text-white hover:bg-blue-500 transition-colors"
          href="#"
          >进入专栏</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import columnImg from '@/assets/column.jpg'

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
    default: () => []
  }
})

const columnList = props.list.map((column) => {
  if (!column.avatar) {
    const newColumn = { ...column, avatar: columnImg }
    return newColumn
  }
  return column
})
</script>

<style lang="stylus"></style>
