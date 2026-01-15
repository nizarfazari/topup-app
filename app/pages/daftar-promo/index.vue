<script setup lang="ts">
import { ref } from 'vue'

type Category = {
 label: string
 value: string
}

const categories: Category[] = [
 { label: 'Semua', value: 'all' },
 { label: 'Mobile Legends', value: 'mobile_legends' },
 { label: 'Genshin Impact', value: 'genshin_impact' },
 { label: 'PUBG', value: 'pubg' }
]

const activeCategory = ref<string>('all')

const setActive = (value: string) => {
 activeCategory.value = value
}
</script>

<template>
 <div class="custom-container mx-auto">
  <h1 class="text-white uppercase font-bold font-open-sans">Daftar Promo</h1>
  <div class="mt-4 flex gap-3 overflow-x-auto whitespace-nowrap pb-2 scroll-smooth hide-scrollbar">
   <button v-for="item in categories" :key="item.value"
    class="flex-shrink-0 cursor-pointer bg-background-secondary py-2 px-6 text-[16px] rounded-full font-normal font-roboto border transition"
    :class="activeCategory === item.value
     ? 'border-primary text-primary'
     : 'border-[#94A3B8] text-gray'
     " @click="setActive(item.value)">
    {{ item.label }}
   </button>
  </div>

  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
   <CardDaftarPromo slug="asd" v-for="n in 4" :key="n" class="mt-5" />
  </div>
 </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
 display: none;
}

.hide-scrollbar {
 -ms-overflow-style: none;
 scrollbar-width: none;
}
</style>