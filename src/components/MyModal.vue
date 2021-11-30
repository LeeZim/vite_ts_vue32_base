<template>
  <!-- <div class="modal-container"> -->
  <div class="modal">
    <div class="modal-title">This is a Modal</div>
    <button class="modal-button" @click="handleClick">Click</button>
  </div>
  <!-- </div> -->
</template>
<script setup lang="ts">
import { PropType, onUnmounted, defineProps, defineEmits } from 'vue'

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

const handleClick = () => {
  emits('close-modal', props.isOpen)
}

onUnmounted(() => {
  console.log('unmounted')
})
</script>
<style lang="stylus">
.modal
  width 200px
  height 200px
  position fixed
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
  flex-direction column

.modal-title
  font-size 22px
  color #fff
  height 60px

.modal-button
  border none
  outline none
  width 80px
  height 30px
  background-color #fff
  border-radius 10px
  cursor pointer
</style>
