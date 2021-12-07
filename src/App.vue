<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { reactive } from 'vue'
import ColumnList from '@/components/ColumnList/ColumnList.vue'
import GlobalHeader from '@/components/GlobalHeader/GlobalHeader.vue'
import ValidateForm from '@/components/ValidateForm/ValidateForm.vue'
import ValidateItem from '@/components/ValidateItem/ValidateItem.vue'
import testData from './testData.json'
import { ValidatoRule, required, email } from './common/ts/validator'

const rules: ValidatoRule[] = [required, email]

const formData = reactive({
  email: '',
  pwd: ''
})
</script>

<template>
  <GlobalHeader :user="testData.currentUser" />
  <!-- <ColumnList :list="testData.columnList" /> -->
  <ValidateForm class="w-1/4 mx-auto">
    <ValidateItem
      :item-props="{
        label: '邮箱地址：',
        type: 'text',
        rules: [required, email],
        name: '邮箱'
      }"
      v-model="formData.email"
      placeholder="请输入邮箱"
    />
    <ValidateItem
      :item-props="{
        label: '密码：',
        type: 'password',
        rules: [required],
        name: '密码'
      }"
      v-model="formData.pwd"
      placeholder="请输入密码"
    />
  </ValidateForm>
  <h1>{{ formData.email }}--{{ formData.pwd }}</h1>
</template>

<style>
.grid div {
  background: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
