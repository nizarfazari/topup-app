<script setup lang="ts">
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

const router = useRouter();

// Types for form data
type TopupItem = {
  title: string;
  price: string;
};

type PaymentItem = {
  id: number;
  name: string;
  image: string;
  price: string;
};

// Form data state
const formData = ref({
  userId: "",
  zoneId: "",
  topup: null as TopupItem | null,
  payment: null as PaymentItem | null,
  contact: "",
  promoCode: "",
});

// Validation rules
const rules = {
  userId: { required: helpers.withMessage("User ID wajib diisi", required) },
  zoneId: { required: helpers.withMessage("Zone ID wajib diisi", required) },
  topup: { required: helpers.withMessage("Pilih nominal top up", required) },
  payment: {
    required: helpers.withMessage("Pilih metode pembayaran", required),
  },
  contact: {}, // Optional
  promoCode: {}, // Optional
};

// Initialize vuelidate
const v$ = useVuelidate(rules, formData);

// Modal state
const open = ref(false);

// Handle user data update
const handleUserUpdate = (data: { userId: string; zoneId: string }) => {
  formData.value.userId = data.userId;
  formData.value.zoneId = data.zoneId;
  v$.value.userId.$touch();
  v$.value.zoneId.$touch();
};

// Handle topup selection
const handleTopupUpdate = (data: TopupItem | null) => {
  formData.value.topup = data;
  v$.value.topup.$touch();
};

// Handle payment selection
const handlePaymentUpdate = (data: PaymentItem | null) => {
  formData.value.payment = data;
  v$.value.payment.$touch();
};

// Handle contact info
const handleContactUpdate = (data: { contact: string }) => {
  formData.value.contact = data.contact;
  v$.value.contact.$touch();
};

// Handle promo code
const handlePromoUpdate = (data: { promoCode: string }) => {
  formData.value.promoCode = data.promoCode;
};

// Handle form submission
const handleConfirm = () => {
  // Validate all fields
  v$.value.$touch();

  if (v$.value.$invalid) {
    return;
  }

  console.log("Form submitted with data:", formData.value);
  open.value = false;
  router.push("/waiting-payment");
};

// Handle submit button click (validate before opening modal)
const handleSubmit = () => {
  v$.value.$touch();

  if (v$.value.$invalid) {
    return;
  }

  open.value = true;
};
</script>

<template>
  <div class="custom-container mx-auto">
    <div class="flex md:flex-row flex-col gap-5">
      <div
        class="card bg-background-secondary md:max-w-[367px] w-full text-white h-fit"
      >
        <img src="/images/home/game.png" class="rounded-xl mx-auto" alt="" />
        <h1 class="text-2xl font-bold my-4">Mobile Legends</h1>
        <span
          class="text-[12px] text-[#00A389] bg-[#00A3891A] px-2 py-1 rounded-full font-semibold w-16.5 mx-auto"
        >
          Otomatis
        </span>
        <p class="mt-5">
          Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo
          venenatis varius. Aliquam nunc enim, egestas ac dui in, aliquam
          vulputate erat. Curabitur porttitor ante ut odio vestibulum,
        </p>
      </div>

      <div class="flex flex-col gap-5">
        <DetailHomeCardUser
          @update="handleUserUpdate"
          :errors="{
            userId: v$.userId.$errors,
            zoneId: v$.zoneId.$errors,
          }"
        />
        <DetailHomeCardTopUp
          @update="handleTopupUpdate"
          :errors="v$.topup.$errors"
        />
        <DetailHomeCardPayment
          @update="handlePaymentUpdate"
          :errors="v$.payment.$errors"
        />
        <DetailHomeCardConfirmation
          @update="handleContactUpdate"
          @submit="handleSubmit"
          :errors="v$.contact.$errors"
          :selected-topup="formData.topup"
        />
        <DetailHomeCardPromo @update="handlePromoUpdate" />
      </div>
      <ModalConfirmPurchaseModal
        :open="open"
        :form-data="formData"
        @close="open = false"
        @confirm="handleConfirm"
      />
    </div>
  </div>
</template>

<style scoped></style>
