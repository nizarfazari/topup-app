<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path: string) => route.path === path
</script>


<template>
 <footer class=" bg-background-secondary">
  <div class="custom-container mx-auto py-[60px]">
   <div class="flex md:flex-row flex-col text-white gap-10">
    <div class="flex flex-col gap-[27px] w-[490px] ">
     <div>
      <img src="/logo.png" alt="">
     </div>
     <h3 class="text-[16px] font-open-sans leading-6"><span class="font-bold">Teman Gabutmu topup</span> kredit game
      terlengkap di
      indonesia.
      Lorem ipsum dolor sit
      amet consectetur.
      Magna nunc
      lectus tempus dignissim aenean. </h3>
     <div>
      <h3 class="font-montserrat text-[16px] font-bold mb-3">Pembayaran Aman</h3>
      <div class="flex items-center gap-2">
       <img src="/images/footer/qris.png" class="h-[30px]" alt="">
       <img src="/images/footer/qris.png" class="h-[30px]" alt="">
       <img src="/images/footer/qris.png" class="h-[30px]" alt="">
       <img src="/images/footer/qris.png" class="h-[30px]" alt="">
       <p>+ 20 lainnya</p>
      </div>
     </div>
    </div>

    <div class="flex md:flex-row flex-col gap-5">
     <div>
      <h3 class="font-montserrat text-[16px] font-bold mb-5">Kontak Kami</h3>
      <ul class="flex gap-2.5 flex-col">
       <li class="flex gap-2.5 items-center">
        <img src="/images/footer/telephone.svg" alt="">
        <p class="text-[16px] font-normal font-open-sans">+62 877-3910-7485</p>
       </li>
       <li class="flex gap-2.5 items-center">
        <img src="/images/footer/email.svg" alt="">
        <p class="text-[16px] font-normal font-open-sans">admin@mandatech.co.id</p>
       </li>
      </ul>

     </div>
     <div>
      <h3 class="font-montserrat text-[16px] font-bold mb-5">Site Map</h3>
      <ul class="flex flex-col gap-3 list-disc list-inside font-normal text-primary">
       <li>
        <NuxtLink :class="isActive('/') ? 'text-primary' : 'text-white'" to="/" class="font-open-sans text-[16px]">
         Tentang Kami
        </NuxtLink>
       </li>

       <li>
        <NuxtLink :class="isActive('/syarat-ketentuan') ? 'text-primary ' : 'text-white'" to="/syarat-ketentuan"
         class="font-open-sans text-[16px]">
         Syarat & Ketentuan
        </NuxtLink>
       </li>
      </ul>
     </div>
     <div>
      <h3 class="font-montserrat text-[16px] font-bold mb-5">Social Media</h3>
      <div class="mt-3 flex items-center gap-1.5">
       <img src="/images/footer/fb.png" alt="">
       <img src="/images/footer/x.png" alt="">
       <img src="/images/footer/ig.png" alt="">
       <img src="/images/footer/tt.png" alt="">
      </div>
     </div>
    </div>
   </div>

   <hr class="divider">

   <h4 class="text-[#F5F5F5] text-[16px]">Copyright 2023. All Rights Reserved by Teman Gabutmu</h4>
  </div>
 </footer>
</template>

<style scoped>
.divider {
 color: #8E8E93;
 box-shadow: 0px 2px 20px 0px #00000026;
 margin: 30px 0;
}
</style>