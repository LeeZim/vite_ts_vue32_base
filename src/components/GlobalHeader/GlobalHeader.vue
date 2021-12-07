<template>
  <div class="bg-blue-600 h-16">
    <div
      class="container mx-auto h-full flex items-center justify-between"
      ref="containerDiv"
    >
      <a href="#" class="flex items-center h-11 w-20 text-xl text-white"
        >者也专栏</a
      >
      <div class="flex justify-center">
        <!-- <button class="btn" v-if="!user.isLogin">登录</button>
        <button class="btn" v-if="!user.isLogin">注册</button> -->
        <PrimaryButton class="mr-3" v-if="!user.isLogin">登录</PrimaryButton>
        <PrimaryButton v-if="!user.isLogin">注册</PrimaryButton>
        <DropdownList v-if="user.isLogin" :user-name="user.name">
          <DropdownItem>123123</DropdownItem>
          <DropdownItem>123123</DropdownItem>
          <DropdownItem>123123</DropdownItem>
          <DropdownItem>123123</DropdownItem>
          <DropdownItem :disabled="true">123123</DropdownItem>
        </DropdownList>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import DropdownList from '@/components/DropdownList/DropdownList.vue'
import DropdownItem from '@/components/DropdownItem/DropdownItem.vue'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton.vue'

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
