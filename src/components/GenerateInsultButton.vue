<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue'

const emit = defineEmits(['generate'])

const generateInsult = () => emit('generate')
</script>

<template>
  <StyledButton
    @click="generateInsult"
    class="transition-transform hover:scale-105 pl-6 pr-4 !text-accent"
    aria-label="Generate a new insult"
    data-umami-event="generate"
  >
    Generate <span class="group-hover:animate-hueRotate text-4xl">🖕</span>
  </StyledButton>
</template>
