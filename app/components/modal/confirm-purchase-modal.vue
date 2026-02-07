<script setup lang="ts">
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

type FormData = {
  userId: string;
  zoneId: string;
  topup: TopupItem | null;
  payment: PaymentItem | null;
  contact: string;
  promoCode: string;
};

const props = defineProps<{
  open: boolean;
  formData: FormData;
}>();

defineEmits(["close", "confirm"]);

// Format display values
const displayUserId = computed(() => {
  if (!props.formData.userId) return "Usxxxxx";
  const userId = props.formData.userId;
  return userId.length > 3 ? userId.substring(0, 2) + "xxxxx" : userId;
});

const displayZoneId = computed(() => {
  if (!props.formData.zoneId) return "(Asia)";
  const zoneId = props.formData.zoneId;
  return `(${zoneId})`;
});

const displayNominal = computed(() => {
  if (!props.formData.topup) return "367 Diamonds";
  return props.formData.topup.title;
});

const displayPrice = computed(() => {
  if (!props.formData.topup) return "Rp. 115.995";
  return props.formData.topup.price;
});

const displayPaymentImage = computed(() => {
  if (!props.formData.payment) return "/images/payment/gopay.png";
  return props.formData.payment.image;
});
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
        <span
          >: <b class="text-white">{{ displayUserId }}</b></span
        >

        <span>User ID</span>
        <span
          >:
          <b class="text-white"
            >{{ formData.userId }} {{ displayZoneId }}</b
          ></span
        >

        <span>Email</span>
        <span
          >:
          <b class="text-white">{{
            formData.contact || "email@gmail.com"
          }}</b></span
        >

        <span>Nominal</span>
        <span
          >: <b class="text-white">{{ displayNominal }}</b></span
        >

        <span>Jumlah</span>
        <span>: <b class="text-white">1</b></span>
      </div>

      <hr class="border-white/10 my-3" />

      <div class="flex justify-between text-sm">
        <span>Harga</span>
        <span class="text-white font-medium">{{ displayPrice }}</span>
      </div>

      <div class="flex justify-between items-center">
        <span>Total</span>
        <span class="text-secondary text-lg font-semibold">
          {{ displayPrice }}
        </span>
      </div>

      <div class="flex items-center justify-between mt-3">
        <span>Bayar dengan</span>
        <img :src="displayPaymentImage" class="h-6" alt="payment" />
      </div>
    </div>

    <!-- FOOTER -->
    <template #footer>
      <div class="flex gap-3 justify-end">
        <button
          class="rounded-full border border-secondary px-6 py-2 text-white"
          @click="$emit('close')"
        >
          Batalkan
        </button>

        <button
          class="rounded-full bg-secondary px-6 py-2 text-white font-semibold cursor-pointer"
          @click="$emit('confirm')"
        >
          Bayar Sekarang
        </button>
      </div>
    </template>
  </ModalCustomModal>
</template>
