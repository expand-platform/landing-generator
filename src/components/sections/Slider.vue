<script setup lang="ts">
import type { SliderConfig } from "@/configs/sliderConfig";
import { BCarousel, BCarouselSlide } from 'bootstrap-vue-next';

const props = defineProps<{
  configs: SliderConfig
}>()

const carouserBoxStyle = {
    "padding-top": props.configs.padding_top,
    "padding-bottom": props.configs.padding_bottom,
    "padding-left": props.configs.padding_left,
    "padding-right": props.configs.padding_right,
}
</script>

<template>

<div class="carousel-div" :style="carouserBoxStyle">
  <BCarousel :controls="configs.controls" :indicators="configs.indicators" :fade="configs.fade" :ride="configs.ride as any" :interval="configs.interval">
    <BCarouselSlide v-for="image in configs.images" class="carousel-img" :img-src="image.src" :caption="image.caption ? image.caption : ''"/>
  </BCarousel>
</div>

</template>

<style lang="scss" scoped>
</style>