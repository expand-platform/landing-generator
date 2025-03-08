<script setup lang="ts">
import type { FooterConfig } from "@/configs/footerConfig";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";
import BIcon from '@components/icons/BIcon.vue';
import type { GlobalThemeConfig } from '@/configs/globalThemeConfig';


defineProps<{
  configs: FooterConfig
  theme: GlobalThemeConfig
}>()



</script>

<template>
  <div :style="theme.footer">
    <footer class="footer-box">
      <BContainer>
        <!-- reverse row on desktop -->
        <BRow
          class="d-block d-md-flex flex-md-row-reverse justify-content-md-between align-items-md-center text-center height">
          <BCol class="text-md-end padding">
            <a v-for="phone in configs.phoneNumbers" :key="phone" :href="'tel:' + phone" class="px-2">
              {{ phone }}
            </a>
          </BCol>
          <BCol>
            <!-- ? social icons -->
            <aside class="social-icons col-lg flex-grow-0 flex-basis-0">
              <BRow class="justify-content-center align-items-center">
                <BCol class="col-3" v-for="icon in configs.socialIcons.icons" :key="icon.icon">
                  <!-- ? icons -->
                  <BIcon :icon="icon.icon" :url="icon.url" :style="configs.style.icons" :text="icon.text" />
                </BCol>
              </BRow>
            </aside>
          </BCol>
          <BCol class="text-md-start padding">
            <BRow>
              <BCol>
                {{ configs.text }}
              </BCol>
  
            </BRow>
          </BCol>
        </BRow>
      </BContainer>
    </footer>
  </div>

</template>

<style lang="scss" scoped>
.footer-box {
  // background-color: black;
  // color: white;
  width: 100%;
}

.padding {
  padding: 1em 0.5em;
}
</style>
