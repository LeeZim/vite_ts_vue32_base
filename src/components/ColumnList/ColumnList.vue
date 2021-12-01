<template>
  <ul>
    <li v-for="column in list" :key="column.id">
      <img :src="column.avatar" alt="column.title" />
      <h5>{{ column.title }}</h5>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { ColumnProps } from './types'

const props = defineProps({
  list: {
    type: Array as PropType<ColumnProps[]>,
    required: true,
    default: () => []
  }
})
</script>

<style lang="stylus"></style>
