import { ref, onMounted, onUnmounted, Ref } from 'vue'

function useClickOutside(element: Ref<null | HTMLElement>): Ref<boolean> {
  const isClickOutside = ref<boolean>(false)
  function clickHandler(e: MouseEvent) {
    if (element.value) {
      isClickOutside.value = !element.value.contains(e.target as HTMLElement)
    }
  }

  onMounted(() => {
    document.addEventListener('click', clickHandler)
  })

  onUnmounted(() => {
    document.removeEventListener('click', clickHandler)
  })
  return isClickOutside
}

export default useClickOutside
