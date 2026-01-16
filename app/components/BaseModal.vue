<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue';
import { onMounted, onBeforeUnmount, computed } from 'vue'

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | '3xl'

const props = defineProps<{
 modelValue: boolean
 size?: ModalSize
}>()

const emit = defineEmits<{
 (e: 'update:modelValue', value: boolean): void
}>()

const close = () => {
 emit('update:modelValue', false)
}

const handleEsc = (e: KeyboardEvent) => {
 if (e.key === 'Escape') close()
}

onMounted(() => {
 window.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
 window.removeEventListener('keydown', handleEsc)
})

/* ================= SIZE MAPPING ================= */
const sizeClass = computed(() => {
 switch (props.size) {
  case 'sm':
   return 'max-w-sm'
  case 'lg':
   return 'max-w-lg'
  case 'xl':
   return 'max-w-xl'
  case '2xl':
   return 'max-w-2xl'
  case '3xl':
   return 'max-w-[880px]'
  case 'full':
   return 'max-w-full mx-4'
  case 'md':
  default:
   return 'max-w-md'
 }
})
</script>

<template>
 <Teleport to="body">
  <Transition name="modal">
   <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center ">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-background-secondary/60" @click="close" />

    <!-- Modal Content -->
    <div class="relative z-10 w-full bg-background-secondary rounded-xl py-6  px-8 modal-bg" :class="sizeClass"
     @click.stop>
     <slot />

     <!-- Close -->
     <button class="absolute top-3 right-3 text-[#A3A3A3]" @click="close">
      <PhX :size="24" />
     </button>
    </div>
   </div>
  </Transition>
 </Teleport>
</template>


<style scoped>
.modal-bg {
 box-shadow: 0px 3.68px 7.36px 0px #0000001A;
 border: 1px solid #FFFFFF26
}
</style>