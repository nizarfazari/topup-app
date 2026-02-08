<script setup lang="ts">
defineProps<{
  slug: string;
}>();
</script>

<template>
  <NuxtLink :to="`/daftar-promo/asdas`" class="block">
    <div
      class="border overflow-hidden bg-background-secondary border-[#FFFFFF26] rounded-[10px] hover:border-secondary cursor-pointer transition duration-200"
    >
      <div class="">
        <img
          class="w-full"
          src="@/assets/images/daftar-promo/promo.png"
          alt=""
        />
      </div>
      <div class="text-white px-5 py-4">
        <p class="font-open-sans text-xs font-normal mb-2">1 januari 2026</p>
        <h3 class="font-montserrat text-[14px] font-semibold">
          Diskon 80% s.d 8rb pakai QRIS Superbank!
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped></style>
