<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const breadcrumbs = [
  { label: "Kembali", href: "/daftar-promo" },
  { label: "Program Affiliate Teman Gabutmu", href: "/affiliate" },
  { label: "Kategori Bisnis" },
];

type CategoryItem = {
  id: number;
  title: string;
  description: string;
};

type methodPromotion = {
  id: number;
  title: string;
};

const payments: CategoryItem[] = [
  {
    id: 1,
    title: "Influencer Media Sosial",
    description:
      "Audiens saya mengikuti saya untuk hiburan, pendidikan, dan komunitas, dan mereka terlibat dengan konten media sosial yang kami hasilkan.",
  },
  {
    id: 2,
    title: "Konten/Ulasan",
    description:
      "Audiens saya mengunjungi properti saya untuk mempelajari lebih lanjut tentang produk atau kategori produk tertentu, menemukan ide hadiah, membaca ulasan, dan membuat keputusan pembelian yang tepat.",
  },
  {
    id: 3,
    title: "Loyalitas/Hadiah",
    description:
      "Audiens saya menerima kompensasi (uang atau lainnya) ketika mereka melakukan pembelian, dan saya membantu menghubungkan mereka dengan hadiah tersebut.",
  },
  {
    id: 4,
    title: "Penawaran/Kupon",
    description:
      "Audiens saya mengandalkan kami untuk menghemat uang dan membuat keputusan pembelian yang cerdas. Kami menawarkan kupon, voucher, dan/atau diskon di properti ini.",
  },
  {
    id: 5,
    title: "Email/Newsletter",
    description:
      "Audiens saya berlangganan komunikasi rutin yang memberikan konten berharga, diskon, dan informasi lainnya.",
  },
  {
    id: 6,
    title: "Pencarian/Perbandingan",
    description:
      "Audiens saya menggunakan platform kami untuk menemukan dan membandingkan produk, layanan, atau harga dari berbagai vendor, membantu mereka menemukan pilihan terbaik dan membuat keputusan yang tepat berdasarkan kebutuhan dan preferensi spesifik mereka.",
  },
  {
    id: 7,
    title: "Jaringan",
    description:
      "Kami menyatukan penerbit untuk memungkinkan pengiklan mengakses audiens yang mereka cari.",
  },
  {
    id: 8,
    title: "Solusi Teknologi",
    description:
      "Kami menyediakan solusi teknologi inovatif yang meningkatkan pengalaman pelanggan dan mendorong konversi melalui berbagai titik kontak, termasuk (tetapi tidak terbatas pada) integrasi perbankan, penawaran pasca-pembayaran, alat penargetan ulang, atau solusi perangkat lunak terintegrasi.",
  },
  {
    id: 9,
    title: "Monetisasi Lintas Audiens",
    description:
      "Audiens saya membeli produk saya, dan saya menghubungkan mereka ke produk serupa yang tidak bersaing dari merek lain.",
  },
];

const methodPromotion: methodPromotion[] = [
  {
    id: 1,
    title: "Tambah Situs Web",
  },
  {
    id: 2,
    title: "Tambah Media Sosial",
  },
  {
    id: 3,
    title: "Tambah Aplikasi Seluler",
  },
  {
    id: 4,
    title: "Tambah Podcast",
  },
  {
    id: 5,
    title: "Tambah Email/Buletin",
  },
  {
    id: 6,
    title: "Tambah Luring (Offline)",
  },
];

const formData = reactive({
  activeCategory: null as number | null,
  methodPromotion: null as number | null,
});

const rules = {
  activeCategory: { required },
  methodPromotion: { required },
};

const v$ = useVuelidate(rules, formData);

const handleCategorySelect = (id: number) => {
  formData.activeCategory = id;
  v$.value.activeCategory.$touch();
};

const handleSubmit = () => {
  v$.value.$validate();
  if (!v$.value.$invalid) {
    // Submit logic here

    console.log("Selected category:", formData.activeCategory);
  }
};
</script>

<template>
  <div class="custom-container mx-auto text-white">
    <Breadcrumb :items="breadcrumbs" class="mb-4" />
    <h1 class="font-open-sans font-bold mb-5 text-2xl">
      Bagaimana Anda mengkategorikan bisnis Anda?
    </h1>

    <p class="font-open-sans sm:text-xl text-lg my-4">
      Pilih opsi yang paling tepat menggambarkan bagaimana Anda berinteraksi
      dengan audiens Anda dan apa yang mereka cari dari Anda. Ini membantu merek
      mempelajari lebih lanjut tentang bisnis Anda.
    </p>

    <div v-if="!formData.activeCategory">
      <div class="my-5 space-y-3">
        <div
          v-for="item in payments"
          :key="item.id"
          :class="[
            'card-payment cursor-pointer transition rounded-xl p-3',
            formData.activeCategory === item.id && '!bg-secondary',
            v$.activeCategory.$dirty &&
              v$.activeCategory.$invalid &&
              '!border-danger border-2',
          ]"
          @click="handleCategorySelect(item.id)"
        >
          <h2 class="font-bold text-lg font-open-sans">{{ item.title }}</h2>
          <p class="text-base font-open-sans mt-2">{{ item.description }}</p>
        </div>
      </div>
      <p
        v-if="v$.activeCategory.$dirty && v$.activeCategory.$invalid"
        class="text-danger text-xs mt-2"
      >
        Silakan pilih kategori bisnis
      </p>
    </div>

    <div v-else>
      <div class="my-5 space-y-3">
        <div
          v-for="item in methodPromotion"
          :key="item.id"
          :class="[
            'card-payment cursor-pointer transition rounded-xl p-3',
            formData.methodPromotion === item.id && '!bg-secondary',
            v$.methodPromotion.$dirty &&
              v$.methodPromotion.$invalid &&
              '!border-danger border-2',
          ]"
          @click="handleCategorySelect(item.id)"
        >
          <h2 class="font-bold text-lg font-open-sans">{{ item.title }}</h2>
        </div>
      </div>
      <p
        v-if="v$.methodPromotion.$dirty && v$.methodPromotion.$invalid"
        class="text-danger text-xs mt-2"
      >
        Silakan pilih kategori bisnis
      </p>
    </div>

    <button
      class="py-3 w-full bg-[#004E53] rounded-full text-white md:text-[34px] sm:text-3xl font-bold font-montserrat mb-5"
      @click="handleSubmit"
    >
      Lanjut
    </button>
  </div>
</template>

<style scoped>
.card-payment {
  background: #1b2029;
  border: 1px solid #525252;
  padding: 25px 25px;
  border-radius: 10px;
}

.card-payment:hover {
  background: linear-gradient(
    0deg,
    rgba(3, 138, 196, 0.2),
    rgba(3, 138, 196, 0.2)
  );
  border: 1px solid #00929d;
}
</style>
