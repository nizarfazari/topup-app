<script setup lang="ts">
import { computed } from 'vue'
import {
  PhWallet,
  PhArrowsClockwise,
  PhCheck
} from '@phosphor-icons/vue'

type Status = 'waiting' | 'processing' | 'success'

const props = defineProps<{
  status: Status
  countdown?: string // contoh: "30:00"
}>()

const steps = [
  { key: 'pay', label: 'Bayar' },
  { key: 'process', label: 'Diproses' },
  { key: 'done', label: 'Selesai' },
]

const activeIndex = computed(() => {
  if (props.status === 'waiting') return 0
  if (props.status === 'processing') return 1
  return 2
})

const color = computed(() => {
  if (props.status === 'waiting') return 'orange'
  if (props.status === 'processing') return 'blue'
  return 'green'
})
</script>



<template>
  <div class="space-y-4">
    <!-- STEPPER -->
    <div class="flex items-center justify-between">
      <template v-for="(step, index) in steps" :key="step.key">
        <!-- ICON -->
        <div class="flex flex-col items-center gap-2">
          <div :class="[
            'w-9 h-9 rounded-full flex items-center justify-center',
            index <= activeIndex
              ? color === 'orange'
                ? 'bg-primary'
                : color === 'blue'
                  ? 'bg-blue-500'
                  : 'bg-green-500'
              : 'bg-gray-500'
          ]">
            <PhWallet v-if="index === 0" size="18" class="text-white" />
            <PhArrowsClockwise v-if="index === 1" size="18" class="text-white" />
            <PhCheck v-if="index === 2" size="18" class="text-white" />
          </div>
          <span class="text-xs text-white">
            {{ step.label }}
          </span>
        </div>

        <!-- LINE -->
        <div v-if="index < steps.length - 1" :class="[
          'flex-1 h-[2px] mx-2 mb-[20px]',
          index < activeIndex
            ? color === 'orange'
              ? 'bg-primary'
              : color === 'blue'
                ? 'bg-blue-500'
                : 'bg-green-500'
            : 'bg-gray-600'
        ]" />
      </template>
    </div>

    <!-- INFO BOX -->
    <div v-if="status === 'waiting'" class="flex items-center gap-2 rounded-lg bg-primary/20 p-3 text-sm text-white">
      <PhWallet size="18" />
      Batas Waktu Bayar
      <span class="text-red-400 font-semibold">
        {{ countdown }}
      </span>
    </div>

    <div v-if="status === 'processing'"
      class="flex items-center gap-2 rounded-lg bg-blue-500/20 p-3 text-sm text-white">
      <PhArrowsClockwise size="18" />
      Transaksi Sedang Diproses
    </div>

    <div v-if="status === 'success'" class="flex items-center gap-2 rounded-lg bg-green-500/20 p-3 text-sm text-white">
      <PhCheck size="18" />
      Transaksi Berhasil
    </div>
  </div>
</template>
