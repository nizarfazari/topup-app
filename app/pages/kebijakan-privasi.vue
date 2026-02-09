<script setup lang="ts">
const breadcrumbs = [
  { label: "Kembali", href: "/daftar-promo" },
  { label: "Kebijakan Privasi Teman Gabutmu" },
];
</script>

<template>
  <div class="custom-container mx-auto text-white">
    <Breadcrumb :items="breadcrumbs" class="mb-4" />

    <h1 class="font-open-sans font-bold mb-4 text-2xl">
      Kebijakan Privasi Teman Gabutmu
    </h1>

    <p class="font-open-sans sm:text-xl text-lg my-5">
      Kebijakan Privasi ini menjelaskan bagaimana Teman Gabutmu mengumpulkan,
      menggunakan, dan melindungi informasi pribadi Anda saat menggunakan
      layanan kami. Kami berkomitmen untuk menjaga kerahasiaan data Anda agar
      Anda dapat bertransaksi dengan rasa aman.
    </p>

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Informasi yang Kami Kumpulkan
      </h3>
      <p>
        Kami mengumpulkan informasi yang diperlukan untuk memproses pesanan dan
        meningkatkan layanan kami, antara lain:
      </p>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Data Identitas Game: User ID, Zone ID, atau Nama Karakter untuk tujuan
          pengiriman produk.
        </li>
        <li>
          Data Kontak: Nomor WhatsApp dan alamat Email untuk pengiriman bukti
          transaksi dan notifikasi status pesanan.
        </li>
        <li>
          Data Transaksi: Informasi mengenai produk yang dibeli, metode
          pembayaran, dan waktu transaksi.
        </li>
        <li>
          Data Teknis: Alamat IP, jenis perangkat, dan browser yang digunakan
          saat mengakses website kami.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Penggunaan Informasi
      </h3>
      <p>Informasi yang kami kumpulkan digunakan untuk:</p>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Memproses dan memvalidasi transaksi top up Anda secara otomatis.
        </li>
        <li>
          Memberikan layanan dukungan pelanggan (customer service) jika terjadi
          kendala.
        </li>
        <li>
          Mengirimkan informasi promo atau pembaruan layanan (jika Anda
          berlangganan).
        </li>
        <li>
          Mencegah aktivitas ilegal, penipuan, atau penyalahgunaan platform.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">Perlindungan Data</h3>
      <p>
        Kami menerapkan langkah-langkah keamanan teknis dan organisasional untuk
        melindungi data pribadi Anda dari akses yang tidak sah, pengungkapan,
        atau perubahan. Namun, perlu diingat bahwa tidak ada metode transmisi
        data melalui internet yang 100% aman.
      </p>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Pengungkapan kepada Pihak Ketiga
      </h3>
      <p>
        Kami tidak akan menjual atau menyewakan informasi pribadi Anda kepada
        pihak lain. Kami hanya membagikan data Anda kepada mitra terpercaya
        untuk tujuan:
      </p>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Penyedia Pembayaran: Untuk memverifikasi dan menyelesaikan pembayaran
          Anda.
        </li>
        <li>
          Penerbit Game/Provider: Untuk memastikan produk digital terkirim ke
          akun yang benar.
        </li>
        <li>
          Kepatuhan Hukum: Jika diwajibkan oleh undang-undang atau perintah
          pengadilan yang sah di Indonesia.
        </li>
      </ul>
    </div>
    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">Penggunaan Cookies</h3>
      <p>
        Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna,
        seperti mengingat preferensi Anda dan menganalisis trafik website. Anda
        dapat mengatur browser untuk menolak cookies, namun beberapa fitur
        website mungkin tidak berfungsi secara maksimal.
      </p>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">Hak Pengguna</h3>
      <p>Anda berhak untuk:</p>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>Meminta akses ke data pribadi yang kami simpan.</li>
        <li>
          Meminta koreksi jika terdapat data yang tidak akurat (seperti
          perubahan nomor WhatsApp).
        </li>
        <li>
          Meminta penghapusan data Anda dari sistem kami, sejauh tidak
          bertentangan dengan kewajiban hukum penyimpanan data transaksi.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Perubahan Kebijakan Privasi
      </h3>
      <p>
        Teman Gabutmu berhak memperbarui Kebijakan Privasi ini sewaktu-waktu.
        Perubahan akan segera berlaku setelah dipublikasikan di halaman ini.
        Kami menyarankan Anda untuk meninjau halaman ini secara berkala.
      </p>
    </div>

    <br />
  </div>
</template>

<style scoped></style>
