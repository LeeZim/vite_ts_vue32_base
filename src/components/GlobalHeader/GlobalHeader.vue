<template>
  <div class="bg-blue-600 h-16">
    <div class="container" ref="containerDiv">
      <a href="#" class="logo">者也专栏</a>
      <div class="flex justify-center">
        <button class="btn" v-if="!user.isLogin">登录</button>
        <button class="btn" v-if="!user.isLogin">注册</button>
        <!-- <button class="btn" v-if="user.isLogin">viking</button> -->
        <DropdownList v-if="user.isLogin" :user-name="user.name" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  @apply mx-auto h-full flex items-center justify-between;
}

.logo {
  @apply flex items-center h-11 w-20 text-xl text-white;
}

.btn {
  @apply hover:bg-white hover:text-blue-600 border border-white text-white rounded-md py-1 px-2 mr-3;
}
</style>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import DropdownList from '@/components/DropdownList/DropdownList.vue'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

const props = defineProps({
  user: {
    type: Object as PropType<UserProps>,
    required: true
  }
})
</script>
