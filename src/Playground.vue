<script setup lang="ts">
import Slider from '@sections/Slider.vue'
import { sliderConfig } from '@/configs/sliderConfig'

/* features */
import Features from '@components/sections/Features.vue';
import { featuresConfig } from '@configs/featuresConfig';

</script>

<template>


  

  <!-- ? features test -->
  <Features :features="featuresConfig"></Features>
</template>

<style lang="scss" scoped></style>
