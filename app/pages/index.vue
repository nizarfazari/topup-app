<script setup lang="ts">

</script>

<template>

  <div class="custom-container mx-auto">
    <HomeCarousel />
    <section>
      <h1 class="md:text-left text-center text-white uppercase font-bold font-open-sans">Popupler</h1>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-5 mt-6">
        <div class=" bg-background-secondary rounded-lg card-shadow" v-for="i in 12" :key="i">
          <NuxtLink to="/asdas">
            <img class="w-full rounded-t-lg" src="/images/home/game.png" alt="">
            <div class="text-center pt-3 pb-6">
              <h4 class="text-white font-semibold font-montserrat mb-2">Mobile Legends</h4>
              <p
                class="text-[12px] text-[#00A389]  bg-[#00A3891A] px-2 py-1 rounded-full font-semibold  w-[66px] mx-auto">
                Otomatis</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <h1 class="md:text-left text-center text-white uppercase font-bold font-open-sans">Popupler</h1>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-5 mt-6">
        <div class=" bg-background-secondary rounded-lg card-shadow" v-for="i in 12" :key="i">
          <img class="w-full rounded-t-lg" src="/images/home/game.png" alt="">
          <div class="text-center pt-3 pb-6">
            <h4 class="text-white font-semibold font-montserrat mb-2">Mobile Legends</h4>
            <p
              class="text-[12px] text-[#00A389]  bg-[#00A3891A] px-2 py-1 rounded-full font-semibold  w-[66px] mx-auto">
              Otomatis</p>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style scoped>
.card-shadow {
  box-shadow: 0px 3.16px 6.32px 0px #0000001A;
  border: 1px solid #FFFFFF26
}

.bg-button {
  background: #00A3891A;
}
</style>