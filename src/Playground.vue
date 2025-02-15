<script setup lang="ts">
import Slider from '@sections/Slider.vue';
import { sliderConfig } from '@/configs/sliderConfig';

/* features */
import Features from '@components/sections/Features.vue';
import { featuresConfig } from '@configs/featuresConfig';

import Footer from "@sections/Footer.vue";
import { footerConfig } from '@/configs/footerConfig';


</script>

<template>

<Footer :configs="footerConfig"></Footer>
  

  <!-- ? features test -->
  <Features :features="featuresConfig"></Features>
</template>

<style lang="scss" scoped></style>
