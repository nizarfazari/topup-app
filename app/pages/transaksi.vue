<script setup lang="ts">
const ranges = [
  { label: '7 Hari Terakhir', value: 7 },
  { label: '30 Hari Terakhir', value: 30 },
  { label: '90 Hari Terakhir', value: 90 }
]

const status = [
  { label: 'Semua Status', value: 1 },
  { label: '30 Hari Terakhir', value: 30 },
  { label: '90 Hari Terakhir', value: 90 }
]

const selectedRange = ref(90)
const selectedStatus = ref(1)

const transactions = [
  {
    id: '12345',
    date: '12 Desember 2025',
    time: '09:00',
    status: 'belum_diproses',
    image: '/images/transaksi/game.png',
    productName: 'Mobile Legends',
    productDetail: '367 Diamonds',
    price: 'Rp. 115.995'
  },
  {
    id: '12346',
    date: '13 Desember 2025',
    time: '10:30',
    status: 'sedang_diproses',
    image: '/images/transaksi/game.png',
    productName: 'Free Fire',
    productDetail: '720 Diamonds',
    price: 'Rp. 135.000'
  },
  {
    id: '12347',
    date: '14 Desember 2025',
    time: '14:15',
    status: 'berhasil',
    image: '/images/transaksi/game.png',
    productName: 'PUBG Mobile',
    productDetail: '660 UC',
    price: 'Rp. 249.000'
  },
  {
    id: '12348',
    date: '15 Desember 2025',
    time: '20:45',
    status: 'kadaluarsa',
    image: '/images/transaksi/game.png',
    productName: 'Genshin Impact',
    productDetail: 'Blessing of the Welkin Moon',
    price: 'Rp. 79.000'
  }
]


</script>

<template>
  <div class="custom-container mx-auto">
    <div class="flex flex-col md:flex-row md:items-center items-start justify-between gap-5">
      <h1 class="text-white uppercase font-bold font-open-sans">Daftar Transaksi</h1>
      <div class="flex items-center gap-3">
        <DropdownHome :options="status" v-model="selectedStatus" />
        <DropdownHome :options="ranges" v-model="selectedRange" />
      </div>
    </div>

    <section class="mt-5 flex flex-col gap-5">
      <TransaksiCard v-for="trx in transactions" :key="trx.id" :date="trx.date" :time="trx.time" :status="trx.status"
        :image="trx.image" :product-name="trx.productName" :product-detail="trx.productDetail" :transaction-id="trx.id"
        :price="trx.price" />
    </section>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0px 3.68px 7.36px 0px #0000001A;
  border: 1px solid #FFFFFF26
}
</style>