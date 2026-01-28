<script setup lang="ts">
import { ref } from "vue";
const router = useRouter();

const open = ref(false);
const handleConfirm = () => {
  open.value = false;
  router.push("/waiting-payment");
};
</script>

<template>
  <div class="custom-container mx-auto">
    <div class="flex md:flex-row flex-col gap-5">
      <div class="card bg-background-secondary md:max-w-[367px] w-full text-white h-fit">
        <img src="/images/home/game.png" class="rounded-xl mx-auto" alt="" />
        <h1 class="text-2xl font-bold my-4">Mobile Legends</h1>
        <span class="text-[12px] text-[#00A389] bg-[#00A3891A] px-2 py-1 rounded-full font-semibold w-16.5 mx-auto">
          Otomatis
        </span>
        <p class="mt-5">
          Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo
          venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam
          vulputate erat. Curabitur porttitor ante ut odio vestibulum,
        </p>
      </div>

      <div class="flex flex-col gap-5">
        <DetailHomeCardUser />
        <DetailHomeCardTopUp />
        <DetailHomeCardPayment />
        <DetailHomeCardConfirmation @submit="open = true" />
        <DetailHomeCardPromo />

      </div>
      <ModalConfirmPurchaseModal :open="open" @close="open = false" @confirm="handleConfirm" />
    </div>
  </div>
</template>

<style scoped></style>
