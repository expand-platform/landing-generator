<script setup>
/* header */
import Header from '@sections/Header.vue'
import { headerConfig } from '@/configs/header/headerConfig';

import Slider from '@sections/Slider.vue'
import { sliderConfig } from '@/configs/sliderConfig'

/* features */
import Features from '@components/sections/Features.vue';
import { features } from '@configs/features';




</script>

<template>
  <h2 class="title text-center mt-3 mb-5"> PlayGround: test your components out </h2>

  <!-- ? header -->

  <!-- new props
    background-color
    nav-position: center / right
  -->
  <Header :configs="headerConfig"></Header>

  <Slider :configs="sliderConfig"></Slider>

  <!-- ? features test -->
  <!-- <Features card-text="This is text for card" :cards="features"></Features> -->
</template>

<style lang="scss" scoped></style>
