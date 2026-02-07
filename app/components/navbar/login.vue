<script setup lang="ts">
import { reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";

const emit = defineEmits<{
  (e: "forgot"): void;
}>();

const form = reactive({
  phone: "",
  password: "",
});

const rules = computed(() => ({
  phone: {
    required: helpers.withMessage("Nomor handphone wajib diisi", required),
  },
  password: {
    required: helpers.withMessage("Password wajib diisi", required),
    minLength: helpers.withMessage("Password minimal 6 karakter", minLength(6)),
  },
}));

const v$ = useVuelidate(rules, form);

const handleSubmit = async () => {
  const isValid = await v$.value.$validate();

  if (!isValid) return;

  // LOGIN STATIS DULU
  if (form.phone === "08123456" && form.password === "admin") {
    const dataLogin = {
      isLogin: true,
      phone: form.phone,
      loginAt: new Date().toISOString(),
    };

    localStorage.setItem("auth", JSON.stringify(dataLogin));

    alert("Login berhasil (statis)");

    return;
  }

  alert("Nomor atau password salah");
};
</script>

<template>
  <div class="w-full">
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
      />

      <InputDynamic
        id="current_password"
        :is-password="true"
        label="Password"
        placeholder="Masukkan password"
        v-model="form.password"
        :has-error="v$.password.$error"
        :error-message="v$.password.$errors"
      />

      <p
        class="font-source-sans text-[14px] text-[#0B69EE] font-bold cursor-pointer"
        @click="emit('forgot')"
      >
        Lupa password?
      </p>

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
