<template>
  <div>
    <div class="modal">This is a Modal</div>
    <button @click="handleClick"></button>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const props = defineProps<{
  isOpen: {
    type: boolean
    required: true
    default: true
  }
}>()
const emits = defineEmits({
  'close-modal': (payload: any) => {
    console.log(payload)
    return payload.type === 'close'
  }
})

const handleClick = (e: MouseEvent) => {
  emits('close-modal', 'open')
}
</script>
