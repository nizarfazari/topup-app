<script setup lang="ts">
const breadcrumbs = [
 { label: 'Kembali', href: '/daftar-promo' },
 { label: 'Dota 2' }
]
</script>

<template>
 <div class="custom-container mx-auto">
  <Breadcrumb :items="breadcrumbs" class="mb-4" />
  <div class="flex justify-between items-center flex-col gap-5">
   <img src="/images/404.png" class="w-[490px]" alt="">
   <div class="text-white font-montserrat text-center">
    <h1 class="text-2xl font-semibold mb-2.5">404 | Not Found</h1>
    <p class="text-base font-normal">Halaman yang Anda cari tidak dapat ditemukan.</p>
   </div>
   <button class="py-3 px-8 bg-[#00929D] rounded-full text-white text-base font-bold font-montserrat">Kembali</button>
  </div>
 </div>

</template>

<style scoped></style>