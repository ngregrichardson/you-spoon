<script setup lang="ts">
const emit = defineEmits(['click'])

const props = defineProps({
  class: {
    type: String,
    required: false,
    default: ''
  }
})
</script>

<template>
  <button
    @click="emit('click')"
    :class="`group w-fit py-2 px-3 bg-muted hover:bg-muted/90 text-muted-foreground font-bold text-xl rounded-md flex flex-row items-center gap-1 ${props.class}`"
  >
    <slot></slot>
  </button>
</template>
