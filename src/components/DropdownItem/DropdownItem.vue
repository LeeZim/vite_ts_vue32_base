<template>
  <li class="border-b border-gray-200 py-1" :class="{ isDisabled: disabled }">
    <a href="#">
      <slot></slot>
    </a>
  </li>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>
<style>
li.isDisabled * {
  color: #81868a;
  pointer-events: none;
  background-color: transparent;
}
</style>
