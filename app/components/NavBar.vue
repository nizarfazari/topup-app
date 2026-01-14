<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';


</script>

<template>
 <nav class="h-17.5 bg-background-secondary">
  <div class="container mx-auto flex justify-between items-center h-full">
   <div>
    <img src="/logo.png" alt="">
   </div>
   <div class="flex gap-2.5 items-center">
    <div class="">
     <label for="search"
      class="border border-background-primary bg-background-primary rounded-4xl py-2 px-5 w-55 flex gap-x-3 text-gray">
      <input id="search" placeholder="Cari" type="text" class="border-none w-full  outline-none" />
      <ph-magnifying-glass :size="24" class="text-gray" />
     </label>
    </div>
    <button class="rounded-full w-24 bg-secondary  py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer">
     <p class="font-montserrat text-white font-bold">Masuk</p>
    </button>

   </div>
  </div>
 </nav>
</template>

<style scoped></style>