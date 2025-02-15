<script setup>
/* header */
import Header from '@sections/Header.vue'
import { headerConfig } from '@/configs/header/headerConfig';

import Slider from "@sections/Slider.vue"
import { sliderConfig } from '@/configs/sliderConfig';

import Features from '@sections/Features.vue';
import { featuresConfig } from '@configs/featuresConfig'

</script>

<template>
  <Header :configs="headerConfig"></Header>

  <Slider :configs="sliderConfig"></Slider>

  <Features :features="featuresConfig"></Features>
</template>

<style lang="scss" scoped>
</style>
