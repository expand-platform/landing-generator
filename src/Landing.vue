<script setup>
/* header */
import Header from '@sections/Header.vue'
import { headerConfig } from '@/configs/header/headerConfig';

import Slider from "@sections/Slider.vue"
import { sliderConfig } from '@/configs/sliderConfig';


</script>

<template>
  <Header :configs="headerConfig"></Header>

  <Slider :configs="sliderConfig"></Slider>


</template>

<style lang="scss" scoped>
</style>
