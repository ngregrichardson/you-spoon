<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue'
import { trackEvent } from '@aptabase/web'

const emit = defineEmits(['generate'])

const generateInsult = () => {
  emit('generate')
  trackEvent('generate_insult')
}
</script>

<template>
  <StyledButton
    @click="generateInsult"
    class="transition-transform hover:scale-105 pl-6 pr-4 !text-accent"
    aria-label="Generate a new insult"
  >
    Generate <span class="group-hover:animate-hueRotate text-4xl">🖕</span>
  </StyledButton>
</template>
