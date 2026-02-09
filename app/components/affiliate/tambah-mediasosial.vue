<script setup lang="ts">
import { ref } from "vue";

// data yang dipilih
const formData = ref({
  methodPromotion: null as number | null,
});

// list media sosial
const methodPromotion = ref([
  { id: 1, title: "Instagram" },
  { id: 2, title: "TikTok" },
  { id: 3, title: "Facebook" },
  { id: 4, title: "YouTube" },
  { id: 5, title: "Twitter / X" },
]);

const handleMethodPromotionSelect = (id: number) => {
  formData.value.methodPromotion = id;
};

// contoh validasi dummy (sesuaikan dengan vuelidate kamu)
const v$ = {
  methodPromotion: {
    $dirty: false,
    $invalid: false,
  },
};
</script>

<template>
  <div class="w-[600px] mx-auto">
    <h1 class="font-open-sans font-bold mb-3 text-2xl">
      Tambahkan Media Sosial
    </h1>

    <p class="font-open-sans sm:text-xl text-lg">
      Anda dapat menambahkan lebih dari satu akun dari setiap jenis platform
      media sosial.
    </p>

    <div class="my-5 space-y-3">
      <div
        v-for="item in methodPromotion"
        :key="item.id"
        :class="[
          'card-medsos cursor-pointer transition rounded-xl p-3',
          formData.methodPromotion === item.id && '!bg-secondary',
          v$.methodPromotion.$dirty &&
            v$.methodPromotion.$invalid &&
            '!border-danger border-2',
        ]"
        @click="handleMethodPromotionSelect(item.id)"
      >
        <h2 class="font-bold text-lg font-open-sans">
          {{ item.title }}
        </h2>
      </div>
    </div>

    <p
      v-if="v$.methodPromotion.$dirty && v$.methodPromotion.$invalid"
      class="text-danger text-xs mt-2"
    >
      Silakan pilih media sosial
    </p>

    <div class="flex justify-end">
      <button
        class="py-3 px-8 bg-[#004E53] rounded-full text-white md:text-[28px] sm:text-3xl font-bold font-montserrat mb-5"
      >
        simpan
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-medsos {
  background: #1b2029;
  border: 1px solid #525252;
  padding: 25px 25px;
  border-radius: 10px;
}

.card-medsos:hover {
  background: linear-gradient(
    0deg,
    rgba(3, 138, 196, 0.2),
    rgba(3, 138, 196, 0.2)
  );
  border: 1px solid #00929d;
}
</style>
