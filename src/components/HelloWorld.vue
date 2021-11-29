<script setup lang="ts">
import { ref, defineProps } from 'vue'
import useMousePosition from '@/hooks/useMousePosition'
import useURLLoader from '@/hooks/useURLLoader'

import MyModal from '@/components/MyModal.vue'

defineProps<{ msg: string }>()
const { x, y } = useMousePosition()
const count = ref(0)

interface dogData {
  message: string
  status: 'success' | 'failed'
}

interface catData {
  breeds: []
  id: string
  url: string
  width: number
  height: number
}

const dogURL = 'https://dog.ceo/api/breeds/image/random'
const catURL = 'https://api.thecatapi.com/v1/images/search?limit=1'
// const { result, loaded, loading } = useURLLoader<dogData>(dogURL)
const { result, loaded, loading } = useURLLoader<catData[]>(catURL)

const modalCtl = ref<'close' | 'open'>('close')

const modalHandler = (isClose: boolean) => {
  console.log(isClose)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>X: {{ x }}, Y: {{ y }}</h1>
  <h1 v-if="loading">Loading.....</h1>
  <img v-if="loaded" :src="result ? result[0].url : ''" />
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>
  <teleport to="body">
    <!-- <div class="modal" ref="refModal">12312312321</div> -->
    <MyModal :is-open="modalCtl" @close-modal="modalHandler" />
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
  border-radius: 4px;
  color: #304455;
}

.modal {
  width: 200px;
  height: 200px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
}
</style>
