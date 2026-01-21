<script setup lang="ts">

import { ref } from 'vue'
import { PhX } from '@phosphor-icons/vue'

const phone = ref('')
type TopupItem = {
  title: string
  price: string
}

const topups: TopupItem[] = [
  { title: '78 Diamonds + 8 Bonus', price: 'Rp. 24.254' },
  { title: '154 Diamonds + 16 Bonus', price: 'Rp. 48.507' },
  { title: '217 Diamonds + 23 Bonus', price: 'Rp. 68.543' },
  { title: '256 Diamonds + 40 Bonus', price: 'Rp. 84.360' },
  { title: '367 Diamonds + 41 Bonus', price: 'Rp. 115.995' },
  { title: '503 Diamonds + 65 Bonus', price: 'Rp. 158.175' },
]

const activeIndex = ref<number | null>(null)

type PaymentItem = {
  id: number
  name: string
  image: string
  price: string
}

const payments: PaymentItem[] = [
  {
    id: 1,
    name: 'QRIS',
    image: '/images/payment/qris.png',
    price: 'Rp. 115.995',
  },
  {
    id: 2,
    name: 'GoPay',
    image: '/images/payment/gopay.png',
    price: 'Rp. 115.995',
  },
  {
    id: 3,
    name: 'OVO',
    image: '/images/payment/ovo.png',
    price: 'Rp. 115.995',
  },
]

const activePayment = ref<number | null>(null)

const inputRef = ref<HTMLInputElement | null>(null)

const clear = () => {
  phone.value = ''
  inputRef.value?.focus()
}


const open = ref(false)
</script>

