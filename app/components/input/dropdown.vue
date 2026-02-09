<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { PhCaretDown } from "@phosphor-icons/vue";
import type { ErrorObject } from "@vuelidate/core";

interface Option {
  label: string;
  value: string;
}

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  modelValue?: string;

  options: Option[];

  errorMessage?: ErrorObject[];
  hasError?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Pilih",
  modelValue: "",
  hasError: false,
  required: false,
});

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
  (event: "validation", isValid: boolean): void;
}>();

const open = ref(false);
const wrapper = ref<HTMLElement | null>(null);

const selectOption = (option: Option) => {
  emit("update:modelValue", option.value);
  validate(option.value);
  open.value = false;
};

const getLabel = () => {
  const found = props.options.find((opt) => opt.value === props.modelValue);
  return found ? found.label : "";
};

const validate = (value: string) => {
  const isValid = !props.required || value.trim() !== "";
  emit("validation", isValid);
  return isValid;
};

// close ketika klik luar
const handleClickOutside = (e: Event) => {
  if (wrapper.value && !wrapper.value.contains(e.target as Node)) {
    open.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div ref="wrapper">
    <label
      :for="id"
      class="block font-source-sans text-[14px] text-white font-normal mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-sunset-orange">*</span>
    </label>

    <div class="relative">
      <!-- Trigger -->
      <div
        class="appearance-none bg-background-primary h-[45px] flex items-center justify-between w-full px-5 border rounded-[8px] text-[14px] cursor-pointer"
        :class="hasError ? 'border-danger' : 'border-[#272B35]'"
        @click="open = !open"
      >
        <span class="text-[#D1D1D6]">
          {{ getLabel() || placeholder }}
        </span>

        <ph-caret-down class="h-4 w-4 text-gray" />
      </div>

      <!-- Options -->
      <transition name="fade">
        <div
          v-if="open"
          class="absolute z-20 w-full mt-1 bg-background-primary border border-[#272B35] rounded-[8px] shadow-lg"
        >
          <div
            v-for="opt in options"
            :key="opt.value"
            class="px-5 py-2 text-[14px] hover:bg-[#272B35] cursor-pointer text-white"
            @click="selectOption(opt)"
          >
            {{ opt.label }}
          </div>
        </div>
      </transition>
    </div>

    <!-- Error -->
    <transition name="fade">
      <div v-if="hasError" class="mt-1 min-h-[18px] text-[12px] text-danger">
        <p v-for="error in errorMessage" :key="error.$uid">
          {{ error.$message }}
        </p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
