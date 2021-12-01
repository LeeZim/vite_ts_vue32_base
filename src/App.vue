<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
import ColumnList from '@/components/ColumnList/ColumnList.vue'
import { ColumnProps } from '@/components/ColumnList/types'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description:
      '酒店售货机，酒店经营，共享经济，新零售，共享数据线，关注灵趣科技，了解更多',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: ''
  },
  {
    id: 3,
    title: 'test3的专栏',
    description:
      '酒店售货机，酒店经营，共享经济，新零售，共享数据线，关注灵趣科技，了解更多',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 5,
    title: 'test5的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 6,
    title: 'test6的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 7,
    title: 'test7的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  }
]
</script>

<template>
  <div class="container mx-auto">
    <ColumnList :list="testData" />
  </div>
  <!-- <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </div>-->
  <!-- <router-view></router-view> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
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
  margin-top: 60px;
}
</style>
