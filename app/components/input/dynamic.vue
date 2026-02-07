<script setup lang="ts">
import { ref } from "vue";
import { PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import type { ErrorObject } from "@vuelidate/core";

// Updated Props interface with required and default values
interface Props {
  id: string;
  label: string;
  placeholder?: string;
  modelValue?: string;
  errorMessage?: ErrorObject[];
  hasError?: boolean;
  isPassword?: boolean;
  required?: boolean;
  isPhone?: boolean;
}

// Define props with defaults and required check
const props = withDefaults(defineProps<Props>(), {
  placeholder: "",
  modelValue: "",
  hasError: false,
  isPassword: false,
  required: false,
  isPhone: false,
});

const showPassword = ref<boolean>(false);

const togglePassword = (): void => {
  showPassword.value = !showPassword.value;
};

const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
  (event: "validation", isValid: boolean): void;
}>();

const validateInput = (value: string): boolean => {
  const isValid = !props.required || value.trim() !== "";
  emit("validation", isValid);
  return isValid;
};
</script>

<template>
  <div class="">
    <label
      :for="id"
      class="block font-source-sans text-[14px] text-white font-normal mb-2"
    >
      {{ label }}
      <span v-if="required" class="text-sunset-orange">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :placeholder="placeholder"
        :type="isPassword && !showPassword ? 'password' : 'text'"
        :value="modelValue"
        :required="required"
        :inputmode="isPhone ? 'numeric' : 'text'"
        :pattern="isPhone ? '[0-9]*' : undefined"
        @input="
          (event) => {
            let inputValue = (event.target as HTMLInputElement).value;

            if (isPhone) {
              inputValue = inputValue.replace(/[^0-9]/g, '');

              (event.target as HTMLInputElement).value = inputValue;
            }

            $emit('update:modelValue', inputValue);
            validateInput(inputValue);
          }
        "
        :class="[
          'appearance-none bg-background-primary h-[45px] block w-full px-5 border rounded-[8px] text-[14px] text-[#D1D1D6] placeholder-[#D1D1D6] focus:outline-none focus:ring-primer focus:border-primer',
          hasError ? 'border-danger' : 'border-[#272B35]',
        ]"
      />

      <button
        type="button"
        v-if="isPassword"
        class="absolute inset-y-0 right-[20px] flex items-center"
        @click="togglePassword"
      >
        <ph-eye-slash v-if="showPassword" class="h-5 w-5 text-gray" />
        <ph-eye v-else class="h-5 w-5 text-gray" />
      </button>
    </div>

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
