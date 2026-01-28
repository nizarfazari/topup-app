<script setup lang="ts">
defineProps<{
 open: boolean
}>()

defineEmits(['close', 'confirm'])

</script>

<template>
 <ModalCustomModal :open="open" @close="$emit('close')">
  <!-- HEADER -->
  <template #header>
   <h2 class="text-lg font-semibold">Konfirmasi Pembelian</h2>
  </template>

  <!-- BODY -->
  <div class="space-y-3 text-sm text-white/80">
   <p>Mohon konfirmasi username anda</p>

   <div class="grid grid-cols-2 gap-y-2">
    <span>Username</span>
    <span>: <b class="text-white">Usxxxxx</b></span>

    <span>User ID</span>
    <span>: <b class="text-white">8937xxx (Asia)</b></span>

    <span>Email</span>
    <span>: <b class="text-white">email@gmail.com</b></span>

    <span>Nominal</span>
    <span>: <b class="text-white">367 Diamonds</b></span>

    <span>Jumlah</span>
    <span>: <b class="text-white">1</b></span>
   </div>

   <hr class="border-white/10 my-3" />

   <div class="flex justify-between text-sm">
    <span>Harga</span>
    <span class="text-white font-medium">Rp. 115.995</span>
   </div>

   <div class="flex justify-between items-center">
    <span>Total</span>
    <span class="text-secondary text-lg font-semibold">
     Rp. 115.995
    </span>
   </div>

   <div class="flex items-center justify-between mt-3">
    <span>Bayar dengan</span>
    <img src="/images/payment/gopay.png" class="h-6" alt="gopay" />
   </div>
  </div>

  <!-- FOOTER -->
  <template #footer>
   <div class="flex gap-3 justify-end">
    <button class="rounded-full border border-secondary px-6 py-2 text-white" @click="$emit('close')">
     Batalkan
    </button>

    <button class="rounded-full bg-secondary px-6 py-2 text-white font-semibold cursor-pointer"
     @click="$emit('confirm')">
     Bayar Sekarang
    </button>
   </div>
  </template>
 </ModalCustomModal>
</template>
