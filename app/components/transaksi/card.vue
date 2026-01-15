<script setup lang="ts">
import { computed } from 'vue'

type TransactionStatus =
 | 'belum_diproses'
 | 'sedang_diproses'
 | 'berhasil'
 | 'kadaluarsa'

type Props = {
 date: string
 time: string
 status: TransactionStatus
 image: string
 productName: string
 productDetail: string
 transactionId: string
 price: string
}

const props = defineProps<Props>()

/* ================= STATUS CONFIG ================= */
const statusConfig: Record<
 TransactionStatus,
 { label: string; class: string }
> = {
 belum_diproses: {
  label: 'Belum Diproses',
  class: 'text-warning border-warning'
 },
 sedang_diproses: {
  label: 'Sedang Diproses',
  class: 'text-info border-info'
 },
 berhasil: {
  label: 'Berhasil',
  class: 'text-success border-success'
 },
 kadaluarsa: {
  label: 'Kadaluarsa',
  class: 'text-danger border-danger'
 }
}

const statusData = computed(() => statusConfig[props.status])
</script>

<template>
 <div class="card bg-background-secondary rounded-lg p-5">
  <div class="flex justify-between items-center text-[14px] font-montserrat font-normal">
   <p class="text-white">
    {{ date }} | {{ time }}
   </p>

   <span class="border px-3 py-0.5 rounded-full" :class="statusData.class">
    {{ statusData.label }}
   </span>
  </div>

  <div class="my-5 flex items-center gap-8">
   <img class="w-[154px] h-[154px] rounded-xl object-cover" :src="image" alt="transaction" />

   <div class="text-white font-montserrat">
    <h2 class="md:text-[32px] text-[20px] font-normal mb-2.5">
     {{ productName }}
    </h2>
    <h3 class="md:text-[32px] text-[20px] font-bold">
     {{ productDetail }}
    </h3>
   </div>
  </div>

  <div class="text-white flex justify-between items-center">
   <p class="text-[14px] font-montserrat font-normal">
    #{{ transactionId }}
   </p>
   <h2 class="font-open-sans font-bold">
    {{ price }}
   </h2>
  </div>
 </div>
</template>

<style scoped>
.card {
 box-shadow: 0px 3.68px 7.36px 0px #0000001a;
 border: 1px solid #ffffff26;
}
</style>
