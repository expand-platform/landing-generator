<script setup lang="ts">
import Header from '@sections/Header.vue'
import Features from './components/sections/Features.vue';
import { features } from './config/features';


</script>

<template>
  <h2 class="title text-center mt-3 mb-5"> PlayGround: test your components out </h2>

  <!-- ? header test -->
  <Header logo="EXPAND Platform"></Header>


  <!-- ? features test -->
  <!-- <Features card-text="This is text for card" :cards="features"></Features> -->
</template>

<style lang="scss" scoped></style>
