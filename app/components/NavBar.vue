<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';

const open = ref(false)
const activeTab = ref<'login' | 'register' | 'phone'>('login')
</script>

<template>
  <nav class="h-17.5 bg-background-secondary">
    <div class="container mx-auto flex justify-between items-center h-full">
      <div>
        <img src="/logo.png" alt="">
      </div>
      <div class="flex gap-2.5 items-center">
        <div class="">
          <label for="search"
            class="border border-background-primary bg-background-primary rounded-4xl py-2 px-5 w-55 flex gap-x-3 text-gray">
            <input id="search" placeholder="Cari" type="text" class="border-none w-full  outline-none" />
            <ph-magnifying-glass :size="24" class="text-gray" />
          </label>
        </div>
        <button
          class="rounded-full w-24 bg-secondary  py-2.25 px-6 flex justify-center items-center gap-2 cursor-pointer"
          @click="open = true">
          <p class="font-montserrat text-white font-bold">Masuk</p>
        </button>

      </div>
    </div>
  </nav>
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

<style scoped></style>