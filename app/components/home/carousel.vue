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
  :slides-per-view="'auto'" :space-between="-120" :pagination="{ clickable: true }" :breakpoints="{
   0: {
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 16
   },
   768: {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -120
   }
  }" class="home-swiper">
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
 padding: 40px 0 56px;
}


/* slide width */
.swiper-slide-custom {
 width: 860px;
 display: flex;
 justify-content: center;
}

/* layer */
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

/* frame = yang pegang border-radius */
.slide-frame {
 border-radius: 16px;
 overflow: hidden;
 transition: transform 0.45s ease, opacity 0.45s ease;
}

/* default (non aktif) */
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

/* image wrapper */
.image-wrapper {
 width: 100%;
 height: 330px;
}

/* image */
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

@media (max-width: 767px) {
 .swiper-slide-custom {
  width: 100%;
 }

 .swiper-slide .slide-frame {
  transform: scale(1);
  opacity: 1;
 }

 .swiper-slide-active .slide-frame {
  box-shadow: none;
 }
}
</style>