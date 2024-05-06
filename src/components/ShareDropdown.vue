<script setup lang="ts">
import { Dropdown } from 'floating-vue'
import StyledButton from '@/components/StyledButton.vue'
import { LINKS } from '@/assets/links'
import { generateSharingLink } from '@/lib/sharing'
import { Share2 } from 'lucide-vue-next'

const props = defineProps({
  insult: {
    type: String,
    required: true
  }
})
</script>

<template>
  <Dropdown theme="menu-dropdown">
    <StyledButton aria-label="Open share menu">
      <Share2 role="presentation" />
    </StyledButton>

    <template #popper>
      <div class="flex flex-col gap-1">
        <a
          class="flex flex-row gap-2 hover:no-underline hover:bg-background/30 px-2 py-1 rounded-sm hover:text-accent transition-all"
          v-for="item in LINKS"
          :key="item.name"
          target="_blank"
          :href="generateSharingLink(item.url, props.insult)"
          data-umami-event="share"
          :data-umami-event-name="item.name"
        >
          <component
            :is="item.Icon"
            :style="{ fill: item.empty ? '' : 'hsl(var(--foreground))' }"
            role="presentation"
          />
          {{ item.name }}
        </a>
      </div>
    </template>
  </Dropdown>
</template>
