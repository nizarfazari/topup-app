<script setup lang="ts">
import LeftBar from '~/components/LeftBar.vue';


</script>

<template>
 <div>
  <NavBar />
  <left-bar />
  <div class="bg-button-primary-bg min-h-screen pb-14">
   <slot />
  </div>
  <FootBar />
 </div>
</template>
