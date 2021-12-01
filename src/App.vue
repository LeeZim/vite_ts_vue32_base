<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import ColumnList from '@/components/ColumnList/ColumnList.vue'
import { ColumnProps } from '@/components/ColumnList/types'

const testData: ColumnProps = {
  id: 1,
  title: 'test1的专栏',
  description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
  avatar: ''
}
</script>

<template>
  <ColumnList />
  <!-- <router-view></router-view> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
</template>

<style>
body {
  /* background-color: rgb(240, 124, 124); */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
