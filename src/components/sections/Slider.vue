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
  <section :style="configs.style.section">

    <BCarousel v-if="width > 768" :controls="configs.controls" :indicators="configs.indicators" :fade="configs.fade"
      :interval="configs.interval">
      <BCarouselSlide v-for="image in configs.images" :key="image.src" class="carousel-img" :img-src="image.src">
        <template #caption>
          <h2 class="caption">
            {{ image.caption }}
          </h2>
        </template>
      </BCarouselSlide>
    </BCarousel>

    <!-- mobile -->
    <BCarousel v-else :fade="configs.fade" :interval="configs.interval" :ride="configs.ride as any">
      <BCarouselSlide v-for="image in configs.images" :key="image.src" class="carousel-img" :img-src="image.src">
        <template #caption>
          <h2 class="caption test">
            {{ image.caption }}
          </h2>
        </template>
      </BCarouselSlide>
    </BCarousel>
  </section>


</template>

<style lang="scss" scoped>
@use "@scss/base/media.scss";

/* image */
.carousel-img {
  max-width: 100vw;
  max-height: 100vh;
}

/* text wrapper */
::v-deep(.carousel-caption) {
  width: 100%;
  right: 0;
  left: auto;
  bottom: -5%;

  @include media.sm {
    bottom: 0;
  }

  @include media.md {
    bottom: 5%;
  }

  @include media.lg {
    // bottom: 5%;
  }
}


/* text */
.caption {
  font-size: 1.6rem;

  @include media.sm {
    font-size: 40px;
  }

  @include media.md {
    font-size: 60px;
  }

  text-shadow: -1px -1px 0 black,
  1px -1px 0 black,
  -1px 1px 0 black,
  1px 1px 0 black;
}
</style>
