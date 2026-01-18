<script setup lang="ts">
const notes = [
 'Salin nomor transaksi jika kamu melakukan transaksi tanpa login.',
 'Halaman tidak perlu di-refresh, status transaksi akan terupdate otomatis.',
 'Jika membutuhkan bantuan, hubungi Customer Care Teman Gabutmu Topup melalui WhatsApp 0812-3456-7890.',
 'Segera selesaikan pembayaran sebelum batas waktu yang ditentukan.',
 'Pastikan kamu membayar sesuai nominal yang tertera, termasuk kode unik jika ada.',
 'Konfirmasi pembayaran diproses otomatis dalam waktu 1–5 menit setelah pembayaran berhasil.',
 'Jika membeli voucher, silakan cek email secara berkala untuk menerima kode voucher di user@dummyemail.com.'
]
</script>

<template>
 <div class="custom-container mx-auto">
  <div class="flex md:flex-row flex-col gap-5">
   <div class="flex-1 h-fit space-y-5">
    <div class="card ">
     <TransactionStepper status="waiting" countdown="30:00" />
     <div class="mt-5 flex justify-between">
      <div class="flex items-center gap-5">
       <img src="/images/home/game.png" class=" rounded-lg w-20 h-20" alt="">
       <div class=" text-white ">
        <span class="text-[12px] text-[#00A389]  bg-[#00A3891A] px-4 py-1 rounded-full font-semibold   mx-auto ">
         Top up
        </span>
        <h2 class="font-montserrat text-[14px] my-2">Mobile Legends</h2>
        <h3 class="font-montserrat text-[14px] font-bold">367 Diamonds</h3>
       </div>
      </div>

      <div class="font-open-sans flex justify-end flex-col">
       <p class="text-sm text-[#B5B5B5]">Total</p>
       <h3 class="text-2xl text-secondary font-normal">Rp. 115.995</h3>
      </div>

     </div>
    </div>

    <div class="card">
     <h1 class="font-montserrat font-semibold text-white text-base">Scan kode QR / download QR / screenshoot QR dibawah
      ini dengan
      aplikasi digital wallet untuk membayar</h1>
     <div class="wrapper-img w-64 h-64  rounded-lg mx-auto my-5">
      <img src="/images/waiting-payment/qris.png" alt="">
     </div>
     <div class="text-white">
      <h1 class="text-lg font-bold mb-5 ">
       Detail Produk
      </h1>
      <div class="grid grid-cols-2 gap-y-3 text-base font-montserrat">
       <span>Status</span>
       <span class="font-normal badge-warning rounded-full text-[14px]  px-3 py-[0.5px] inline-flex w-fit">
        Belum di Proses
       </span>
       <span>No transaksi</span>
       <span class="font-bold">: #12345</span>

       <span>Waktu Transaksi</span>
       <span class="font-bold">: 12 Desember 2025 | 09:00</span>

      </div>
     </div>
    </div>


    <div class="card">
     <div class="text-white">
      <h1 class="text-lg font-bold mb-5 ">
       Detail Produk
      </h1>
      <div class="grid grid-cols-2 gap-y-3 text-base font-montserrat">
       <span>Username</span>
       <span class="font-bold">: Usxxxxxe</span>

       <span>User ID</span>
       <span class="font-bold">: 8937xxx (Asia)</span>


       <span>Email</span>
       <span class="font-bold">: email@gmail.com</span>

       <span>Nominal</span>
       <span class="font-bold">: 367 Diamonds</span>

       <span>Jumlah</span>
       <span class="font-bold">: 1</span>
      </div>
     </div>

     <hr class="text-[#454E5E] my-5">

     <div class="font-open-sans text-base text-white space-y-3">
      <div class="flex justify-between ">
       <span>Harga</span>
       <span class="font-bold">: 367 Diamonds</span>
      </div>
      <div class="flex justify-between ">
       <span>Total</span>
       <span class="font-bold text-2xl text-secondary font-bold">Rp. 115.995</span>
      </div>
     </div>

     <hr class="text-[#454E5E] my-5">
     <div class="flex justify-between font-open-sans text-base text-white">
      <span>Bayar dengan</span>
      <div>
       <img src="/images/waiting-payment/gopay.png" alt="">
      </div>
     </div>

    </div>
   </div>

   <div class="card w-[400px] shrink-0 h-fit">
    <h1 class="text-lg font-bold mb-3 text-white">
     Catatan
    </h1>

    <ol class="list-decimal list-inside space-y-2 text-sm text-gray-300">
     <li v-for="(note, index) in notes" :key="index">
      <span v-html="note"></span>
     </li>
    </ol>
   </div>
  </div>







 </div>
</template>

<style scoped>
.badge-warning {
 border: 1px solid #FF8D28;
 color: #FF8D28;
}
</style>