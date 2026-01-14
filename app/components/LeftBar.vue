<script setup lang="ts">
import { ref } from 'vue';
import { PhHouse, PhCreditCard, PhTag, PhGift } from '@phosphor-icons/vue';

const menuItems = [
 { name: 'Home', icon: PhHouse },
 { name: 'Transaksi', icon: PhCreditCard },
 { name: 'Promo', icon: PhTag },
 { name: 'Hadiahku', icon: PhGift },
];

const activeIndex = ref(0);

const setActive = (index: number) => {
 activeIndex.value = index;
};
</script>

<template>
 <div class="  fixed w-full md:w-20 md:h-full md:top-0 md:left-0 bottom-0 z-10 bg-background-primary text-white">
  <ul class="flex md:flex-col flex-row items-center md:mt-10 gap-6">
   <li v-for="(item, index) in menuItems" :key="index"
    class="h-20 w-full flex justify-center items-center flex-col cursor-pointer relative" @click="setActive(index)">
    <!-- Icon Component -->
    <component :is="item.icon" :size="32" weight="fill" :class="[
     'transition-all duration-300 ease-out',
     activeIndex === index ? 'text-primary scale-110' : 'text-gray'
    ]" />

    <p :class="[
     'text-xs mt-1 transition-all duration-300 ease-out',
     activeIndex === index ? 'text-primary font-semibold' : 'text-white'
    ]">
     {{ item.name }}
    </p>

    <div v-if="activeIndex === index" class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
     <div class="w-[25px] h-[23px] bg-primary blur-xl absolute bottom-[17px]"></div>
     <div class="w-16 rounded-t-full bg-primary h-0.5"></div>
    </div>
   </li>
  </ul>
 </div>
</template>

<style scoped></style>
