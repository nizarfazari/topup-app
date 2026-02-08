<script setup lang="ts">
interface SiteMapLink {
  text: string;
  to: string;
}

const siteMapLinks: SiteMapLink[] = [
  { text: "Tentang Kami", to: "/tentang-kami" },
  { text: "Syarat & Ketentuan", to: "/syarat-ketentuan" },
  { text: "Kebijakan Privasi", to: "/kebijakan-privasi" },
  { text: "Blog", to: "/blog" },
  { text: "Affiliate", to: "/affiliate" },
];
</script>

<template>
  <footer class="bg-background-secondary">
    <div class="custom-container mx-auto py-[60px]">
      <div class="flex md:flex-row flex-col text-white gap-10">
        <div class="flex flex-col gap-[27px] lg:w-[490px] w-auto">
          <div>
            <img src="/logo.png" alt="" />
          </div>
          <h3 class="text-[16px] font-open-sans leading-6">
            <span class="font-bold">Teman Gabutmu topup</span> kredit game
            terlengkap di indonesia. Lorem ipsum dolor sit amet consectetur.
            Magna nunc lectus tempus dignissim aenean.
          </h3>
          <div>
            <h3 class="font-montserrat text-[16px] font-bold mb-3">
              Pembayaran Aman
            </h3>

            <div class="flex flex-wrap items-center gap-2">
              <img
                src="/images/footer/qris.png"
                class="h-6 md:h-8 object-contain"
                alt=""
              />

              <img
                src="/images/footer/qris.png"
                class="h-6 md:h-8 object-contain"
                alt=""
              />

              <img
                src="/images/footer/qris.png"
                class="h-6 md:h-8 object-contain"
                alt=""
              />

              <img
                src="/images/footer/qris.png"
                class="h-6 md:h-8 object-contain"
                alt=""
              />

              <p class="text-sm text-gray whitespace-nowrap">+ 20 lainnya</p>
            </div>
          </div>
        </div>

        <div class="flex grow justify-evenly md:flex-row flex-col gap-5">
          <div>
            <h3 class="font-montserrat text-[16px] font-bold mb-5">
              Kontak Kami
            </h3>
            <ul class="flex gap-2.5 flex-col">
              <li class="flex gap-2.5 items-center">
                <img src="/images/footer/telephone.svg" alt="phone" />
                <a
                  href="https://wa.me/6287739107485"
                  target="_blank"
                  class="text-[16px] font-normal font-open-sans"
                >
                  +62 877-3910-7485
                </a>
              </li>

              <li class="flex gap-2.5 items-center">
                <img src="/images/footer/email.svg" alt="email" />
                <a
                  href="mailto:admin@mandatech.co.id"
                  class="text-[16px] font-normal font-open-sans"
                >
                  admin@mandatech.co.id
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-montserrat text-[16px] font-bold mb-5">
              Informasi
            </h3>
            <ul
              class="flex flex-col gap-3 list-disc list-inside font-normal text-primary"
            >
              <li v-for="link in siteMapLinks" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="font-open-sans text-[16px] text-white hover:text-primary transition-colors duration-200"
                >
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-montserrat text-[16px] font-bold mb-5">
              Social Media
            </h3>
            <div class="mt-3 flex items-center gap-1.5">
              <a
                href="https://facebook.com/usernamekamu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/footer/fb.png" alt="Facebook" />
              </a>

              <a
                href="https://twitter.com/usernamekamu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/footer/x.png" alt="Twitter / X" />
              </a>

              <a
                href="https://instagram.com/usernamekamu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/footer/ig.png" alt="Instagram" />
              </a>

              <a
                href="https://tiktok.com/@usernamekamu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/footer/tt.png" alt="TikTok" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr class="divider" />

      <h4 class="text-[#F5F5F5] text-[16px]">
        Copyright 2023. All Rights Reserved by Teman Gabutmu
      </h4>
    </div>
  </footer>
</template>

<style scoped>
.divider {
  color: #8e8e93;
  box-shadow: 0px 2px 20px 0px #00000026;
  margin: 30px 0;
}
</style>