<template>
  <div class="custom-container mx-auto">
    <div class="flex md:flex-row flex-col gap-5">
      <div class="card bg-background-secondary md:max-w-[367px] w-full text-white h-fit">
        <img src="/images/home/game.png" class="rounded-xl mx-auto" alt="">
        <h1 class="text-2xl font-bold my-4">Mobile Legends</h1>
        <span
          class="text-[12px] text-[#00A389]  bg-[#00A3891A] px-2 py-1 rounded-full font-semibold  w-[66px] mx-auto ">
          Otomatis
        </span>
        <p class="mt-5">Donec suscipit porta lorem eget condimentum. Morbi vitae mauris in leo venenatis varius. Aliquam
          nunc
          enim,
          egestas ac dui in, aliquam vulputate erat. Curabitur porttitor ante ut odio vestibulum,</p>
      </div>



      <div class="flex flex-col gap-5">
        <div class="card bg-background-secondary w-full h-fit">
          <div class="flex items-center gap-5">
            <div class="button-number">
              <span>1</span>
            </div>
            <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">Masukkan User ID</h1>
          </div>
          <div class="flex items-center gap-3 my-5">
            <label class=" md:w-[193px] w-[167px] px-4 py-2 bg-background-secondary border border-secondary ">
              <input type="text" class="outline-none text-[#B5B5B5] text-center w-full" placeholder="ID Pengguna">
            </label>
            <div class="md:w-[150px] w-[134px] px-4 py-2 bg-background-secondary border border-secondary ">
              <input type="text" class="w-full outline-none text-[#B5B5B5] text-center" placeholder="( ID Zona )">
            </div>
            <div></div>
          </div>
          <p class="text-[10px] text-[#B5B5B5] font-open-sans font-normal">Untuk mengetahui User ID Anda, silakan klik
            menu
            profile
            dibagian kiri atas
            pada menu utama game. User ID akan
            terlihat dibagian bawah Nama Karakter Game Anda. Silakan masukkan User ID Anda untuk menyelesaikan
            transaksi.
            Contoh : 12345678(1234).</p>
        </div>


        <div class="card bg-background-secondary w-full h-fit">
          <div class="flex items-center gap-5">
            <div class="button-number">
              <span>2</span>
            </div>
            <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">Pilih Nominal Top Up</h1>
          </div>

          <div class="grid grid-cols-3 gap-4 mt-4">
            <div v-for="(item, index) in topups" :key="index" :class="[
              'rounded-xl card-topup font-open-sans cursor-pointer transition',
              activeIndex === index && '!bg-secondary '
            ]" @click="activeIndex = index">
              <p class="text-white md:text-base text-[8px] font-normal">
                {{ item.title }}
              </p>
              <p :class="[
                'md:text-sm text-[5.5px] md:mt-6 mt-2',
                activeIndex === index ? 'text-white' : 'text-secondary'
              ]">
                {{ item.price }}
              </p>
            </div>
          </div>
        </div>

        <div class="card bg-background-secondary w-full h-fit">
          <div class="flex items-center gap-5">
            <div class="button-number">
              <span>3</span>
            </div>
            <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">Pilih pembayaran</h1>
          </div>



          <div class="mt-5 space-y-3">
            <div v-for="item in payments" :key="item.id" @click="activePayment = item.id" :class="[
              'flex justify-between card-payment cursor-pointer transition rounded-xl p-3',
              activePayment === item.id && '!bg-secondary'
            ]">
              <img :src="item.image" class="w-[70px] h-8 object-contain" :alt="item.name" />

              <div class="font-open-sans text-start">
                <p :class="[
                  'text-[10px]',
                  activePayment === item.id ? 'text-white' : 'text-[#B5B5B5]'
                ]">
                  Harga
                </p>

                <h3 :class="[
                  'text-base font-normal mt-2',
                  activePayment === item.id ? 'text-white' : 'text-white'
                ]">
                  {{ item.price }}
                </h3>
              </div>
            </div>
          </div>

        </div>

        <div class="card bg-background-secondary w-full h-fit">
          <div class="flex items-center gap-5">
            <div class="button-number">
              <span>4</span>
            </div>
            <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">Masukkan Nomor Whatsapp Atau Email
            </h1>
          </div>

          <p class="text-[#B5B5B5] text-[10px] font-normal font-open-sans my-5">Optional: Jika anda ingin mendapatkan
            bukti
            pembayaran atas pembelian anda, harap mengisi
            nomor whatsapp</p>
          <label class=" w-full rounded-md px-4 py-4 bg-background-secondary border border-secondary block ">
            <input type="text" class="outline-none text-base text-[#B5B5B5]  w-full" placeholder="No whatsapp ...">
          </label>

          <p class="text-[#B5B5B5] text-[14px] font-normal font-open-sans my-5">367 Diamonds + 41 Bonus</p>

          <div class="flex justify-between">
            <div class="font-open-sans">
              <p class="text-sm text-[#B5B5B5]">Total</p>
              <h3 class="text-2xl text-secondary font-normal">Rp. 115.995</h3>
            </div>
            <button
              class="rounded-full  bg-secondary  py-3 md:px-8 px-4 flex justify-center items-center gap-2 cursor-pointer"
              @click="open = true">
              <p class="font-montserrat text-white font-bold text-base">Beli Sekarang</p>
            </button>
          </div>
        </div>


        <div class="card bg-background-secondary w-full h-fit">
          <div class="flex items-center gap-5">
            <div class="button-number">
              <span class="button-number-text">5</span>
            </div>
            <h1 class="font-bold text-secondary text-xl md:text-2xl font-montserrat">Punya kode promo? (opsional)</h1>
          </div>


          <div class="flex flex-col md:flex-row gap-4 my-5">
            <label
              class="flex items-center gap-2 flex-1 rounded-md px-4 py-4 bg-background-secondary border border-secondary">
              <input v-model="phone" ref="inputRef" type="text"
                class="flex-1 bg-transparent outline-none text-base text-[#B5B5B5]" placeholder="Kode_10" />

              <button @click="clear" type="button" class="text-[#B5B5B5] hover:text-white transition">
                <PhX size="18" />
              </button>
            </label>

            <button
              class="shrink-0 rounded-full border-secondary border py-3 px-8 flex justify-center items-center gap-2 cursor-pointer md:w-auto w-full">
              <p class="font-montserrat text-white font-bold text-base">
                Beli Sekarang
              </p>
            </button>
          </div>


          <div class="flex">
            <img src="/images/payment/voucher.png" alt="">
            <div class="bg-background-primary p-3 w-full flex flex-col md:flex-row gap-5 justify-between">
              <div class="text-white space-y-1.5">
                <h1 class="text-base font-semibold font-poppins">Potongan 30%</h1>
                <h2 class="text-[12px] font-open-sans"><span class="!text-[#848484]">Code</span> : PROMO123</h2>
                <p class="text-[12px] font-open-sans underline">Syarat & ketentuan</p>
              </div>
              <div class="flex items-end justify-end">
                <button class="px-3 py-1 text-danger bg-danger/10 rounded-md cursor-pointer">Batalkan</button>
              </div>
            </div>
          </div>
        </div>


      </div>
      <ModalConfirmPurchaseModal :open="open" @close="open = false" @confirm="console.log('Bayar sekarang')" />
    </div>
  </div>


</template>

<style scoped>
.card-topup {
  background: #1B2029;
  border: 1px solid #525252;
  padding: 10px;

}

.card-topup:hover {
  background: linear-gradient(0deg, rgba(3, 138, 196, 0.2), rgba(3, 138, 196, 0.2));
  border: 1px solid #00929D
}

.card-payment {
  background: #1B2029;
  border: 1px solid #525252;
  padding: 25px 25px;
  border-radius: 10px;

}

.card-payment:hover {
  background: linear-gradient(0deg, rgba(3, 138, 196, 0.2), rgba(3, 138, 196, 0.2));
  border: 1px solid #00929D
}
</style>