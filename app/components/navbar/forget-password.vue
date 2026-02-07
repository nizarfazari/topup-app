<script setup lang="ts">
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

const form = reactive({
  phone: "",
});

// custom validator hanya angka
const numericOnly = helpers.regex(/^[0-9]*$/);

// rules
const rules = computed(() => ({
  phone: {
    required: helpers.withMessage("Nomor handphone wajib diisi", required),
    numeric: helpers.withMessage(
      "Nomor handphone hanya boleh angka",
      numericOnly,
    ),
  },
}));

const v$ = useVuelidate(rules, form);

// submit
const handleSubmit = async () => {
  const isValid = await v$.value.$validate();

  if (!isValid) return;

  console.log("DATA:", form);
};
</script>

<template>
  <div class="w-full">
    <!-- GOOGLE -->
    <button
      class="flex justify-center items-center gap-3 w-full bg-white py-3 rounded-full text-base text-[#172029]"
    >
      <img src="/icons/google.svg" alt="" />
      <span class="text-base font-normal font-lato">
        Lanjutkan dengan Google
      </span>
    </button>

    <div class="flex items-center w-full gap-3 mt-3">
      <div class="flex-1 h-px bg-[#DDDDDD]"></div>

      <span
        class="font-source-sans text-[14px] text-[#DDDDDD] whitespace-nowrap"
      >
        Atau masuk dengan email
      </span>

      <div class="flex-1 h-px bg-[#DDDDDD]"></div>
    </div>

    <!-- FORM -->
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-3 mt-3">
      <InputDynamic
        id="phone"
        label="Nomor Handphone"
        placeholder="Masukkan no handphone"
        v-model="form.phone"
        :has-error="v$.phone.$error"
        :error-message="v$.phone.$errors"
        is-phone
      />

      <button
        type="submit"
        class="rounded-full w-full bg-secondary py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition duration-200"
      >
        <p class="font-montserrat text-white font-bold">Kirim OTP</p>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
