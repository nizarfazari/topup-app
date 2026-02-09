<script setup lang="ts">
const breadcrumbs = [
  { label: "Kembali", href: "/daftar-promo" },
  { label: "Program Affiliate Teman Gabutmu" },
];

const router = useRouter();

const goJoinCategory = () => {
  router.push("/affiliate/kategori-bisnis");
};
</script>

<template>
  <div class="custom-container mx-auto text-white">
    <Breadcrumb :items="breadcrumbs" class="mb-4" />
    <h1 class="font-open-sans font-bold mb-5 text-2xl">
      Program Affiliate Teman Gabutmu
    </h1>

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-1">
        Ubah Hobi Jadi Cuan, Gabung Jadi Partner Kami!
      </h3>
      <p class="font-open-sans sm:text-xl text-lg">
        Punya komunitas gamer atau pengikut di media sosial? Jadilah bagian dari
        keluarga besar Teman Gabutmu dan dapatkan komisi dari setiap transaksi
        yang dilakukan melalui link atau kode referral Anda.
      </p>
    </div>
    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-1">
        Skema Komisi & Keuntungan
      </h3>
      <p>Kami menawarkan struktur insentif yang transparan dan kompetitif:</p>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Komisi Per Transaksi: Dapatkan hingga 5% (bervariasi tergantung
          kategori game) dari setiap nilai transaksi yang berhasil.
        </li>
        <li>
          Bonus Pencapaian: Bonus tambahan bagi Affiliate yang berhasil mencapai
          target volume transaksi bulanan.
        </li>
        <li>
          Payout Mudah: Penarikan komisi dapat dilakukan langsung ke E-Wallet
          (DANA/OVO/GoPay) atau Transfer Bank dengan minimal penarikan yang
          rendah.
        </li>
        <li>
          Dashboard Real-Time: Pantau klik, jumlah transaksi, dan total
          pendapatan Anda secara langsung melalui panel khusus partner.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-1">
        Syarat & Ketentuan Affiliate
      </h3>
      <p>
        Untuk menjaga kualitas ekosistem kami, berikut adalah aturan mainnya:
      </p>
      <ul class="list-decimal pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Pendaftaran: Terbuka untuk umum (Streamer, YouTuber, Pemilik Website,
          atau individu) dengan minimal pengikut yang masuk akal atau komunitas
          aktif.
        </li>
        <li>
          Mekanisme: Komisi hanya dihitung dari transaksi yang sah dan berhasil
          dibayar melalui link/kode referral unik Anda.
        </li>
        <li>
          Masa Berlaku Cookie: Kami menggunakan sistem cookie 30 hari. Jika
          pengguna mengklik link Anda dan melakukan pembelian dalam waktu 30
          hari, komisi tetap masuk ke akun Anda.
        </li>
        <li>
          <p>Larangan Keras:</p>
          <ul class="list-disc pl-8 space-y-2 sm:text-xl text-lg">
            <li>
              Dilarang menggunakan iklan berbayar (Google Ads/FB Ads) dengan
              kata kunci "Teman Gabutmu" secara langsung.
            </li>
            <li>
              Dilarang melakukan spamming di channel resmi game atau media
              sosial kompetitor.
            </li>
            <li>
              Dilarang melakukan transaksi self-referral (membeli melalui link
              sendiri untuk mendapatkan komisi).
            </li>
          </ul>
        </li>
        <li>
          Pembayaran: Komisi diproses setiap tanggal 1-5 setiap bulannya untuk
          pendapatan bulan sebelumnya.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-1">
        Skema Komisi & Keuntungan
      </h3>
      <p>Kami menawarkan struktur insentif yang transparan dan kompetitif:</p>
      <ul class="list-decimal pl-5 space-y-2 sm:text-xl text-lg">
        <li>Daftar: Isi formulir pendaftaran di menu "Daftar Affiliate".</li>
        <li>
          Verifikasi: Tim kami akan meninjau akun/media sosial Anda dalam 1x24
          jam.
        </li>
        <li>
          Promosi: Gunakan materi promosi (banner/link) yang telah kami sediakan
          di dashboard.
        </li>
        <li>
          Cuan: Mulai terima komisi setiap kali teman atau pengikut Anda
          melakukan top up.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-1">
        Siap Menjadi Partner Kami?
      </h3>
      <p class="font-open-sans sm:text-xl text-lg">
        Jangan biarkan trafik media sosial Anda terbuang percuma. Bergabunglah
        dengan program yang dirancang khusus untuk pertumbuhan bersama.
      </p>
    </div>
    <br />

    <button
      @click="goJoinCategory"
      class="py-3 px-8 bg-[#004E53] rounded-full text-white md:text-[34px] sm:text-3xl font-bold font-montserrat mb-5"
    >
      Gabung Sekarang
    </button>

    <p class="font-open-sans sm:text-xl text-lg my-3">
      Pertanyaan Kemitraan: admin@temangabutmu.com
    </p>
  </div>
</template>

<style scoped></style>
