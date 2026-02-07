<script setup lang="ts">
import { PhX } from "@phosphor-icons/vue";
import voucherImg from "@/assets/images/payment/voucher.png";
const phone = ref("");

const inputRef = ref<HTMLInputElement | null>(null);

const clear = () => {
  phone.value = "";
  inputRef.value?.focus();
};

const showVoucher = ref(true);

const cancelVoucher = () => {
  showVoucher.value = false;
};
</script>

<template>
  <div class="card bg-background-secondary w-full h-fit">
    <div class="flex items-center gap-5">
      <div class="button-number">
        <span class="button-number-text">5</span>
      </div>
      <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">
        Punya kode promo? (opsional)
      </h1>
    </div>

    <div class="flex flex-col md:flex-row gap-4 my-5">
      <label
        class="flex items-center gap-2 flex-1 rounded-md px-4 py-4 bg-background-secondary border border-secondary"
      >
        <input
          v-model="phone"
          ref="inputRef"
          type="text"
          class="flex-1 bg-transparent outline-none text-base text-[#B5B5B5]"
          placeholder="Kode_10"
        />

        <button
          @click="clear"
          type="button"
          class="text-[#B5B5B5] hover:text-white transition"
        >
          <PhX size="18" />
        </button>
      </label>

      <button
        class="shrink-0 rounded-full border-secondary border py-3 px-8 flex justify-center items-center gap-2 cursor-pointer md:w-auto w-full hover:bg-secondary hover:text-white transition duration-200"
      >
        <p class="font-montserrat text-white font-bold text-base">
          Beli Sekarang
        </p>
      </button>
    </div>
    <Transition name="fade-slide">
      <div v-if="showVoucher" class="flex">
        <img :src="voucherImg" alt="" />

        <div
          class="bg-background-primary p-3 w-full flex flex-col md:flex-row gap-5 justify-between"
        >
          <div class="text-white space-y-1.5">
            <h1 class="text-base font-semibold font-poppins">Potongan 30%</h1>

            <h2 class="text-[12px] font-open-sans">
              <span class="!text-[#848484]">Code</span> : PROMO123
            </h2>

            <p class="text-[12px] font-open-sans underline">
              Syarat & ketentuan
            </p>
          </div>

          <div class="flex items-end justify-end">
            <button
              @click="cancelVoucher"
              class="px-3 py-1 text-danger bg-danger/10 rounded-md cursor-pointer"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
