<script setup lang="ts">
type TopupItem = {
 title: string;
 price: string;
};
const topups: TopupItem[] = [
 { title: "78 Diamonds + 8 Bonus", price: "Rp. 24.254" },
 { title: "154 Diamonds + 16 Bonus", price: "Rp. 48.507" },
 { title: "217 Diamonds + 23 Bonus", price: "Rp. 68.543" },
 { title: "256 Diamonds + 40 Bonus", price: "Rp. 84.360" },
 { title: "367 Diamonds + 41 Bonus", price: "Rp. 115.995" },
 { title: "503 Diamonds + 65 Bonus", price: "Rp. 158.175" },
];

const activeIndex = ref<number | null>(null);
</script>

<template>
 <div class="card bg-background-secondary w-full h-fit">
  <div class="flex items-center gap-5">
   <div class="button-number">
    <span>2</span>
   </div>
   <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">
    Pilih Nominal Top Up
   </h1>
  </div>

  <div class="grid grid-cols-3 gap-4 mt-4">
   <div v-for="(item, index) in topups" :key="index" :class="[
    'rounded-xl card-topup font-open-sans cursor-pointer transition',
    activeIndex === index && '!bg-secondary ',
   ]" @click="activeIndex = index">
    <p class="text-white md:text-base text-[8px] font-normal">
     {{ item.title }}
    </p>
    <p :class="[
     'md:text-sm text-[5.5px] md:mt-6 mt-2',
     activeIndex === index ? 'text-white' : 'text-secondary',
    ]">
     {{ item.price }}
    </p>
   </div>
  </div>
 </div>

</template>

<style scoped>
.card-topup {
 background: #1b2029;
 border: 1px solid #525252;
 padding: 10px;
}

.card-topup:hover {
 background: linear-gradient(0deg,
   rgba(3, 138, 196, 0.2),
   rgba(3, 138, 196, 0.2));
 border: 1px solid #00929d;
}
</style>