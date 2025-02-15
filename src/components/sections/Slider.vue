<script setup lang="ts">
import type { SliderConfig } from "@/configs/sliderConfig";
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-next';

const props = defineProps<{
  configs: SliderConfig
}>()

let width = window.innerWidth

</script>

<template>

  <!-- Если ширина экрана больше 768 - используется этот вариант -->
  <BCarousel v-if="width > 768" :style="configs.style" :controls="configs.controls" :indicators="configs.indicators" :fade="configs.fade" :interval="configs.interval">
    <BCarouselSlide v-for="image in configs.images" class="carousel-img" :img-src="image.src" :caption="image.caption ? image.caption : ''"/>
  </BCarousel>

  <!-- В ином случае - этот -->
  <BCarousel v-else :style="configs.style" :fade="configs.fade" :interval="configs.interval" :ride="configs.ride as any">
    <BCarouselSlide v-for="image in configs.images" class="carousel-img" :img-src="image.src"/>
  </BCarousel>

</template>

<style lang="scss" scoped>
</style>