<script setup lang="ts">
const breadcrumbs = [
 { label: 'Kembali', href: '/daftar-promo' },
 { label: 'Diskon 80% s.d 8rb pakai QRIS Superbank!' }
]
</script>

<template>
 <div class="custom-container mx-auto text-white">
  <Breadcrumb :items="breadcrumbs" class="mb-4" />
  <h1 class="md:text-[30px] text-2xl font-open-sans font-bold mb-2.5">Diskon 80% s.d 8rb pakai QRIS Superbank!</h1>
  <p class="mb-4 font-open-sans text-xs md:text-[14px] font-normal ">1 januari 2026</p>
  <img src="/images/daftar-promo/detail-promo.png" class="w-full" alt="">
  <p class="font-open-sans text-2xl font-normal description my-4">
   Lorem ipsum dolor sit amet consectetur. Bibendum lobortis odio arcu elit mauris adipiscing ut. Felis adipiscing
   sollicitudin non at facilisis vulputate in cursus adipiscing. Amet ut aenean nibh dui vitae adipiscing viverra
   pellentesque. Hendrerit ultrices bibendum sit nam ipsum eu.
   Erat blandit et pharetra sit nec placerat interdum in. Varius nunc tortor tortor massa dictum eu. Cursus vel eu eu
   lorem ut mi. Elit in ac malesuada molestie. Odio quis nulla sagittis dolor odio volutpat vitae diam. Pretium nulla
   vel dolor feugiat eu lectus vitae mattis. Nunc morbi rhoncus dignissim consequat venenatis feugiat. Ultrices eget
   purus enim proin augue ipsum. Mollis tortor montes adipiscing enim feugiat sollicitudin proin.

  </p>
  <p class="font-open-sans text-2xl font-normal description my-4">
   Ultrices quam elit auctor hac suspendisse adipiscing aliquam et. Eget senectus suscipit facilisis vulputate aliquet.
   Semper nullam turpis eu habitant feugiat ut. Urna quis massa est nibh nunc varius. Eget orci malesuada enim
   pellentesque ac. Est risus ut risus feugiat et odio duis. Augue id rhoncus faucibus lacus ac eu. Blandit auctor duis
   ipsum sed. A tempus tristique sed facilisis id laoreet.
   Laoreet quam consectetur pellentesque orci. Dignissim libero tellus aenean facilisi vitae. Aliquam ornare mattis
   viverra massa nec. Sollicitudin erat libero vulputate in amet commodo orci. Quam amet nisi tincidunt dolor nunc. Duis
   cras ac donec ipsum. Ac eget adipiscing dui sed tellus tincidunt nulla id amet. Nam maecenas posuere adipiscing
   ultrices nulla. Feugiat tortor laoreet vitae proin dignissim velit. Viverra feugiat neque bibendum donec vulputate.
   Tempor at eros purus suspendisse in amet egestas tempor. Porttitor nulla est quis integer erat mi auctor nulla
   euismod. Non et at et odio sit varius.
   Id a sed nec nunc elementum lacus consequat diam. Pulvinar quis massa non leo proin mauris sit fringilla ullamcorper.
   Vitae senectus duis in quam tristique enim. Nulla volutpat amet vitae at id purus.
  </p>

  <button
   class="py-3 px-8 bg-[#004E53] rounded-full text-white md:text-[34px] sm:text-3xl font-bold font-montserrat mb-5">Top
   up
   Sekarang</button>
  <h3 class="text-2xl font-open-sans text-white">Periode Promo: 1 Jan - 31 Mar 2026</h3>
 </div>
</template>

<style scoped>
.description {

 line-height: 150%;

}
</style>