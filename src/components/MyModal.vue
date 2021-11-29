<template>
  <div>
    <div class="modal">
      <p>This is a Modal</p>
      <button @click="handleClick">Click</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, PropType, onMounted } from 'vue'

type StateType = 'close' | 'open'

const props = defineProps({
  isOpen: {
    type: String as PropType<StateType>,
    default: 'open',
    required: false
  }
})

const emits = defineEmits({
  'close-modal': null
})

const handleClick = (e: MouseEvent) => {
  emits('close-modal', props.isOpen)
}
</script>
<style lang="stylus">
.modal
  width 200px
  height 200px
  position absolute
  top 50%
  left 50%
  margin-top -100px
  margin-left -100px
  background-color rgba(255, 255, 255, .1)
  border-top 1px solid rgba(255, 255, 255, .5)
  border-left 1px solid rgba(255, 255, 255, .5)
  border-radius 10px
  box-shadow 2px 4px 4px rgba(0, 0, 0, .5)
  backdrop-filter blur(10px)
  display flex
  justify-content center
  align-items center
</style>
