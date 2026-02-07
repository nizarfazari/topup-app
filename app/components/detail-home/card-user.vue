<script setup lang="ts">
import type { ErrorObject } from "@vuelidate/core";

type Errors = {
  userId: ErrorObject[];
  zoneId: ErrorObject[];
};

const props = defineProps<{
  errors?: Errors;
}>();

const userId = ref("");
const zoneId = ref("");

const emit = defineEmits<{
  (e: "update", data: { userId: string; zoneId: string }): void;
}>();

watch([userId, zoneId], () => {
  emit("update", { userId: userId.value, zoneId: zoneId.value });
});

// Get error message for userId
const userIdError = computed(() => {
  const message = props.errors?.userId?.[0]?.$message;
  return typeof message === "string" ? message : "";
});

// Get error message for zoneId
const zoneIdError = computed(() => {
  const message = props.errors?.zoneId?.[0]?.$message;
  return typeof message === "string" ? message : "";
});
</script>

<template>
  <div class="card bg-background-secondary w-full h-fit">
    <div class="flex items-center gap-5">
      <div class="button-number">
        <span>1</span>
      </div>
      <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">
        Masukkan User ID
      </h1>
    </div>
    <div class="flex items-start gap-3 my-5">
      <div class="flex flex-col">
        <label
          :class="[
            'md:w-[193px] w-[167px] px-4 py-2 bg-background-secondary border',
            userIdError ? 'border-danger' : 'border-secondary',
          ]"
        >
          <input
            v-model="userId"
            type="text"
            class="outline-none text-[#B5B5B5] text-center w-full"
            placeholder="ID Pengguna"
          />
        </label>
        <p v-if="userIdError" class="text-danger text-xs mt-1">
          {{ userIdError }}
        </p>
      </div>
      <div class="flex flex-col">
        <div
          :class="[
            'md:w-[150px] w-[134px] px-4 py-2 bg-background-secondary border',
            zoneIdError ? 'border-danger' : 'border-secondary',
          ]"
        >
          <input
            v-model="zoneId"
            type="text"
            class="w-full outline-none text-[#B5B5B5] text-center"
            placeholder="( ID Zona )"
          />
        </div>
        <p v-if="zoneIdError" class="text-danger text-xs mt-1">
          {{ zoneIdError }}
        </p>
      </div>
    </div>
    <p class="text-[10px] text-[#B5B5B5] font-open-sans font-normal">
      Untuk mengetahui User ID Anda, silakan klik menu profile dibagian kiri
      atas pada menu utama game. User ID akan terlihat dibagian bawah Nama
      Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan
      transaksi. Contoh : 12345678(1234).
    </p>
  </div>
</template>

<style scoped></style>
