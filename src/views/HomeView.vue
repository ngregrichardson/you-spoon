<script setup lang="ts">
import { generateInsult } from '@/lib/insults'
import { ref } from 'vue'
import GenerateInsultButton from '@/components/GenerateInsultButton.vue'
import { useRoute } from 'vue-router'
import ShareDropdown from '@/components/ShareDropdown.vue'

const insult = ref(useRoute().query.insult?.toString() || generateInsult())

const newInsult = () => {
  insult.value = generateInsult()
}
</script>

<template>
  <main class="flex flex-col flex-1 w-full items-center justify-center">
    <div class="absolute top-0 left-0 right-0 p-2 z-10 flex gap-3">
      <ShareDropdown :insult="insult" />
    </div>
    <section class="flex flex-col items-center max-w-8xl text-center px-3 gap-4">
      <h1
        class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-wrap w-full break-all mb-4"
      >
        {{ insult }}
      </h1>
      <GenerateInsultButton :onGenerate="newInsult" />
      <div class="flex flex-col"></div>
    </section>
  </main>
</template>
