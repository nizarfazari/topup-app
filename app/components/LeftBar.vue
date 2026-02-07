<script setup lang="ts">
import { PhHouse, PhCreditCard, PhTag, PhGift } from "@phosphor-icons/vue";

const { isLogged } = useAuth();

const allMenuItems = [
  { name: "Home", icon: PhHouse, path: "/" },
  { name: "Transaksi", icon: PhCreditCard, path: "/transaksi" },
  { name: "Promo", icon: PhTag, path: "/daftar-promo" },
  { name: "Hadiahku", icon: PhGift, path: "/hadiahku" },
];

const menuItems = computed(() => {
  if (!isLogged.value) {
    return allMenuItems.filter(
      (item) => item.name !== "Transaksi" && item.name !== "Hadiahku",
    );
  }
  return allMenuItems;
});
</script>

<template>
  <div
    class="fixed w-full md:w-20 md:h-full md:top-0 md:left-0 bottom-0 z-10 bg-background-primary text-white"
  >
    <ul class="flex md:flex-col flex-row items-center md:mt-10 gap-6">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          class="h-20 w-full flex justify-center items-center flex-col cursor-pointer relative"
        >
          <component
            :is="item.icon"
            :size="32"
            weight="fill"
            :class="[
              'transition-all duration-300 ease-out',
              isActive ? 'text-primary scale-110' : 'text-gray',
            ]"
          />

          <p
            :class="[
              'text-xs mt-1 transition-all duration-300 ease-out',
              isActive ? 'text-primary font-semibold' : 'text-white',
            ]"
          >
            {{ item.name }}
          </p>

          <div
            v-if="isActive"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <div
              class="w-[25px] h-[23px] bg-primary blur-xl absolute bottom-[17px]"
            />
            <div class="w-16 rounded-t-full bg-primary h-0.5" />
          </div>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style scoped></style>
