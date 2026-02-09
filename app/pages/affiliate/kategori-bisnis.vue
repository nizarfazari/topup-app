<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const breadcrumbs = [
  { label: "Kembali", href: "/daftar-promo" },
  { label: "Program Affiliate Teman Gabutmu", href: "/affiliate" },
  { label: "Kategori Bisnis" },
];

const formData = reactive({
  activeCategory: null as number | null,
  methodPromotion: null as number | null,
});

const currentStep = ref(1);

const rules = {
  activeCategory: { required },
  methodPromotion: { required },
};

const v$ = useVuelidate(rules, formData);

const categoryRef = ref();
const methodPaymentRef = ref();
const tambahWebsiteRef = ref();
const tambahMediasosialRef = ref();

const handleCategorySelect = (id: number) => {
  formData.activeCategory = id;
  v$.value.activeCategory.$touch();
};

const handleMethodPromotionSelect = (id: number) => {
  formData.methodPromotion = id;
  v$.value.methodPromotion.$touch();
};

const handleSubmit = () => {
  if (currentStep.value === 1) {
    const isValid = categoryRef.value?.validate();
    if (isValid) {
      currentStep.value = 2;
    }
  } else if (currentStep.value === 2) {
    const isValid = methodPaymentRef.value?.validate();
    if (isValid) {
      if (formData.methodPromotion === 1) {
        currentStep.value = 3;
      } else if (formData.methodPromotion === 2) {
        currentStep.value = 3;
      } else {
        // Submit logic here
        console.log("Selected category:", formData.activeCategory);
        console.log("Selected method promotion:", formData.methodPromotion);
      }
    }
  } else if (currentStep.value === 3) {
    let isValid = true;
    if (formData.methodPromotion === 1) {
      isValid = tambahWebsiteRef.value?.validate();
    } else if (formData.methodPromotion === 2) {
      isValid = tambahMediasosialRef.value?.validate();
    }

    if (isValid) {
      // Submit logic here
      console.log("Selected category:", formData.activeCategory);
      console.log("Selected method promotion:", formData.methodPromotion);
      if (formData.methodPromotion === 1) {
        console.log("Website entries submitted");
      } else if (formData.methodPromotion === 2) {
        console.log("Media sosial entries submitted");
      }
    }
  }
};
</script>

<template>
  <div class="custom-container mx-auto text-white">
    <Breadcrumb :items="breadcrumbs" class="mb-4" />

    <div v-if="currentStep === 1">
      <AffiliateCategory
        ref="categoryRef"
        :active-category="formData.activeCategory"
        @select="handleCategorySelect"
      />
    </div>

    <div v-else-if="currentStep === 2">
      <AffiliateMethodPayment
        ref="methodPaymentRef"
        :method-promotion="formData.methodPromotion"
        @select="handleMethodPromotionSelect"
      />
    </div>

    <div v-else-if="currentStep === 3">
      <AffiliateTambahWebsite
        v-if="formData.methodPromotion === 1"
        ref="tambahWebsiteRef"
      />
      <AffiliateTambahMediasosial
        v-if="formData.methodPromotion === 2"
        ref="tambahMediasosialRef"
      />
    </div>

    <button
      v-if="currentStep === 1 || currentStep === 2"
      class="py-3 w-full bg-[#004E53] rounded-full text-white md:text-[34px] sm:text-3xl font-bold font-montserrat mb-5"
      @click="handleSubmit"
    >
      Lanjut
    </button>
  </div>
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
