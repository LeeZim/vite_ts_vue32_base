<template>
  <div>
    <img :src="data ? data.message : ''" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

interface DogData {
  message: string
  status: 'success' | 'failed'
}

const dogURL = 'https://dog.ceo/api/breeds/image/random'
const catURL = 'https://api.thecatapi.com/v1/images/search?limit=1'
const rawData = await axios.get<DogData>(dogURL)
const { data } = rawData
</script>
