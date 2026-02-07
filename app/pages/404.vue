<script setup lang="ts">
const router = useRouter();

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="min-h-screen bg-background-primary">
    <div class="custom-container mx-auto">
      <div class="flex justify-between items-center flex-col gap-5 py-10">
        <img src="/images/404.png" class="w-[490px]" alt="404 Not Found" />
        <div class="text-white font-montserrat text-center">
          <h1 class="text-2xl font-semibold mb-2.5">404 | Not Found</h1>
          <p class="text-base font-normal">
            Halaman yang Anda cari tidak dapat ditemukan.
          </p>
        </div>
        <button
          @click="goBack"
          class="py-3 px-8 bg-secondary rounded-full text-white text-base font-bold font-montserrat hover:opacity-80 transition duration-200"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
