<script setup lang="ts">
import type { SliderConfig } from "@/configs/sliderConfig";
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-next';

defineProps<{
  configs: SliderConfig
}>()

let width = window.innerWidth

</script>

<template>

  <!-- >= 768px -->
  <BCarousel v-if="width > 768" :style="configs.style" :controls="configs.controls" :indicators="configs.indicators"
    :fade="configs.fade" :interval="configs.interval">
    <BCarouselSlide v-for="image in configs.images" :key="image.src" class="carousel-img" :img-src="image.src">
      <template #caption>
        <h2>
          {{ image.caption }}
        </h2>
      </template>
    </BCarouselSlide>
  </BCarousel>

  <!-- mobile -->
  <BCarousel v-else :style="configs.style" :fade="configs.fade" :interval="configs.interval" :ride="configs.ride">
    <BCarouselSlide v-for="image in configs.images" :key="image.src" class="carousel-img" :img-src="image.src">
      <template #caption>
        <h2>
          {{ image.caption }}
        </h2>
      </template>
    </BCarouselSlide>
  </BCarousel>

</template>

<style lang="scss" scoped>
.carousel-img {
  max-width: 100vw;
  max-height: 100vh;

}
</style>
