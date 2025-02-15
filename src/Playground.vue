<script setup lang="ts">
import Slider from '@sections/Slider.vue';
import { sliderConfig } from '@/configs/sliderConfig';

/* features */
import Features from '@components/sections/Features.vue';
import { features } from '@configs/features';

import Footer from "@sections/Footer.vue";
import { footerConfig } from '@/configs/footerConfig';


</script>

<template>

<Footer :configs="footerConfig"></Footer>
  

  <!-- ? features test -->
  <!-- <Features card-text="This is text for card" :cards="features"></Features> -->
</template>

<style lang="scss" scoped></style>
