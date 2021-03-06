import { ref } from 'vue'
import axios from 'axios'

function useURLLoader<T>(url: string) {
  const result = ref<null | T>(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  axios
    .get(url)
    .then((rawData) => {
      loading.value = false
      loaded.value = true
      result.value = rawData.data
    })
    .catch((err) => {
      error.value = err
    })

  return {
    result,
    loaded,
    loading,
    error
  }
}

export default useURLLoader
