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
        <h2 class="caption">
          {{ image.caption }}
        </h2>
      </template>
    </BCarouselSlide>
  </BCarousel>

  <!-- mobile -->
  <BCarousel v-else :style="configs.style" :fade="configs.fade" :interval="configs.interval" :ride="configs.ride as any">
    <BCarouselSlide v-for="image in configs.images" :key="image.src" class="carousel-img" :img-src="image.src">
      <template #caption>
        <h2 class="caption">
          {{ image.caption }}
        </h2>
      </template>
    </BCarouselSlide>
  </BCarousel>

</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

.carousel-img {
  max-width: 100vw;
  max-height: 100vh;
}

.carousel-caption {
  padding-bottom: 0.75rem !important;
  bottom: 0.75rem !important;
}

.caption {
  text-shadow: 
    -1px -1px 0 black,  
    1px -1px 0 black,  
    -1px  1px 0 black,  
    1px  1px 0 black;
     
  margin-bottom: -100px;
  font-size: 20px;
  
  @include media.sm {
    font-size: 40px;
    margin-bottom: -15px;
  }
  @include media.md {
    font-size: 60px;
  }
  @include media.lg {
    margin-bottom: 0;
  }
}

</style>
