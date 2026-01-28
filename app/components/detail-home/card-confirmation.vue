<script setup lang="ts">
const emit = defineEmits<{
 (e: 'submit'): void
}>()

const handleClick = () => {
 emit('submit')
}
</script>

<template>
 <div class="card bg-background-secondary w-full h-fit">
  <div class="flex items-center gap-5">
   <div class="button-number">
    <span>4</span>
   </div>
   <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">
    Masukkan Nomor Whatsapp Atau Email
   </h1>
  </div>

  <p class="text-[#B5B5B5] text-[10px] font-normal font-open-sans my-5">
   Optional: Jika anda ingin mendapatkan bukti pembayaran atas
   pembelian anda, harap mengisi nomor whatsapp
  </p>
  <label class="w-full rounded-md px-4 py-4 bg-background-secondary border border-secondary block">
   <input type="text" class="outline-none text-base text-[#B5B5B5] w-full" placeholder="No whatsapp ..." />
  </label>

  <p class="text-[#B5B5B5] text-[14px] font-normal font-open-sans my-5">
   367 Diamonds + 41 Bonus
  </p>

  <div class="flex justify-between">
   <div class="font-open-sans">
    <p class="text-sm text-[#B5B5B5]">Total</p>
    <h3 class="text-2xl text-secondary font-normal">Rp. 115.995</h3>
   </div>
   <button class="rounded-full bg-secondary py-3 md:px-8 px-4 flex justify-center items-center gap-2 cursor-pointer"
    @click="handleClick">
    <p class="font-montserrat text-white font-bold text-base">
     Beli Sekarang
    </p>
   </button>
  </div>
 </div>
</template>

<style scoped></style>