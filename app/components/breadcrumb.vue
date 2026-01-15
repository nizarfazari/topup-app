<script setup lang="ts">
type BreadcrumbItem = {
  label: string
  href?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="flex items-center gap-2 text-base font-montserrat font-normal">
    <template v-for="(item, index) in items" :key="index">
      <a v-if="item.href && index !== items.length - 1" :href="item.href" class="text-primary">
        {{ item.label }}
      </a>

      <span v-else class="text-white line-clamp-1">
        {{ item.label }}
      </span>

      <!-- SEPARATOR -->
      <span v-if="index < items.length - 1" class="text-white">
        /
      </span>
    </template>
  </nav>
</template>
