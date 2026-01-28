<script setup lang="ts">

type PaymentItem = {
 id: number;
 name: string;
 image: string;
 price: string;
};

const payments: PaymentItem[] = [
 {
  id: 1,
  name: "QRIS",
  image: "/images/payment/qris.png",
  price: "Rp. 115.995",
 },
 {
  id: 2,
  name: "GoPay",
  image: "/images/payment/gopay.png",
  price: "Rp. 115.995",
 },
 {
  id: 3,
  name: "OVO",
  image: "/images/payment/ovo.png",
  price: "Rp. 115.995",
 },
];

const activePayment = ref<number | null>(null);

</script>

<template>
 <div class="card bg-background-secondary w-full h-fit">
  <div class="flex items-center gap-5">
   <div class="button-number">
    <span>3</span>
   </div>
   <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">
    Pilih pembayaran
   </h1>
  </div>
  <div class="mt-5 space-y-3">
   <div v-for="item in payments" :key="item.id" :class="[
    'flex justify-between card-payment cursor-pointer transition rounded-xl p-3',
    activePayment === item.id && '!bg-secondary',
   ]" @click="activePayment = item.id">
    <img :src="item.image" class="w-[70px] h-8 object-contain" :alt="item.name" />

    <div class="font-open-sans text-start">
     <p :class="[
      'text-[10px]',
      activePayment === item.id ? 'text-white' : 'text-[#B5B5B5]',
     ]">
      Harga
     </p>

     <h3 :class="[
      'text-base font-normal mt-2',
      activePayment === item.id ? 'text-white' : 'text-white',
     ]">
      {{ item.price }}
     </h3>
    </div>
   </div>
  </div>
 </div>
</template>

<style scoped>
.card-payment {
 background: #1b2029;
 border: 1px solid #525252;
 padding: 25px 25px;
 border-radius: 10px;
}

.card-payment:hover {
 background: linear-gradient(0deg,
   rgba(3, 138, 196, 0.2),
   rgba(3, 138, 196, 0.2));
 border: 1px solid #00929d;
}
</style>