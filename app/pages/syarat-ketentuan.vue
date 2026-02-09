<script setup lang="ts">
const breadcrumbs = [
  { label: "Kembali", href: "/daftar-promo" },
  { label: "Syarat & Ketentuan Teman Gabutmu" },
];
</script>

<template>
  <div class="custom-container mx-auto text-white">
    <Breadcrumb :items="breadcrumbs" class="mb-4" />

    <h1 class="font-open-sans font-bold mb-4 text-2xl">
      Syarat & Ketentuan Teman Gabutmu
    </h1>

    <p class="font-open-sans sm:text-xl text-lg my-5">
      Selamat datang di Teman Gabutmu. Dengan mengakses dan menggunakan layanan
      kami, Anda dianggap telah membaca, memahami, dan menyetujui seluruh isi
      dalam Syarat & Ketentuan ini. Jika Anda tidak menyetujui salah satu poin
      di bawah ini, silakan hentikan penggunaan layanan kami.
    </p>

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">Definisi</h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Teman Gabutmu adalah platform penyedia layanan top up game dan voucher
          digital.
        </li>
        <li>
          Pengguna adalah pihak yang menggunakan layanan Teman Gabutmu, baik
          yang terdaftar maupun tidak terdaftar.
        </li>
        <li>
          Layanan mencakup penjualan kredit game, voucher, dan item digital
          lainnya yang tersedia di website.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Akun dan Data Pengguna
      </h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Pengguna bertanggung jawab atas keamanan akun, termasuk kata sandi dan
          informasi pribadi lainnya.
        </li>
        <li>
          Data yang Anda berikan (seperti nomor WhatsApp atau User ID Game)
          harus akurat dan valid. Kami tidak bertanggung jawab atas kesalahan
          pengiriman akibat data yang salah dari Pengguna.
        </li>
        <li>
          Kami berhak menutup atau menonaktifkan akun secara sepihak jika
          ditemukan indikasi kecurangan atau pelanggaran hukum.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">Ketentuan Pembelian</h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Seluruh harga yang tertera sudah termasuk pajak (jika ada), kecuali
          dinyatakan lain.
        </li>
        <li>
          Pengguna wajib meneliti detail pesanan (User ID, Nama Game, dan
          Nominal) sebelum melakukan pembayaran.
        </li>
        <li>
          Pesanan akan diproses secara otomatis setelah sistem kami memvalidasi
          pembayaran yang masuk.
        </li>
        <li>
          Estimasi waktu pengiriman layanan adalah instan hingga maksimal 24 jam
          jika terjadi kendala pada provider.
        </li>
      </ul>
    </div>

    <br />

    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">Pembayaran</h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Pembayaran dapat dilakukan melalui metode yang tersedia (E-Wallet,
          QRIS, Bank Transfer, dll).
        </li>
        <li>
          Pengguna wajib membayar sesuai nominal yang tertera pada invoice
          (termasuk kode unik jika ada).
        </li>
        <li>
          Keterlambatan atau kesalahan transfer yang dilakukan oleh Pengguna
          bukan merupakan tanggung jawab Teman Gabutmu.
        </li>
      </ul>
    </div>

    <br />
    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Kebijakan Pengembalian Dana (Refund)
      </h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Semua transaksi yang telah berhasil diproses bersifat final dan tidak
          dapat dibatalkan atau dikembalikan.
        </li>
        <li>
          Refund hanya dapat dilakukan jika produk yang dipesan habis atau
          terjadi gangguan sistem internal yang menyebabkan layanan tidak dapat
          dikirimkan sama sekali.
        </li>
        <li>
          Kesalahan input User ID oleh Pengguna bukan merupakan alasan yang sah
          untuk pengajuan refund.
        </li>
      </ul>
    </div>

    <br />
    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Batasan Tanggung Jawab
      </h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Teman Gabutmu tidak bertanggung jawab atas masalah yang timbul dari
          pihak ketiga, seperti gangguan server game, pemeliharaan sistem
          pembayaran, atau masalah jaringan internet Pengguna.
        </li>
        <li>
          Kami tidak bertanggung jawab atas penyalahgunaan akun atau voucher
          oleh pihak lain setelah layanan berhasil dikirimkan kepada Pengguna.
        </li>
      </ul>
    </div>

    <br />
    <div class="font-open-sans sm:text-xl text-lg leading-8">
      <h3 class="sm:text-xl text-lg font-semibold mb-2">
        Perubahan Syarat & Ketentuan
      </h3>
      <ul class="list-disc pl-5 space-y-2 sm:text-xl text-lg">
        <li>
          Teman Gabutmu berhak mengubah, menambah, atau menghapus bagian dari
          Syarat & Ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya.
        </li>
        <li>
          Pengguna diharapkan untuk memeriksa halaman ini secara berkala untuk
          mengetahui perubahan terbaru.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
