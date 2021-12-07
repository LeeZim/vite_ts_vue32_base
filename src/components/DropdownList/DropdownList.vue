<template>
  <div class="dropdownList relative" ref="listRef">
    <PrimaryButton @click="toggle">
      {{ userName }}
      <div class="icon" />
    </PrimaryButton>
    <div
      v-show="isOpen"
      class="w-36 absolute top-10 left-0 bg-white px-2 rounded-md border solid border-gray-300"
    >
      <ul class="text-left">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton.vue'

const props = defineProps({
  userName: {
    type: String,
    default: '{name}'
  }
})
const isOpen = ref<boolean>(false)
const toggle = () => {
  isOpen.value = !isOpen.value
}
const listRef = ref<null | HTMLElement>(null)
const isClickOutside = useClickOutside(listRef)
watch(isClickOutside, (cur, prev) => {
  if (cur) {
    isOpen.value = false
  }
})
</script>
<style>
.dropdownList button .icon {
  display: inline-block;
  width: 3px;
  height: 3px;
  border: 3px solid transparent;
  border-top-color: white;
  border-right-color: white;
  margin-left: 7px;
  margin-bottom: 4px;
  transform: rotate(135deg);
}

.dropdownList button:hover .icon {
  border-top-color: rgba(37, 99, 235);
  border-right-color: rgba(37, 99, 235);
}
</style>
