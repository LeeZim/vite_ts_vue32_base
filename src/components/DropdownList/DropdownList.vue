<template>
  <div class="dropdownList relative" ref="listRef">
    <button
      class="hover:bg-white hover:text-blue-600 border border-white text-white rounded-md mr-3 py-1 px-2"
      @click="toggle"
    >
      {{ userName }}
      <div class="icon"></div>
    </button>
    <div
      v-show="isOpen"
      class="w-40 h-10 absolute top-10 left-0 bg-yellow-600 p-3"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'

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
