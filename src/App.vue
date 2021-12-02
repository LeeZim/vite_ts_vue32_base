<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import ColumnList, { ColumnProps } from '@/components/ColumnList/ColumnList.vue'
import GlobalHeader, {
  UserProps
} from '@/components/GlobalHeader/GlobalHeader.vue'
import testData from './testData.json'
</script>

<template>
  <GlobalHeader :user="testData.currentUser" />
  <ColumnList :list="testData.columnList" />
</template>

<style>
.grid div {
  background: red;
}

body {
  /* background-color: rgb(240, 124, 124); */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
