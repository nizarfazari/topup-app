<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const router = useRouter();

const goBack = () => {
  router.push("/");
};

const getErrorMessage = () => {
  if (props.error?.statusCode === 404) {
    return "Halaman yang Anda cari tidak dapat ditemukan.";
  }
  if (props.error?.statusCode === 500) {
    return "Terjadi kesalahan pada server. Silakan coba lagi nanti.";
  }
  return props.error?.message || "Terjadi kesalahan yang tidak terduga.";
};

const getTitle = () => {
  if (props.error?.statusCode === 404) {
    return "404 | Not Found";
  }
  if (props.error?.statusCode === 500) {
    return "500 | Internal Server Error";
  }
  return `${props.error?.statusCode || "Error"} | Terjadi Kesalahan`;
};

const getImage = () => {
  if (props.error?.statusCode === 500) {
    return "/images/404.png"; // You can create a 500 error image later
  }
  return "/images/404.png";
};

const breadcrumbs = [
  { label: "Kembali", href: "/daftar-promo" },
  { label: "Dota 2" },
];
</script>

<template>
  <template>
    <NuxtLayout>
      <div class="custom-container mx-auto">
        <Breadcrumb :items="breadcrumbs" class="mb-4" />

        <div class="flex justify-between items-center flex-col gap-5 py-10">
          <img :src="getImage()" class="w-[490px]" :alt="getTitle()" />

          <div class="text-white font-montserrat text-center">
            <h1 class="text-2xl font-semibold mb-2.5">
              {{ getTitle() }}
            </h1>

            <p class="text-base font-normal">
              {{ getErrorMessage() }}
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
    </NuxtLayout>
  </template>
</template>

<style scoped></style>
