<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination]

const banners = [
 {
  title: 'VOUCHER TOP UP',
  subtitle: 'Lorem ipsum dolor sit amet',
  button: 'Top up Sekarang',
  image: '/images/home/banner.png'
 },
 {
  title: 'PROMO GAME',
  subtitle: 'Diskon spesial hari ini',
  button: 'Lihat Promo',
  image: '/images/home/banner.png'
 },
 {
  title: 'PROMO GAME',
  subtitle: 'Diskon spesial hari ini',
  button: 'Lihat Promo',
  image: '/images/home/banner.png'
 },
 {
  title: 'PROMO GAME',
  subtitle: 'Diskon spesial hari ini',
  button: 'Lihat Promo',
  image: '/images/home/banner.png'
 }
]
</script>
<template>
 <Swiper :modules="modules" :loop="true" :looped-slides="banners.length" :centered-slides="true"
  :slides-per-view="'auto'" :space-between="-120" :autoplay="{ delay: 4000 }" :pagination="{ clickable: true }"
  class="home-swiper">
  <SwiperSlide v-for="(banner, index) in banners" :key="index" class="swiper-slide-custom">
   <div class="image-wrapper">
    <img :src="banner.image" alt="banner" class="banner-image" />
   </div>
  </SwiperSlide>
 </Swiper>
</template>



<style scoped>
.home-swiper {
 padding: 40px 0;
}

.swiper-slide-custom {
 width: 860px;
}

/* ===== layering fix ===== */
.swiper-slide {
 position: relative;
 z-index: 1;
}

.swiper-slide-prev,
.swiper-slide-next {
 z-index: 5;
}

.swiper-slide-active {
 z-index: 10;
}

/* ===== visual effect ===== */
.swiper-slide .image-wrapper {
 opacity: 0.35;
 transform: scale(0.82);
 transition: all 0.4s ease;
 box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.15);
}

.swiper-slide-active .image-wrapper {
 opacity: 1;
 transform: scale(1);
 box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

/* ===== image ===== */
.image-wrapper {
 width: 100%;
 height: 330px;
 border-radius: 16px;
 overflow: hidden;
 background: #000;
 will-change: transform;
}

.banner-image {
 width: 100%;
 height: 100%;
 object-fit: cover;
}

:deep(.swiper-pagination-bullet) {
 background: #92949C;
 opacity: 1;
 /* override default swiper */
}

:deep(.swiper-pagination-bullet-active) {
 background: #00929D;
}
</style>