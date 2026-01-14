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
]
</script>
<template>
 <Swiper :modules="modules" :loop="true" :looped-slides="banners.length" :centered-slides="true"
  :slides-per-view="'auto'" :space-between="-440" :pagination="{ clickable: true }" class="home-swiper">
  <SwiperSlide v-for="(banner, index) in banners" :key="index" class="swiper-slide-custom">
   <div class="slide-frame">
    <div class="image-wrapper">
     <img :src="banner.image" class="banner-image" />
    </div>
   </div>
  </SwiperSlide>

 </Swiper>
</template>



<style scoped>
.home-swiper {
 padding: 40px 0;
 overflow: visible;
}

/* slide width */
.swiper-slide-custom {
 width: 860px;
 display: flex;
 justify-content: center;
}

layer+interaksi .swiper-slide {
 position: relative;
 z-index: 1;
 pointer-events: none;
}

.swiper-slide-prev,
.swiper-slide-next {
 z-index: 5;
}

.swiper-slide-active {
 z-index: 10;
 pointer-events: auto;
}

/* frame */
.slide-frame {
 border-radius: 16px;
 overflow: hidden;
 transition: transform 0.45s ease, opacity 0.45s ease;
}

/* non aktif */
.swiper-slide .slide-frame {
 transform: scale(0.82);
 opacity: 0.35;
}

/* aktif */
.swiper-slide-active .slide-frame {
 transform: scale(1);
 opacity: 1;
 box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

/* image */
.image-wrapper {
 width: 100%;
 height: 330px;
}

.banner-image {
 width: 100%;
 height: 100%;
 object-fit: cover;
}
</style>