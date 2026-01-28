<script setup lang="ts">

</script>

<template>
 <div class="custom-container mx-auto">
  <h1 class="text-white uppercase font-bold font-open-sans">Hadiahku</h1>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
   <CardHadiahku v-for="n in 4" :key="n" class="mt-5" />
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