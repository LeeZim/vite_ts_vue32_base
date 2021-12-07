<template>
  <div class="flex flex-col p-1 items-start">
    <label>{{ itemProps.label }}</label>
    <input
      v-if="itemProps.type === 'text' || 'password'"
      :type="itemProps.type"
      class="outline-none border solid border-gray-300 rounded-sm px-1 placeholder-gray-100::placeholder text-sm h-7 mt-1 w-full"
      v-model="itemRef.val"
      @blur="validate"
      @input="onInput"
      v-bind="$attrs"
    />
    <div class="errorMsg mt-1" v-if="itemRef.err">
      <p
        class="text-red-500 text-sm text-left"
        v-for="(msg, index) in itemRef.msg"
        :key="index"
      >
        {{ msg }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits, PropType, reactive } from 'vue'
import { ValidatoRule } from '@/common/ts/validator'

export interface ItemProps {
  label: string
  name: string
  type: 'text' | 'textArea' | 'password'
  rules: ValidatoRule[]
}

const props = defineProps({
  itemProps: {
    type: Object as PropType<ItemProps>,
    default: () => ({
      label: '请输入：',
      type: 'text',
      rules: [],
      name: ''
    })
  },
  trim: {
    type: Boolean,
    default: true,
    required: false
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const itemRef = reactive({
  val: props.modelValue || '',
  err: false,
  msg: ['']
})

const getVal = () => {
  if (props.trim) {
    return itemRef.val.trim()
  }
  return itemRef.val
}

function validate() {
  if (props.itemProps.rules.length < 0) return false
  itemRef.msg = []
  props.itemProps.rules.forEach((rule) => {
    const isValidate = rule.validator(getVal())
    if (!isValidate) {
      itemRef.msg.push(rule.message(props.itemProps.name))
    }
  })
  itemRef.err = itemRef.msg.length > 0
  return itemRef.err
}

function onInput(e: Event) {
  const targetValue = (e.target as HTMLInputElement).value
  itemRef.val = targetValue
  emit('update:modelValue', targetValue)
}
</script>
<script lang="ts">
export default {
  name: 'ValidateItem',
  inheritAttrs: false
}
</script>
