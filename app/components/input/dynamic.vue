<script setup lang="ts">
import { ref } from 'vue';
import { PhEye, PhEyeSlash } from "@phosphor-icons/vue";
import type { ErrorObject } from '@vuelidate/core';

// Updated Props interface with required and default values
interface Props {
 id: string;
 label: string;
 placeholder?: string;
 modelValue?: string;
 errorMessage?: ErrorObject[];
 hasError?: boolean;
 isPassword?: boolean;
 required?: boolean; // New required property
}

// Define props with defaults and required check
const props = withDefaults(defineProps<Props>(), {
 placeholder: '',
 modelValue: '',
 hasError: false,
 isPassword: false,
 required: false // Default to optional
});



const showPassword = ref<boolean>(false);

const togglePassword = (): void => {
 showPassword.value = !showPassword.value;
};

const emit = defineEmits<{
 (event: 'update:modelValue', value: string): void;
 (event: 'validation', isValid: boolean): void;
}>();

const validateInput = (value: string): boolean => {
 const isValid = !props.required || value.trim() !== '';
 emit('validation', isValid);
 return isValid;
};
</script>

<template>
 <div class="">
  <label :for="id" class="block font-source-sans text-[14px] text-white font-normal mb-2">
   {{ label }}
   <span v-if="required" class="text-sunset-orange">*</span>
  </label>
  <div class="relative">
   <input :id="id" :placeholder="placeholder" :type="isPassword && !showPassword ? 'password' : 'text'"
    :value="modelValue" :required="required" @input="(event) => {
     const inputValue = (event.target as HTMLInputElement).value;
     $emit('update:modelValue', inputValue);
     validateInput(inputValue);
    }" :class="[
     'appearance-none bg-background-primary h-[40px] block w-full px-5 border rounded-[8px] text-[14px] text-[#D1D1D6] placeholder-[#D1D1D6] focus:outline-none focus:ring-primer focus:border-primer',
     hasError ? 'border-danger' : 'border-[#272B35]'
    ]" />

   <button type="button" v-if="isPassword" class="absolute inset-y-0 right-[20px] flex items-center"
    @click="togglePassword">
    <ph-eye-slash v-if="showPassword" class="h-5 w-5 text-gray" />
    <ph-eye v-else class="h-5 w-5 text-gray" />
   </button>
  </div>

  <div v-if="hasError" class="mt-2 text-small text-danger">
   <p v-for="error in errorMessage" :key="error.$uid">
    {{ error.$message }}
   </p>
  </div>
 </div>
</template>

<style scoped></style>
