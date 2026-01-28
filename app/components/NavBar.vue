<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

const open = ref(false)
const isLogged = ref(false)
const activeTab = ref<'login' | 'register' | 'phone'>('login')
const openSearch = ref(false)
</script>

<template>
  <nav class="h-17.5 bg-background-secondary">
    <div class="custom-container mx-auto flex justify-between items-center h-full">
      <div>
        <img src="/logo.png" alt="">
      </div>
      <div class="flex gap-2.5 items-center">
        <div class="hidden md:block">
          <label for="search"
            class="border border-background-primary bg-background-primary rounded-4xl py-2 px-5 w-55 flex gap-x-3 text-gray">
            <input id="search" placeholder="Cari" type="text" class="border-none w-full  outline-none" />
            <ph-magnifying-glass :size="24" class="text-gray" />
          </label>
        </div>
        <button class="flex md:hidden " @click="openSearch = !openSearch">
          <ph-magnifying-glass :size="24" class="text-gray" />
        </button>
        <button v-if="!isLogged"
          class="rounded-full w-24 bg-secondary  py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer"
          @click="open = true">
          <p class="font-montserrat text-white font-bold">Masuk</p>
        </button>
        <div class="relative" v-else>
          <img src="/profil.png" alt="">
          <img src="/icons/badge.svg" alt="" class="absolute -bottom-[5px] -right-[5px]">
        </div>
      </div>


    </div>
  </nav>

  <div v-if="false" class="card-nav-auth absolute top-17.5 z-30 right-10 rounded-xl">
    <div class="flex gap-4 ">
      <div class="relative">
        <img src="/profil.png" alt="">
        <img src="/icons/badge.svg" alt="" class="absolute -bottom-[5px] -right-[5px]">
      </div>
      <div class="font-source-sans">
        <h1 class="text-white font-bold text-[14px] ">Jhoe Doe</h1>
        <p class="text-sm text-[#94A3B8]">jhoedoe@gmail.com</p>
      </div>
    </div>
    <div class="w-full h-[1px] w-full bg-[#161B25] mt-3 mb-2"></div>
    <h1 class="text-danger font-source-sans font-bold text-[14px]">Keluar</h1>
  </div>



  <div v-show="openSearch" class="absolute top-17.5 left-0 w-full z-40 bg-[#1F232B]
         px-4 py-3 shadow-md md:hidden">
    <label class="flex items-center gap-3 bg-background-primary
           rounded-full px-4 py-2 text-gray">
      <input placeholder="Cari Game" class="w-full outline-none bg-transparent" />
      <PhMagnifyingGlass :size="20" />
    </label>
  </div>


  <BaseModal v-model="open" size="3xl">
    <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
      <div>
        <img src="/images/login.png" class="w-[340px] mx-auto" alt="">
        <div class="text-white mt-5 font-source-sans ">
          <h2 class="text-[20px] font-open-sans font-bold leading-6">
            Masuk dan nikmati kemudahan
            <br> dalam melakukan Top up!
          </h2>
          <p class="font-normal text-[14px] mt-1.5">Dengan masuk ke Teman Gabutmu, kamu menyetujui <span
              class="text-[#0088FF]">Syarat dan Ketentuan</span> serta
            <span class="text-[#0088FF]">Kebijakan Privasi</span>
          </p>
        </div>
      </div>
      <div>
        <div class="flex flex-col items-center">
          <ul class="flex items-center gap-1 mb-8">
            <li class="w-[72px] text-center pb-1 cursor-pointer font-montserrat text-base transition" :class="activeTab === 'login'
              ? 'font-bold border-b-2 border-primary text-primary'
              : 'font-normal text-gray'
              " @click="activeTab = 'login'">
              Masuk
            </li>

            <li class="w-[72px] text-center pb-1 cursor-pointer font-montserrat text-base transition" :class="activeTab === 'register'
              ? 'font-bold border-b-2 border-primary text-primary'
              : 'font-normal text-gray'
              " @click="activeTab = 'register'">
              Daftar
            </li>
          </ul>

          <div class="w-full" v-if="activeTab === 'login'">
            <div
              class="flex justify-center items-center gap-3 w-full bg-white py-3 rounded-full text-base text-[#172029]">
              <img src="/icons/google.svg" alt="">
              <span class="text-base font-normal font-lato">Lanjutkan dengan Google</span>
            </div>
            <div class="flex items-center w-full gap-3 mt-3">
              <div class="flex-1 h-px bg-[#DDDDDD]"></div>

              <span class=" font-source-sans text-[14px] text-[#DDDDDD] whitespace-nowrap">
                Atau masuk dengan email
              </span>

              <div class="flex-1 h-px bg-[#DDDDDD]"></div>
            </div>

            <div class="flex flex-col gap-3 mt-3">
              <InputDynamic id="phone" label=" Nomor Handpone" placeholder="Masukkan no handpone" />
              <InputDynamic id="current_password" :is-password="true" label="Password"
                placeholder="Masukkan password" />
              <p class="font-source-sans text-[14px] text-[#0B69EE] font-bold cursor-pointer"
                @click="activeTab = 'phone'">Lupa
                password?</p>
              <button
                class="rounded-full w-full bg-secondary  py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer">
                <p class="font-montserrat text-white font-bold">Masuk</p>
              </button>
            </div>
          </div>
          <div class="w-full" v-else-if="activeTab == 'phone'">
            <div
              class="flex justify-center items-center gap-3 w-full bg-white py-3 rounded-full text-base text-[#172029]">
              <img src="/icons/google.svg" alt="">
              <span class="text-base font-normal font-lato">Lanjutkan dengan Google</span>
            </div>
            <div class="flex items-center w-full gap-3 mt-3">
              <div class="flex-1 h-px bg-[#DDDDDD]"></div>

              <span class=" font-source-sans text-[14px] text-[#DDDDDD] whitespace-nowrap">
                Atau masuk dengan email
              </span>

              <div class="flex-1 h-px bg-[#DDDDDD]"></div>
            </div>

            <div class="flex flex-col gap-3 mt-3">
              <InputDynamic id="phone" label=" Nomor Handpone" placeholder="Masukkan no handpone" />

              <button
                class="rounded-full w-full bg-secondary  py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer">
                <p class="font-montserrat text-white font-bold">Masuk</p>
              </button>
            </div>
          </div>
          <div class="w-full" v-else>
            <div
              class="flex justify-center items-center gap-3 w-full bg-white py-3 rounded-full text-base text-[#172029]">
              <img src="/icons/google.svg" alt="">
              <span class="text-base font-normal font-lato">Lanjutkan dengan Google</span>
            </div>
            <div class="flex items-center w-full gap-3 mt-3">
              <div class="flex-1 h-px bg-[#DDDDDD]"></div>

              <span class=" font-source-sans text-[14px] text-[#DDDDDD] whitespace-nowrap">
                Atau masuk dengan email
              </span>

              <div class="flex-1 h-px bg-[#DDDDDD]"></div>
            </div>

            <div class="flex flex-col gap-3 mt-3">
              <InputDynamic id="phone" label=" Nomor Handpone" placeholder="Masukkan no handpone" />
              <InputDynamic id="current_password" :is-password="true" label="Password"
                placeholder="Masukkan password" />
              <InputDynamic id="current_password" :is-password="true" label="Konfirmasi Password"
                placeholder="Masukkan password ulang" />
              <button
                class="rounded-full w-full bg-secondary  py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer">
                <p class="font-montserrat text-white font-bold">Masuk</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<style scoped>
.card-nav-auth {
  box-shadow: 0px 4px 4px 0px #0000004D;
  box-shadow: 0px 8px 12px 6px #00000026;
  padding: 10px;
  width: 220px;
  background: #272B35;
  border: 1px solid #161B25
}
</style>