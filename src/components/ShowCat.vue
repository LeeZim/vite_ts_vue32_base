<template>
  <div>
    <img :src="data ? data[0].url : ''" alt="''" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

interface CatData {
  breeds: []
  id: string
  url: string
  width: number
  height: number
}

const dogURL = 'https://dog.ceo/api/breeds/image/random'
const catURL = 'https://api.thecatapi.com/v1/images/search?limit=1'

const rawData = await axios.get<CatData[]>(catURL)
const { data } = rawData
</script>
