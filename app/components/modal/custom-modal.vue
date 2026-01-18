<script setup lang="ts">
defineProps<{
 open: boolean
}>()

defineEmits(['close'])
</script>

<template>
 <teleport to="body">
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
   <!-- Overlay -->
   <div class="absolute inset-0 bg-black/60" @click="$emit('close')" />

   <!-- Modal -->
   <div
    class="relative w-full max-w-lg rounded-xl bg-background-secondary rounded-xl overflow-hidden text-white shadow-xl">
    <!-- HEADER -->
    <div class="flex items-center justify-between border-b border-white/10 bg-background-primary px-6 py-4">
     <slot name="header" />
     <button @click="$emit('close')" class="text-white/60 hover:text-white">
      ✕
     </button>
    </div>

    <!-- BODY -->
    <div class="px-6 py-4">
     <slot />
    </div>

    <!-- FOOTER -->
    <div class="border-t border-white/10 bg-background-primary px-6 py-4">
     <slot name="footer" />
    </div>
   </div>
  </div>
 </teleport>
</template>


<style scoped>
.card {
 box-shadow: 0px 3.68px 7.36px 0px #0000001A;
 border: 1px solid #FFFFFF26;
 background: #272B35;

}
</style>