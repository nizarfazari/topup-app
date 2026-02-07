<script setup lang="ts">
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, sameAs, helpers } from "@vuelidate/validators";

const form = reactive({
  phone: "",
  password: "",
  confirmPassword: "",
});

// validator custom hanya angka
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

  password: {
    required: helpers.withMessage("Password wajib diisi", required),
    minLength: helpers.withMessage("Password minimal 6 karakter", minLength(6)),
  },

  confirmPassword: {
    required: helpers.withMessage("Konfirmasi password wajib diisi", required),
    sameAs: helpers.withMessage(
      "Password tidak sama",
      sameAs(computed(() => form.password)),
    ),
  },
}));

const v$ = useVuelidate(rules, form);

// submit
const handleSubmit = async () => {
  const isValid = await v$.value.$validate();

  if (!isValid) return;

  console.log("DATA REGISTER:", form);

  // nanti tinggal sambung:
  // await authStore.register(form)
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
        is-phone
        :has-error="v$.phone.$error"
        :error-message="v$.phone.$errors"
      />

      <InputDynamic
        id="password"
        :is-password="true"
        label="Password"
        placeholder="Masukkan password"
        v-model="form.password"
        :has-error="v$.password.$error"
        :error-message="v$.password.$errors"
      />

      <InputDynamic
        id="confirm_password"
        :is-password="true"
        label="Konfirmasi Password"
        placeholder="Masukkan password ulang"
        v-model="form.confirmPassword"
        :has-error="v$.confirmPassword.$error"
        :error-message="v$.confirmPassword.$errors"
      />

      <button
        type="submit"
        class="rounded-full w-full bg-secondary py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer hover:opacity-80 transition duration-200"
      >
        <p class="font-montserrat text-white font-bold">Masuk</p>
      </button>
    </form>
  </div>
</template>

<style scoped></style>
