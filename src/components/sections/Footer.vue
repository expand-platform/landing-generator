<script setup lang="ts">
import type { FooterConfig } from "@/configs/footerConfig";
import { BContainer, BRow, BCol } from "bootstrap-vue-next";

const props = defineProps<{
  configs: FooterConfig
}>()



</script>

<template>
  <footer class="footer-box">
    <BContainer>
      <!-- reverse row on desktop -->
      <BRow class="d-block d-md-flex flex-md-row-reverse justify-content-md-between align-items-md-center text-center height">
        <BCol class="text-md-end padding">
          <a v-for="phone in configs.phoneNumbers" :key="phone" :href="'tel:' + phone" class="px-2">
            {{ phone }}
          </a>
        </BCol>
        <BCol class="text-md-start padding"> {{ configs.text }} </BCol>
      </BRow>
    </BContainer>
  </footer>

</template>

<style lang="scss" scoped>
.footer-box {
  background-color: black;
  color: white;
  width: 100%;
}

.padding {
  padding: 1em 0.5em;
}
</style>
