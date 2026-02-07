<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";

type TopupItem = {
  title: string;
  price: string;
};

const props = defineProps<{
  errors?: ErrorObject[];
  selectedTopup?: TopupItem | null;
}>();

const contact = ref("");

const emit = defineEmits<{
  (e: "submit"): void;
  (e: "update", data: { contact: string }): void;
}>();

const handleClick = () => {
  emit("submit");
};

watch(contact, (newValue) => {
  emit("update", { contact: newValue });
});

// Get error message (contact is optional, so this will be empty unless validation rules are added)
const contactError = computed(() => {
  const message = props.errors?.[0]?.$message;
  return typeof message === "string" ? message : "";
});

// Display values
const displayNominal = computed(() => {
  return props.selectedTopup?.title || "367 Diamonds + 41 Bonus";
});

const displayPrice = computed(() => {
  return props.selectedTopup?.price || "Rp. 115.995";
});
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
      Optional: Jika anda ingin mendapatkan bukti pembayaran atas pembelian
      anda, harap mengisi nomor whatsapp
    </p>
    <div class="flex flex-col">
      <label
        :class="[
          'w-full rounded-md px-4 py-4 bg-background-secondary border block',
          contactError ? 'border-danger' : 'border-secondary',
        ]"
      >
        <input
          v-model="contact"
          type="text"
          class="outline-none text-base text-[#B5B5B5] w-full"
          placeholder="No whatsapp ..."
        />
      </label>
      <p v-if="contactError" class="text-danger text-xs mt-1">
        {{ contactError }}
      </p>
    </div>

    <p class="text-[#B5B5B5] text-[14px] font-normal font-open-sans my-5">
      {{ displayNominal }}
    </p>

    <div class="flex justify-between">
      <div class="font-open-sans">
        <p class="text-sm text-[#B5B5B5]">Total</p>
        <h3 class="text-2xl text-secondary font-normal">{{ displayPrice }}</h3>
      </div>
      <button
        class="rounded-full bg-secondary py-3 md:px-8 px-4 flex justify-center items-center gap-2 cursor-pointer"
        @click="handleClick"
      >
        <p class="font-montserrat text-white font-bold text-base">
          Beli Sekarang
        </p>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
