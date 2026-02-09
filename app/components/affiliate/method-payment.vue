<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

type MethodPromotion = {
  id: number;
  title: string;
};

const methodPromotionOptions: MethodPromotion[] = [
  {
    id: 1,
    title: "Tambah Situs Web",
  },
  {
    id: 2,
    title: "Tambah Media Sosial",
  },
  {
    id: 3,
    title: "Tambah Aplikasi Seluler",
  },
  {
    id: 4,
    title: "Tambah Podcast",
  },
  {
    id: 5,
    title: "Tambah Email/Buletin",
  },
  {
    id: 6,
    title: "Tambah Luring (Offline)",
  },
];

const props = defineProps<{
  methodPromotion: number | null;
}>();

const emit = defineEmits<{
  select: [id: number];
}>();

const rules = {
  methodPromotion: { required },
};

const formData = reactive({
  methodPromotion: props.methodPromotion,
});

const v$ = useVuelidate(rules, formData);

watch(
  () => props.methodPromotion,
  (newValue) => {
    formData.methodPromotion = newValue;
  },
);

const handleMethodPromotionSelect = (id: number) => {
  formData.methodPromotion = id;
  v$.value.methodPromotion.$touch();
  emit("select", id);
};

const validate = () => {
  v$.value.methodPromotion.$touch();
  return !v$.value.methodPromotion.$invalid;
};

defineExpose({
  validate,
});
</script>

<template>
  <h1 class="font-open-sans font-bold mb-5 text-2xl">
    Metode apa yang Anda gunakan untuk promosi? Pilih semua yang sesuai.
  </h1>

  <div class="my-5 space-y-3">
    <div
      v-for="item in methodPromotionOptions"
      :key="item.id"
      :class="[
        'card-payment cursor-pointer transition rounded-xl p-3',
        formData.methodPromotion === item.id && '!bg-secondary',
        v$.methodPromotion.$dirty &&
          v$.methodPromotion.$invalid &&
          '!border-danger border-2',
      ]"
      @click="handleMethodPromotionSelect(item.id)"
    >
      <h2 class="font-bold text-lg font-open-sans">{{ item.title }}</h2>
    </div>
  </div>
  <p
    v-if="v$.methodPromotion.$dirty && v$.methodPromotion.$invalid"
    class="text-danger text-xs mt-2"
  >
    Silakan pilih metode promosi
  </p>
</template>

<style scoped>
.card-payment {
  background: #1b2029;
  border: 1px solid #525252;
  padding: 25px 25px;
  border-radius: 10px;
}

.card-payment:hover {
  background: linear-gradient(
    0deg,
    rgba(3, 138, 196, 0.2),
    rgba(3, 138, 196, 0.2)
  );
  border: 1px solid #00929d;
}
</style>
