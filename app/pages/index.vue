<script setup lang="ts">

</script>

<template>

  <div class="custom-container mx-auto">
    <HomeCarousel />
    <section>
      <h1 class="md:text-left text-center text-white uppercase font-bold font-open-sans">Popupler</h1>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-5 mt-6">
        <HomeCard v-for="i in 12" :key="i" />
      </div>
    </section>

    <section class="mt-20">
      <h1 class="md:text-left text-center text-white uppercase font-bold font-open-sans">Popupler</h1>
      <div class="grid grid-cols-3 md:grid-cols-6 gap-5 mt-6">
        <HomeCard v-for="i in 12" :key="i" />
      </div>
    </section>
  </div>

</template>

<style scoped>
.bg-button {
  background: #00A3891A;
}
</style>