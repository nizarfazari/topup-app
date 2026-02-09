<script setup lang="ts">
interface WebsiteEntry {
  id: number;
  namaWebsite: string;
  protokol: string;
  domain: string;
}

interface EntryErrors {
  namaWebsite: boolean;
  protokol: boolean;
  domain: boolean;
}

const optionsProtokol = [
  { label: "https://", value: "https" },
  { label: "http://", value: "http" },
];

const websiteEntries = ref<WebsiteEntry[]>([
  {
    id: 1,
    namaWebsite: "",
    protokol: "",
    domain: "",
  },
]);

const errors = ref<Record<number, EntryErrors>>({
  1: { namaWebsite: false, protokol: false, domain: false },
});

const addWebsiteEntry = () => {
  const newId = websiteEntries.value.length + 1;
  websiteEntries.value.push({
    id: newId,
    namaWebsite: "",
    protokol: "",
    domain: "",
  });
  errors.value[newId] = { namaWebsite: false, protokol: false, domain: false };
};

const removeWebsiteEntry = (id: number) => {
  websiteEntries.value = websiteEntries.value.filter(
    (entry) => entry.id !== id,
  );
  const newErrors: Record<number, EntryErrors> = {};
  Object.keys(errors.value).forEach((key) => {
    const numKey = parseInt(key);
    if (numKey !== id && errors.value[numKey]) {
      newErrors[numKey] = errors.value[numKey]!;
    }
  });
  errors.value = newErrors;
};

const validate = () => {
  let isValid = true;
  websiteEntries.value.forEach((entry) => {
    const entryErrors: EntryErrors = {
      namaWebsite: !entry.namaWebsite.trim(),
      protokol: !entry.protokol.trim(),
      domain: !entry.domain.trim(),
    };
    errors.value[entry.id] = entryErrors;
    if (entryErrors.namaWebsite || entryErrors.protokol || entryErrors.domain) {
      isValid = false;
    }
  });
  return isValid;
};

const validateField = (
  id: number,
  field: "namaWebsite" | "protokol" | "domain",
) => {
  if (!errors.value[id]) {
    errors.value[id] = { namaWebsite: false, protokol: false, domain: false };
  }
  const entry = websiteEntries.value.find((e) => e.id === id);
  if (entry) {
    errors.value[id][field] = !entry[field].trim();
  }
};

const getFieldError = (
  id: number,
  field: "namaWebsite" | "protokol" | "domain",
) => {
  return errors.value[id]?.[field] || false;
};

defineExpose({
  validate,
  websiteEntries,
});
</script>

<template>
  <div class="w-[600px] mx-auto">
    <h1 class="font-open-sans font-bold mb-5 text-2xl">
      Metode apa yang Anda gunakan untuk promosi? Pilih semua yang sesuai.
    </h1>

    <button
      class="flex justify-center items-center gap-3 w-full bg-white py-3 rounded-full text-base text-[#172029]"
    >
      <img src="/icons/google.svg" alt="" />
      <span class="text-base font-normal font-lato">
        Tambah dengan Google Analytics
      </span>
    </button>

    <div class="flex items-center w-full gap-3 mt-3">
      <div class="flex-1 h-px bg-[#DDDDDD]"></div>

      <span
        class="font-source-sans text-[14px] text-[#DDDDDD] whitespace-nowrap"
      >
        Atau masuk dengan email
      </span>

      <div class="flex-1 h-px bg-[#DDDDDD]"></div>
    </div>

    <div
      v-for="entry in websiteEntries"
      :key="entry.id"
      class="flex items-start gap-4 mt-3"
    >
      <img
        src="@/assets/images/affiliate/close-circle.svg"
        alt=""
        class="cursor-pointer"
        @click="removeWebsiteEntry(entry.id)"
      />
      <div class="space-y-4 flex-1">
        <!-- Nama Website -->
        <div>
          <InputDynamic
            :id="`nama_website_${entry.id}`"
            label="Nama Website"
            placeholder="Masukkan nama website"
            v-model="entry.namaWebsite"
            @blur="validateField(entry.id, 'namaWebsite')"
          />
          <p
            v-if="getFieldError(entry.id, 'namaWebsite')"
            class="text-danger text-xs mt-1"
          >
            Nama website wajib diisi
          </p>
        </div>

        <!-- Protokol + Domain -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
          <div class="md:col-span-1">
            <div>
              <InputDropdown
                :id="`protokol_${entry.id}`"
                label="Protokol"
                v-model="entry.protokol"
                :options="optionsProtokol"
                @change="validateField(entry.id, 'protokol')"
              />
              <p
                v-if="getFieldError(entry.id, 'protokol')"
                class="text-danger text-xs mt-1"
              >
                Protokol wajib dipilih
              </p>
            </div>
          </div>

          <div class="md:col-span-2">
            <div>
              <InputDynamic
                :id="`domain_${entry.id}`"
                label="Domain"
                placeholder="www.mywebsite.com"
                v-model="entry.domain"
                @blur="validateField(entry.id, 'domain')"
              />
              <p
                v-if="getFieldError(entry.id, 'domain')"
                class="text-danger text-xs mt-1"
              >
                Domain wajib diisi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex items-center gap-4 mt-3 cursor-pointer"
      @click="addWebsiteEntry"
    >
      <img src="@/assets/images/affiliate/add-circle.svg" alt="" />
      <p class="text-[14px] font-montserrat">Tambahkan Lainnya</p>
    </div>

    <div class="flex justify-end">
      <button
        class="py-3 px-8 bg-[#004E53] rounded-full text-white md:text-[28px] sm:text-3xl font-bold font-montserrat mb-5"
      >
        simpan
      </button>
    </div>
  </div>
</template>

<style scoped></style>
