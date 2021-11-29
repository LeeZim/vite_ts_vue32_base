import { onMounted, onUnmounted, reactive, toRefs } from 'vue'

function useMousePosition() {
  const offset = reactive({
    x: 0,
    y: 0
  })

  const updateMouse = (e: MouseEvent) => {
    offset.x = e.pageX
    offset.y = e.pageY
  }

  onMounted(() => {
    document.addEventListener('click', updateMouse)
  })

  onUnmounted(() => {
    document.removeEventListener('click', updateMouse)
  })

  return { ...toRefs(offset) }
}

export default useMousePosition
