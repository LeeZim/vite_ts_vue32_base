<script setup lang="ts">
import { ref, defineProps, onErrorCaptured } from 'vue'
import MyModal from '@/components/MyModal.vue'
import DogShow from './ShowDog.vue'
import CatShow from './ShowCat.vue'

const count = ref(0)

const modalCtl = ref<boolean>(true)

const modalHandler = (isOpen: boolean) => {
  if (isOpen) modalCtl.value = false
}

const props = defineProps({
  msg: {
    type: String,
    default: 'hello zim',
    required: false
  }
})

onErrorCaptured((e: any) => {
  console.log(e)
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div class="flex-shrink-0">
      <div class="h-12 w-12 bg-red-500"></div>
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
  </div>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
  <Suspense>
    <template #default>
      <div>
        <DogShow />
        <CatShow />
      </div>
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
  <teleport to="body">
    <MyModal v-if="modalCtl" @close-modal="modalHandler" />
  </teleport>
  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 0.25rem /* 4/16 */;
  color: #304455;
}
</style>
